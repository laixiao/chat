(function(e){function n(n){for(var t,r,s=n[0],d=n[1],u=n[2],g=0,l=[];g<s.length;g++)r=s[g],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);c&&c(n);while(l.length)l.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,s=1;s<a.length;s++){var d=a[s];0!==i[d]&&(t=!1)}t&&(o.splice(n--,1),e=r(r.s=a[0]))}return e}var t={},i={index:0},o=[];function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var n=[],a=i[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,t){a=i[e]=[n,t]}));n.push(a[2]=t);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"static/js/"+({"pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39":"pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39","pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0":"pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0","pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f":"pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f","pages-addFriend-addFriend~pages-friends-friends~pages-rolelist-rolelist":"pages-addFriend-addFriend~pages-friends-friends~pages-rolelist-rolelist","pages-addFriend-addFriend":"pages-addFriend-addFriend","pages-friends-friends":"pages-friends-friends","pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo":"pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo","pages-chat-chat":"pages-chat-chat","pages-groups-groups":"pages-groups-groups","pages-index-index":"pages-index-index","pages-rolelist-rolelist":"pages-rolelist-rolelist","pages-userInfo-userInfo":"pages-userInfo-userInfo"}[e]||e)+"."+{"pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39":"f381556c","pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0":"a972425a","pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f":"e2524a3d","pages-addFriend-addFriend~pages-friends-friends~pages-rolelist-rolelist":"6969cf5a","pages-addFriend-addFriend":"c479ce6c","pages-friends-friends":"09087e4c","pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo":"703f745d","pages-chat-chat":"077dc048","pages-groups-groups":"40e2508e","pages-index-index":"881deab3","pages-rolelist-rolelist":"a5a7c557","pages-userInfo-userInfo":"ae543cbf"}[e]+".js"}(e);var d=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",d.name="ChunkLoadError",d.type=t,d.request=o,a[1](d)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,a){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(a,t,function(n){return e[n]}.bind(null,t));return a},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/chat/",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var c=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("eb54")},"1d45":function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.UserType=n.UserStatus=n.ResStatus=n.MsgType=n.MsgTidType=n.MsgStatus=n.ModelEnum=n.FriendReplyStatus=void 0;n.ResStatus={Fail:0,Success:1,PaySuccess:2};n.MsgType={txt:0,img:1,voice:2,video:3,divider:4};n.MsgStatus={unSent:0,unRead:1,readed:2,ban:3};n.MsgTidType={single:0,group:1};n.FriendReplyStatus={normal:0,accept:1,refuse:2};n.UserType={system:0,assistant:1,user:2,robot:3};n.UserStatus={normal:0,selling:1,ban:2,banTemp:3};n.ModelEnum=[{name:"gpt-3.5-turbo",label:"3.5",disable:!1},{name:"gpt-4",label:"4.0",disable:!1},{name:"DALL·E",label:"文生图",disable:!1}]},"255e":function(e,n,a){var t=a("fd2b");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=a("4f06").default;i("660235af",t,!0,{sourceMap:!1,shadowMode:!1})},"3c6d":function(e,n,a){"use strict";(function(e){var n=a("4ea4").default;a("13d5"),a("d3b7"),a("ddb0"),a("ac1f"),a("5319");var t=n(a("e143")),i={keys:function(){return[]}};e["____FCE3F3B____"]=!0,delete e["____FCE3F3B____"],e.__uniConfig={easycom:{autoscan:!0,custom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^uni-(.*)":"@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue","^tui-(.*)":"thorui-uni/lib/thorui/tui-$1/tui-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^uniad$":"@dcloudio/uni-cli-shared/components/uniad.vue","^ad-rewarded-video$":"@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue","^ad-fullscreen-video$":"@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue","^ad-interstitial$":"@dcloudio/uni-cli-shared/components/ad-interstitial.vue","^ad-interactive$":"@dcloudio/uni-cli-shared/components/ad-interactive.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.7.9",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__FCE3F3B",e.__uniConfig.appName="主动AI",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/chat/"},e.__uniConfig.publicPath="/chat/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(n);return Object.assign(e[a]||(e[a]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-index-index",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f"),a.e("pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo"),a.e("pages-index-index")]).then(function(){return e(a("5b32"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-chat-chat",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f"),a.e("pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo"),a.e("pages-chat-chat")]).then(function(){return e(a("0d1d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-addFriend-addFriend",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f"),a.e("pages-addFriend-addFriend~pages-friends-friends~pages-rolelist-rolelist"),a.e("pages-addFriend-addFriend")]).then(function(){return e(a("de33"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-friends-friends",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f"),a.e("pages-addFriend-addFriend~pages-friends-friends~pages-rolelist-rolelist"),a.e("pages-friends-friends")]).then(function(){return e(a("c161"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-groups-groups",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f"),a.e("pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo"),a.e("pages-groups-groups")]).then(function(){return e(a("aa37"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-userInfo-userInfo",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~7c78bc8f"),a.e("pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo"),a.e("pages-userInfo-userInfo")]).then(function(){return e(a("287d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-rolelist-rolelist",(function(e){var n={component:Promise.all([a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~9dd6bf39"),a.e("pages-addFriend-addFriend~pages-chat-chat~pages-friends-friends~pages-groups-groups~pages-index-inde~79af57e0"),a.e("pages-chat-chat~pages-groups-groups~pages-index-index~pages-rolelist-rolelist~pages-userInfo-userInfo"),a.e("pages-addFriend-addFriend~pages-friends-friends~pages-rolelist-rolelist"),a.e("pages-rolelist-rolelist")]).then(function(){return e(a("c337"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"",navigationStyle:"custom",enablePullDownRefresh:!1,disableScroll:!1,backgroundColor:"#f5f5f5"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/chat/chat",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",navigationStyle:"custom",enablePullDownRefresh:!1,disableScroll:!1,backgroundColor:"#ffffff"})},[e("pages-chat-chat",{slot:"page"})])}},meta:{name:"pages-chat-chat",isNVue:!1,maxWidth:0,pagePath:"pages/chat/chat",windowTop:0}},{path:"/pages/addFriend/addFriend",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"添加好友",enablePullDownRefresh:!1})},[e("pages-addFriend-addFriend",{slot:"page"})])}},meta:{name:"pages-addFriend-addFriend",isNVue:!1,maxWidth:0,pagePath:"pages/addFriend/addFriend",windowTop:44}},{path:"/pages/friends/friends",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"我的好友",enablePullDownRefresh:!1})},[e("pages-friends-friends",{slot:"page"})])}},meta:{name:"pages-friends-friends",isNVue:!1,maxWidth:0,pagePath:"pages/friends/friends",windowTop:44}},{path:"/pages/groups/groups",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"群聊",enablePullDownRefresh:!1})},[e("pages-groups-groups",{slot:"page"})])}},meta:{name:"pages-groups-groups",isNVue:!1,maxWidth:0,pagePath:"pages/groups/groups",windowTop:44}},{path:"/pages/userInfo/userInfo",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"资料",enablePullDownRefresh:!1})},[e("pages-userInfo-userInfo",{slot:"page"})])}},meta:{name:"pages-userInfo-userInfo",isNVue:!1,maxWidth:0,pagePath:"pages/userInfo/userInfo",windowTop:44}},{path:"/pages/rolelist/rolelist",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"角色搜索",enablePullDownRefresh:!1})},[e("pages-rolelist-rolelist",{slot:"page"})])}},meta:{name:"pages-rolelist-rolelist",isNVue:!1,maxWidth:0,pagePath:"pages/rolelist/rolelist",windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},"5b58":function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var t=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},"6eb4":function(e,n,a){"use strict";a.r(n);var t=a("5b58"),i=a("c8ae");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return i[e]}))}(o);a("8ca5");var r=a("f0c5"),s=Object(r["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=s.exports},"7cc6":function(e,n,a){"use strict";a("7a82");var t=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.getQueryParams=u,n.myUtil=void 0;var i=t(a("d4ec")),o=t(a("bee2")),r=t(a("ade3")),s=t(a("3835"));a("ac1f"),a("841c"),a("d3b7"),a("159b"),a("d81d");var d=a("1d45");function u(){var e=window.location.search.substring(1),n={};return e.split("&").forEach((function(e){var a=e.split("="),t=(0,s.default)(a,2),i=t[0],o=t[1];n[i]=decodeURIComponent(o)})),n}var c=function(){function e(){(0,i.default)(this,e),(0,r.default)(this,"cacheImgList",null),(0,r.default)(this,"loadingImgs",{})}return(0,o.default)(e,[{key:"login",value:function(e,n){return new Promise((function(a,t){uni.getStorageSync("user");var i=u().uid;i?(console.log("H5 login:",i),e.commit("user",{id:i,_id:i}),g.refreshUser(n,e).then((function(){a(e.state.user)}))):(console.log("登陆失败，请联系客服"),uni.showToast({title:"登陆失败，请联系客服"}))}))}},{key:"checkUser",value:function(e){return new Promise((function(n,a){uni.$u.http.get("/user/check",{params:{id:e}}).then((function(e){0==e.data.c&&(uni.clearStorage(),uni.showModal({title:"更新成功",content:"请重新进入",success:function(){uni.exitMiniProgram()}})),n()})).catch((function(e){console.warn(e)}))}))}},{key:"refreshUser",value:function(e,n){return new Promise((function(a,t){e.http.get("/user/find",{params:{id:n.state.user.id}}).then((function(e){console.log("刷新用户信息：",e.data),e.data.c&&(e.data.d.id=e.data.d._id,n.commit("user",e.data.d)),a(n.state.user)}))})).catch((function(e){console.warn(e),reject(e)}))}},{key:"bindUser",value:function(e,n,a){var t=this;e.http.get("/wx/user/bind",{params:{uid:n.state.user.id,gzhuid:a}}).then((function(a){console.log("/wx/user/bind",a.data),a.data.c==d.ResStatus.PaySuccess&&(t.refreshUser(e,n),uni.showModal({title:"充值成功",content:"积分+"+a.data.d.money}))}))}},{key:"cacheImg",value:function(e,n){if(!this.cacheImgList){try{g.cacheImgList=uni.getStorageSync("cacheImgs")}catch(a){}g.cacheImgList||(this.cacheImgList={})}return n&&this.cacheImgList[n]?this.cacheImgList[n]:e}},{key:"updateGallery",value:function(e,n){uni.$u.http.get("/gallery/type/find",{params:{uid:n.state.user.id}}).then((function(e){e.data.d&&uni.$u.http.get("/gallery/find").then((function(a){n.commit("gallerylist",e.data.d.map((function(e){return{name:e.name,data:a.data.d[e._id]}}))),console.log(n.state.gallerylist)}))}))}}]),e}(),g=new c;n.myUtil=g},"8ca5":function(e,n,a){"use strict";var t=a("255e"),i=a.n(t);i.a},aaae:function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a("7cc6"),i={onLaunch:function(){console.log("App Launch"),t.myUtil.cacheImg()},computed:{},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},methods:{}};n.default=i},c8ae:function(e,n,a){"use strict";a.r(n);var t=a("aaae"),i=a.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=i.a},eb54:function(e,n,a){"use strict";var t=a("4ea4").default;a("d3b7");var i=t(a("5530")),o=t(a("53ca"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("3c6d"),a("1c31");var r=t(a("6eb4")),s=t(a("fe2d")),d=t(a("2b23")),u=t(a("6ae8")),c=t(a("bc2f")),g=a("ec5e"),l=a("7cc6"),p=a("1d45"),f=t(a("e143"));f.default.config.productionTip=!1,r.default.mpType="app",f.default.prototype.$store=s.default,f.default.mixin(c.default);try{uni.addInterceptor({returnValue:function(e){return function(e){return!!e&&("object"===(0,o.default)(e)||"function"===typeof e)&&"function"===typeof e.then}(e)?new Promise((function(n,a){e.then((function(e){e[0]?a(e[0]):n(e[1])}))})):e}})}catch(m){}var h=new f.default((0,i.default)({store:s.default},r.default));f.default.use(u.default),h.$u.http.setConfig((function(e){return e.baseURL=s.default.state.domain,e})),uni.showLoading({title:"加载中..."}),l.myUtil.login(s.default,h.$u).then((function(e){console.log("user login:",e,e.status!=p.UserStatus.ban),e.status!=p.UserStatus.ban?h.$u.http.get("/public/version.json").then((function(e){console.log("版本信息：",e.data[s.default.state.version]),s.default.commit("pass",e.data[s.default.state.version].pass),e.data[s.default.state.version].pass&&(h.$u.mpShare={title:"免费体验AI4.0和AI绘图",imageUrl:s.default.state.domain+"/public/images/gptlogo.png"}),uni.hideLoading()})):(s.default.commit("pass",0),uni.hideLoading()),l.myUtil.checkUser(e.id).then((function(){0==s.default.state.user.status?s.default.commit("tabIndex","chat"):s.default.commit("tabIndex","gallery")})),s.default.state.bing_gzhuid&&l.myUtil.bindUser(h.$u,s.default,s.default.state.bing_gzhuid);var n=(0,d.default)(s.default.state.socket_domain,{query:{uid:e.id},transports:["websocket","polling"],timeout:5e3});n.on("error",(function(e){console.log("ws error",e)})),n.on("connect",(function(){console.log("ws connect success $socket.id：",n.id)})),g.mySocket.initSocket(s.default,h.$u,n),f.default.prototype.$socket=n})).catch((function(e){console.warn(e)})),h.$mount()},ec5e:function(e,n,a){"use strict";a("7a82");var t=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.mySocket=void 0;var i=t(a("d4ec")),o=t(a("bee2")),r=a("1d45"),s=function(){function e(){(0,i.default)(this,e)}return(0,o.default)(e,[{key:"initSocket",value:function(e,n,a){a.on("server_msg",(function(e){console.log("server_msg：",e),e.content?uni.showModal({title:e.title,content:e.content,showCancel:!1}):uni.showToast({title:e.title,icon:e.icon?e.icon:"none"})})),a.on("user_update",(function(n){console.log("on user_update：",n.d),e.commit("user",n.d)})),a.on("friend",(function(n){console.log("on friend：",n.d),e.commit("friend",n.d)})),a.on("FriendReply",(function(n){e.commit("FriendReply",n.d)})),a.on("friendRecommend",(function(n){console.log("friendRecommend:",n),e.commit("friendRecommend",n.d)})),a.on("groups",(function(n){e.commit("groups",n.d)})),a.on("conversations",(function(n){console.log("on conversations:",n.d),e.commit("conversations",n.d)})),a.on("msg",(function(n){for(var t=n.d,i=getCurrentPages(),o=i[i.length-1],s=0;s<t.length;s++){var d=t[s];"pages/chat/chat"==o.route&&e.state.chatTarget&&(d.uid._id==e.state.user.id&&d.tid==e.state.chatTarget.data._id||d.uid._id==e.state.chatTarget.data._id)?(!d.sending&&d.status<r.MsgStatus.readed&&(a.emit("msg_status",{id:d,status:r.MsgStatus.readed}),console.log("收到一条消息：",d)),e.commit("chatMsgs",{order:1,msg:d})):!d.sending&&d.status<r.MsgStatus.unRead&&a.emit("msg_status",{id:d,status:r.MsgStatus.unRead})}}))}}]),e}(),d=new s;n.mySocket=d},fd2b:function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* uni.scss */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.flex{display:flex}.flex-warp{flex-wrap:wrap}.flex-column{flex-direction:column}.justify-start{justify-content:flex-start}.justify-around{justify-content:space-around}.justify-end{justify-content:flex-end}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.justify-center{justify-content:center}.align-center{align-items:center}.col{flex-direction:column}.row{flex-direction:row}.gap5{gap:%?5?%}.gap10{gap:%?10?%}.gap15{gap:%?15?%}.gap25{gap:%?25?%}.gap-40{gap:%?40?%}.width100{width:100%}.bg-white{background-color:#fff}.z-index1{z-index:1}.z-index2{z-index:2}.z-index3{z-index:3}.padding-10{padding:%?10?%}.padding-15{padding:%?15?%}.padding-20{padding:%?20?%}.padding-left-35{padding-left:%?35?%}.padding-bottom-15{padding-bottom:%?15?%}.padding-left-20{padding-left:%?20?%}.padding-right-20{padding-right:%?20?%}\r\n/*每个页面公共css */\r\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}',""]),e.exports=n},fe2d:function(e,n,a){"use strict";a("7a82");var t=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("4de4"),a("d3b7"),a("99af"),a("d81d"),a("c740"),a("14d9"),a("3c65");var i=t(a("e143")),o=t(a("26cb"));a("7cc6");i.default.use(o.default);var r=new o.default.Store({state:{version:"1.0.3",domain:"https://www.diluapp.cn/aichat",socket_domain:"https://www.diluapp.cn",user:{},pass:null,tabIndex:"me",bing_gzhuid:null,friend:[],FriendReply:[],friendRecommend:[],friendSearch:[],groups:[],conversations:[],chatTarget:null,chatMsgs:[],gallerylist:[]},mutations:{pass:function(e,n){e.pass=n},user:function(e,n){e.user=n,uni.setStorage({key:"user",data:n})},tabIndex:function(e,n){e.tabIndex=n},bing_gzhuid:function(e,n){e.bing_gzhuid=n},friend:function(e,n){var a=n.filter((function(n){return!e.friend.some((function(e){return e._id==n._id}))}));e.friend=e.friend.concat(a)},FriendReply:function(e,n){console.log(n),e.FriendReply=n},FriendReplyDelete:function(e,n){e.FriendReply=e.FriendReply.filter((function(e){return e._id!=n._id}))},friendRecommend:function(e,n){e.friendRecommend=n},friendSearch:function(e,n){e.friendSearch=n},groups:function(e,n){for(var a=0;a<n.length;a++)n[a]["avatars"]=n[a].userArry.map((function(e){return e.avatar})),n[a]["avatars"]=n[a]["avatars"],n[a]["nicks"]=n[a].userArry.map((function(e){return e.nick})).join("");e.groups=n},conversations:function(e,n){for(var a=[],t=function(t){var o=e.conversations.findIndex((function(e){return e._id==n[t]._id}));o>=0?i.default.set(e.conversations,o,n[t]):a.push(n[t])},o=0;o<n.length;o++)t(o);e.conversations=e.conversations.concat(a),uni.setStorage({key:"conversations",data:e.conversations})},chatTarget:function(e,n){e.chatTarget=n},chatMsgs:function(e,n){var a=n.msg,t=e.chatMsgs.findIndex((function(e){return e._id==a._id}));-1==t?1==n.order?e.chatMsgs.push(a):e.chatMsgs.unshift(a):(a.sending&&(a.content=e.chatMsgs[t].content+a.content),i.default.set(e.chatMsgs,t,a))},setMsg:function(e,n){e.chatMsgs=n},resetMsg:function(e,n){e.chatMsgs=[]},gallerylist:function(e,n){e.gallerylist=n}}}),s=r;n.default=s}});