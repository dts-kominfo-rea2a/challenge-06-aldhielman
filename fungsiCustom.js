// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
const { parse } = require('path');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

const cb = (err, data) => {
  if (err) {
    return console.log("error")
  }
  else {
    console.log(data)
  }
}

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (cb) => {

  fs.readFile(file1, 'utf-8', (err, data) => {
    const arrayOfWord = [];
    const word1 = JSON.parse(data).message.split(" ")[1]
    if (!word1) {
      cb(true, null)
    }
    else {
      arrayOfWord.push(word1)
      fs.readFile(file2, 'utf-8', (err, data) => {
        const word2 = JSON.parse(data)[0].message.split(" ")[1]

        if (!word2) {
          cb(true, null)
        }
        else {
          arrayOfWord.push(word2)
          fs.readFile(file3, 'utf-8', (err, data) => {
            const word3 = JSON.parse(data)[0].data.message.split(" ")[1]
            if (!word3) {
              cb(true, null)
            }
            else {
              arrayOfWord.push(word3)
              console.log(arrayOfWord)
              cb(null, arrayOfWord)
            }
          })
        }
      })

    }

  })

}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
