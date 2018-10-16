let gm = require('gm');

exports.compress = (path,width=150) =>{
	let _outPath = outPath(path);
	// console.log('outpath:'+_outPath);
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
		// 兼容相对路径./   ../
		if(str.length < 2) {
			return false;
		}
		return (str.slice(0,str.length-1)).join('.')+'_min'
				+'_'+width
				+'.'+str[str.length-1];
	}
}