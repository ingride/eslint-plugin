/**
 * @fileoverview prevent XSS by avoiding htmlSafe
 * @author intercom
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-html-safe"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-html-safe", rule, {

    valid: [
      "var htmlSafeString = '<div>test</div>'"
    ],

    invalid: [
        {
            code: "Em.String.htmlSafe(\"<div> testMe </div>\")",
            errors: [{
                message: "Prevent XSS by avoiding the use of htmlSafe",
                type: "CallExpression"
            }]
        }
    ]
});
