// Define an object with various data types including arrays, objects, dates, and regular expressions
const originalObject = {
  string: "Hello",
  number: 123,
  boolean: true,
  array: [1, 2, 3],
  object: { a: 1, b: 2 },
  date: new Date(),
  regexp: /test/g,
};

// Deep Clone Using Custom Recursive Function
function deepClone(obj, visited = new WeakMap()) {
  // Handle non-object types and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // Handle dates
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle regular expressions
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const cloneArray = [];
    visited.set(obj, cloneArray);
    obj.forEach((item, index) => {
      cloneArray[index] = deepClone(item, visited);
    });
    return cloneArray;
  }

  // Handle objects
  const cloneObj = {};
  visited.set(obj, cloneObj);
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key], visited);
    }
  }
  return cloneObj;
}

// Add circular reference
originalObject.circular = originalObject;

// Clone the original object
const clonedObject = deepClone(originalObject);

// Modify the cloned object
clonedObject.string = "Modified";
clonedObject.number = 456;
clonedObject.array.push(4);
clonedObject.object.c = 3;

// Log both original and cloned objects
console.log("Original Object:", originalObject);
console.log("Cloned Object:", clonedObject);