# Flow-Node-ESM Boilerplate

A boilerplate with Flow & Node native ESM modules & mjs-mocha & airbnb-base code style

## Usage

Clone my boilerplate and use it as clear boilerplate for your Node projects with Flow and ES6 modules. Enjoy ^_^

## Features

-   [**Flow**](https://flowtype.org/) - A static type checker for JavaScript used heavily within Facebook.
-   [**flow-remove-types**](https://github.com/flowtype/flow-remove-type) - Turn your JS with Flow type annotations into standard JS in an instant with no configuration and minimal setup.
-   [**husky**](https://github.com/typicode/husky) - 🐶 Git hooks made easy.
-   [**mjs-mocha**](https://github.com/vpotseluyko/mjs-mocha) - A very simple npm mocha mjs polyfill. No dependencies at all.
-   [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
-   [**nodemon**](https://nodemon.io/) - A tool that helps develop node.js based applications by automatically restarting the node application, configured for using with mjs and flow.
-   [**Documentation**](http://documentation.js.org/) - A documentation system so good, you'll actually write documentation.
-   [**Conventional Changelog**](https://github.com/conventional-changelog/conventional-changelog) - Generate a changelog from git metadata.


## Npm scripts

**build:** use flow-remove-types and convert mjs flow files to mjs javascript files stored in lib/

**start:** use experimental-modules parameter for native support esm modules in node

**dev:** use nodemon with flow-remove-types and runs node with experimental-modules option, also see nodemonConfig for ignoring

**lint:** use ext param for mjs extension, also see lint-staged config

**test:** use mjs-mocha & default chai modules for testing

Also you can find additional scripts in the **package.json**
