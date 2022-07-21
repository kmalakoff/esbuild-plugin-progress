const ora = require('ora');

module.exports = (options = {}) => {
  const message = options.message || 'Building';
  const spinner = ora();

  return {
    name: 'progress',
    setup(build) {
      build.onStart(() => {
        spinner.text = message + '\n';
        spinner.start();
      });
      build.onEnd((result) => {
        result.errors.length ? spinner.fail(`Build failed. ${result.errors.length} error${result.errors.length > 1 ? 's' : ''}`) : spinner.succeed('Build successful');
      });
    },
  };
};
