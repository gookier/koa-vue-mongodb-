module.exports = {
	'POST /deleteUser': async (ctx, next) => {
			var  key  = ctx.request.body
		   return new Promise(function(resolve,reject){
			var MongoClient = require('mongodb').MongoClient
			// var MG_URL = "mongodb://user:user123456@119.45.52.212:27017/person"
			var MG_URL = "mongodb://localhost:27017/person"
			MongoClient.connect(MG_URL,{useUnifiedTopology:true},function(err,db){
			   if (err) throw err
				var dbo = db.db("person")			
				dbo.collection("userlist").remove({user_id:key.user_id},function(err,result){
					if(result){
						ctx.response.body= {
							result:1,
							status:200,
						}
					}else{
						ctx.response.body= {
							result:0,
							status:200,
							msg:"删除失败"
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