webpackJsonp([1],{A2MA:function(t,e){},"MJ+5":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("YLn8")},null,null).exports,r=n("/ocq"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"categories",attrs:{"default-active":"btc","active-text-color":"red"},on:{select:t.handleSelect}},t._l(t.navList,function(e,o){return n("el-menu-item",{key:o,attrs:{index:e.name}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.navItem))])])}),1)},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{height:"840px"}},t._l(t.books,function(e){return n("el-tooltip",{key:e.id,attrs:{effect:"dark",placement:"right"}},[n("p",{staticStyle:{"font-size":"14px","margin-bottom":"6px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticStyle:{"font-size":"13px","margin-bottom":"6px"},attrs:{slot:"content"},slot:"content"},[n("span",[t._v(t._s(e.owner))]),t._v(" /\n        "),n("span",[t._v(t._s(e.date))]),t._v(" /\n      ")]),t._v(" "),n("p",{staticClass:"abstract",staticStyle:{width:"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.abs))]),t._v(" "),n("el-card",{staticClass:"book",staticStyle:{width:"200px","margin-bottom":"20px",height:"233px",float:"left","margin-right":"15px"},attrs:{bodyStyle:"padding:10px",shadow:"hover"}},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:e.cover,alt:"封面"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[n("a",{attrs:{href:""}},[t._v(t._s(e.title))])])]),t._v(" "),n("div",{staticClass:"owner"},[t._v(t._s(e.owner))])])],1)}),1),t._v(" "),n("el-row",[n("el-pagination",{attrs:{"current-page":1,"page-size":10,total:20}})],1)],1)},staticRenderFns:[]};var c={name:"WalletsIndex",components:{SideMenu:n("VU/8")({name:"SideMenu",data:function(){return{cid:"",navList:[{name:"btc",navItem:"BTC"},{name:"bch",navItem:"BCH"}]}},methods:{handleSelect:function(t,e){this.cid=t,this.$emit("indexSelect")}}},s,!1,function(t){n("QZ0B")},"data-v-7926814c",null).exports,Wallet:n("VU/8")({name:"Wallet",data:function(){return{books:[{cover:"../../assets/btc.jpeg",title:"零钱包",owner:"张三",date:"2019-05-05",abs:"吃喝拉撒全包"}]}}},l,!1,function(t){n("A2MA")},"data-v-766c2b39",null).exports},methods:{listByCategory:function(){var t=this.$refs.sideMenu.cid;console.log(t)}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-aside",{staticStyle:{width:"200px","margin-top":"20px"}},[e("switch"),this._v(" "),e("SideMenu",{ref:"sideMenu",on:{indexSelect:this.listByCategory}})],1),this._v(" "),e("el-main",[e("wallet",{staticClass:"wallet-area"})],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(t){n("r6KU")},"data-v-ee6c627a",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Receive!")])},staticRenderFns:[]};var p=n("VU/8")({name:"ReceiveIndex"},m,!1,function(t){n("PuTs")},"data-v-43ac80ac",null).exports,v={name:"Login",data:function(){return{loginForm:{username:"admin",password:"123456"},responseResult:[]}},methods:{login:function(){var t=this;console.log(this.$store.state),this.$axios.post("/api/login",{userName:this.loginForm.username,password:this.loginForm.password}).then(function(e){if(200===e.status){var n=e.data.data;t.$store.commit("login",n),t.$store.commit("token",e.headers.authorization);var o=t.$route.query.redirect;t.$router.replace({path:void 0===o||null==o?"/":o},function(t){console.log(t)},function(t){console.log(t)})}}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{attrs:{id:"poster"}},[n("el-form",{staticClass:"login-container",attrs:{"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"login_title"},[t._v("系统登录")]),t._v(" "),n("el-form-item",[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),t._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%",backgtroup:"#505458",border:"none"},attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(v,f,!1,function(t){n("kSsr")},null,null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticStyle:{"min-width":"1300px"},attrs:{"default-active":"/wallet",router:"",mode:"horizontal","background-color":"white","text-color":"#222","active-text-color":"red"}},[t._l(t.navList,function(e,o){return n("el-menu-item",{key:o,attrs:{index:e.name}},[t._v("\n    "+t._s(e.navItem)+"\n  ")])}),t._v(" "),n("i",{staticClass:"el-icon-switch-button",staticStyle:{float:"right","font-size":"40px",color:"#222",padding:"10px"},on:{click:t.logout}}),t._v(" "),n("a",{staticStyle:{color:"#222",float:"right",padding:"20px"},attrs:{href:"#nowhere"}},[t._v("More")]),t._v(" "),n("i",{staticClass:"el-icon-menu",staticStyle:{float:"right","font-size":"45px",color:"#222","padding-top":"8px"}}),t._v(" "),n("span",{staticStyle:{position:"absolute","padding-top":"20px",right:"43%","font-size":"20px","font-weight":"bold"}},[t._v("Chain Wallet")])],2)},staticRenderFns:[]};var _={name:"Home",components:{NavMenu:n("VU/8")({name:"NavMenu",data:function(){return{navList:[{name:"/wallet",navItem:"Wallets"},{name:"/receive",navItem:"Receive"},{name:"/send",navItem:"Send"},{name:"/shop",navItem:"Shop"},{name:"/setting",navItem:"Settings"}]}},methods:{logout:function(){var t=this;this.$axios.get("/api/logout").then(function(e){200===e.status&&(t.$store.commit("logout"),t.$router.replace("/login"))})}}},g,!1,function(t){n("MJ+5")},"data-v-4042024c",null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-menu"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var x=n("VU/8")(_,w,!1,function(t){n("e+ml")},"data-v-4fe528be",null).exports;o.default.use(r.a);var S=new r.a({mode:"history",routes:[{path:"/",name:"Login",redirect:"/wallet",component:x},{path:"/home",name:"Home",component:x,redirect:"/wallet",children:[{path:"/wallet",name:"WalletsIndex",component:d,meta:{requireAuth:!0}},{path:"/receive",name:"ReceiveIndex",component:p,meta:{requireAuth:!0}}]},{path:"/login",name:"Login",component:h}]}),b=n("zL8q"),y=n.n(b),k=(n("tvR6"),n("mvHQ")),I=n.n(k),$=n("NYxO");o.default.use($.a);var C=new $.a.Store({state:{user:{username:null==window.localStorage.getItem("user")||void 0===window.localStorage.getItem("user")||"undefined"===window.localStorage.getItem("user")?"":JSON.parse(window.localStorage.getItem("user")).username},auth:{token:null==window.localStorage.getItem("token")?"":window.localStorage.getItem("token")}},mutations:{login:function(t,e){t.user=e,window.localStorage.setItem("user",I()(e))},token:function(t,e){t.auth={token:e},window.localStorage.setItem("token",e)},logout:function(t){t.user=[],t.auth={},window.localStorage.removeItem("token"),window.localStorage.removeItem("user")}}}),F=n("mtWM");F.defaults.baseURL="http://localhost:8443/api",F.defaults.baseURL="",o.default.prototype.$axios=F,o.default.config.productionTip=!1,o.default.use(y.a),S.beforeEach(function(t,e,n){t.meta.requireAuth?C.state.auth.token?n():n({path:"login",query:{redirect:t.fullPath}}):n()}),new o.default({el:"#app",render:function(t){return t(i)},router:S,store:C,components:{App:i},template:"<App/>"})},PuTs:function(t,e){},QZ0B:function(t,e){},YLn8:function(t,e){},"e+ml":function(t,e){},kSsr:function(t,e){},r6KU:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a1d35edafe9edfb3b033.js.map