(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(13),n(3)),i=n(4),s=n(6),u=n(5),h=n(7),m=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:"alien image"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))},d=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement("div",null,r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email}))}));return r.a.createElement("div",null,n,";")},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"}},e.children)},v=function(e){e.searchbox;var t=e.searchChange;return r.a.createElement("input",{type:"search",placeholder:"Search Robots",onChange:t})},b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).OnSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})})),console.log("Check")}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(v,{searchChange:this.OnSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:t})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement("div",null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d501128b.chunk.js.map