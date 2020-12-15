// // const c = 'aaa'; 
// // let b = 1;

// // const object1 = {
// //     a : 7,
// //     b : { 
// //         f : 1,
// //     }
// // }

// // const array1 = [1,2,3];
// // const array_2 = new Array(3);

// // undefined || 1

// // function a() {

// // }

// // const a = () => {}
// const person = {
//     name: 'jb',
//     age: 26,
//     gender: 'male',
//     school: 'knu',
// }

// const print = ({name, age, gender, school}) => {
//     // const {name, age, gender, school} = data;

//     console.log(name);
//     console.log(name);
//     console.log(name);
//     console.log(name);
// }

// const increaseAge = (data) => {
//     data.age++;
// }

// const addLocation = (person, location) => {
//     person.location = location;
//     return person;
// }

// const deleteLocation = (person) => {
//     delete person.location;
//     return person;
// }

// const new_person = addLocation(person, 'daegu')
// const newnew_person = deleteLocation(person);

// increaseAge(person);
// print(person);


a = new Array(10000).fill(1);
b = [1,2,3,4,5];

function a() {
    const array1 = [1,2,3,4,5];

    array1.foreach((element) => {
        console.log(element);
    })

    array1.map((element,i) => {
        console.log('element: ', element, 'i: ',i);
        return element * 2;
    })

    //find
    array1.find((element) => element < 3)

    array1.filter((element) => element < 3)





    array1.splice(1,3); // wkffksohr qjfla

    array1.push(6);
    array1.unshift(4);

    array1.pop();
    array1.shift();

    const array2 = [9,8];
    const array1 = [1,2,3,4,5];
    array1.concat(array2);
    array1.join()

    string1 = 'abc';
    string2 = 'def';
    string1.concat(string2);

    string1.includes('b');
    string1.slice(0,1);
    string1.split('b')
    string1.toUpperCase();
    data = '       dat a      '
    data.trim();
    
    new Date();
    new Date().getTime();
    new Date().toDateString();
    new Date().toLocaleDateString();
}