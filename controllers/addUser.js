module.exports = {
	'POST /addUser': async (ctx, next) => {
			var  key  = ctx.request.body
			var userdata ={}
			userdata.user_name = key.user_name
			userdata.user_group_power = key.user_group_power
			userdata.password = key.password
			userdata.description = key.description
			if(key.user_id){
				userdata.user_id = key = key.user_id
			}else{
				userdata.user_id = parseInt(Math.random()*10000+1)
			}
			
			
		   return new Promise(function(resolve,reject){
			var MongoClient = require('mongodb').MongoClient
			// var MG_URL = "mongodb://user:user123456@119.45.52.212:27017/person"
			var MG_URL = "mongodb://localhost:27017/person"
			MongoClient.connect(MG_URL,{useUnifiedTopology:true},function(err,db){
			   if (err) throw err
				var dbo = db.db("person")			
				dbo.collection("userlist").updateOne({user_id:userdata.user_id},{$set:{user_id:userdata.user_id,user_name:userdata.user_name,user_group_power:userdata.user_group_power,password:userdata.password,description:userdata.description}},{upsert:true},function(err,result){
					if(result){
						ctx.response.body= {
							result:1,
							status:200,
							code:1,
						}
					}else{
						ctx.response.body= {
							result:0,
							status:200,
							code:0,
							msg:"失败"
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