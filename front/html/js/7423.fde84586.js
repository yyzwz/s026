"use strict";(self["webpackChunks026"]=self["webpackChunks026"]||[]).push([[7423,9342,4042],{9342:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"档案类型名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"父id",prop:"parentId"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),t("FormItem",{attrs:{label:"是否为父节点(含子节点) 默认false",prop:"isParent"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.isParent,callback:function(t){e.$set(e.form,"isParent",t)},expression:"form.isParent"}})],1),t("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}})],1),t("FormItem",{attrs:{label:"是否启用",prop:"status"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),t("FormItem",{attrs:{label:"父节点名称",prop:"parentTitle"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.parentTitle,callback:function(t){e.$set(e.form,"parentTitle",t)},expression:"form.parentTitle"}})],1),t("FormItem",{attrs:{label:"是否选择",prop:"selected"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.selected,callback:function(t){e.$set(e.form,"selected",t)},expression:"form.selected"}})],1),t("FormItem",{attrs:{label:"子部门",prop:"children"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.children,callback:function(t){e.$set(e.form,"children",t)},expression:"form.children"}})],1),t("FormItem",{attrs:{label:"扩展",prop:"expand"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),t("FormItem",{attrs:{label:"档案编号前缀",prop:"numberHeader"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.numberHeader,callback:function(t){e.$set(e.form,"numberHeader",t)},expression:"form.numberHeader"}})],1),t("FormItem",{attrs:{label:"入库员工",prop:"filerName"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.filerName,callback:function(t){e.$set(e.form,"filerName",t)},expression:"form.filerName"}})],1),t("FormItem",{attrs:{label:"入库员工工号",prop:"filerNumber"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.filerNumber,callback:function(t){e.$set(e.form,"filerNumber",t)},expression:"form.filerNumber"}})],1),t("FormItem",{attrs:{label:"入库时间",prop:"filerTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.filerTime,callback:function(t){e.$set(e.form,"filerTime",t)},expression:"form.filerTime"}})],1),t("FormItem",{attrs:{label:"档案受控等级",prop:"conLevel"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.conLevel,callback:function(t){e.$set(e.form,"conLevel",t)},expression:"form.conLevel"}})],1),t("FormItem",{attrs:{label:"档案保存时间",prop:"saveTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.saveTime,callback:function(t){e.$set(e.form,"saveTime",t)},expression:"form.saveTime"}})],1),t("FormItem",{attrs:{label:"封存状态",prop:"hasBan"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.hasBan,callback:function(t){e.$set(e.form,"hasBan",t)},expression:"form.hasBan"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},s=[],l=a(3971);const i={name:"add",components:{},data(){return{submitLoading:!1,form:{title:"",parentId:"",isParent:"",sortOrder:0,status:"",parentTitle:"",selected:"",children:"",expand:"",numberHeader:"",filerName:"",filerNumber:"",filerTime:"",conLevel:"",saveTime:"",hasBan:""},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.W3)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=i;var n=a(1001),c=(0,n.Z)(o,r,s,!1,null,null,null);const m=c.exports},4042:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("详情")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"档案类型名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"父id",prop:"parentId"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),t("FormItem",{attrs:{label:"是否为父节点",prop:"isParent"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.isParent,callback:function(t){e.$set(e.form,"isParent",t)},expression:"form.isParent"}})],1),t("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",readonly:""},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}})],1),t("FormItem",{attrs:{label:"是否启用",prop:"status"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),t("FormItem",{attrs:{label:"父节点名称",prop:"parentTitle"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.parentTitle,callback:function(t){e.$set(e.form,"parentTitle",t)},expression:"form.parentTitle"}})],1),t("FormItem",{attrs:{label:"是否选择",prop:"selected"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.selected,callback:function(t){e.$set(e.form,"selected",t)},expression:"form.selected"}})],1),t("FormItem",{attrs:{label:"子部门",prop:"children"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.children,callback:function(t){e.$set(e.form,"children",t)},expression:"form.children"}})],1),t("FormItem",{attrs:{label:"扩展",prop:"expand"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),t("FormItem",{attrs:{label:"档案编号前缀",prop:"numberHeader"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.numberHeader,callback:function(t){e.$set(e.form,"numberHeader",t)},expression:"form.numberHeader"}})],1),t("FormItem",{attrs:{label:"入库员工",prop:"filerName"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.filerName,callback:function(t){e.$set(e.form,"filerName",t)},expression:"form.filerName"}})],1),t("FormItem",{attrs:{label:"入库员工工号",prop:"filerNumber"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.filerNumber,callback:function(t){e.$set(e.form,"filerNumber",t)},expression:"form.filerNumber"}})],1),t("FormItem",{attrs:{label:"入库时间",prop:"filerTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.filerTime,callback:function(t){e.$set(e.form,"filerTime",t)},expression:"form.filerTime"}})],1),t("FormItem",{attrs:{label:"档案受控等级",prop:"conLevel"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.conLevel,callback:function(t){e.$set(e.form,"conLevel",t)},expression:"form.conLevel"}})],1),t("FormItem",{attrs:{label:"档案保存时间",prop:"saveTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.saveTime,callback:function(t){e.$set(e.form,"saveTime",t)},expression:"form.saveTime"}})],1),t("FormItem",{attrs:{label:"封存状态",prop:"hasBan"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.hasBan,callback:function(t){e.$set(e.form,"hasBan",t)},expression:"form.hasBan"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},s=[],l=a(3971);const i={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",parentId:"",isParent:"",sortOrder:0,status:"",parentTitle:"",selected:"",children:"",expand:"",numberHeader:"",filerName:"",filerNumber:"",filerTime:"",conLevel:"",saveTime:"",hasBan:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.sU)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=i;var n=a(1001),c=(0,n.Z)(o,r,s,!1,null,null,null);const m=c.exports},7423:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"title"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"档案类型名称",clearable:""},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:""},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},s=[],l=a(3971),i=a(9342),o=a(4042);const n={name:"single-window",components:{add:i["default"],edit:o["default"]},data(){return{tableHeight:0,selected:["选择","序号","档案类型名称","档案编号前缀","入库员工","入库员工工号","入库时间","档案受控等级","档案保存时间","封存状态","创建时间","创建者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"档案类型名称",key:"title",minWidth:120,tooltip:!0,sortable:!1},{title:"档案编号前缀",key:"numberHeader",minWidth:120,tooltip:!0,sortable:!1},{title:"入库员工",key:"filerName",minWidth:120,tooltip:!0,sortable:!1},{title:"入库员工工号",key:"filerNumber",minWidth:120,tooltip:!0,sortable:!1},{title:"入库时间",key:"filerTime",minWidth:120,tooltip:!0,sortable:!1},{title:"档案受控等级",key:"conLevel",minWidth:120,tooltip:!0,sortable:!1},{title:"档案保存时间",key:"saveTime",minWidth:120,tooltip:!0,sortable:!1},{title:"封存状态",key:"hasBan",minWidth:120,tooltip:!0,sortable:!1},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(e,t)=>e("div",[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"详情"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.remove(t.row)}}},"删除")])}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,l.pR)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let r in e)null==e[r]&&(e[r]="");let t=JSON.stringify(e),a=JSON.parse(t);this.formData=a,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 ?",loading:!0,onOk:()=>{(0,l.g)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,l.g)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var a=this.selected[t],r=0;r<this.columns.length;r++)this.columns[r].title==a&&e.push(this.columns[r]);this.columns=e},watch:{selected:function(e){let t=[];for(var a=0;a<this.mycolumns.length;a++){var r=this.mycolumns[a];(void 0==r.title||e.contains(r.title))&&t.push(r)}this.columns=t}}},c=n;var m=a(1001),d=(0,m.Z)(c,r,s,!1,null,null,null);const p=d.exports},3971:(e,t,a)=>{a.d(t,{W3:()=>l,g:()=>o,pR:()=>s,sU:()=>i});var r=a(7184);const s=e=>(0,r.A_)("/arCommonArchiveMore/getByPage",e),l=e=>(0,r.j0)("/arCommonArchiveMore/insert",e),i=e=>(0,r.j0)("/arCommonArchiveMore/update",e),o=e=>(0,r.j0)("/arCommonArchiveMore/delByIds",e)}}]);