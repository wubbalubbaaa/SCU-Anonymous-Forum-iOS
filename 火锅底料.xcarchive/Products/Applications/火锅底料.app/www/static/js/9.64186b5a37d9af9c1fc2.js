webpackJsonp([9],{PqcP:function(t,e){},l0qE:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("lC5x"),o=s.n(a),i=s("IHPB"),l=s.n(i),n=s("J0Oq"),r=s.n(n),c=(s("rVsN"),s("wst3")),v=s("RzMJ");s("CtzY");var _={name:"postsList",components:{MescrollVue:c.a},data:function(){return{bottomDrawer:{showBottomDrawer:!1,chooseIndex:0,dislike_num:0},timestamp:(new Date).getTime(),timer:null,map:v.a,index:0,loadingMessage:"正在加载",mescroll:null,mescrollDown:{callback:this.refreshData,use:!0},mescrollUp:{callback:this.getMorePosts,onScroll:this.onScroll,noMoreSize:3},snackbar:{show:!1,message:"",color:""},items:[],topPosts:[],openWhyFoldedDialog:!1,category:{types:["主干道","校园","社会","情感","娱乐","体育","其他"],selected:0},secretDialog:!1}},created:function(){var t=this;return r()(o.a.mark(function e(){var s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=t,t.$request("get","/forum/getTopPosts",{},{}).then(function(t){s.topPosts=t.data,s.topPosts.map(function(t){return t.top=!0});var e=0,a=[].concat(l()(s.topPosts.keys()));s.timer=setInterval(function(){s.index=a[e%a.length],e++},4e3)}).catch(function(t){s.showSnackbar(t)}),setTimeout(function(){s.secretDialog=!localStorage.getItem("ifused")},1e3);case 3:case"end":return e.stop()}},e,t)}))()},mounted:function(){},methods:{onScroll:function(t,e,s){this.$store.change_scrollY(e),this.$store.change_isUp(s)},mescrollInit:function(t){this.mescroll=t},showBottomDrawer:function(t){this.bottomDrawer.showBottomDrawer=!0,this.bottomDrawer.chooseIndex=t,this.bottomDrawer.dislike_num=this.items[t].dislike_num,console.log(this.bottomDrawer)},timeFormat:function(t){var e=Math.floor(((new Date).getTime()-new Date(t).getTime())/1e3),s=Math.floor(e/3600/24),a=Math.floor(e/3600)%24,o=Math.floor(e/60)%60,i=Math.floor(e%60),l="";if(i>0&&0==o&&0==a&&0==s)l=i+"秒前";else if(o>0&&0==a&&0==s)l=o+"分钟前";else{if(!(a>0&&0==s))return new Date(new Date(t).getTime()+288e5).toJSON().substr(0,16).replace("T"," ");l=a+"小时前"}return l},getShield:function(){try{var t=localStorage.getItem("shieldTag"),e=Number(localStorage.getItem("shieldTagMethod")),s=Number(localStorage.getItem("shieldPostWordMethod")),a=localStorage.getItem("shieldPostWord");return{shieldTag:t,shieldTagMethod:e,shieldPostWord:a,shieldPostWordMethod:s}}catch(o){return{shieldTag:t,shieldTagMethod:e,shieldPostWord:a,shieldPostWordMethod:s}}},getMorePosts:function(t,e){console.log(t),console.log("test");var s=this;s.$request("get","/forum/getPosts",{timeToken:new Date(s.items[s.items.length-1].latest_comment_time).getTime(),category:s.category.selected}).then(function(a){var o;1===t.num&&(s.items=[]),s.$nextTick(function(){e.endSuccess(a.data.length)}),(o=s.items).push.apply(o,l()(a.data))}).catch(function(t){console.log(t),s.showSnackbar("获取失败"),e.endErr()})},refreshData:function(t){var e=this;this.$request("get","/forum/getTopPosts",{},{}).then(function(t){e.topPosts=t.data,e.topPosts.map(function(t){return t.top=!0})}).catch(function(t){e.showSnackbar(t)}),e.$request("get","/forum/getPosts",{timeToken:(new Date).valueOf(),category:e.category.selected}).then(function(s){e.items=s.data,console.log(e.items),e.$nextTick(function(){t.endSuccess(s.data.length)})}).catch(function(s){console.log(s),e.showSnackbar(s),t.endErr()})},likeOrDislike:function(t,e){var s=this;s.$request("post","/forum/forumLikeOrDislike",{},{postId:Number(s.items[t].id),value:e}).then(function(a){s.showSnackbar(a,"ok"),1==e?s.items[t].like_num++:-1==e&&(s.bottomDrawer.dislike_num++,s.items[t].dislike_num++)}).catch(function(t){console.log(t),s.showSnackbar(t)})},addCollect:function(t){var e=this;e.$request("post","/forum/addCollect",{},{postId:Number(e.items[t].id)}).then(function(t){e.showSnackbar(t,"ok")}).catch(function(t){e.showSnackbar(t)})},secretDialogConfirm:function(t){t?(localStorage.setItem("ifused",!0),this.secretDialog=!1):(this.showSnackbar("感谢使用,即将退出程序"),setTimeout(function(){navigator.app.exitApp()},1800))}},beforeDestroy:function(){clearInterval(this.timer)},activated:function(){console.log(this.$store.state.scrollYLeave),this.mescroll.scrollTo(this.$store.state.scrollYLeave,0)},watch:{openWhyFoldedDialog:function(t){this.$store.change_dialog(t,"openWhyFoldedDialog")},secretDialog:function(t){this.$store.change_dialog(t,"secretDialog")},"$store.state.dialog":function(t){"openWhyFoldedDialog"==this.$store.state.dialogName?this.openWhyFoldedDialog=t:"secretDialog"==this.$store.state.dialogName&&(this.secretDialog=t)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-btn",{staticClass:"edit",staticStyle:{"z-index":"99",top:"90.2%"},attrs:{fab:"",color:"primary",large:"",fixed:""},on:{click:function(e){t.$router.push("/edit"),t.$store.change_scrollYLeave()}}},[s("v-icon",{attrs:{color:"white",large:""}},[t._v("mdi-pencil")])],1),t._v(" "),s("div",{ref:"viewBox",staticClass:"mescroll_container postList_container"},[s("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp},on:{init:t.mescrollInit}},[s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[s("span",t._g(t._b({staticClass:"d-flex justify-end",staticStyle:{"margin-left":"50%","margin-right":"10px"}},"span",o,!1),a),[s("span",{staticClass:"mr-2 text_thick"},[t._v(t._s(t.category.types[t.category.selected]))]),t._v(" "),s("v-icon",[t._v("mdi-filter-variant")])],1)]}}])},[t._v(" "),s("v-list",t._l(t.category.types,function(e,a){return s("v-list-item",{key:a,on:{click:function(e){t.category.selected=a,t.refreshData(t.mescroll)}}},[s("v-list-item-title",{class:t.category.selected==a?"red--text":""},[t._v(t._s(e))])],1)}),1)],1),t._v(" "),t._l(t.topPosts,function(e,a){return 0==t.category.selected?s("v-card",{key:a,staticClass:"mb-3",staticStyle:{overflow:"visible"},attrs:{height:"180px",flat:""}},[s("v-card",{staticClass:"d-flex justify-center align-center tag_on_card",staticStyle:{position:"absolute",overflow:"visible"},attrs:{width:"54px",height:"25px",color:"primary"}},[s("span",{staticClass:"text_white text_thick"},[t._v("置顶")])]),t._v(" "),t.topPosts.length>1?s("v-btn",{staticClass:"top_card_arrow_right",staticStyle:{color:"rgba(61, 60, 60, 0.493)"},attrs:{fab:"",absolute:"",small:"",text:""},on:{click:function(e){t.index=!t.index}}},[s("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),t._v(" "),t.topPosts.length>1?s("v-btn",{staticClass:"top_card_arrow_left",staticStyle:{color:"rgba(61, 60, 60, 0.493)"},attrs:{fab:"",absolute:"",small:"",text:""},on:{click:function(e){t.index=!t.index}}},[s("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-left-bold")])],1):t._e(),t._v(" "),s("v-card",{class:t.index%t.topPosts.length==a?"animate__animated  animate__fadeIn":"d-none",attrs:{width:"100%",height:"180px",flat:""},on:{click:function(s){t.$router.push({path:"/postDetail",query:e}),t.$store.change_scrollYLeave()}}},[s("v-card-title",{staticClass:"top_card_title_2",attrs:{absolute:""},domProps:{innerHTML:t._s(e.title_html)}}),t._v(" "),s("v-img",{staticClass:"top_card_background",staticStyle:{position:"absolute",right:"30px"},attrs:{absolute:"",width:"180px",src:e.image_html,contain:""}})],1)],1):t._e()}),t._v(" "),t._l(t.items,function(e,a){return s("div",{key:a},[0==e.filterLevel?s("v-card",{staticClass:"mb-3 mx-auto rounded-lg",attrs:{width:"100%",flat:"",rounded:""},on:{click:function(s){t.$router.push({path:"/postDetail",query:e}),t.$store.change_scrollYLeave()}}},[s("v-card-title",{staticClass:"pt-2 pb-0 d-flex"},[s("v-avatar",{attrs:{size:"45px"}},[s("img",{attrs:{src:e.avatar,alt:"John"}})]),t._v(" "),s("span",{staticClass:"d-flex flex-column justify-center ml-2"},[s("div",{staticClass:"d-flex"},[s("span",{staticClass:"text_small text_thick"},[t._v("#"+t._s(e.thread_starter_name))]),t._v(" "),null!=e.vote?s("v-chip",{staticClass:"mt-2 ml-2 px-2 d-flex align-center",attrs:{outlined:"","x-small":"",color:"primary"}},[s("span",{},[t._v("投票")])]):t._e(),t._v(" "),null!=e.digest?s("v-chip",{staticClass:"mt-2 ml-2 px-2 d-flex align-center",attrs:{outlined:"","x-small":"",color:"primary"}},[s("span",{},[t._v("加精")])]):t._e()],1),t._v(" "),s("span",{staticClass:"text_small-- text_grey mt-n2"},[t._v(t._s(t.timeFormat(e.latest_comment_time)))])]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.showBottomDrawer(a)}}},[s("v-icon",{attrs:{size:"30px"}},[t._v("mdi-dots-vertical")])],1)],1),t._v(" "),s("v-card-text",{staticClass:"mt-1 d-flex flex-column pb-0"},[s("span",{staticClass:"text_small text_thick text_black"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"text_small--- line_three"},[t._v(t._s(e.content))]),t._v(" "),s("div",{staticClass:"d-flex"},["无"!=e.tag?s("v-chip",{staticClass:"ma-1",attrs:{color:"black",outlined:"",small:""}},[s("v-icon",{attrs:{left:"",size:"20px"}},[t._v(t._s(t.map.tagToIcon[e.tag]))]),t._v(" "),s("span",[t._v(t._s(e.tag))])],1):t._e(),t._v(" "),s("v-chip",{staticClass:"ma-1",attrs:{color:"primary",outlined:"",small:""}},[s("v-icon",{attrs:{left:"",size:"20px"}},[t._v(t._s(t.map.categoryToAvatar[e.category]))]),t._v(" "),s("span",[t._v(t._s(e.category))])],1)],1),t._v(" "),s("span",{staticClass:"d-flex align-center"},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.likeOrDislike(a,1)}}},[s("v-icon",{attrs:{size:"22px",color:"black"}},[t._v("mdi-thumb-up-outline")])],1),t._v(" "),s("span",{staticClass:"ml-1"},[t._v(t._s(e.like_num))]),t._v(" "),s("v-avatar",{staticClass:"ml-5",attrs:{icon:"",size:"40px"}},[s("v-icon",{attrs:{size:"22px",color:"black"}},[t._v("mdi-eye-outline")])],1),t._v(" "),s("span",[t._v(t._s(e.visit_num))]),t._v(" "),s("v-avatar",{staticClass:"ml-6",attrs:{icon:"",size:"40px"}},[s("v-icon",{attrs:{size:"22px",color:"black"}},[t._v("mdi-comment-processing-outline")])],1),t._v(" "),s("span",[t._v(t._s(e.comment_num))])],1)])],1):t._e(),t._v(" "),1==e.filterLevel?s("v-card",{staticClass:"mb-3 mx-auto rounded-lg",attrs:{width:"100%",flat:"",rounded:""},on:{click:function(s){t.$router.push({path:"/postDetail",query:e}),t.$store.change_scrollYLeave()}}},[s("v-card-title",{staticClass:"pt-2 pb-0 d-flex"},[s("v-avatar",{attrs:{size:"45px"}},[s("img",{attrs:{src:e.avatar,alt:"John"}})]),t._v(" "),s("span",{staticClass:"d-flex flex-column justify-center ml-2"},[s("div",{staticClass:"d-flex"},[s("span",{staticClass:"text_small text_thick"},[t._v("#"+t._s(e.thread_starter_name))]),t._v(" "),null!=e.vote?s("v-chip",{staticClass:"mt-2 ml-2 px-2 d-flex align-center",attrs:{outlined:"","x-small":"",color:"primary"}},[s("span",{},[t._v("投票")])]):t._e(),t._v(" "),null!=e.digest?s("v-chip",{staticClass:"mt-2 ml-2 px-2 d-flex align-center",attrs:{outlined:"","x-small":"",color:"primary"}},[s("span",{},[t._v("加精")])]):t._e()],1),t._v(" "),s("span",{staticClass:"text_small-- text_grey mt-n2"},[t._v(t._s(t.timeFormat(e.latest_comment_time)))])]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.showBottomDrawer(a)}}},[s("v-icon",{attrs:{size:"30px"}},[t._v("mdi-dots-vertical")])],1)],1),t._v(" "),s("v-card-text",{staticClass:"pb-0"},[t._e(),t._v(" "),s("div",{staticClass:"d-flex flex-column"},[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"text-decoration-line-through text_small text_thick black--text"},[t._v("【已折叠 】")]),t._v(" "),s("v-btn",{staticClass:"pa-0",attrs:{fab:"","x-small":"",text:""}},[s("v-icon",{attrs:{size:"20px",color:"black"},on:{click:function(e){e.stopPropagation(),t.openWhyFoldedDialog=!0}}},[t._v("mdi-help-circle")])],1)],1),t._v(" "),s("div",[s("v-expansion-panels",{attrs:{flat:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"d-flex justify-start",on:{click:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{staticClass:"mt-n2",attrs:{size:"30px"}},[t._v("mdi-chevron-down")])]},proxy:!0}],null,!0)},[t._v(" "),s("div",{style:e.tag.length>2?"width:35px":"width:0px"},[s("v-chip",{staticClass:"mt-n1 mb-1",attrs:{color:"black",outlined:"",small:""}},[s("v-icon",{attrs:{left:"",size:"20px"}},[t._v(t._s(t.map.tagToIcon[e.tag]))]),t._v(" "),s("span",[t._v(t._s(e.tag))])],1)],1),t._v(" "),s("div",{staticStyle:{width:"60px"}},[s("v-chip",{staticClass:"mt-n1 mb-1",attrs:{color:"primary",outlined:"",small:""}},[s("v-icon",{attrs:{left:"",size:"20px"}},[t._v(t._s(t.map.categoryToAvatar[e.category]))]),t._v(" "),s("span",[t._v(t._s(e.category))])],1)],1),t._v(" "),s("v-spacer")],1),t._v(" "),s("v-expansion-panel-content",{staticClass:"mt-n3",staticStyle:{"border-radius":"10px",overflow:"hidden"},attrs:{color:"grey lighten-4"}},[s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text_thick black--text text_small line_one"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"text_small--- grey--text line_three"},[t._v(t._s(e.content))])])])],1)],1)],1)]),t._v(" "),s("div",{staticClass:"d-flex align-center mt-n1"},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.likeOrDislike(a,1)}}},[s("v-icon",{attrs:{size:"22px",color:"black"}},[t._v("mdi-thumb-up-outline")])],1),t._v(" "),s("span",{staticClass:"ml-1"},[t._v(t._s(e.like_num))]),t._v(" "),s("v-avatar",{staticClass:"ml-5",attrs:{icon:"",size:"40px"}},[s("v-icon",{attrs:{size:"22px",color:"black"}},[t._v("mdi-eye-outline")])],1),t._v(" "),s("span",[t._v(t._s(e.visit_num))]),t._v(" "),s("v-avatar",{staticClass:"ml-6",attrs:{icon:"",size:"40px"}},[s("v-icon",{attrs:{size:"22px",color:"black"}},[t._v("mdi-comment-processing-outline")])],1),t._v(" "),s("span",[t._v(t._s(e.comment_num))])],1)])],1):t._e()],1)})],2)],1),t._v(" "),s("v-dialog",{attrs:{overlay:!1,"max-width":"500px",transition:"dialog-transition",dark:""},model:{value:t.openWhyFoldedDialog,callback:function(e){t.openWhyFoldedDialog=e},expression:"openWhyFoldedDialog"}},[s("v-card",{staticStyle:{"background-color":"#363636"}},[s("v-card-title",[s("v-icon",[t._v("mdi-help-circle")]),t._v(" "),s("span",{staticClass:"ml-1 white--text"},[t._v("『火锅底料』的折叠机制")])],1),t._v(" "),s("v-card-text",[s("span",[t._v("『火锅底料』社区是一个以匿名发言为主的社区,")]),t._v(" "),s("span",[t._v("\n          但是可以想见的是,匿名带来的自由,可能会滑向我们所不可控的方向。\n          "),s("br")]),t._v(" "),s("span",[t._v("我们希望为大家提供畅所欲言的平台,")]),t._v(" "),s("span",[s("strong",[t._v("但是平台的健康运行,需要我们共同的努力。")]),t._v(" "),s("br")]),t._v(" "),s("span",[t._v("\n          原则上,『火锅底料』会\n          "),s("strong",[t._v("尽量避免删帖")]),t._v(" ，\n          "),s("br")]),t._v(" "),s("span",[t._v("\n          对于一些『一般人价值判断』下有争议性的话题,\n          "),s("strong",[t._v("则会折叠处理")]),t._v(" 。\n          "),s("br")]),t._v(" "),s("span",[t._v('\n          希望大家在发"性话题","引战话题","令人不适话题","政治相关话题","未经证实话题",的时候,\n          '),s("strong",[t._v("自觉添加上标签")]),t._v(" "),s("br")]),t._v(" "),s("span",[t._v("\n          如果有\n          "),s("strong",[t._v("未加标签")]),t._v("的帖子,满足以下条件:\n          "),s("br")]),t._v(" "),s("li",[t._v("浏览量>100")]),t._v(" "),s("li",[t._v("举报数/浏览量>20%")]),t._v(" "),s("span",[s("strong",[t._v("『火锅底料』会人工加上标签,并对发帖者进行适当的禁言惩罚")])])])],1)],1),t._v(" "),s("v-snackbar",{attrs:{top:"",color:t.snackbar.color,app:""},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[s("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.snackbar.show=!1}}},"v-btn",a,!1),[s("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n    "+t._s(t.snackbar.message)+"\n    ")]),t._v(" "),s("v-navigation-drawer",{staticStyle:{height:"16%","z-index":"99"},attrs:{dark:"",bottom:"",fixed:"",touchless:""},model:{value:t.bottomDrawer.showBottomDrawer,callback:function(e){t.$set(t.bottomDrawer,"showBottomDrawer",e)},expression:"bottomDrawer.showBottomDrawer"}},[s("div",[s("v-btn",{attrs:{text:"",outlined:"",width:"100%",height:"8vh"},on:{click:function(e){return t.likeOrDislike(t.bottomDrawer.chooseIndex,-1)}}},[s("v-icon",[t._v("mdi-alert-decagram-outline")]),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("举报")]),t._v(" "),s("span",{staticClass:"ml-1 text_xsmall grey--text"},[t._v("【举报数:"+t._s(t.bottomDrawer.dislike_num)+"】")])],1),t._v(" "),s("v-btn",{attrs:{text:"",outlined:"",width:"100%",height:"8vh"},on:{click:function(e){return t.addCollect(t.bottomDrawer.chooseIndex)}}},[s("v-icon",[t._v("mdi-bookmark-multiple-outline")]),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("收藏")])],1)],1)]),t._v(" "),s("v-dialog",{attrs:{scrollable:"",fullscreen:"",persistent:"","max-width":"500px",transition:"dialog-bottom-transition",dark:""},model:{value:t.secretDialog,callback:function(e){t.secretDialog=e},expression:"secretDialog"}},[s("v-card",{staticStyle:{"background-color":"#363636"}},[s("v-card-title",[s("span",[t._v("隐私协议")])]),t._v(" "),s("v-divider"),t._v(" "),s("v-card-text",[s("p",{staticClass:"mt-3"},[t._v("欢迎来到『火锅底料』。")]),t._v(" "),s("p",[t._v("\n          请您仔细阅读以下条款,若干您对本协议的任何条款表示异议,您可以选择不进入『火锅底料』。当您注册成功，无论是进入\n          『火锅底料』，还是在『火锅底料』上发布任何内容（即『内容』），均意味着您（即『用户』）完全接受本协议项下的全部条款\n        ")]),t._v(" "),s("li",[t._v("您可以使用四川大学邮箱登陆『火锅底料』，并将其作为您的用户账号，用户应当对其用户账号进行的所有活动和事件负法律责任")]),t._v(" "),s("li",[t._v("\n          用户须对在『火锅底料』上的注册信息的真实性、合法性、有效性承担全部责任，用户不得冒充他人；不得恶意使用注册账号导致其他用户误认\n          否则『火锅底料』有权立即停止提供服务，收回其账号并由用户独自承担由此而产生的一切法律责任\n        ")]),t._v(" "),s("li",[t._v("\n          用户直接或通过各类方式间接使用『火锅底料』服务和数据的行为，都将被视作已无条件接受本协议全部内容；若用户对本协议的任何条款\n          存在任何异议，请停止使用『火锅底料』所提供的全部服务\n        ")]),t._v(" "),s("li",[t._v("用户承诺不得以任何方式利用『火锅底料』直接或间接从事违反中国法律的行为，『火锅底料』有权对违反上述承诺的内容予以删除")]),t._v(" "),s("li",[t._v("用户不得利用『火锅底料』服务制作、上载、复制、发布、传播或者转载如下内容：")]),t._v(" "),s("ul",[s("li",{attrs:{type:"circle"}},[t._v("反对宪法所确定的基本原则的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家同一的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("损害国家荣誉和利益的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("煽动民族仇恨、民族歧视、破坏民族团结的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("侮辱、滥用英烈形象、否定英烈事迹、美化粉饰侵略战争行为的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("破坏国家宗教政策，宣扬邪教和封建迷信的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("散步谣言，扰乱社会秩序，破坏社会稳定的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("侮辱或者诽谤他人，侵害他人合法权益的；")]),t._v(" "),s("li",{attrs:{type:"circle"}},[t._v("含有法律、行政法规禁止的其他内容的信息。")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n          『火锅底料』有权对用户使用『火锅底料』的情况进行审查和监督。如果用户在使用『火锅底料』时违反上述任何规定\n          ，『火锅底料』或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或者删除用户张贴的内容、暂停\n          或终止用户使用『火锅底料』的权利），以减轻用户不当行为造成的影响。当然，在大多数情况下，我们避免对用户所发布内容进行任何意义上的干预。\n        ")])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"float-right",attrs:{color:"primary"},on:{click:function(e){return t.secretDialogConfirm(!0)}}},[t._v("同意")]),t._v(" "),s("v-btn",{staticClass:"float-right",attrs:{color:"primary",outlined:""},on:{click:function(e){return t.secretDialogConfirm(!1)}}},[t._v("不同意")])],1)],1)],1)],1)},staticRenderFns:[]};var m=s("C7Lr")(_,d,!1,function(t){s("PqcP")},null,null);e.default=m.exports}});
//# sourceMappingURL=9.64186b5a37d9af9c1fc2.js.map