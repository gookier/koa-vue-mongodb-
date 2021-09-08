module.exports = {
	'POST /roleList': async (ctx, next) => {
		   return new Promise(function(resolve,reject){
			var MongoClient = require('mongodb').MongoClient
			// var MG_URL = "mongodb://user:user123456@119.45.52.212:27017/person"
			var MG_URL = "mongodb://localhost:27017/person"
			MongoClient.connect(MG_URL,{useUnifiedTopology:true},function(err,db){
			   if (err) throw err
				var dbo = db.db("person")
				dbo.collection("rolelist").find({}).toArray(function(err,result){
					if(result.length){
						ctx.response.body= {
							result:1,
							status:200,
							code:1,
							data:result
						}
					}else{
						ctx.response.body= {
							result:0,
							status:200,
							code:0,
							msg:"暂无数据"
						}
					}					
				if (err) throw err
					resolve (result)
					db.close()				   
			   })
		   })
	   })      	
	},
}