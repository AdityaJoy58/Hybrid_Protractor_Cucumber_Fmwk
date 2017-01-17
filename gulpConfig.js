/**
 * Created by vk250179 on 11/27/2015.
 */
'use strict';

export default {
    src : {
        html: 'app/**/*.html',
        libs: 'libs/**',
        scripts: {
            //all: 'app/**/*.js',
            //For now, just working for dynamic attributes - need to change when new component will be availabe.
            all: 'app/**/*.js',
            dynamicAttributes: 'app/dynamicAttributes/**/*.js',
            app: 'app/app.js',
            portalManifestTemplate: 'app/portal-manifest-tpl.json',
            portalManifest: 'portal-manifest.json'
        }
    },
    path : {
        scss: './styles/scss/portal/*.scss',
        compiled: './styles/css/compiledscss',
        karmaConfig: '/karma.conf.js'
    },
    build : 'build/',
    out : {
        libs: 'build/libs/',
        scripts: {
            file: 'app.min.js',
            templatesFile: 'templates.js',
            folder: 'build/',
            temp: 'build/temp/'
        }
    },
    reports : 'reports/',
    test: {
        karma: 'karma.conf.js',
        protractor: 'protractor-conf.js',
        cucumber : {
            testResultsJsonSource: './reports/cucumber-test-results.json',
            reportFileName : 'bdd-e2e-report.html'
        }
    },
    init: function() {
        return this;
    }
}.init();
