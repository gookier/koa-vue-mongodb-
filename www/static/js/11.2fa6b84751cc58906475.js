webpackJsonp([11],{"8iXA":function(e,t){},"I/XI":function(e,t){},dHl0:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("fZjL"),a=s.n(r),o=s("fF8F"),l={data:function(){return{freezestatedialog:!1,title:this.$t("storage.label_code"),state:"",label_code:""}},computed:{freezestate:function(){return-1==this.state?this.$t("storage.freeze"):this.$t("storage.unfreeze")}},methods:{getFreezeState:function(e){var t=this;Object(o.p)({label_code:e}).then(function(s){s.result?a()(s.mate_info).length?(t.freezestatedialog=!0,t.title=t.$t("storage.label_code")+":"+e,t.state=s.mate_info.state,t.label_code=s.mate_info.label_code):t.$message({showClose:!0,message:t.$t("common.nodata"),type:"warning"}):t.$message({showClose:!0,message:s.msg,type:"error"})})},freeze:function(){var e=this;Object(o.g)({op_type:0,label_code:this.label_code}).then(function(t){t.result?(e.freezestatedialog=!1,e.$message({showClose:!0,message:e.$t("storage.freezesuccess"),type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})})},unfreeze:function(){var e=this;Object(o.g)({op_type:1,label_code:this.label_code}).then(function(t){t.result?(e.freezestatedialog=!1,e.$message({showClose:!0,message:e.$t("storage.unfreezesuccess"),type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})})}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-dialog",{attrs:{title:e.title,width:"30%",visible:e.freezestatedialog},on:{"update:visible":function(t){e.freezestatedialog=t}}},[s("span",{staticClass:"freeze_num"},[e._v(e._s(e.$t("storage.freezestate"))+":")]),e._v(" "),s("span",{staticClass:"freeze_num freezestate"},[e._v(e._s(e.freezestate))]),e._v(" "),s("div",{staticClass:"freeze_btn"},[s("el-button",{attrs:{type:"danger",disabled:-1==e.state},on:{click:e.freeze}},[e._v(e._s(e.$t("storage.freeze")))]),e._v(" "),s("el-button",{attrs:{type:"primary",disabled:-1!=e.state},on:{click:e.unfreeze}},[e._v(e._s(e.$t("storage.unfreeze")))])],1)])],1)},staticRenderFns:[]};var n={data:function(){return{freezelistdialog:!1,title:"",freezelist:[],order_id:""}},methods:{stateFormatter:function(e){return e.state?"冻结":"解冻"},getFreezelist:function(e){var t=this;this.order_id=e,this.title=this.$t("storage.order_code")+":"+e,Object(o.q)({order_id:e}).then(function(e){e.result?e.mate_list.length?(t.freezelist=e.mate_list,t.freezelistdialog=!0):t.$message({showClose:!0,message:t.$t("common.nodata"),type:"warning"}):t.$message({showClose:!0,message:e.msg,type:"error"})})},orderFreeze:function(){var e=this;Object(o.h)({order_id:this.order_id,op_type:0}).then(function(t){t.result?(e.freezelistdialog=!1,e.$message({showClose:!0,message:e.$t("storage.freezesuccess"),type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})})},orderUnfreeze:function(){var e=this;Object(o.h)({order_id:this.order_id,op_type:1}).then(function(t){t.result?(e.freezelistdialog=!1,e.$message({showClose:!0,message:e.$t("storage.unfreezesuccess"),type:"success"})):e.$message({showClose:!0,message:t.msg,type:"error"})})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-dialog",{attrs:{title:e.title,width:"50%",visible:e.freezelistdialog},on:{"update:visible":function(t){e.freezelistdialog=t}}},[s("el-table",{attrs:{"header-cell-style":{background:"#DFEBF9",color:"#606266"},data:e.freezelist,"empty-text":e.$t("common.nodata"),height:"260px",border:""}},[s("el-table-column",{attrs:{prop:"part_num",label:e.$t("storage.part_num")}}),e._v(" "),s("el-table-column",{attrs:{prop:"label_code",label:e.$t("storage.label_code")}}),e._v(" "),s("el-table-column",{attrs:{prop:"quantity",label:e.$t("storage.quantity")}}),e._v(" "),s("el-table-column",{attrs:{prop:"state",formatter:e.stateFormatter,label:e.$t("storage.state")}})],1),e._v(" "),s("div",{staticClass:"freeze_btn"},[s("el-button",{attrs:{type:"danger"},on:{click:e.orderFreeze}},[e._v(e._s(e.$t("storage.freeze")))]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.orderUnfreeze}},[e._v(e._s(e.$t("storage.unfreeze")))])],1)],1)],1)},staticRenderFns:[]};var d={components:{VFreezestate:s("VU/8")(l,i,!1,function(e){s("I/XI")},null,null).exports,VFreezelist:s("VU/8")(n,c,!1,function(e){s("xpcT")},"data-v-3cba97df",null).exports},data:function(){return{label_code:"",order_code:""}},methods:{searchFreeze:function(){this.$refs.freezestate.getFreezeState(this.label_code)},searchOrderCode:function(){this.$refs.freezelist.getFreezelist(this.order_code)}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"update_div"},[s("span",{staticClass:"freeze_update_title"},[e._v(e._s(e.$t("storage.freezetitle")))]),e._v(" "),s("el-divider"),e._v(" "),s("div",{staticClass:"update_num"},[s("span",{staticClass:"freeze_title"},[e._v(e._s(e.$t("storage.label_code")))]),e._v(" "),s("el-input",{attrs:{clearable:""},model:{value:e.label_code,callback:function(t){e.label_code=t},expression:"label_code"}})],1),e._v(" "),s("div",{staticClass:"update_btn"},[s("el-button",{attrs:{type:"primary"},on:{click:e.searchFreeze}},[e._v(e._s(e.$t("common.search")))])],1)],1),e._v(" "),s("div",{staticClass:"update_div"},[s("span",{staticClass:"freeze_update_title"},[e._v(e._s(e.$t("storage.orderFreezetitle")))]),e._v(" "),s("el-divider"),e._v(" "),s("div",{staticClass:"update_num"},[s("span",{staticClass:"freeze_title"},[e._v(e._s(e.$t("storage.order_code")))]),e._v(" "),s("el-input",{attrs:{clearable:""},model:{value:e.order_code,callback:function(t){e.order_code=t},expression:"order_code"}})],1),e._v(" "),s("div",{staticClass:"update_btn"},[s("el-button",{attrs:{type:"primary"},on:{click:e.searchOrderCode}},[e._v(e._s(e.$t("common.search")))])],1),e._v(" "),s("v-freezestate",{ref:"freezestate"}),e._v(" "),s("v-freezelist",{ref:"freezelist",attrs:{orderCode:e.order_code}})],1)])},staticRenderFns:[]};var u=s("VU/8")(d,_,!1,function(e){s("8iXA")},"data-v-0f13747d",null);t.default=u.exports},xpcT:function(e,t){}});
//# sourceMappingURL=11.2fa6b84751cc58906475.js.map