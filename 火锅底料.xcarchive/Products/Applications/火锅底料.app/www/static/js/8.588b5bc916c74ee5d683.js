webpackJsonp([8],{ITXt:function(t,e){},xF65:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"systemMessage",data:function(){return{processType:{1:"违反《中华人民共和国宪法》等(一)中规定的法律法规的内容",2:"侮辱或诽谤他人或特定群体的内容",3:"侵犯他人隐私的内容",4:"侵犯他人知识产权、商业机密的内容",5:"散布谣言和恐慌，可能会误导他人的内容",6:"含有任何淫秽、色情、性暗示、不当暴露的内容",7:"鼓励、教唆他人实施违法犯罪、暴力、非法集会的内容",8:"含有隐喻、容易引起歧义的缩写、代名词、特定表述等对于政治等敏感问题进行引导、讨论",9:"含有隐喻、容易引起歧义的缩写、代名词、特定表述等对于政治等敏感问题进行引导、讨论",10:"含有自杀/自残倾向性的内容",11:"干扰社区正常运营，大量重复内容垃圾发帖等",12:"引起他人不适的内容",13:"经本人要求删除涉及个人隐私、过多细节或对本人生活造成不良影响的本人发帖"},deleteMessage:[],processMessage:[]}},created:function(){sessionStorage.getItem("SystemMessageNumTemp")&&localStorage.setItem("SystemMessageNum",sessionStorage.getItem("SystemMessageNumTemp"));var t=this;t.$request("get","/user/getSystemMessage",{},{}).then(function(e){e=e.data,t.processMessage=e.processMessage,t.deleteMessage=e.deleteMessage}).catch(function(e){t.showSnackbar(e)})},methods:{rightSlide:function(){this.$router.go(-1)}},directives:{touch:s("0T5Q").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"d-flex flex-column px-0",staticStyle:{"margin-top":"env(safe-area-inset-top)"},attrs:{app:""}},[s("v-app-bar",{staticClass:"top",staticStyle:{"margin-top":"env(safe-area-inset-top)"},attrs:{fixed:"",app:"",color:"white"}},[s("v-btn",{staticClass:"mt-2",attrs:{fab:"",text:"",small:""},on:{click:function(e){return t.$router.back(-1)}}},[s("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-left")])],1),t._v(" "),s("span",{staticClass:"text_middle mt-2"},[t._v("系统消息")])],1),t._v(" "),s("div",{directives:[{name:"touch",rawName:"v-touch:swiperight",value:t.rightSlide,expression:"rightSlide",arg:"swiperight"}],staticClass:"container_systemMessage"},[s("v-tabs",{attrs:{color:"primary",grow:""}},[s("v-tab",[t._v("删除消息")]),t._v(" "),s("v-tab",[t._v("禁言消息")]),t._v(" "),s("v-tab-item",[0==t.deleteMessage.length?s("div",{staticClass:"d-flex justify-center mt-2"},[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-emoticon-cool-outline")]),t._v(" "),s("span",{staticClass:"ml-1"},[t._v("暂无消息")])],1):s("v-list",t._l(t.deleteMessage,function(e,a){return s("div",{key:a},[s("v-list-item",[s("v-list-item-avatar",[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-message-text")])],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",[t._v("系统消息 "+t._s(e.type)+"处理#"+t._s(e.id))]),t._v(" "),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"line_one grey--text text_small--"},[t._v('您发表的"'+t._s(e.content)+'"')]),t._v(" "),s("span",{staticClass:"grey--text text_small--"},[t._v("因为违反社区规范【五."+t._s(e.reason)+"】：发表“"+t._s(t.processType[e.reason])+"”被删除")])])],1),t._v(" "),s("v-list-item-action",[s("v-list-item-action-text",[t._v(t._s(e.add_time.slice(5,10)))])],1)],1),t._v(" "),s("v-divider")],1)}),0)],1),t._v(" "),s("v-tab-item",[0==t.processMessage.length?s("div",{staticClass:"d-flex justify-center mt-2"},[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-emoticon-cool-outline")]),t._v(" "),s("span",{staticClass:"ml-1"},[t._v("暂无消息")])],1):t._e(),t._v(" "),s("v-list",t._l(t.processMessage,function(e,a){return s("div",{key:a},[s("v-list-item",[s("v-list-item-avatar",[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-message-text")])],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",[t._v("系统消息 处理#"+t._s(e.id))]),t._v(" "),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"grey--text text_small--"},[t._v("因为累计删帖删评论,您将被禁言到"+t._s(e.end_time.slice(0,16).replace("T"," ")))])])],1),t._v(" "),s("v-list-item-action",[s("v-list-item-action-text",[t._v(t._s(e.add_time.slice(5,10)))])],1)],1),t._v(" "),s("v-divider")],1)}),0)],1)],1)],1)],1)},staticRenderFns:[]};var r=s("C7Lr")(a,i,!1,function(t){s("ITXt")},null,null);e.default=r.exports}});
//# sourceMappingURL=8.588b5bc916c74ee5d683.js.map