webpackJsonp([12],{MPDh:function(e,t){},RshO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("qrgr"),o={props:["title"],data:function(){return{addVisible:!1,warehouse_name:"",shelflist:[],checkedList:[],iferror:!1,categoryTypeList:[],warehouse_category_id:""}},mounted:function(){this.getUnboundShelfList()},methods:{getUnboundShelfList:function(){var e=this;Object(i.m)({}).then(function(t){t.result&&(e.shelflist=t.data)})},getCategoryType:function(){var e=this;Object(i.i)({}).then(function(t){t.result&&(e.categoryTypeList=t.data_list)})},openDialog:function(e){this.addVisible=!0,this.getCategoryType()},reset:function(){this.warehouse_name="",this.checkedList=[],this.iferror=!1},cancel:function(){this.addVisible=!1,this.iferror=!1,this.warehouse_name="",this.checkedList=[]},save:function(){var e=this;if(!this.warehouse_name||!this.checkedList.length||!this.warehouse_category_id)return this.iferror=!0,!1;Object(i.a)({warehouse_name:this.warehouse_name,shelf_list:this.checkedList,warehouse_category_id:this.warehouse_category_id}).then(function(t){t.result?(e.$emit("getwarehouseList"),e.addVisible=!1):e.$message({showClose:!0,message:t.msg,type:"error"})})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-dialog",{attrs:{title:e.title,visible:e.addVisible,width:"446px"},on:{"update:visible":function(t){e.addVisible=t},close:function(t){return e.reset()}}},[s("div",{staticClass:"small_form shelfconfig_small"},[s("el-form",{ref:"userform",attrs:{"label-width":"100px"}},[s("el-form-item",{attrs:{label:e.$t("warehouseconfig.name"),prop:"add_user_name"}},[s("el-input",{attrs:{placeholder:e.$t("warehouseconfig.name")},model:{value:e.warehouse_name,callback:function(t){e.warehouse_name=t},expression:"warehouse_name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("storage.category_name")}},[s("el-select",{attrs:{"value-key":"id",placeholder:e.$t("storage.categoryholder")},model:{value:e.warehouse_category_id,callback:function(t){e.warehouse_category_id=t},expression:"warehouse_category_id"}},e._l(e.categoryTypeList,function(e){return s("el-option",{key:e.id,attrs:{label:e.category_name,value:e.id}})}),1)],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("warehouseconfig.warehouselist")}},[s("el-checkbox-group",{model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}},e._l(e.shelflist,function(t){return s("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1)],1),e._v(" "),e.iferror?s("div",{staticClass:"kutips"},[e._v(e._s(e.$t("warehouseconfig.nulltips")))]):e._e(),e._v(" "),s("el-form-item",[s("el-button",{on:{click:function(t){return e.cancel()}}},[e._v(e._s(e.$t("common.cancel")))]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v(e._s(e.$t("common.save")))])],1)],1)],1)])],1)},staticRenderFns:[]};var r=s("VU/8")(o,a,!1,function(e){s("cO5y")},null,null).exports,n=s("pPmT"),l={components:{VEdit:r},data:function(){return{loading:!0,editVisible:!1,permissionFlag:Object(n.e)(),warehouse_list:[],searchholder:this.$t("user.searchholder"),title:"",warehouseform:{warehouse_name:"",warehouse_name_id:""}}},created:function(){},mounted:function(){this.getwarehouseList()},methods:{getwarehouseList:function(){var e=this;Object(i.q)({}).then(function(t){t.result?e.warehouse_list=t.data_list:e.$message({showClose:!0,message:t.msg,type:"error"})})},Add:function(){this.title=this.$t("warehouseconfig.addtitle"),this.$refs.edit.openDialog()},editWarehouse:function(e){this.editVisible=!0,this.title=this.$t("warehouseconfig.edittitle"),this.warehouseform.warehouse_name_id=e.warehouse_name_id,this.warehouseform.warehouse_name=e.warehouse_name},deleteWarehouse:function(e){var t=this;this.$confirm(this.$t("user.deltips"),this.$t("user.tips"),{confirmButtonText:this.$t("common.sure"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then(function(){Object(i.e)({warehouse_name:e.warehouse_name,warehouse_name_id:e.warehouse_name_id,warehouse_category_id:e.warehouse_category_id,warehouse_category_name:e.warehouse_category_name}).then(function(e){e.result&&t.getwarehouseList()})}).catch(function(){})},editCancel:function(){this.editVisible=!1},editSave:function(){var e=this;Object(i.p)(this.warehouseform).then(function(t){t.result?(e.editVisible=!1,e.$message({showClose:!0,message:"库位更新成功",type:"success"}),e.getwarehouseList()):e.$message({showClose:!0,message:t.msg,type:"error"})})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"warehouseheader"},[s("el-button",{attrs:{type:"success"},on:{click:e.Add}},[e._v(e._s(e.$t("warehouseconfig.add")))])],1),e._v(" "),s("v-edit",{ref:"edit",attrs:{title:e.title},on:{getwarehouseList:e.getwarehouseList}}),e._v(" "),[s("el-table",{attrs:{"header-cell-style":{background:"#DFEBF9",color:"#606266"},loading:e.loading,data:e.warehouse_list,"empty-text":e.$t("common.nodata"),border:""}},[s("el-table-column",{attrs:{label:e.$t("common.No"),type:"index",width:"50"}}),e._v(" "),s("el-table-column",{attrs:{prop:"warehouse_category_name",label:"库位类别"}}),e._v(" "),s("el-table-column",{attrs:{prop:"warehouse_name",label:"库位"}}),e._v(" "),s("el-table-column",{attrs:{prop:"shelf_list",label:"料架"}}),e._v(" "),s("el-table-column",{attrs:{prop:"",label:e.$t("common.operation"),width:"158"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",size:"mini",disabled:e.permissionFlag},on:{click:function(s){return e.editWarehouse(t.row)}}},[e._v(e._s(e.$t("warehouseconfig.edit")))]),e._v(" "),s("el-button",{attrs:{type:"danger",size:"mini",disabled:e.permissionFlag},on:{click:function(s){return e.deleteWarehouse(t.row)}}},[e._v(e._s(e.$t("common.delete")))])]}}])})],1)],e._v(" "),s("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"446px"},on:{"update:visible":function(t){e.editVisible=t}}},[s("div",{staticClass:"small_form shelfconfig_small"},[s("el-form",{ref:"userform",attrs:{"label-width":"100px"}},[s("el-form-item",{attrs:{label:e.$t("warehouseconfig.name"),prop:"add_user_name"}},[s("el-input",{model:{value:e.warehouseform.warehouse_name,callback:function(t){e.$set(e.warehouseform,"warehouse_name",t)},expression:"warehouseform.warehouse_name"}})],1),e._v(" "),s("el-form-item",[s("el-button",{on:{click:e.editCancel}},[e._v(e._s(e.$t("common.cancel")))]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.editSave}},[e._v(e._s(e.$t("common.save")))])],1)],1)],1)])],2)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(e){s("MPDh")},null,null);t.default=u.exports},cO5y:function(e,t){}});
//# sourceMappingURL=12.290d3faf35fe5e63049e.js.map