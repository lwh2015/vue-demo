// https://docs.cypress.io/guides/guides/plugins-guide.html

// If you need a custom webpack configuration you can uncomment the following import
// And then use the `file:preprocessor` event
// As explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// Const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
    // On('file:preprocessor', webpack({
    //  WebpackOptions: require('@vue/cli-service/webpack.config'),
    //  WatchOptions: {}
    // }))

    return Object.assign({}, config, {
        fixturesFolder: "tests/e2e/fixtures",
        integrationFolder: "tests/e2e/specs",
        screenshotsFolder: "tests/e2e/screenshots",
        videosFolder: "tests/e2e/videos",
        supportFile: "tests/e2e/support/index.js"
    });
};
