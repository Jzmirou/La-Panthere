const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import")
module.exports = {
    plugins: [
        postcssImport,
        // purgecss({
        //     content: [
        //         "./docs/contact.html",
        //          "./docs/js/formHandler.js",
        //          "./docs/js/jqBootstrapValidation.js",
        //          "./docs/js/blocs.js",
        //         ],
        // }),
        // cssnano({
        //     preset: "default",
        // }),
    ],
};
