 module.exports  = (ctx, opts) => {

	 console.log(ctx.header)
   if (!ctx.header || !ctx.header.MY_TOKEN) {
          return;
      }
      const parts = ctx.header.MY_TOKEN.split(' ');
	  console.log(parts)
      if (parts.length === 2) {
          const scheme = parts[0];
          const credentials = parts[1];
          // if (/^Bearer$/i.test(scheme)) {
          //     return credentials;
          // }
      }
      if (!opts.passthrough) {
          ctx.throw(401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"');
      }
}
