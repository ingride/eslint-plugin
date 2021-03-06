# eslint-plugin-htmlsafe

htmlSafe detector

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-htmlsafe`:

```
$ npm install eslint-plugin-htmlsafe --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-htmlsafe` globally.

## Usage

Add `htmlsafe` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "htmlsafe"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "htmlsafe/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





