export default /** @type {import('@web/test-runner').TestRunnerConfig} */ ({
    files: ['test/*.js'],
    coverage: true,
    coverageConfig: {
      threshold: {
        functions: 100,
      },
    },
  });
  