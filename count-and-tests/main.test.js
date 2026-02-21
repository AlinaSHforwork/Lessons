import { jest } from '@jest/globals';
import fs from 'node:fs';

let inputs = [];

const mockQuestion = jest.fn(async (query) => {
  const answer = inputs.shift();
  return answer !== undefined ? answer : 'n';
});

jest.unstable_mockModule('node:readline/promises', () => ({
  default: {
    createInterface: jest.fn().mockReturnValue({
      question: mockQuestion,
      close: jest.fn(),
      on: jest.fn(),
    }),
  },
}));

const { startApp } = await import('./main.js');

const mockUserInput = (array) => { inputs = [...array]; };

describe('App Tests', () => {
  let originalConsoleLog;

  beforeAll(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn();
    jest.spyOn(process, 'exit').mockImplementation(() => {});
  });

  afterAll(() => {
    console.log = originalConsoleLog;
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    inputs = [];
  });

  afterEach(() => {
    process.stdin.removeAllListeners('data');
    process.stdin.removeAllListeners('end');
    process.stdin.pause();
  });

  test('should count symbols correctly', async () => {
    mockUserInput(['y', 'n', 'n']);

    await startApp();

    process.stdin.emit('data', Buffer.from('Hello world from pandas and fire!\n'));
    process.stdin.emit('end');

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Total Symbols (non-whitespace): 28')
    );
  });

  test('should count words correctly with text file', async () => {
    const testText = fs.readFileSync('./text.txt', 'utf8');
    mockUserInput(['n', 'y', 'n']);

    await startApp();

    process.stdin.emit('data', Buffer.from(testText));
    process.stdin.emit('end');

    expect(console.log).toHaveBeenCalledWith('Total Words: 15');
    expect(console.log).toHaveBeenCalledWith('Unique Words:', 12);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Words:')
    );
  });

  test('should count sentences correctly with text file', async () => {
    const testText = fs.readFileSync('./text.txt', 'utf8');
    mockUserInput(['n', 'n', 'y']);

    await startApp();

    process.stdin.emit('data', Buffer.from(testText));
    process.stdin.emit('end');

    expect(console.log).toHaveBeenCalledWith('Total Sentences: 9');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Sentences:')
    );
  });

  test('full smiles test', async () => {
    const testText = fs.readFileSync('./smiles.txt', 'utf8');
    mockUserInput(['y', 'y', 'y']);

    await startApp();

    process.stdin.emit('data', Buffer.from(testText));
    process.stdin.emit('end');

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Total Symbols (non-whitespace): 225')
    );

    expect(console.log).toHaveBeenCalledWith('Total Words: 5');
    expect(console.log).toHaveBeenCalledWith('Unique Words:', 5);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Words:')
    );

    expect(console.log).toHaveBeenCalledWith('Total Sentences: 18');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Sentences:')
    );
  });
});