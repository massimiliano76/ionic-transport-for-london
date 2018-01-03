const chalk = require('chalk');
const figures = require('figures');
const replace = require('replace');
const version = require('../../package.json').version;

bumpVersion(
  /<widget id="uk.co.apetito.induction" version="(.*)" xmlns="http:\/\/www.w3.org\/ns\/widgets" xmlns:cdv="http:\/\/cordova.apache.org\/ns\/1.0">/,
  '<widget id="uk.co.apetito.induction" version="' + version + '" xmlns="http:\/\/www.w3.org\/ns\/widgets" xmlns:cdv="http:\/\/cordova.apache.org\/ns\/1.0">',
  ['./config.xml']
);

bumpVersion(
    /const IONIC_PRO = Pro.init\('d864c3f3', { appVersion: '(.*)' }\);/,
    'const IONIC_PRO = Pro.init(\'d864c3f3\', { appVersion: \'' + version + '\' });',
    ['.src/services/error-handler.service.ts']
);

function bumpVersion(regex, replacement, paths) {
  paths.forEach(function (path) {
    try {
      console.log(
          chalk.green(figures.tick) +
          ' bumping version in ' + path + ' to ' +
          chalk.bold(version)
      );

      replace({
        regex: regex,
        replacement: replacement,
        paths: [path],
        silent: true
      });
    } catch (err) {
      throw err;
    }
  })
}
