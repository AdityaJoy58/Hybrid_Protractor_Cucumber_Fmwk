var config = {
    // When the framework is set to "custom" you'll need to additionally
    // set frameworkPath with the path relative to the config file or absolute.
    frameworkPath: 'node_modules/protractor-cucumber-framework',

    // Spec patterns are relative to the location of this config.
    specs: ['test/e2e/featureFiles/**/*.feature'],

    // How long to wait for a page to load.
    getPageTimeout: 60000,

    // The timeout in milliseconds for each script run on the browser. This should
    // be longer than the maximum time your application needs to stabilize between
    // tasks.
    allScriptsTimeout: 61000,

    // Protractor can launch your tests on one or more browsers. If you are
    // testing on a single browser, use the capabilities option.
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        global.dv = browser;

        var width = 1920;
        var height = 1080;
        browser.driver.manage().window().setSize(width, height);
    },

    //Test framework to use
    framework: 'custom',

    // Options to be passed to Cucumber (when set up as a custom framework).
    cucumberOpts: {
        // Require files before executing the features.
        require: ['test/e2e/featureFiles/**/*_steps.js','test/e2e/support/*.js'],
        // Only execute the features or scenarios with tags matching @dev.
        // This may be an array of strings to specify multiple tags to include.
        // How to format features
        format: ['pretty']
    }
};

exports.config = config;

