(this["webpackJsonpgraph-app"]=this["webpackJsonpgraph-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(12),i=n.n(r),l=(n(20),n(14)),c=(n(21),n(13));n(39),n(42);var u=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=(t[0],t[1],1691.97),r=14.902,i=766.44,u=8849.7,s=212.42,m=.0023993,p=6.67,d=60.03,f=31.1034768,h=16.38,E=1088.621688,v=4.35,w=.14,g=3.2,F=7e4,x=9,S=1;function B(e,t){var n=0;return"Bitcoin"===t&&(n=u),"Ethereum"===t&&(n=s),"Dogecoin"===t&&(n=m),n*e}function N(e,t){var o=0;return"Gold"===t&&(o=n),"Silver"===t&&(o=r),"Platinum"===t&&(o=i),e/f*o}function $(e){return"Newmont"===e?S*d:"Kinross"===e?x*p:0}function b(){return parseFloat(N(h,"Gold")+N(E,"Silver")+N(v,"Platinum")).toFixed(2)}function k(){return parseFloat(B(w,"Bitcoin")+B(F,"Dogecoin")+B(g,"Ethereum")).toFixed(2)}function G(){return parseFloat($("Newmont")+$("Kinross")).toFixed(2)}return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",null,a.a.createElement("h3",null,"Portfolio"),a.a.createElement(c.a,{round:2,zeros:!0,prefix:"$",data:[["Gold",N(h,"Gold")],["Silver",N(E,"Silver")],["Platinum",N(v,"Platinum")],["Bitcoin",B(w,"Bitcoin")],["Dogecoin",B(F,"Dogecoin")],["Ethereum",B(g,"Ethereum")],["Newmont Corp",$("Newmont")],["Kinross Gold Corp",$("Kinross")]],colors:["#d4af37","#e5e4e2","#c0c0c0","#ff9900","#e1b303","#3c3c3d","#ead695","#95791d"]})),a.a.createElement("div",{style:{fontSize:"10px"}},a.a.createElement("p",null,"Total: $",parseFloat(+b()+ +G()+ +k()).toFixed(2)),a.a.createElement("p",null,"Stocks: $",G()),a.a.createElement("p",null,"Crypto: $",k()),a.a.createElement("p",null,"Metal: $",b()),a.a.createElement("p",null,"Ratio: (",(G()/b()).toFixed(3)," : ",(k()/b()).toFixed(3)," : 1)"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4e72b643.chunk.js.map