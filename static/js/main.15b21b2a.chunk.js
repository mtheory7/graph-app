(this["webpackJsonpgraph-app"]=this["webpackJsonpgraph-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(12),i=n.n(a),l=(n(20),n(14)),c=(n(21),n(13));n(39),n(42);var u=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=(t[0],t[1],1572.88),a=17.754,i=960.83,u=9910,s=224.41,m=.00307209,d=36.48,p=12.89,E=6.62,h=4.97,f=44.29,v=31.1034768,w=16.38,B=715.37,F=4.35,g=.05,G=1.1,x=1e4;function b(e,t){var n=0;return"Bitcoin"===t&&(n=u),"Ethereum"===t&&(n=s),"Dogecoin"===t&&(n=m),n*e}function N(e,t){var o=0;return"Gold"===t&&(o=n),"Silver"===t&&(o=a),"Platinum"===t&&(o=i),e/v*o}function S(e,t){return"FitBit"===t?e*E:"Twitter"===t?e*d:"GE"===t?e*p:"Newmont"===t?e*f:"Kinross"===t?e*h:0}function $(){return parseFloat(N(w,"Gold")+N(B,"Silver")+N(F,"Platinum")).toFixed(2)}function k(){return parseFloat(b(g,"Bitcoin")+b(x,"Dogecoin")+b(G,"Ethereum")).toFixed(2)}function P(){return parseFloat(S(1,"Twitter")+S(1,"GE")+S(1,"FitBit")+S(1,"Newmont")+S(1,"Kinross")).toFixed(2)}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("h3",null,"Portfolio"),r.a.createElement(c.a,{round:2,zeros:!0,prefix:"$",data:[["Gold",N(w,"Gold")],["Silver",N(B,"Silver")],["Platinum",N(F,"Platinum")],["Bitcoin",b(g,"Bitcoin")],["Dogecoin",b(x,"Dogecoin")],["Ethereum",b(G,"Ethereum")],["Newmont Corp",S(1,"Newmont")],["Twitter",S(1,"Twitter")],["GE",S(1,"GE")],["FitBit",S(1,"FitBit")],["Kinross Gold Corp",S(1,"Kinross")]],colors:["#d4af37","#e5e4e2","#c0c0c0","#ff9900","#e1b303","#3c3c3d","#ead695","#00acee","#026cb6","#00B0B9","#95791d"]})),r.a.createElement("div",null,r.a.createElement("p",null,"Total: $",+$()+ +P()+ +k()),r.a.createElement("p",null,"Stocks: $",P()),r.a.createElement("p",null,"Crypto: $",k()),r.a.createElement("p",null,"Metal: $",$()),r.a.createElement("p",null,"Ratio: (",(P()/$()).toFixed(3)," : ",(k()/$()).toFixed(3)," : 1)"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.15b21b2a.chunk.js.map