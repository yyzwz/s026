"use strict";(self["webpackChunks026"]=self["webpackChunks026"]||[]).push([[4042],{4042:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("详情")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"档案类型名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"父id",prop:"parentId"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),t("FormItem",{attrs:{label:"是否为父节点",prop:"isParent"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.isParent,callback:function(t){e.$set(e.form,"isParent",t)},expression:"form.isParent"}})],1),t("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",readonly:""},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}})],1),t("FormItem",{attrs:{label:"是否启用",prop:"status"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),t("FormItem",{attrs:{label:"父节点名称",prop:"parentTitle"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.parentTitle,callback:function(t){e.$set(e.form,"parentTitle",t)},expression:"form.parentTitle"}})],1),t("FormItem",{attrs:{label:"是否选择",prop:"selected"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.selected,callback:function(t){e.$set(e.form,"selected",t)},expression:"form.selected"}})],1),t("FormItem",{attrs:{label:"子部门",prop:"children"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.children,callback:function(t){e.$set(e.form,"children",t)},expression:"form.children"}})],1),t("FormItem",{attrs:{label:"扩展",prop:"expand"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),t("FormItem",{attrs:{label:"档案编号前缀",prop:"numberHeader"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.numberHeader,callback:function(t){e.$set(e.form,"numberHeader",t)},expression:"form.numberHeader"}})],1),t("FormItem",{attrs:{label:"入库员工",prop:"filerName"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.filerName,callback:function(t){e.$set(e.form,"filerName",t)},expression:"form.filerName"}})],1),t("FormItem",{attrs:{label:"入库员工工号",prop:"filerNumber"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.filerNumber,callback:function(t){e.$set(e.form,"filerNumber",t)},expression:"form.filerNumber"}})],1),t("FormItem",{attrs:{label:"入库时间",prop:"filerTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.filerTime,callback:function(t){e.$set(e.form,"filerTime",t)},expression:"form.filerTime"}})],1),t("FormItem",{attrs:{label:"档案受控等级",prop:"conLevel"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.conLevel,callback:function(t){e.$set(e.form,"conLevel",t)},expression:"form.conLevel"}})],1),t("FormItem",{attrs:{label:"档案保存时间",prop:"saveTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.saveTime,callback:function(t){e.$set(e.form,"saveTime",t)},expression:"form.saveTime"}})],1),t("FormItem",{attrs:{label:"封存状态",prop:"hasBan"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.hasBan,callback:function(t){e.$set(e.form,"hasBan",t)},expression:"form.hasBan"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},s=[],l=r(3971);const o={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",parentId:"",isParent:"",sortOrder:0,status:"",parentTitle:"",selected:"",children:"",expand:"",numberHeader:"",filerName:"",filerNumber:"",filerTime:"",conLevel:"",saveTime:"",hasBan:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.sU)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},i=o;var n=r(1001),m=(0,n.Z)(i,a,s,!1,null,null,null);const c=m.exports},3971:(e,t,r)=>{r.d(t,{W3:()=>l,g:()=>i,pR:()=>s,sU:()=>o});var a=r(7184);const s=e=>(0,a.A_)("/arCommonArchiveMore/getByPage",e),l=e=>(0,a.j0)("/arCommonArchiveMore/insert",e),o=e=>(0,a.j0)("/arCommonArchiveMore/update",e),i=e=>(0,a.j0)("/arCommonArchiveMore/delByIds",e)}}]);