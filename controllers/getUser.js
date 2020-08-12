module.exports = {
    'POST /getUser': async (ctx, next) => {
       var  key  = ctx.request.body
       if(key.id==100){
       	ctx.response.body= {
       		result:1,
       		status:200,
       		code:1,
       		data:{'name':'小明','age':20}
       	}
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
