(window.webpackJsonpui=window.webpackJsonpui||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(11),n(1)),u=n(4),l=n.n(u),s=n(5),f=n.n(s);var m=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e},[e]),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])};n(12);var d=function(){var e,t=c.a.useState([!1,!1]),n=Object(i.a)(t,2),a=n[0],o=n[1],r=c.a.useState(0),u=Object(i.a)(r,2),s=u[0],d=u[1],p=c.a.useState([]),v=Object(i.a)(p,2),h=v[0],w=v[1];return e=h.length>0?null:a[0]&&!a[1]?null:1e3,m(function(){d(function(e){return e+3})},e),c.a.useEffect(function(){fetch("/stream").catch(function(e){return w(h.concat([e]))})},[h]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),c.a.createElement("button",{onClick:function(){o([!0,!0]);var e=new AudioContext,t=e.createOscillator();t.type="sine",t.connect(e.destination),t.start()}},"Play"),c.a.createElement("p",null,"bandwidth: ",f()(s).format("0.0 b")),c.a.createElement("p",null,"errors: ",h.length),h.map(function(e){return c.a.createElement("code",null,e.toString())})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.7849f429.chunk.js.map