const jwt = require('jsonwebtoken')
module.exports = {
    'POST /login': async (ctx, next) => {
       var  key  = ctx.request.body
	   // console.log(key)
       if(key.username && key.password){
		   return new Promise(function(resolve,reject){
			   var MongoClient = require('mongodb').MongoClient
			  // var MG_URL = "mongodb://user:user123456@119.45.52.212:27017/person"
			    var MG_URL = "mongodb://localhost:27017/person"
			   MongoClient.connect(MG_URL,{useUnifiedTopology:true},function(err,db){
				   if (err) throw err
				    var dbo = db.db("person")
					dbo.collection("userlist").find({user_name:key.username,password:key.password}).toArray(function(err,result){
						if(result.length){
							const TOKEN = jwt.sign({
								name: result[0].user_name,
								user_id:result[0].user_id,
								user_group_power:result[0].user_group_power
							}, 'MY_TOKEN', { expiresIn: '24h' })
							let userdata = {
								user_name:result[0].user_name,
								user_id:result[0].user_id,
								user_group_power:result[0].user_group_power,
								token:TOKEN
							}
							ctx.response.body= {
								result:1,
								status:200,
								code:1,
								data:userdata
							}
						}else{
							ctx.response.body= {
								result:0,
								status:200,
								code:0,
								msg:"该用户不存在"
							}
						}
						
						if (err) throw err
						resolve (result)
						db.close()				   
				   })
			   })
		   })      	
       }else{
       	ctx.response.body= {
       		result:0,
       		status:200,
       		code:0,
       		msg:'error'
       	}
       }
    }	
};
