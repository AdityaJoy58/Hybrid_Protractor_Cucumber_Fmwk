/**
 * Created by ag250281 on 8/18/2015.
 */
'use strict';

import gulpConfig       from './gulpConfig';
import gulp             from 'gulp';
import sass             from 'gulp-sass';
import babelify         from 'babelify';
import browserify       from 'browserify';
import vinylSourceStream from 'vinyl-source-stream';
import vinylBuffer      from 'vinyl-buffer';
import rename           from 'gulp-rename';
import rimraf           from 'gulp-rimraf';
import babelregister    from 'babel-register';
import gulpLoadPlugins  from 'gulp-load-plugins';
import jscs             from 'gulp-jscs';
import runSequence      from 'run-sequence';
import karma            from 'karma';
import webserver        from 'gulp-webserver';
import envify           from 'envify/custom';
import argv             from 'yargs';
import replace          from 'gulp-replace-task';
import concat           from 'gulp-concat';
import uglify           from 'gulp-uglify';
import gulpif           from 'gulp-if';
import sonar            from 'gulp-sonar';
import util             from 'gulp-util';


import protractorReport from  'gulp-protractor-cucumber-html-report';
import { protractor, webdriver, webdriver_update } from 'gulp-protractor';

var karmaServer = karma.server;
var plugins = gulpLoadPlugins();
var args = argv.argv;

var environment = !!args.env ? args.env : process.env.env || 'local';
var cucumberTags = args.tags ? args.tags : '@functional';

var getAppUrl = function(){
  process.env.env = environment;
  var Config = require('./app/app.constants');
  return  Config.default.url.appURL;
};

//-------------------------------------
// Core tasks
//-------------------------------------
gulp.task('default', ['develop']);

gulp.task('develop', (dp)=>{
    runSequence(['clean','lint','sass','bundle','replace-portal-manifest-url'],dp)
});

gulp.task('serve',['develop'], () => {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

//-------------------------------------
// Task Definations
//-------------------------------------
/* The jshint task runs jshint with ES6 support. */
gulp.task('jshint', function() {
    return gulp.src(gulpConfig.src.scripts.all)
        .pipe(plugins.jshint({
            esnext: true // Enable ES6 support
        }))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
    return gulp.src(gulpConfig.src.scripts.all)
        .pipe(plugins.jscs())
        .pipe(plugins.jscs.reporter());
});

gulp.task('unit', (done)=> {

  var config = {
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  };

  if(args.debug){
    config.singleRun = false;
  }
  karmaServer.start(config, ()=> {
    done();
  });
});

//-------------------------------------
// Test Tasks
//-------------------------------------
gulp.task('lint', ['jshint', 'jscs']);

gulp.task('coverage', ['unit']);

//-------------------------------------
// Sonar Tasks
//-------------------------------------
gulp.task('sonar', function () {
  var options = {
    sonar: {
      host: {
        url: 'http://localhost:9000'
      },
      jdbc: {
        url: 'jdbc:h2:tcp://localhost:9092/sonar',
        username: 'sonar',
        password: 'sonar'
      },
      projectKey: 'NEP:Catalog:1.0.0',
      projectName: 'NEP Catalog',
      projectVersion: '1.0.0',
      // comma-delimited string of source directories
      sources: 'app',
      exclusions: '**/*Spec.js,**/app.js,**/*Module.js,**/*.json',
      language: 'js',
      sourceEncoding: 'UTF-8',
      javascript: {
        lcov: {
          reportPath: 'reports/coverage/report-lcov/lcov.info'
        }
      },
      exec: {
        maxBuffer : 1024*1024
      }
    }
  };

  // gulp source doesn't matter, all files are referenced in options object above
  return gulp.src('', { read: false })
      .pipe(sonar(options))
      .on('error', util.log);
});


//-------------------------------------
// E2E Tasks
//-------------------------------------
gulp.task('webdriver-update', webdriver_update);
gulp.task('webdriver', webdriver);

gulp.task('e2e', ['webdriver-update', 'webdriver'], function() {
    var appUrl = getAppUrl();

    gulp.src('').pipe(protractor({
        configFile: gulpConfig.test.protractor,
        args: ['--baseUrl', appUrl,
            '--cucumberOpts.tags',cucumberTags,
            '--cucumberOpts.tags','~@ignore'
        ]
    })).on('error', (err) => {
        gulp.start('e2e-report',function() {
        throw err});
}).on('end',  () => {
        gulp.start('e2e-report');
});

});


gulp.task('e2e-report',function(){
    return gulp.src(gulpConfig.test.cucumber.testResultsJsonSource)
        .pipe(protractorReport({
            dest: gulpConfig.reports,
            filename: gulpConfig.test.cucumber.reportFileName
        }));
});

gulp.task('clean', function() {
    return gulp.src(gulpConfig.build + '*.js' , { read: false }) // much faster
        .pipe(rimraf());
});


/*Task for CSS using SASS*/
gulp.task('sass', function () {
    gulp.src(gulpConfig.path.scss)
        .pipe(sass())
        .pipe(gulp.dest(gulpConfig.path.compiled));

});

/* Task which replaces url in portal manifest json according to env. */
gulp.task('replace-portal-manifest-url', () => {
  var appUrl = getAppUrl();

  gulp.src(gulpConfig.src.scripts.portalManifestTemplate)
      .pipe(replace({
        patterns: [
          {
            match: 'appURL',
            replacement: appUrl
          }
        ]
      }))
      .pipe(rename(gulpConfig.src.scripts.portalManifest))
      .pipe(gulp.dest('.'));
});

gulp.task('bundle',function () {
    return browserify({
        entries: gulpConfig.src.scripts.app,
        debug: false // Build source maps
    }).transform(babelify.configure({
        presets: ['es2015']
    })).transform(envify(
            {env: environment}
        )
    ).bundle()
        .pipe(vinylSourceStream(gulpConfig.out.scripts.file))
        .pipe(vinylBuffer())
        .pipe(plugins.sourcemaps.init({
            loadMaps: true // Load the sourcemaps browserify already generated
        }))
        .pipe(plugins.ngAnnotate())
        //.pipe(gulpif(environment !== 'local', uglify()))
        .pipe(plugins.sourcemaps.write('./', {
            includeContent: false
        }))
        .pipe(gulp.dest(gulpConfig.out.scripts.folder));
});
