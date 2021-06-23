// const fs = require('fs');
// const users = [
//     {name: 'olga', gender: 'female', age: 19},
//     {name: 'ivan', gender: 'male', age: 16},
//     {name: 'oleg', gender: 'male', age: 30},
//     {name: 'igor', gender: 'male', age: 17},
//     {name: 'max', gender: 'male', age: 23},
//     {name: 'markiian', gender: 'male', age: 23},
//     {name: 'ira', gender: 'female', age: 19},
//     {name: 'hrystyna', gender: 'female', age: 27},
//     {name: 'andrii', gender: 'male', age: 32},
//     {name: 'jura', gender: 'male', age: 42}
// ]
/*users.forEach(user => {
    if(user.age > 20 && user.gender === 'male') {
        const filepath = __dirname + `/manOlder20/${user.name}.txt`
    };
    if(user.age < 20 && user.gender === 'male') {
        const filepath = __dirname + `/manYounger20/${user.name}.txt`
    }
    if (user.age > 20 && user.gender === 'female') {
        const filepath = __dirname + `/womanOlder20/${user.name}.txt`
    }
    if (user.age < 20 && user.gender === 'female') {
        const filepath = __dirname + `/womanYounger20/${user.name}.txt`
    }*/
// })

// for (const user of users) {
//     if(user.age >= 20 && user.gender === 'male') {
//         const filePath1 = __dirname + `/manOlder20/${user.name}.txt`;
//         fs.writeFile(
//             filePath1,
//             JSON.stringify(user),
//             (err) => console.log(err)
//         )
//     } else if (user.age < 20 && user.gender === 'male') {
//         const filepath2 = __dirname + `/manYounger20/${user.name}.txt`;
//         fs.writeFile(
//             filepath2,
//             JSON.stringify(user),
//             (err) => console.log(err)
//         )
//     } else if (user.age >= 20 && user.gender === 'female') {
//         const filepath3 = __dirname + `/womanOlder20/${user.name}.txt`;
//         fs.writeFile(
//             filepath3,
//             JSON.stringify(user),
//             (err) => console.log(err)
//         );
//     } else if (user.age < 20 && user.gender === 'female') {
//         const filepath4 = __dirname + `/womanYounger20/${user.name}.txt`;
//         fs.writeFile(
//             filepath4,
//             JSON.stringify(user),
//             (err) => console.log(err)
//         );
//     }
// }
