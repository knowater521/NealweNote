(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-008c6a30"],{"08ef":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[n("div",{staticStyle:{"margin-left":"5%","margin-right":"5%"}},[n("el-row",[n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{prop:"title"}},[n("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[t._v("\n            "+t._s("标签为："+this.label)+"\n          ")])],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"20px"}},[n("froala",{attrs:{id:"edit",config:this.froalaConfig},model:{value:t.froalaContent,callback:function(e){t.froalaContent=e},expression:"froalaContent"}})],1)],1)],1)]),t._v(" "),n("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[n("back-to-top",{attrs:{"visibility-height":0,"back-position":50,"transition-name":"fade"}})],1),t._v(" "),n("el-tooltip",{attrs:{placement:"top",content:"提交"}},[n("transition",{attrs:{name:"transitionName2"}},[n("div",{staticClass:"back-to-ceiling",style:t.SubmitButtonStyle,on:{click:function(e){return t.submitForm(!0)}}},[n("svg",{staticClass:"icon",attrs:{t:"1574156372597",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5584",width:"16px",height:"16px"}},[n("path",{attrs:{d:"M977.355076 560.097671c-25.598614 0-46.589477 19.454947-46.589477 43.517643l-6.143667 336.365786H93.690927V83.451481h373.227789c24.574669 0 44.541588-18.431002 44.541588-41.469754C511.460304 18.431002 491.493386 0 466.918716 0H33.278198C24.574669 0 15.871141 3.071834 9.727473 7.679584 3.583806 12.799307 0 19.966919 0 27.134531v970.187464c0 7.167612 3.583806 14.335224 9.727473 18.942974 6.143667 5.119723 14.847196 8.191556 23.550725 7.679584h951.24449c8.703529 0 16.895085-3.071834 23.038753-7.679584 6.143667-5.119723 9.727473-11.775362 9.727473-18.942974L1023.944553 604.127287c0-24.574669-20.990863-44.029616-46.589477-44.029616zM320.494645 453.095465c-11.26339-12.799307-30.718337-13.823251-43.517643-2.559862s-13.823251 30.718337-2.559862 43.517644L471.014495 716.761187c5.631695 6.65564 14.335224 10.239446 23.038752 10.239446h1.023945c9.215501 0 17.407057-4.60775 23.038752-11.775362l376.299623-478.182107c10.239446-13.311279 8.191556-32.766226-5.119722-43.005671s-32.766226-8.191556-43.005672 5.119723l-353.260871 449.511659-172.534657-195.57341z","p-id":"5585",fill:"#2c2c2c"}})])])])],1)],1)},o=[],a=(n("7f7f"),n("f419")),s=n.n(a),l=n("8256"),r=n("70a2"),c=n("1aba"),u=n("b804"),d=n("61f7"),h=n("2423"),p=n("828d"),f=n("62f2"),m=n("4482"),g=n("b1fc"),b=n.n(g),_=n("2c65"),C=n("0625");b.a.DefineIcon("alert",{NAME:"info",SVG_KEY:"help"}),b.a.RegisterCommand("alert",{title:"Hello",focus:!1,undo:!1,refreshAfterCallback:!1,callback:function(){alert("Hello!")}});var v={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},w={name:"EditArticle",components:{Tinymce:l["a"],MDinput:c["a"],Upload:r["a"],Sticky:u["a"],Warning:f["a"],CommentDropdown:m["a"],PlatformDropdown:m["b"],SourceUrlDropdown:m["c"],ElDragSelect:_["a"],tree:s.a,BackToTop:C["a"]},data:function(){var t=this,e=function(e,n,i){""===n?(t.$message({message:e.field+"为必传项",type:"error"}),i(new Error(e.field+"为必传项"))):i()},n=function(e,n,i){n?Object(d["d"])(n)?i():(t.$message({message:"外链url填写不正确",type:"error"}),i(new Error("外链url填写不正确"))):i()};return{leave:!1,editCheckId:null,SubmitButtonStyle:{right:"1.5%",bottom:"130px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"},timer:null,article:"",fullscreenLoading:!1,value:["Apple","Banana","Orange"],options:[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Pear",label:"Pear"},{value:"Strawberry",label:"Strawberry"}],postForm:Object.assign({},v),loading:!1,userListOptions:[],rules:{image_uri:[{validator:e}],source_uri:[{validator:n,trigger:"blur"}]},tempRoute:{},froalaConfig:{toolbarButtons:{moreText:{buttons:["bold","italic","underline","fontSize","textColor","backgroundColor","strikeThrough","subscript","superscript","fontFamily","inlineClass","inlineStyle","clearFormatting"],buttonsVisible:6},moreParagraph:{buttons:["formatOL","formatUL","alignJustify","paragraphStyle","alignLeft","alignCenter","alignRight","lineHeight","outdent","indent","quote"],buttonsVisible:6},moreRich:{buttons:["insertLink","insertImage","insertVideo","insertTable","emoticons","fontAwesome","specialCharacters","embedly","insertFile","insertHR"],buttonsVisible:2},moreMisc:{buttons:["undo","redo","fullscreen","print","getPDF","spellChecker","selectAll","html","help"],buttonsVisible:3}},placeholderText:"Start typing something...",heightMin:"900",language:"zh_cn",imageUploadURL:"/api/note/upload/",fileUploadURL:"/api/note/upload/",quickInsertEnabled:!1,toolbarVisibleWithoutSelection:!0,disableRightClick:!0,colorsHEXInput:!1,toolbarSticky:!0,zIndex:2,events:{"froalaEditor.initialized":function(){console.log("initialized")}}},title:"",label:"",froalaContent:"Please Wait For Loading...",froalaContent_length:0}},watch:{froalaContent:{handler:function(t,e){console.log("this.froalaContent_length: "+this.froalaContent_length),this.froalaContent_length=this.froalaContent_length+1,this.froalaContent_length>=3&&(console.log("auto submitForm"),this.froalaContent_length=0,this.submitForm(!1))},deep:!0}},computed:{contentShortLength:function(){return this.postForm.content_short.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},created:function(){this.editCheckId=this.$route.params&&this.$route.params.id,this.tempRoute=Object.assign({},this.$route),this.get_title(),this.get_label(),this.get_note_content()},methods:{downloadPDF:function(){var t=this;this.fullscreenLoading=!0,setTimeout((function(){t.fullscreenLoading=!1,t.$nextTick((function(){window.print()}))}),3e3)},get_title:function(){var t=this;this.url="/api/note/get_title/",this.$axios.post(this.url,{note_id:this.editCheckId}).then((function(e){t.title=e.data}))},get_label:function(){var t=this;this.url="/api/note/get_label/",this.$axios.post(this.url,{note_id:this.editCheckId}).then((function(e){t.label=e.data,t.setTagsViewTitle(t.label)}))},get_note_content:function(){var t=this;this.url="/api/note/get_note_content_by_id/",this.$axios.post(this.url,{note_id:this.editCheckId}).then((function(e){""===e.data?t.froalaContent="-":t.froalaContent=e.data}))},nodeClick:function(t){console.log(JSON.parse(JSON.stringify(t)))},contextmenuClick:function(t){console.log(t),console.log("触发了自定义的contextmenuClick事件")},expandClick:function(t){console.log(JSON.parse(JSON.stringify(t))),t.isExpand&&t.hasOwnProperty("children")&&(t.loadNode=1,setTimeout((function(){t.loadNode=2,t.isFolder=!t.isFolder,t.children.push({id:+new Date,name:"动态加载节点1",path:"",clickNode:!1,isFolder:!1,isExpand:!1,loadNode:0,children:[{id:+new Date+1,name:"动态加载末节点",path:"",clickNode:!1,isExpand:!1,isFolder:!1,loadNode:0}]})}),1e3))},fetchData:function(t){var e=this;Object(h["a"])(t).then((function(t){e.postForm=t.data,e.postForm.title+="   Article Id:".concat(e.postForm.id),e.postForm.content_short+="   Article Id:".concat(e.postForm.id),e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(t){t.length>10&&(t=t.substring(0,9)+".."),console.log("setTagsViewTitle:"+t);var e=Object.assign({},this.tempRoute,{title:t});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.$route.id)},submitForm:function(t){var e=this;this.url="/api/note/saveNodeContent/",""!==this.froalaContent?this.$axios.post(this.url,{note_tree_label:this.label,note_title:this.title,note_content:this.froalaContent,note_id:this.editCheckId}).then((function(n){t&&e.$notify({title:"成功",message:"发布文章成功",type:"success",duration:2e3})})).catch((function(t){e.$notify({title:"发生错误\t"+t.message,message:t.code,type:"error",duration:2e3})})):this.$notify({title:"失败",message:"文章内容不得为空，请刷新重试！",type:"warning",duration:2e3})},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?(this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}),this.postForm.status="draft"):this.$message({message:"请填写必要的标题和内容",type:"warning"})},getRemoteUserList:function(t){var e=this;Object(p["a"])(t).then((function(t){t.data.items&&(e.userListOptions=t.data.items.map((function(t){return t.name})))}))},autoUpdate:function(){var t=this;this.timer=setInterval((function(){t.url="/api/note/saveNodeContent/",""!==t.froalaContent?t.$axios.post(t.url,{note_tree_label:t.label,note_title:t.title,note_content:t.froalaContent,note_id:t.editCheckId}).then((function(t){})):t.$notify({title:"自动更新失败",message:"文章内容不得为空，请刷新重试！",type:"warning",duration:2e3})}),1e3)}},mounted:function(){console.log("mount")}},y=w,k=(n("8be2"),n("5276"),n("7239"),n("2877")),x=Object(k["a"])(y,i,o,!1,null,"bc3d7400",null);e["default"]=x.exports},5276:function(t,e,n){"use strict";var i=n("6c1b"),o=n.n(i);o.a},"6c1b":function(t,e,n){},7239:function(t,e,n){"use strict";var i=n("e1e9"),o=n.n(i);o.a},"8be2":function(t,e,n){"use strict";var i=n("ea9a"),o=n.n(i);o.a},e1e9:function(t,e,n){},ea9a:function(t,e,n){}}]);