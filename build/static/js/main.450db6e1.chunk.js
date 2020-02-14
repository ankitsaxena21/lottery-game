(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{308:function(e,t,a){e.exports=a(651)},313:function(e,t,a){},315:function(e,t,a){},325:function(e,t){},348:function(e,t){},350:function(e,t){},390:function(e,t){},392:function(e,t){},421:function(e,t){},651:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(57),c=a.n(s),i=(a(313),a(27)),l=a.n(i),o=a(70),u=a(71),m=a(72),p=a(74),y=a(76),h=(a(315),a(279)),b=new(a.n(h).a)(window.web3.currentProvider),d=new b.eth.Contract([{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x66341246c655487F5687946Ab32Ef9b72b2c6d8E"),f=(a(530),a(664)),g=a(662),v=a(92),w=a(661),E=a(652),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={manager:"",players:[],balance:"",value:"",message:""},a.onSubmit=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,l.a.awrap(b.eth.getAccounts());case 3:return t=n.sent,a.setState({message:"Waiting on transaction success..."}),n.next=7,l.a.awrap(d.methods.enter().send({from:t[0],value:b.utils.toWei(a.state.value,"ether")}));case 7:a.setState({message:"You have been entered!"}),window.location.reload(!0);case 9:case"end":return n.stop()}}))},a.onClick=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(b.eth.getAccounts());case 2:return e=t.sent,a.setState({message:"Waiting on transaction success..."}),t.next=6,l.a.awrap(d.methods.pickWinner().send({from:e[0]}));case 6:a.setState({message:"A winner has been picked"});case 7:case"end":return t.stop()}}))},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(d.methods.manager().call());case 2:return e=n.sent,n.next=5,l.a.awrap(d.methods.getPlayers().call());case 5:return t=n.sent,n.next=8,l.a.awrap(b.eth.getBalance(d.options.address));case 8:a=n.sent,this.setState({manager:e,players:t,balance:a});case 10:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid mt-7",align:"center"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{role:"main",className:"col-lg-12 ml-auto mr-auto",style:{maxWidth:"980px"}},r.a.createElement("div",{className:"content mr-auto ml-auto"},r.a.createElement(f.a,{as:"h2",textAlign:"center",block:!0},"Lottery Game"),r.a.createElement(f.a,{as:"h3",textAlign:"center",block:!0},"This contract is managed by ",this.state.manager," ",r.a.createElement("br",null),"There are currently ",this.state.players.length," people entered competing to win ",b.utils.fromWei(this.state.balance,"ether")),r.a.createElement(g.a,{onSubmit:this.onSubmit},r.a.createElement(g.a.Field,null,r.a.createElement("table",null,r.a.createElement("tr",{align:"center"},"  ",r.a.createElement(v.a,{as:"a",color:"olive",size:"big"},"Try your luck"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("tr",null,r.a.createElement("th",{width:"700px"},r.a.createElement(w.a,{fluid:!0,placeholder:"Enter the amount",size:"large",label:"My amount",labelPosition:"left",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),r.a.createElement("th",null,r.a.createElement(E.a,{primary:!0,size:"large"},"Enter")))))),r.a.createElement("h1",null,this.state.message),r.a.createElement(v.a,{as:"a",size:"massive"},"Ready to pick a winner"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{primary:!0,size:"big",onClick:this.onClick},"Pick a Winner!")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[308,1,2]]]);
//# sourceMappingURL=main.450db6e1.chunk.js.map