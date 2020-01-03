# egg-superCors

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-superCors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-superCors
[travis-image]: https://img.shields.io/travis/eggjs/egg-superCors.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-superCors
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-superCors.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-superCors?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-superCors.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-superCors
[snyk-image]: https://snyk.io/test/npm/egg-superCors/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-superCors
[download-image]: https://img.shields.io/npm/dm/egg-superCors.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-superCors

<!--
Description here.
-->

## Install

```bash
$ npm i egg-superCors --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.superCors = {
  enable: true,
  package: 'egg-superCors',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.superCors = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
