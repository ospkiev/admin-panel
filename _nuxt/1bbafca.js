(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(t,e,r){"use strict";var o=r(50),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},155:function(t,e,r){t.exports=r(156)},196:function(t,e,r){var content=r(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("6e3baafa",content,!0,{sourceMap:!1})},197:function(t,e,r){var o=r(47)(!1);o.push([t.i,'*{font-family:"Inter",sans-serif;margin:0;padding:0}button,input,select{outline:none}.notifications{position:fixed;top:5px!important;z-index:999}.vue-notification{padding:10px;margin:0 5px 5px;font-size:16px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7;border-radius:3px;box-shadow:0 0 10px -1px rgba(0,0,0,.15)}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#e54d42;border-left-color:#b82e24}.vue-notification.success{background:#68cd86;border-left-color:#42a85f}.theme--light .border,.theme--light .border-color{border:1px solid rgba(0,0,0,.87059)}.theme--light .base__title,.theme--light .cyl__side--matrix--cell,.theme--light .cyl__side--title,.theme--light .sph__column--item,.theme--light .sph__title{background:#2096f3;color:#fff}.theme--dark .border{border:1px solid #fff}.theme--dark .border-color{border-color:#fff}.theme--dark .accent--text{color:#fff!important}.theme--dark .base__title,.theme--dark .cyl__side--matrix--cell,.theme--dark .cyl__side--title,.theme--dark .sph__column--item,.theme--dark .sph__title{background:#fc8b01;color:rgba(0,0,0,.87059)}',""]),t.exports=o},225:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return d}));var o=r(14),n=(r(49),{getData:"https://testapi.yovogames.com/test"}),c={key:"testKey123"},l=function(){return{table:[]}},f={SET_TABLE:function(t,data){t.table=data}},d={fetch:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,e.$axios.post("".concat(n.getData,"/table?Key=").concat(c.key));case 4:return l=r.sent,data=l.data,o("SET_TABLE",data.Data),r.abrupt("return",!1);case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()}}}},[[155,4,1,5]]]);