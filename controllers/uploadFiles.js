const fs = require('fs');
const path = require('path');
module.exports = {
	'POST /uploadFiles': async (ctx, next) => {
		// 上传单个文件
		  const files = ctx.request.files.file; // 获取上传文件
		    // 创建可读流
		    const reader = fs.createReadStream(files.path);
		    // 获取上传文件扩展名
		    let filePath = path.join(__dirname, '../public/upload/') + `/${files.name}`;
		    // 创建可写流
		    const upStream = fs.createWriteStream(filePath);
		    // 可读流通过管道写入可写流
		    reader.pipe(upStream);

		if (files) {
		    ctx.response.body = {
		      data: filePath,
		      message: '文件上传成功',
		      result: 1,
		    }
		  } else {
		    ctx.response.body = {
		      message: '文件上传失败',
		      result:0
		}
		        	
	}
	}
}