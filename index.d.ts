declare namespace indentString {
	interface Options {
		/**
		String to use for the indent.

		@default ' '
		*/
		readonly indent?: string;

		/**
		Also indent empty lines.

		@default false
		*/
		readonly includeEmptyLines?: boolean;
	}
}

/**
Indent each line in a string.

@param string - String you want to indent.
@param count - How many times you want `options.indent` repeated. Default: `1`.

@example
```
import indentString = require('indent-string');

indentString('Unicorns\nRainbows', 4);
//=> '    Unicorns'
//=> '    Rainbows'

indentString('Unicorns\nRainbows', 4, {indent: '♥'});
//=> '♥♥♥♥Unicorns'
//=> '♥♥♥♥Rainbows'
```
*/
declare function indentString(
	string: string,
	count?: number,
	options?: indentString.Options
): string;

export = indentString;
