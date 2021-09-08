module.exports = {
	'POST /addRole': async (ctx, next) => {
			var  key  = ctx.request.body
			var roledata ={}
			roledata.role = key.role
			roledata.des = key.des
			roledata.authorlist = key.authorlist
			if(key.role_id){
				roledata.role_id = key.role_id
			}else{
				roledata.role_id = parseInt(Math.random()*100+1)
			}
			
			
		   return new Promise(function(resolve,reject){
			var MongoClient = require('mongodb').MongoClient
			// var MG_URL = "mongodb://user:user123456@119.45.52.212:27017/person"
			var MG_URL = "mongodb://localhost:27017/person"
			MongoClient.connect(MG_URL,{useUnifiedTopology:true},function(err,db){
			   if (err) throw err
				var dbo = db.db("person")			
				dbo.collection("rolelist").updateOne({role_id:roledata.role_id},{$set:{role_id:roledata.role_id,role:roledata.role,authorlist:roledata.authorlist,des:roledata.des}},{upsert:true},function(err,result){
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