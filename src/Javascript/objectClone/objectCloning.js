// Ways for Object cloning
const originalObject = {
  name: "John",
  age: 30,

  // Nested object
  address: {
    city: "New York",
    state: "NY",
  },

  // Methods
  doAction: function () {
    console.log(this.name + " is walking in " + this.address.city);
  },
};

// copying an object to new variable
// this way it will only copy the reference of the object and
// if we modify the copied object it will also modify the original object
const copyiedObject = originalObject;

// Shallow cloning using the spread operator
// this only affects the top level properties of the object and nested objects
// will still reference the same objects in both the original and cloned objects.
const shallowClone1 = { ...originalObject };

// Shallow cloning using Object.assign()
const shallowClone2 = Object.assign({}, originalObject);

// Deep cloning using JSON.stringify() and JSON.parse()
// ! there are limitations to this method, such as the inability to handle functions,
// ! non-enumerable properties, or circular references in the original object.
const deepClone1 = JSON.parse(JSON.stringify(originalObject));

// Deep cloning using a third-party library like lodash
// const deepClone2 = _.cloneDeep(originalObject);

// solution for limitations mentioned above:
//* top solution - use third-party libraries, such as "Lodash" and "Rambda".

console.log("shallow1: ", shallowClone1);
console.log("shallow2: ", shallowClone2);
console.log("deepclone1: ", deepClone1);
