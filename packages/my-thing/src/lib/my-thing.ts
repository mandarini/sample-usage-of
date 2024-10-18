const { myLib } = require('@my-package/my-lib');

export function myThing(): string {
  return 'my-thing';
}

console.log('Here is my local package: ', myThing());
console.log('And here is the imported package: ', myLib());
