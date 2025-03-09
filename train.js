// TASK F
function findDoublers(a) {
    const b = [...a];
    return b.some((ele, index) => b.indexOf(ele) !== index);
}

console.log(findDoublers("hello"));


// TASK E
/*
function getReverse(a) {
    return [...a].reverse().join("") ;
}

console.log(getReverse("hello"));
*/


// TASK D

/*
function checkContent(a, b) {
return [...a].sort().join('') === [...b].sort().join('');
}

console.log(checkContent("mitgroup", "gmtiprou"));
*/



// TASK C

/*
const time = new Date().toLocaleTimeString();

class Shop {

    constructor(non, kebab, ayron) {
        this.non = non;
        this.kebab = kebab;
        this.ayron = ayron;
    };

    qoldiq() {
        return `Soat ${time}da bizda, ${this.non} ta Non, ${this.kebab} ta Kebab, ${this.ayron} ta Ayron bor`;
    };

    sotish(a, b) {
        if (a === 'non') {
            if (this.non >= b) {
                this.non -= b;
            } else {
                console.log(`Uzr aka non ${this.non} ta qolibdi`);
            } 
        } else if (a === 'kebab') {
            if (this.kebab >= b) {
                this.kebab -= b;
            } else {
                console.log(`Uzr aka kebab ${this.kebab} ta qolibdi`);
            } 
        }
        else if (a === 'ayron') {
            if (this.ayron >= b) {
                this.ayron -= b;
            } else {
                console.log(`Uzr aka ayron ${this.ayron} ta qolibdi`);
            } 
        } else {
            console.log('Aka menyuda bunaqa mahsulot yoq');
        }
    };

    qabul(a, b) {
        if (a === 'non') {
            this.non += b;
        } else if (a === 'kebab') {
            this.kebab += b;
        } else if (a === 'ayron') {
            this.ayron += b;
        } else {
            console.log('Aka biz bunaqa narsa zakaz qilmagandik');
        }
    };
};

const shop = new Shop (9, 3, 5);

console.log(shop.qoldiq());
shop.qabul('non', 5);
console.log(shop.qoldiq());
shop.sotish('kebab', 5);
console.log(shop.qoldiq());
*/



// TASK B
/*
B-TASK: 

Shunday function tuzing, u 1 ta string parametrga ega bolsin, 
hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/


// const a = [2, 5, 4, 7, 9, 0, 9];
// function countDigits(mix) {
//     return [...mix].filter(ele => !isNaN(ele)).length;   //NaN - Not a Number. isNaN() is a function to verify that the string is not a number
//     } 
    
// console.log(countDigits("ad2a54y79wet0sfgb9"));




// Task A

/*
function countLetter(letter, word) {
    return [...word].reduce((count, ele) => ele === letter ? count + 1 : count, 0);
}
console.log("masalani yechimi", countLetter("e", "engineer"));
*/








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