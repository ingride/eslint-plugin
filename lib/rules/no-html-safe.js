/**
 * @fileoverview prevent XSS by avoiding htmlSafe
 * @author intercom
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "prevent XSS by avoiding htmlSafe",
            category: "Security Rules",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: []
    },

    create: function(context) {
        return {
          "CallExpression": function(node) {
            var callee = node.callee;
            if (callee.property) {
              if (callee.property.name === "htmlSafe") {
                context.report(node, "Prevent XSS by avoiding the use of htmlSafe");
              }
            }
          }
        };
    }
};
