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
//=> '    Unicorns'
//=> '    Rainbows'

indentString('Unicorns\nRainbows', 4, {indent: '♥'});
//=> '♥♥♥♥Unicorns'
//=> '♥♥♥♥Rainbows'
```


## API

### indentString(input, [count], [options])

#### input

Type: `string`

String you want to indent.

#### count

Type: `number`<br>
Default: `1`

How many times you want `options.indent` repeated.

#### options

Type: `object`<br>

##### indent

Type: `string`<br>
Default: `' '`

String to use for the indent.

##### includeEmptyLines

Type: `boolean`<br>
Default: `false`

Also indent empty lines.


## Related

- [indent-string-cli](https://github.com/sindresorhus/indent-string-cli) - CLI for this module
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Strip leading whitespace from every line in a string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
