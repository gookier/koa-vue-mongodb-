webpackJsonp([22],{"E/Dd":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),o=s("NYxO"),r=s("fF8F"),_=s("qrgr"),l={data:function(){return{row:this.$store.state.row,ifhidden:!0,order_id:"",warehouse_category_id:0,warehouse_name_id:0,categoryTypeList:[{category_name:"所有",id:0}],warehouselist:[{warehouse_name:"所有",id:0}]}},mounted:function(){this.getCategoryType()},methods:i()({},Object(o.b)(["pdaColor"]),{colorThree:function(t){this.pdaColor({pdacolor:3})},colorFour:function(t){this.pdaColor({pdacolor:4})},colorFive:function(t){this.pdaColor({pdacolor:5})},colorSix:function(t){this.pdaColor({pdacolor:6})},goBack:function(){this.$router.go(-1)},getCategoryType:function(){var t=this;Object(_.i)({}).then(function(e){e.result&&(t.categoryTypeList=t.categoryTypeList.concat(e.data_list))})},getWarehouseList:function(){var t=this;this.warehouselist=[{warehouse_name:"所有",id:0}],this.warehouse_name_id=0,Object(_.j)({warehouse_category_id:this.warehouse_category_id}).then(function(e){e.result&&(t.warehouselist=t.warehouselist.concat(e.data))})},categoryTypeChange:function(){this.warehouse_name_id=0,this.getWarehouseList()},focus:function(){this.ifhidden=!1},blur:function(){this.ifhidden=!0},takeOut:function(){var t=this,e={position:this.row.position,shelf_id:this.row.shelf_id,color:this.$store.state.pdacolor,order_id:this.order_id,warehouse_name_id:this.warehouse_name_id,warehouse_category_id:this.warehouse_category_id};Object(r.m)(e).then(function(e){e.result?(t.$message({showClose:!0,message:t.$t("pda.takeout_success"),type:"success"}),t.$router.go(-1)):t.$message({showClose:!0,message:t.$t("pda.takeout_failed"),type:"error"})})}})},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pdawrap"},[s("el-page-header",{attrs:{title:"",content:t.$t("pda.detail")},on:{back:t.goBack}}),t._v(" "),s("div",{staticClass:"pdalight"},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"light_title"},[s("span",[t._v(t._s(t.$t("storage.lights_tip")))])]),t._v(" "),s("div",{staticClass:"light_list"},[s("span",{class:3==this.$store.state.pdacolor?"light_three_active":"light_three",on:{click:function(e){return t.colorThree()}}}),t._v(" "),s("span",{class:4==this.$store.state.pdacolor?"light_four_active":"light_four",on:{click:function(e){return t.colorFour()}}}),t._v(" "),s("span",{class:5==this.$store.state.pdacolor?"light_five_active":"light_five",on:{click:function(e){return t.colorFive()}}}),t._v(" "),s("span",{class:6==this.$store.state.pdacolor?"light_six_active":"light_six",on:{click:function(e){return t.colorSix()}}})])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ifhidden,expression:"ifhidden"}],staticClass:"table_div"},[s("table",{staticClass:"labeltable"},[s("tr",{staticClass:"label_tr"},[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.label_code")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.label_code))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.quantity")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.quantity))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.part_num")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.part_num))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.customer_name")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.customer))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.supplier_name")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.supplier_name))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.shelf_id")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.shelf_id))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.position")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.position))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.description")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.description))])]),t._v(" "),s("tr",[s("td",{staticClass:"title_td"},[t._v(t._s(t.$t("storage.mfg_date")))]),t._v(" "),s("td",{staticClass:"content_td"},[t._v(t._s(this.row.mfg_date))])])])]),t._v(" "),s("div",{staticClass:"orderid_div"},[s("el-input",{attrs:{placeholder:this.$t("pda.ordertip"),clearable:""},on:{focus:t.focus,blur:t.blur},model:{value:t.order_id,callback:function(e){t.order_id=e},expression:"order_id"}})],1),t._v(" "),s("div",{staticClass:"choose_div"},[s("span",{staticClass:"searchout_title"},[t._v(t._s(t.$t("storage.category_name")))]),t._v(" "),[s("el-select",{attrs:{"value-key":"id"},on:{change:t.categoryTypeChange},model:{value:t.warehouse_category_id,callback:function(e){t.warehouse_category_id=e},expression:"warehouse_category_id"}},t._l(t.categoryTypeList,function(t){return s("el-option",{key:t.id,attrs:{label:t.category_name,value:t.id}})}),1)]],2),t._v(" "),s("div",{staticClass:"choose_div"},[s("span",{staticClass:"searchout_title"},[t._v(t._s(t.$t("storage.warehouse_name")))]),t._v(" "),[s("el-select",{attrs:{"value-key":"id"},model:{value:t.warehouse_name_id,callback:function(e){t.warehouse_name_id=e},expression:"warehouse_name_id"}},t._l(t.warehouselist,function(t){return s("el-option",{key:t.id,attrs:{label:t.warehouse_name,value:t.id}})}),1)]],2),t._v(" "),s("div",{staticClass:"orderid_div"},[s("el-button",{attrs:{type:"primary",disabled:!!this.row.state},on:{click:t.takeOut}},[t._v(t._s(t.$t("pda.take_out")))])],1)],1)},staticRenderFns:[]};var n=s("VU/8")(l,c,!1,function(t){s("saos")},null,null);e.default=n.exports},saos:function(t,e){}});
//# sourceMappingURL=22.0b4e671f919e0ba0c663.js.map