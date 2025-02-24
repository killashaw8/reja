// Task A


function countLetter(letter, word) {
    return [...word].reduce((count, ele) => ele === letter ? count + 1 : count, 0);
}
console.log("masalani yechimi", countLetter("e", "engineer"));









// 022. Asynchronous functions

/*
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling",  //0-20
    "to'g'ri boshliq tanlang va ko'proq xato qilin",  //20-30
    "o'zingizga ishlashni boshlang",  //30-40
    "siz kuchli bo'lgan narsalarni qiling",  //40-50
    "yoshlarga investitsiya kiriting",  //50-60
    "dam oling, endi foydasi yo'q", //60~
];


function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 20) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {                                          //infinite loop
            callback(null, list[5]);
        }, 3000);
    }
}

console.log('passed here 0');

maslahatBering(65, (err,data) => {
    if(err) console.log("Error:", err);
    console.log("Javob:", data);
})

console.log('passed here 01');
*/












/*
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling",  //0-20
    "to'g'ri boshliq tanlang va ko'proq xato qilin",  //20-30
    "o'zingizga ishlashni boshlang",  //30-40
    "siz kuchli bo'lgan narsalarni qiling",  //40-50
    "yoshlarga investitsiya kiriting",  //50-60
    "dam oling, endi foydasi yo'q", //60~
];


async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error("insert a number", null);
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
    
        //return list[5];
       
        //setTimeout(function () {                     //setTimeout async function da ishlamaydi
        //    callback(null, list[5]);
        //}, 3000);
    }
}

*/


/* // call via then/ catch
console.log('passed here 0');

maslahatBering(34)
    .then((data) => {
        console.log('javob', data);
    })
    .catch((err) => {
        console.log("ERROR", err);
    })

console.log('passed here 01');
*/





/* // call via sync / await
async function run() {
    let javob = await maslahatBering(21);
    console.log(javob);
    javob = await maslahatBering(65);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();
*/






/* // 021. NodeJS event loop and Callback functions

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling",  //0-20
    "to'g'ri boshliq tanlang va ko'proq xato qilin",  //20-30
    "o'zingizga ishlashni boshlang",  //30-40
    "siz kuchli bo'lgan narsalarni qiling",  //40-50
    "yoshlarga investitsiya kiriting",  //50-60
    "dam oling, endi foydasi yo'q", //60~
];


function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 20) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5]);
        }, 3000);
    }
}

console.log('passed here 0');

maslahatBering(65, (err,data) => {
    if(err) console.log("Error:", err);
    console.log("Javob:", data);
})

console.log('passed here 01');

*/