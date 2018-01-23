# ngx-rapid

[![npm version](https://badge.fury.io/js/%40ngx-rapid%2Fcore.svg)](https://badge.fury.io/js/%40ngx-rapid%2Fcore)

# Documentation

* Latest
    * Site and demos: https://ngx-rapid.github.io
    * Latest api: 
        * https://ngx-rapid.github.io/api/form
        * https://ngx-rapid.github.io/api/crud

* Archived
    * Site and demos: https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/index.html
    * Latest api: 
        * https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/api/form/index.html
        * https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/api/crud/index.html

# Development

## Prerequisites

* GIT
* Node
* NPM

## Initialize

* Check out the code:
    * via ssh: `git clone git@github.com:ngx-rapid/ngx-rapid.git`
    * via https: `git clone https://github.com/ngx-rapid/ngx-rapid.git`
* Init dependencies: `npm install`

## Develop

* Run development mode: `npm run dev`
* Visit: `http://localhost:4200`
* Make changes that reloads in the browser

## Release

Release process phases and goals::
* publish [ `lerna publish` ] 
    * bump version, see below sections for details
    * commit changes to GIT master
    * creates GIT tag with given version
    * build libraries (core, form, crud)
    * push libraries to NPM
* site [ `lerna run site` ]
    * build libraries API documentation
    * build site including libraries API documentation
* deploy [ `lerna run deploy` ]
    * deploy site

### Prerelease 
* execute: `npm run publish:prerelease`
* bumps version from: `0.0.1-1` to `0.0.1-2`

### Patch
* execute: `npm run publish:patch`
* bumps version from: `0.0.1` to `0.0.2`

### Minor
* execute: `npm run publish:minor`
* bumps version from: `0.1.0` to `0.2.0`

### Major
* execute: `npm run publish:major`
* bumps version from: `1.0.0` to `2.0.0`

# Credits 

Using lerna: [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

