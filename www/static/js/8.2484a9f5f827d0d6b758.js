webpackJsonp([8],{"6SVQ":function(t,e){},df0t:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("IHPB"),l=a.n(s),r=a("RzMJ"),n=a("wst3"),o=a("0T5Q"),c={name:"myCollect",components:{MescrollVue:n.a},data:function(){return{myCollects:[],snackbar:{show:!1,message:"",color:"grey-darken3"},map:r.a,mescrollDown:{callback:this.refreshData,use:!0},mescrollUp:{callback:this.getMoreData,noMoreSize:3,empty:{warpId:"noMoreDataWrap",icon:null,tip:"暂无收藏帖子",btntext:"",btnClick:null,supportTap:!1}}}},created:function(){},methods:{rightSlide:function(){this.$router.go(-1)},timeFormat:function(t){var e=Math.floor(((new Date).getTime()-new Date(t).getTime())/1e3),a=Math.floor(e/3600/24),s=Math.floor(e/3600)%24,l=Math.floor(e/60)%60,r=Math.floor(e%60),n="";if(r>0&&0==l&&0==s&&0==a)n=r+"秒前";else if(l>0&&0==s&&0==a)n=l+"分钟前";else{if(!(s>0&&0==a))return new Date(new Date(t).getTime()+288e5).toJSON().substr(0,16).replace("T"," ");n=s+"小时前"}return n},refreshData:function(t){var e=this;e.$request("get","/forum/getMyCollect",{timeToken:(new Date).getTime()}).then(function(a){e.myCollects=a.data,t.endSuccess(a.data.length)}).catch(function(e){t.endErr()})},getMoreData:function(t,e){var a=this,s=a.myCollects.length>0?new Date(a.myCollects[a.myCollects.length-1].created_time).getTime():(new Date).getTime();a.$request("get","/forum/getMyCollect",{timeToken:s}).then(function(s){var r;1===t.num&&(a.myCollects=[]),(r=a.myCollects).push.apply(r,l()(s.data)),e.endSuccess(s.data.length)}).catch(function(t){e.endErr()})}},directives:{touch:o.a}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column px-0"},[a("v-app-bar",{staticClass:"top ",staticStyle:{"margin-top":"env(safe-area-inset-top)"},attrs:{fixed:"",app:"",color:"white"}},[a("v-btn",{staticClass:"mt-2",attrs:{fab:"",text:"",small:""},on:{click:function(e){return t.$router.back(-1)}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-left")])],1),t._v(" "),a("span",{staticClass:"text_middle mt-2"},[t._v("我的收藏")])],1),t._v(" "),a("div",{directives:[{name:"touch",rawName:"v-touch:swiperight",value:t.rightSlide,expression:"rightSlide",arg:"swiperight"}],ref:"viewBox",staticClass:"mescroll_container_historyPosts"},[a("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp}},[a("div",{attrs:{id:"noMoreDataWrap"}}),t._v(" "),t._l(t.myCollects,function(e,s){return a("v-card",{key:s,staticClass:"mt-2",attrs:{color:"white",width:"100%",flat:"",rounded:""},on:{click:function(a){return t.$router.push({path:"/postDetail",query:{id:e.id}})}}},[a("v-card-text",{staticClass:"d-flex flex-column pt-2 pb-4"},[a("div",{staticClass:"d-flex"},[a("v-avatar",{staticClass:"ml-3 mb-1",attrs:{size:"40"}},[a("img",{attrs:{src:e.avatar,alt:"头像"}})]),t._v(" "),a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"text_small-- text_thick ml-2"},[t._v("#"+t._s(e.name))]),t._v(" "),a("span",{staticClass:"text_small--- ml-2 grey--text mt-n1"},[t._v(t._s(t.timeFormat(e.created_time)))])])],1),t._v(" "),a("span",{staticClass:"text_small-- black--text"},[a("span",{staticClass:"text_thick"},[t._v("【帖子】 "+t._s(e.title))])]),t._v(" "),a("div",{staticClass:"grey_background_historyPosts pa-1"},[a("span",{staticClass:"text_thick"},[t._v("【内容】:")]),t._v(" "),a("span",{staticClass:"black--text"},[t._v(t._s(e.content))])])])],1)})],2)],1),t._v(" "),a("v-snackbar",{attrs:{bottom:"",color:t.snackbar.color},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(t._s(t.snackbar.message))])],1)},staticRenderFns:[]};var m=a("C7Lr")(c,i,!1,function(t){a("6SVQ")},null,null);e.default=m.exports}});
//# sourceMappingURL=8.2484a9f5f827d0d6b758.js.map