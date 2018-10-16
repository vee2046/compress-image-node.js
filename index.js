let request = require('request')
	,fs = require('fs')
	,gm = require('gm')
	,imgPath = 'images/'
	,path = require('path');

compressImage(imgPath + 'img.jpg',300)
.then(function(data){
	console.log('success:');
	console.log(data);
},function(err){
	console.log('err');
});
function compressImage(path,width=150){
	let _outPath = outPath(path);
	return new Promise(function(resolve,reject){
		gm(path)
		.resize(width,width)
		.noProfile()
		.write(_outPath, function (err) {
		  if (!err) resolve(_outPath);
		  else reject(err);
		});
	});
	function outPath(_path){
		let str = _path.split('.');
		if(str.length != 2) return false;
		return str[0]+'_min'
				+'_'+width
				+'.'+str[1];
	}
}