const qrcode = require('qrcode');
const crypto = require('crypto')


//雖然base64的自組比較短但產生qrcode需要長(我猜是符號)
// let cto = crypto.randomBytes(300);
// let text = cto.toString('base64');
// let t2 = cto.toString('hex');
// console.log("~~~~~~~~~~~~~~~~")
// console.log(cto)
// console.log(text)
// console.log(t2)
// console.log("~~~~~~~~~~~~~~~~")
// console.log(text.length)
// console.log(t2.length)
// console.log("!!!!!!!!!!!!!!!!")
// text = t2
// text = '1234567890'
// text += '12345678'
// text += '1234567890'
// text += '1234567890'

//errorlevel:H version:1 長度:18(數字) 英文:7碼
//數字最多 7,089 字元,文數字最多 4,296 字元,8位元字元組(二進制)最多 2,953 字元,日本漢字最多1,817 字元。


// qrcode.toDataURL(text, function (err, url) {
//     if (err) throw err;
//     console.log("~~~@@@@@@@~~")
//     console.log(url);
//     console.log("~~~@@@@@@~~~~~")
// });
let qrqr = '';
let tta = 'aAa1V56448465asdfdh513DgFDSAaaaaaaQWF564NBVJ32G1子毅';
console.log(tta.length)
// 容錯率 L ; M ; Q ; H
const opts = {
    errorCorrectionLevel: 'L', //容錯率越大 能包含的資訊越少
    version: 3
};


qrcode.toString(tta, opts, function (err, string) {
    if (err) throw err
    console.log(string)
    let buf = new Buffer(string);
    let qrstr = buf.toString('hex');
    qrstr = qrstr.replace(/20/g, 'I'); //把空白換掉
    qrstr = qrstr.replace(/e2968/g, ''); //把重複的換掉
    let qrstrarr = qrstr.split('0a');
    let to2qr = Array(30).fill('');
    for (let i = 0; i < 15; i++) {
        let rows = qrstrarr[i + 2].split(''); //+2原因 開頭兩行為空白行
        for (let j = 4; j < rows.length - 4; j++) { //j=4 由於開頭4個為空白 -4因為結尾4碼也是空白
            if (rows[j] == '8') {
                to2qr[i * 2] += '1'; to2qr[i * 2 + 1] += '1'; //*2+1的原因為 一碼轉成兩行
            }
            if (rows[j] == '4') {
                to2qr[i * 2] += '0'; to2qr[i * 2 + 1] += '1';
            }
            if (rows[j] == '0') {
                to2qr[i * 2] += '1'; to2qr[i * 2 + 1] += '0';
            }
            if (rows[j] == 'I') {
                to2qr[i * 2] += '0'; to2qr[i * 2 + 1] += '0';
            }
        }
    }
    console.log(to2qr)
    let tohex = Array(29).fill('');
    for (let i = 0; i < to2qr.length - 1; i++) { //-1 最後一行一定是0000
        let row = to2qr[i] + '';
        let element = '';
        while (row.length > 0) {
            // console.log(row)
            let temp = (row.substring(0, 4) + "0000").substring(0, 4); //取出4碼不夠補0(後面)
            row = row.substring(4)
            element += parseInt(temp, 2).toString(16) + ''; //先 2 to 10 再轉成16
            // console.log(element)
        }
        // console.log(element);
        tohex[i] = element;
    }
    console.log(tohex)
    console.log("EEEEEEEEEEEEEEEEEND");
    let qrcodebin = tohex.join('');
    console.log(qrcodebin);
    let buf_qrcodebin = Buffer(qrcodebin, 'hex');
    console.log(buf_qrcodebin)
    // qrstrarr = qrstrarr.splice(0, 2)
    // qrstrarr = qrstrarr.splice(qrstrarr.length - 1, 2);
    // console.log(qrstrarr)


})


function buf2str(buf) {
    let ret = Buffer.from(buf).toString('hex')
    return ret
}
function str2buf(str) {
    let ret = new Buffer(str, 'hex');
    return ret
}

function qr2arr(qrcode) {
    for (let i = 0; i < qrcode.length; i++) {

    }
}
/**
 * 將start到end的拔掉
 * @param {*} buf 
 * @param {*} start 大於1
 * @param {*} end 
 */
function bufmid(buf, start, end) {
    // if (buf instanceof Buffer )
    let a = buf.slice(0, start - 1)
    let b = buf.slice(end, buf.byteLength)
    let ret = Buffer.concat([a, b])
    return ret
}

// const path = './qrcode.png';
// qrcode.toFile(path, text, opts, (err) => {
//     if (err) throw err;
//     console.log('saved.');
// });


// 0XFE 0X6D 0XFE 
//---- 21*21
/*---------------------
█▀▀▀▀▀█ ▀▀▄▀▀ █▀▀▀▀▀█   
█ ███ █ ▀▄ ▀▄ █ ███ █
█ ▀▀▀ █ ▄  ██ █ ▀▀▀ █
▀▀▀▀▀▀▀ ▀▄█ █ ▀▀▀▀▀▀▀
█▄█▄ ▄▀▀▄  ▄ ▄▄▀  ▀ █
█▄▀▄▀█▀▄ █▀█▀█▄███ ▄▀
 ▀  ▀ ▀ ▄█ ▀▀▀▀ █▀ ▀█
█▀▀▀▀▀█ ▀█▀ ▄ ▀ █▄ ▄█
█ ███ █  ██▄ ▄█ ██  ▀
█ ▀▀▀ █ ▀▄ █▀█▄▄▀█▀▀▀
▀▀▀▀▀▀▀ ▀ ▀▀▀▀▀ ▀▀  ▀
*/

// 29*29
/*
█▀▀▀▀▀█ ██▄ █▀▀▀▀▄▄▄  █▀▀▀▀▀█
█ ███ █ █▄▀  ▄█▄▄▀█   █ ███ █
█ ▀▀▀ █ ▄  ▀ ▄█▀█ ▀▄  █ ▀▀▀ █
▀▀▀▀▀▀▀ ▀▄▀▄▀ ▀▄▀▄▀ █ ▀▀▀▀▀▀▀
▀▀  ▀█▀▄ ▄▄█▀ ▄▄▄▀▄▀▀ ▄█▄▀█▀█
▀█▄▀ ▀▀▄▄ ▄█  ▄█▀▄▀▄▄▀ ▄▄▄  ▀
▀▀▄█  ▀  ▄▀█▀ ▄▄▄▀▄▀▀▄▄▀▄▀▄ ▄
▄█▄█▀█▀█▄ █▀█▀ ▀▄██ ▄ █  █ ▄▀
▄▄▄▄▀▀▀▄▀██▄▀▄▄▄▄▀▀▀▀▄▄▀▄▀▄ ▄
▄▄▄ ▀▀ ▀█▀▄ ▄▀███▄▀▄▀██▄▀ █
▀▀▀ ▀▀▀▀▄▀▀▄▀▄▄▄▄▀▀▀█▀▀▀█▀▄ ▄
█▀▀▀▀▀█ ▄ ███▀ █▄▄ ██ ▀ ██▀▄▀
█ ███ █ ▀▄ ▄▀▄▄▄▄▀▀▀█▀▀▀▀█ ▄▄
█ ▀▀▀ █ ▄███▄▀▄█ ▄▀ ▄ ▄  ▄ ██
▀▀▀▀▀▀▀ ▀ ▀ ▀   ▀▀▀ ▀▀   ▀ ▀ 
*/