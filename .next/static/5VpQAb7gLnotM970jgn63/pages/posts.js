(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"35l8":function(t,e){function a(t,e){for(var a=t+"";a.length<e;)a="0"+a;return a}t.exports={formatDate:function(t){return t.getUTCFullYear()+"-"+a(1+t.getUTCMonth(),2)+"-"+a(t.getUTCDate(),2)+" "+a(t.getUTCHours()%12,2)+":"+a(t.getUTCMinutes(),2)+":"+a(t.getUTCSeconds(),2)+" "+(0==Math.floor(t.getUTCHours()/12)?"AM":"PM")+" (UTC)"},pad:a,getDateObj:function(t){1*t==t&&(t*=1);return new Date(t)}}},JuWx:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return a("atmB")}])},atmB:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),s=a.n(n),r=a("MX0m"),o=a.n(r),c=a("q1tI"),u=a.n(c),i=a("YxNg"),l=a("vcXL"),p=a.n(l),f=a("YFqc"),d=a.n(f),x=u.a.createElement,m=a("35l8"),w=a("TXyo"),g=function(t){return x(i.a,{title:"Posts"},x("div",null,t.postsData.map((function(t){return x("div",{key:t.id,className:"jsx-995136902 hoverListItem"},x(d.a,{href:"/posts/[id]",as:"/posts/".concat(t.id)},x("a",{className:"jsx-995136902"},x("span",{className:"jsx-995136902"},x("a",{className:"jsx-995136902"},x("p",{className:"jsx-995136902"}," ",t.title),x("p",{style:{fontSize:"60%"},className:"jsx-995136902"},"Created: ",m.formatDate(m.getDateObj(t.created)))),x("hr",{className:"jsx-995136902"}))))," ",x(o.a,{id:"995136902"},["a.jsx-995136902{-webkit-text-decoration:none;text-decoration:none;}","a.jsx-995136902:link{color:#ccf;}","a.jsx-995136902:visited{color:#ccf;}","a.jsx-995136902:hover{color:#88f;}","a.jsx-995136902:active{color:#88f;}"]))}))))};e.default=g,g.getInitialProps=function(){var t,e,a,n,r,o,c;return s.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return c=function(t,e){return t.createdStamp>e.createdStamp?-1:t.createdStamp<e.createdStamp?1:0},u.next=3,s.a.awrap(p()("https://docs.google.com/spreadsheets/d/e/2PACX-1vSAf5a1pwIj-yjKPFhoyQdHTS3hHBNZVYXQRTCoAHXd6zYMy58iZr0IW054WglBJk9afknsTIeVS8eF/pub?output=csv"));case 3:return t=u.sent,u.next=6,s.a.awrap(t.text());case 6:return e=u.sent,u.next=9,s.a.awrap(w().fromString(e).then((function(t){return t})));case 9:for(a=u.sent,n=0;n<a.length;n++)1*(r=a[n].created)==r&&(r*=1),o=new Date(r),a[n].createdStamp=+o;return a=a.sort(c),u.abrupt("return",{postsData:a});case 13:case"end":return u.stop()}}),null,null,null,Promise)}},vcXL:function(t,e,a){"use strict";var n=self.fetch.bind(self);t.exports=n,t.exports.default=t.exports}},[["JuWx",0,2,7,1,3,4]]]);