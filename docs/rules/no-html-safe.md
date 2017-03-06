# prevent XSS by avoiding htmlSafe (no-html-safe)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

return Em.String.htmlSafe(content);
var title =  Computed.htmlSafe('titleUnsafe');

```
