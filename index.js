let request = require('request')
	,fs = require('fs')
	,imgPath = 'images/'
	,path = require('path')
	,imageFn = require('./image.js');

imageFn.compress(imgPath + 'img.jpg',310)
.then(function(data){
	console.log('success:');
	console.log(data);
},function(err){
	console.log('err');
});