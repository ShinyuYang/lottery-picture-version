(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lottery-edit"],{"1a65":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniForms:n("807d").default,uniFormsItem:n("ed95").default,uniEasyinput:n("141f").default,uniFilePicker:n("7251").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{model:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[n("uni-forms-item",{attrs:{name:"title",label:"名称",required:!0}},[n("uni-easyinput",{attrs:{placeholder:"输入奖品名称"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),n("uni-forms-item",{attrs:{name:"photo",label:"图片",required:!0}},[n("uni-file-picker",{attrs:{"file-mediatype":"image","file-extname":"jpg,png","return-type":"object"},model:{value:t.formData.photo,callback:function(e){t.$set(t.formData,"photo",e)},expression:"formData.photo"}})],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},o=[]},"5dee":function(t,e,n){"use strict";n.r(e);var a=n("9774"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},9774:function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("c975"),n("b64b"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=n("f17c"),r=t.database(),u="lottery";function f(t){var e={};for(var n in o.validator)t.indexOf(n)>-1&&(e[n]=o.validator[n]);return e}var d={data:function(){var t={title:"",photo:null};return{formData:t,formOptions:{},rules:(0,i.default)({},f(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return r.collection(u).doc(this.formDataId).update(t).then((function(t){uni.showToast({icon:"none",title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),r.collection(u).doc(t).field("title,photo").get().then((function(t){var n=t.result.data[0];n&&(e.formData=n)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=d}).call(this,n("a9ff")["default"])},a786:function(t,e,n){"use strict";var a=n("d060"),i=n.n(a);i.a},c921:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-container[data-v-1dbefff4]{padding:15px}.uni-input-border[data-v-1dbefff4],\n.uni-textarea-border[data-v-1dbefff4]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-1dbefff4]{padding:0 10px;height:35px}.uni-textarea-border[data-v-1dbefff4]{padding:10px;height:80px}.uni-button-group[data-v-1dbefff4]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-1dbefff4]{width:184px}",""]),t.exports=e},cbb2:function(t,e,n){"use strict";n.r(e);var a=n("1a65"),i=n("5dee");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a786");var r,u=n("f0c5"),f=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"1dbefff4",null,!1,a["a"],r);e["default"]=f.exports},d060:function(t,e,n){var a=n("c921");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f41f4762",a,!0,{sourceMap:!1,shadowMode:!1})}}]);