function reverseNumber(num) {
    
        let reversed = '';
        const arr = String(num);
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            reversed += arr[i];

        }
        return parseFloat(reversed) * Math.sign(num);
    }

// console.log(reverseNumber(123456));
// console.log(reverseNumber(76543210));
// console.log(reverseNumber(-543.21));

// ************************

function forEach(arr, func) {
    for (const el of arr) {
        func(el);
    }
}
// forEach([2,5,8], function(el) { console.log(el) })

// *****************************

function map(arr, func) {
    let mapArr = [];
    
        forEach(arr, function(el) {
        mapArr.push(func(el));
    })
    return mapArr;
}

// console.log(map([2, 3, 5, 1], function (el) { return el + 9 }))

// ************************************

function filter(arr, func) {
    let filteredArr = [];
    forEach(arr, function (el) {
        if (func(el) === true) { 
        filteredArr.push(el)
    }
    });
    return filteredArr;
}

// console.log(filter([2, 5, 1, 3, 8, 6], function(el) { return el % 2 === 0 }));

// **************************************

function getAdultAppleLovers(data) {
    let newArr = [];
    let adult = 18;
    
    filter(data, function (el) {
        if (el.age > adult && el.favoriteFruit === 'apple') { 
        newArr.push(el.name);
    }
    }) 
    return newArr;
}

// const data = [
// {
// "_id": "5b5e3168c6bf40f2c1235cd6",
// "index": 0,
// "age": 39,
// "eyeColor": "green",
// "name": "Stein",
// "favoriteFruit": "apple"
// },
// {
// "_id": "5b5e3168e328c0d72e4f27d8",
// "index": 1,
// "age": 38,
// "eyeColor": "blue",
// "name": "Cortez",
// "favoriteFruit": "strawberry"
// },
// {
// "_id": "5b5e3168cc79132b631c666a",
// "index": 2,
// "age": 2,
// "eyeColor": "blue",
// "name": "Suzette",
// "favoriteFruit": "apple"
// },
// {
// "_id": "5b5e31682093adcc6cd0dde5",
// "index": 3,
// "age": 17,
// "eyeColor": "green",
// "name": "Weiss",
// "favoriteFruit": "banana"
// }
// ]
// console.log(getAdultAppleLovers(data)); 

//****************************************************** */
function getKeys(obj) {
    const keysArr = [];
    for (const key in obj) {
        if (key) {
            keysArr.push(key)
        }
    };
    return keysArr;
}

// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

//*************************************************** */

function getValues(obj) {
    const valuesArr = [];
    for (let value in obj) {
            valuesArr.push(obj[value]);
        }
    
    return valuesArr;
}

// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

//**************************************** */
function showFormattedDate(dateObj) {
    let day = dateObj.getDate();
    let ten = 10;
    // let month = dateObj.getMonth() + 1;
    let shortMonth = dateObj.toLocaleString('en-US', { month: 'short' });
    let year = dateObj.getFullYear();

    day < ten ? day = '0' + day : '';

    return `'It is ${day} of ${shortMonth}, ${year}'`;
}

//  console.log(showFormattedDate(new Date('2018-08-27T01:10:00'))); 
