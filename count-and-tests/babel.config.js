const isTest = String(process.env.NODE_ENV) === 'test';

export default {
  presets: [
    [
      "@babel/preset-env",
      {
        "modules": isTest ? "commonjs" : false,
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
};