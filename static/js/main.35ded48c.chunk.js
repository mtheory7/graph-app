(this["webpackJsonpgraph-app"]=this["webpackJsonpgraph-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(12),i=n.n(a),l=(n(20),n(14)),c=(n(21),n(13));n(39),n(42);var u=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=(t[0],t[1],1599.5),a=13.828,i=683.89,u=6619.63,s=137.72,m=.00185344,p=24.69,d=6.11,E=3.95,f=41.66,h=31.1034768,v=16.38,w=1088.621688,g=4.35,F=.1,x=1.5,G=15e3;function S(e,t){var n=0;return"Bitcoin"===t&&(n=u),"Ethereum"===t&&(n=s),"Dogecoin"===t&&(n=m),n*e}function b(e,t){var o=0;return"Gold"===t&&(o=n),"Silver"===t&&(o=a),"Platinum"===t&&(o=i),e/h*o}function B(e,t){return"Twitter"===t?e*p:"GE"===t?e*d:"Newmont"===t?e*f:"Kinross"===t?e*E:0}function N(){return parseFloat(b(v,"Gold")+b(w,"Silver")+b(g,"Platinum")).toFixed(2)}function $(){return parseFloat(S(F,"Bitcoin")+S(G,"Dogecoin")+S(x,"Ethereum")).toFixed(2)}function k(){return parseFloat(B(1,"Twitter")+B(1,"GE")+B(1,"Newmont")+B(2,"Kinross")).toFixed(2)}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("h3",null,"Portfolio"),r.a.createElement(c.a,{round:2,zeros:!0,prefix:"$",data:[["Gold",b(v,"Gold")],["Silver",b(w,"Silver")],["Platinum",b(g,"Platinum")],["Bitcoin",S(F,"Bitcoin")],["Dogecoin",S(G,"Dogecoin")],["Ethereum",S(x,"Ethereum")],["Newmont Corp",B(1,"Newmont")],["Twitter",B(1,"Twitter")],["GE",B(1,"GE")],["Kinross Gold Corp",B(2,"Kinross")]],colors:["#d4af37","#e5e4e2","#c0c0c0","#ff9900","#e1b303","#3c3c3d","#ead695","#00acee","#026cb6","#95791d"]})),r.a.createElement("div",{style:{fontSize:"10px"}},r.a.createElement("p",null,"Total: $",parseFloat(+N()+ +k()+ +$()).toFixed(2)),r.a.createElement("p",null,"Stocks: $",k()),r.a.createElement("p",null,"Crypto: $",$()),r.a.createElement("p",null,"Metal: $",N()),r.a.createElement("p",null,"Ratio: (",(k()/N()).toFixed(3)," : ",($()/N()).toFixed(3)," : 1)"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.35ded48c.chunk.js.map