(this["webpackJsonpgraph-app"]=this["webpackJsonpgraph-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(12),i=n.n(a),l=(n(20),n(14)),c=(n(21),n(13));n(39),n(42);var u=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=(t[0],t[1],1573.53),a=17.706,i=966.66,u=9884.89,s=223.68,m=.00296641,d=35.82,p=12.92,E=5.04,h=44.54,f=31.1034768,v=16.38,w=715.37,g=4.35,G=.05,F=1.1,x=1e4;function b(e,t){var n=0;return"Bitcoin"===t&&(n=u),"Ethereum"===t&&(n=s),"Dogecoin"===t&&(n=m),n*e}function B(e,t){var o=0;return"Gold"===t&&(o=n),"Silver"===t&&(o=a),"Platinum"===t&&(o=i),e/f*o}function N(e,t){return"Twitter"===t?e*d:"GE"===t?e*p:"Newmont"===t?e*h:"Kinross"===t?e*E:0}function S(){return parseFloat(B(v,"Gold")+B(w,"Silver")+B(g,"Platinum")).toFixed(2)}function $(){return parseFloat(b(G,"Bitcoin")+b(x,"Dogecoin")+b(F,"Ethereum")).toFixed(2)}function k(){return parseFloat(N(1,"Twitter")+N(1,"GE")+N(1,"Newmont")+N(2,"Kinross")).toFixed(2)}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("h3",null,"Portfolio"),r.a.createElement(c.a,{round:2,zeros:!0,prefix:"$",data:[["Gold",B(v,"Gold")],["Silver",B(w,"Silver")],["Platinum",B(g,"Platinum")],["Bitcoin",b(G,"Bitcoin")],["Dogecoin",b(x,"Dogecoin")],["Ethereum",b(F,"Ethereum")],["Newmont Corp",N(1,"Newmont")],["Twitter",N(1,"Twitter")],["GE",N(1,"GE")],["Kinross Gold Corp",N(2,"Kinross")]],colors:["#d4af37","#e5e4e2","#c0c0c0","#ff9900","#e1b303","#3c3c3d","#ead695","#00acee","#026cb6","#95791d"]})),r.a.createElement("div",null,r.a.createElement("p",null,"Total: $",+S()+ +k()+ +$()),r.a.createElement("p",null,"Stocks: $",k()),r.a.createElement("p",null,"Crypto: $",$()),r.a.createElement("p",null,"Metal: $",S()),r.a.createElement("p",null,"Ratio: (",(k()/S()).toFixed(3)," : ",($()/S()).toFixed(3)," : 1)"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.546d535c.chunk.js.map