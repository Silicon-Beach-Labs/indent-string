# indent-string [![Build Status](https://travis-ci.org/sindresorhus/indent-string.svg?branch=master)](https://travis-ci.org/sindresorhus/indent-string)

> Indent each line in a string


## Install

```
$ npm install indent-string
```


## Usage

```js
const indentString = require('indent-string');

indentString('Unicorns\nRainbows', 4);
//=> '    Unicorns\n    Rainbows'

indentString('Unicorns\nRainbows', 4, {indent: '♥'});
//=> '♥♥♥♥Unicorns\n♥♥♥♥Rainbows'
```


## API

### indentString(string, count?, options?)

#### string

Type: `string`

The string to indent.

#### count

Type: `number`<br>
Default: `1`

How many times you want `options.indent` repeated.

#### options

Type: `object`

##### indent

Type: `string`<br>
Default: `' '`

The string to use for the indent.

##### includeEmptyLines

Type: `boolean`<br>
Default: `false`

Also indent empty lines.


## Related

- [indent-string-cli](https://github.com/sindresorhus/indent-string-cli) - CLI for this module
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Strip leading whitespace from every line in a string


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-indent-string?utm_source=npm-indent-string&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
