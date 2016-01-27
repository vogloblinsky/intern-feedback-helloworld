# Intern-feedback-helloworld
Repository with all sources used in a technical blog post on https://blog.groupe-sii.com/the-intern-retour-sur-la-prochaine-generation-doutils-de-tests-javascript/

[![Dependency Status](https://david-dm.org/vogloblinsky/intern-feedback-helloworld.png)](https://david-dm.org/vogloblinsky/intern-feedback-helloworld)
[![devdependencies](https://david-dm.org/vogloblinsky/intern-feedback-helloworld/dev-status.png)](https://david-dm.org/vogloblinsky/intern-feedback-helloworld#info=devDependencies)
[![Build Status](https://travis-ci.org/vogloblinsky/intern-feedback-helloworld.svg?branch=master)](https://travis-ci.org/vogloblinsky/intern-feedback-helloworld)

## Requirements

- Node.js
- IDE
- Bower

## Installation

``` shell
npm install
```

## Informations

- updated to support Intern v3 (https://theintern.github.io)

- the bootstrap theme has been shrinked with uncss

``` shell
uncss src/index.html > src/css/bootstrap-yeti-light.css
```

- run local test using a selenium-server-standalone running and this command :

``` shell
npm run test-local
```

- code coverage cand be also generated with this command :

``` shell
npm run test-local-coverage
```

- run your Selenium local for browser tests

``` shell
cd /usr/lib/selenium && java -jar selenium-server-standalone.jar
```