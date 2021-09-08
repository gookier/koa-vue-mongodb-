module.exports = {
    'POST /getMateList': async (ctx, next) => {
       var  key  = ctx.request.body
	   var part_num ={}
	   var save_id ={}
		if(key.part_num){
			part_num.part_num = key.part_num
		}
		if(key.save_id){
			save_id.save_id = key.save_id
		}	
	   return new Promise(function(resolve,reject){
		   var MongoClient = require('mongodb').MongoClient
		   // var MG_URL = "mongodb://user:user123456@119.45.52.212:27017/person"
		   var MG_URL = "mongodb://localhost:27017/person"
		   MongoClient.connect(MG_URL,{useUnifiedTopology:true},function(err,db){
			   if (err) throw err
				var dbo = db.db("person")
				dbo.collection("storage").find({"$and":[save_id,part_num]}).toArray(function(err,result){
					if(result){
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
							msg:"没有查询到数据"
						}
					}
					
					if (err) throw err
					resolve (result)
					db.close()				   
			   })
		   })
	   })      	
       
    }
};
