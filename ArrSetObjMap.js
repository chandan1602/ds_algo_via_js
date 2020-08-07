// ### Differnt Tasks Require Diff Data Structures:
// * Ordered List of Data, Duplicates Allowed
//     * Array
//     * [1, 2, 5, 3]

//     * Unordered List of Data, No Duplicated Wanted
//         * Set
//         * new Set();
// set.add('pizza');

// * Key - value Pairs of unordered Data
//     * Object
//     * {
//     name: 'Max',
//     age: 31
// }

//     * Key - value Pairs of Ordered, Iterable Data
//         * Map
//         * new Map()
// map.set('loc', 'Germany')



//ARRAY
// 1. Insertion Order is Kept
// 2. Element Access via Index
// 3. Iterable
// 4. Size adjusts dynamically
// 5. Duplicate Values are allowed
// 6. Deletion and finding elements require extra work

const names = ['A', 'B', 'F', 'C'];
for (const el in names) {
    console.log(el);
}

const BIndex = names.findIndex(el => el === 'B')
console.log(BIndex);

names.splice(2, 1);
console.log(names);

//SETS
//1. Insertion Order is not Stored/memorized
//2. Element access and extraction via method
//3. Iterable
//4. Size adjusts dynamically
//5. Duplicate values are not allowed
//6. Deletion and finiding ele is trivial and fast

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const el of ids) {
    console.log(el);
}

console.log(ids.has('abc'))

ids.delete('abc');
console.log(ids);


//OBJECTS
//1. Unordered key-value pairs of data
//2. Element access via key
//3. Not iterable
//4. keys are unique, values are not
//5. Keys have to be strings, numbers or symbols
//6. Can store data & 'functionality'(methods)

const person = {
    first: 'C', 
    age : 1, 
    hobbies : ['a,b'],
    greet() {
        console.log('HI THERE');
    }
}
console.log(person['first']);
// OR
console.log(person.first);

person.last = 'B';

console.log(person);

delete person.age;
console.log(person);
person.greet();



//MAPS
//1. Ordered key-value pairs
//2. Element access via key
//3. Iterable
//4. Keys are unique, values are not
//5. Keys can be anything(including ref values like arrays)
//6. Pure data storage, optimized for data access

const resultData = new Map();

resultData.set('average', 2.00);
resultData.set('lastResult', null);

const country = {name: 'Germany', population : 82};

resultData.set(country, 0.89);

for (const el of resultData) {
    console.log(el);
}

resultData.set('average', 3.00);
console.log(resultData);

console.log(resultData.get('average'))

resultData.delete(country);
console.log(resultData);


//WEAKSET and WEAKMAP

//1. Variations of set and map
//2. Valus and keys are only 'weakly referenced'
//3. Garbage collection can delete values and keys if not used anywhere else in the app
