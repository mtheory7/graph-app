(this["webpackJsonpgraph-app"]=this["webpackJsonpgraph-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(12),i=n.n(r),l=(n(20),n(14)),c=(n(21),n(13));n(39),n(42);var u=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=(t[0],t[1],1684.84),r=17.296,i=814.18,u=9698.58,s=242.36,p=.0025805,d=6.32,m=55.9,f=31.1034768,h=f/5+f/4+5.5+12.38,E=36*f,v=4.35,F=.08,g=.1,w=8e4,x=1,S=1;function B(e,t){var n=0;return"Bitcoin"===t&&(n=u),"Ethereum"===t&&(n=s),"Dogecoin"===t&&(n=p),n*e}function N(e,t){var o=0;return"Gold"===t&&(o=n),"Silver"===t&&(o=r),"Platinum"===t&&(o=i),e/f*o}function $(e){return"Newmont"===e?S*m:"Kinross"===e?x*d:0}function b(){return parseFloat(N(h,"Gold")+N(E,"Silver")+N(v,"Platinum")).toFixed(2)}function k(){return parseFloat(B(F,"Bitcoin")+B(w,"Dogecoin")+B(g,"Ethereum")).toFixed(2)}function G(){return parseFloat($("Newmont")+$("Kinross")).toFixed(2)}return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",null,a.a.createElement("h3",null,"Portfolio"),a.a.createElement(c.a,{round:2,zeros:!0,prefix:"$",data:[["Gold-"+parseFloat(h).toFixed(3)+"g",N(h,"Gold")],["Silver-"+parseFloat(E.toString()).toFixed(3)+"g",N(E,"Silver")],["Platinum-"+parseFloat(v.toString()).toFixed(3)+"g",N(v,"Platinum")],["Bitcoin",B(F,"Bitcoin")],["Dogecoin",B(w,"Dogecoin")],["Ethereum",B(g,"Ethereum")],["Newmont Corp",$("Newmont")],["Kinross Gold Corp",$("Kinross")]],colors:["#d4af37","#e5e4e2","#c0c0c0","#ff9900","#e1b303","#3c3c3d","#ead695","#95791d"]})),a.a.createElement("div",{style:{fontSize:"10px"}},a.a.createElement("p",null,"Total: $",parseFloat(+b()+ +G()+ +k()).toFixed(2)),a.a.createElement("p",null,"Stocks: $",G()),a.a.createElement("p",null,"Crypto: $",k()),a.a.createElement("p",null,"Metal: $",b()),a.a.createElement("p",null,"Ratio: (",(G()/b()).toFixed(3)," : ",(k()/b()).toFixed(3)," : 1)"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.248ff333.chunk.js.map