var fs = require('fs');
// fs.readFile('./lesson1.txt', 'utf8', function(err,data){
//     if(err) throw err;
//     console.log(data);
// });
var readline = require('readline');
var fWriteName = './new.txt';
var fWrite = fs.createWriteStream(fWriteName);
var rl = readline.createInterface({
    input: process.stdin,
    output: fWrite,
    terminal: false  //这个参数很重要
});

rl.on('line', function(line){
	//按需处理
    var lineArr = line.split(',');
    // console.log(lineArr);
    if(lineArr.length !== 4) {
        console.warn('error',line);
    }
    if(lineArr[2]) {
        var temp = lineArr[0];
        lineArr[0] = lineArr[2];
        lineArr[2] = temp;
        fWrite.write(lineArr.join(',') + '\n');
    } else {
	    fWrite.write(line + '\n');
    }

});
