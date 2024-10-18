# Sample usage

Sample usage of [sample-package-nx](https://github.com/mandarini/sample-package-nx).

## How to test

### Save the `sample-package-nx`

Copy the `dist` folder of the `sample-package-nx`, and save it to the same parent folder of this repository. The two folders should be siblings for this particular example to work (see the import path in `package.json` to understand what I mean). In general, you can import the `dist` folder from wherever it may live. More instructions can be found in the [sample-package-nx](https://github.com/mandarini/sample-package-nx).

_Make sure you build the `sample-package-nx` by running `npx nx build my-lib` in that repository (read the README of that one) first, so that you get the `dist` folder!_

### Use the `sample-package-nx`

1. Clone this repository
2. Run `npm install`
3. Run `npx nx build my-thing`
4. Run `node packages/my-thing/dist/index.cjs.js`

### Which files to look into

- [`packages/my-thing/src/lib/my-thing.ts`](packages/my-thing/src/lib/my-thing.ts) - The main file of the library. Imported using the CommonJS version.
- [`packages/my-thing/tsconfig.lib.json`](packages/my-thing/tsconfig.lib.json) - Make sure you have `"esModuleInterop": true` and `"allowJs": true`.
- [`package.json`](package.json) - Look at the dependencies:

  ```json
  "dependencies": {
    "@my-package/my-lib": "file:../my-package/packages/my-lib/dist"
  },
  ```
