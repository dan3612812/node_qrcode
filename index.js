const qrcode = require('qrcode');
const crypto = require('crypto')



let text = crypto.randomBytes(20).toString('hex');
console.log("~~~~~~~~~~~~~~~~")
console.log(text)
console.log("~~~~~~~~~~~~~~~~")
console.log(text.length)
console.log("!!!!!!!!!!!!!!!!")
text = "abcdefG"
console.log(text.length)
console.log("!!!!!!!!!!!!!!!!")
// text = '1234567890'
// text += '12345678'
// text += '1234567890'
// text += '1234567890'

//errorlevel:H version:1 長度:18(數字) 英文:7碼

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