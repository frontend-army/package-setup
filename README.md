# FrontEnd Army Package Setup

A basic lightweight NPM Package setup to ensure a nice DX.

## Features

- [Typescript](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- Linter ([Eslint](https://eslint.org/) + [Prettier](https://prettier.io/))
- Format on save ([VSCode](https://code.visualstudio.com/))
- Testing ([Jest](https://jestjs.io/))
- Pre commit hook checking tests and linter ([Husky](https://typicode.github.io/husky/))
- Absolute Import aliases (Using [typescript-transform-paths](https://www.npmjs.com/package/typescript-transform-paths))

None of these features impact the final build, they are all development dependencies, so you don't have to worry about a big bundle size.

### Aliases

Aliases are set with a `@` prefix. You can customize this in the `tsconfig.json` and jest.config.js. We recommend using aliases to make imports more readable when files reference global files or distant files above in the tree, and to use relative paths when referencing closer files that are child nodes in the same document tree.

Example:

- assets
  - Asset.ts
- utils
  - Foo.ts
    - Bar.ts
    - Baz.ts

```
// Foo.js
import Baz from './Baz';
import Asset from '@/assets';
```

## Usage

To start using this setup clone this repository

```
git clone git@github.com:frontend-army/package-setup.git
```

One cloned, you must change the values wrapped between `%` in the package json with your own values:
- package-name
- author
- description

After that, replace this README file with your own eventually. You may also want to change the license, scripts or any other field in the `package.json`. From this point on, the package is yours!
**Important**: Remember to always update your version number before publishing your package. We strongly suggest you use [Semantic Versioning](https://semver.org/)

## Scripts

### test

Runs tests using jest. It supports aliases with `@` (this can be changed, more on [Aliases](#Aliases)). By default it only tests files inside the `src` folder. Check [jest.config.js](./src/jest.config.js) for more information or if you want to customize testing.

### coverage

Runs tests generating a coverage report. The coverage threshold is set with a minimum of 70%, but you can customize it in the [jest.config.js](./src/jest.config.js) file.

### build

Builds the application for publishing and leaves the result in the `dist` folder. It always deletes the previous `dist` folder to avoid caching issues.

### lint

Runs the linter. Note that `prettier` is integrated into `eslint`.
To see and customize ignored files, check `.eslintignore`. 
To see and customize `eslint` configuration, check `.eslintrc.json`.
To see and customize `prettier` configuration, check `.prettierrc`.

### lint-fix

Runs the linter same as `lint`, but it attempts to auto-fix the issues when possible.

### prepublishOnly

This script is not meant to be run manually. It allows npm to run the `build` command internally before publishing the script when you run `npm publish`. This way you prevent forgetting to build your package before publishing the new version. [More information](https://docs.npmjs.com/cli/v9/using-npm/scripts)

### prepare

This script is not meant to be used manually. It installs `husky`. We use `husky` to run tests and linter each time you commit, preventing having to make later fixes when warnings or test errors appear, hence making your code more robust. You can customize, add or remove this scripts as you wish. For more information, check [husky](https://typicode.github.io/husky/)

## Feedback

We are open to feedback! Feel free to open an Issue.

Please, if you wish to help developing these or other open source tools let us know via our social media:

- [Twitter](twitter.com/frontend_army)
- [Discord](https://t.co/Y46bYpwExU)

### License

Copyright 2024 Frontend Army

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
