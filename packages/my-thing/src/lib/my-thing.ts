const { myLib } = require('@my-package/my-lib');

export function myThing(): string {
  return 'my-thing hello';
}

console.log(myThing());
console.log(myLib());
