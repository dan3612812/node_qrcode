const qrcode = require('qrcode');
const crypto = require('crypto')


//雖然base64的自組比較短但產生qrcode需要長(我猜是符號)
let cto = crypto.randomBytes(20);
let text = cto.toString('base64');
let t2 = cto.toString('hex');
console.log("~~~~~~~~~~~~~~~~")
console.log(cto)
console.log(text)
console.log(t2)
console.log("~~~~~~~~~~~~~~~~")
console.log(text.length)
console.log(t2.length)
console.log("!!!!!!!!!!!!!!!!")
// text = t2
// text = '1234567890'
// text += '12345678'
// text += '1234567890'
// text += '1234567890'

//errorlevel:H version:1 長度:18(數字) 英文:7碼
//數字最多 7,089 字元,文數字最多 4,296 字元,8位元字元組(二進制)最多 2,953 字元,日本漢字最多1,817 字元。


qrcode.toDataURL(text, function (err, url) {
    if (err) throw err;
    console.log(url);
});
// 容錯率 L ; M ; Q ; H
const opts = {
    errorCorrectionLevel: 'H', //容錯率越大 能包含的資訊越少
    version: 1
};
const path = './qrcode.png';
qrcode.toFile(path, text, opts, (err) => {
    if (err) throw err;
    console.log('saved.');
});