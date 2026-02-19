import { jest } from '@jest/globals';

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

    process.stdin.emit('data', Buffer.from('Hello world\n'));
    process.stdin.emit('end');

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Total Symbols (non-whitespace):')
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('10')
    );
  });
});