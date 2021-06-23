const fs = require('fs');
const path = require('path');
const filesPath1800 = `${__dirname}/1800`;
const filesPath2000 = `${__dirname}/2000`;
const filesPathBoys = `${__dirname}/boys`;
const filesPathGirls = `${__dirname}/girls`;

fs.readdir(filesPath1800, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(file => {
        fs.rename(path.join(filesPath1800, file), path.join(filesPath2000, file), err => {
            if (err) {
                console.log(err)
            }
        })
    })
})
fs.readdir(filesPath2000, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(file => {
        fs.rename(path.join(filesPath2000, file), path.join(filesPath1800, file), err => {
            if (err) {
                console.log(err)
            }
        })
    })
})
fs.readdir(filesPath1800, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(file => {
        fs.readFile(path.join(filesPath1800, file), (err, data) => {
            let parsedFile = JSON.parse(data.toString())
            parsedFile.gender === 'female' ?
                fs.rename(path.join(filesPath1800, file), path.join(filesPathGirls, file), err => console.log(err))
                :
                fs.rename(path.join(filesPath1800, file), path.join(filesPathBoys, file), err => console.log(err))

        })
    })
})
fs.readdir(filesPath2000, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(file => {
        fs.readFile(path.join(filesPath2000, file), (err, data) => {
            let parsedFile = JSON.parse(data.toString())
            parsedFile.gender === 'female' ?
                fs.rename(path.join(filesPath2000, file), path.join(filesPathGirls, file), err => console.log(err))
                :
                fs.rename(path.join(filesPath2000, file), path.join(filesPathBoys, file), err => console.log(err))

        })
    })
})
