(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),s=(n(29),n(1)),i=n(2),u=n(6),l=n(3),d=n(5),p=(n(30),n(4)),m=n(12),f=n(21),h=n(22),v=n(8),O={HAVE_FOOD:"f",HAVE_SNAKE:"s",HAVE_NOTHING:""},E={LEFT:{row:0,column:-1,value:"LEFT",reverse:"RIGHT"},RIGHT:{row:0,column:1,value:"RIGHT",reverse:"LEFT"},UP:{row:-1,column:0,value:"UP",reverse:"DOWN"},DOWN:{row:1,column:0,value:"DOWN",reverse:"UP"}},b=function(e,t){return(e%t+t)%t},k=Object(v.fromJS)({snake:[],cellMatrix:[],foodPos:{row:null,column:null},direction:E.RIGHT.value,score:0,snakeOverlapped:!1}),I=Object(v.fromJS)({gameStarted:!1}),S=Object(h.combineReducers)({boardInfo:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INITIALIZE_CELL_STATE":var o=a.payload,r=o.row,c=o.column;return n.setIn(["cellMatrix",r,c],O.HAVE_NOTHING);case"INITIALIZE_SNAKE":for(var s=Object(v.fromJS)(a.payload),i=0;i<a.payload.length;i++)n=n.setIn(["cellMatrix",a.payload[i].row,a.payload[i].column],O.HAVE_SNAKE);return n.setIn(["snake"],s);case"SET_FOOD_LOCATION":var u=(e=n.get("snake"),t=a.payload,e.forEach(function(e){e.get("row")===t.row&&e.get("column")===t.column&&(t.row=Math.floor(Math.random()*Math.floor(20)),t.column=Math.floor(Math.random()*Math.floor(20)))}),t);return n.setIn(["foodPos","row"],u.row).setIn(["foodPos","column"],u.column).setIn(["cellMatrix",u.row,u.column],O.HAVE_FOOD);case"MOVE_SNAKE":if(n.get("snakeOverlapped"))return n;var l=n.getIn(["snake",0,"row"]),d=n.getIn(["snake",0,"column"]),p=n.get("snake").last().get("row"),m=n.get("snake").last().get("column"),f=E[n.getIn(["direction"])],h={row:b(l+f.row,20),column:b(d+f.column,20)};return function(e,t){return e.findIndex(function(e){return e.get("row")===t.row&&e.get("column")===t.column})>-1}(n.get("snake"),h)?n.setIn(["snakeOverlapped"],!0):(n.getIn(["foodPos","row"])===h.row&&n.getIn(["foodPos","column"])===h.column&&(n=n.updateIn(["score"],function(e){return e+10})),n.setIn(["cellMatrix",h.row,h.column],O.HAVE_SNAKE).setIn(["cellMatrix",p,m],O.HAVE_NOTHING).updateIn(["snake"],function(e){return e.pop().unshift(Object(v.fromJS)(h))}));case"INCREASE_SNAKE_LENGTH":return n.updateIn(["snake"],function(e){return e.push(Object(v.fromJS)(e.last().toJS()))});case"CHANGE_SNAKE_DIRECTION":return E[a.payload.value].reverse===n.get("direction")?n:n.set("direction",a.payload.value);case"STOP_THE_GAME":return n.set("direction",E.RIGHT.value).set("snakeOverlapped",!1).set("score",0);default:return n}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;switch((arguments.length>1?arguments[1]:void 0).type){case"START_THE_GAME":return e.set("gameStarted",!0);case"STOP_THE_GAME":return e.set("gameStarted",!1);default:return e}}}),w=Object(v.Map)({}),T=[f.a],j=Object(m.d)(S,w,Object(m.c)(m.a.apply(void 0,T))),y=n(23),g=n(7),A=n(13),N=Object(A.a)(function(e,t){return e.getIn(["boardInfo","cellMatrix",t.row,t.column])},function(e){return e}),_=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this));var a=e.snake.findIndex(function(t){return t.row===e.row&&t.column===e.column})>-1;return n.state={row:e.row,column:e.column,value:a?O.HAVE_SNAKE:e.foodCell?O.HAVE_FOOD:O.HAVE_NOTHING},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.props.snake.findIndex(function(e){return e.row===n.state.row&&e.column===n.state.column})>-1?this.setState({value:O.HAVE_SNAKE}):this.props.foodCell?this.setState({value:O.HAVE_FOOD}):this.setState({value:O.HAVE_NOTHING})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.row,n=e.column;this.props.initializeCell({row:t,column:n})}},{key:"render",value:function(){var e=this.props.cellState;return o.a.createElement("div",{className:"cell "+e})}}]),t}(a.PureComponent),G=Object(p.b)(function(e,t){return{cellState:N(e,t)}},{initializeCell:function(e){return function(t){t({type:"INITIALIZE_CELL_STATE",payload:e})}}})(_),H=Object(A.a)(function(e){return e.getIn(["boardInfo","score"])},function(e){return e}),M=Object(A.a)(function(e){return e.getIn(["boardInfo","snakeOverlapped"])},function(e){return e}),C=Object(A.a)(function(e){return e.getIn(["gameState","gameStarted"])},function(e){return e}),D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this))).state={rows:e.size.rows,columns:e.size.columns,snake:[{row:1,column:2},{row:1,column:1}],intervalId:null,foodPos:{row:8,column:2}},n.moveSnake=n.moveSnake.bind(Object(g.a)(n)),n.growSnake=n.growSnake.bind(Object(g.a)(n)),n.generateFood=n.generateFood.bind(Object(g.a)(n)),n.startTheGame=n.startTheGame.bind(Object(g.a)(n)),n.keyPressed=n.keyPressed.bind(Object(g.a)(n)),n.initializeCells=n.initializeCells.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"moveSnake",value:function(){this.props.moveSnake()}},{key:"growSnake",value:function(){this.generateFood(),this.props.increaseSnake()}},{key:"componentDidMount",value:function(){this.initializeCells()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"generateFood",value:function(){var e={row:Math.floor(Math.random()*Math.floor(this.state.rows)),column:Math.floor(Math.random()*Math.floor(this.state.columns))};this.setState({foodPos:e}),this.props.setFood(e)}},{key:"startTheGame",value:function(){c.a.findDOMNode(this.refs.theDiv).focus(),this.props.setSnake(this.state.snake),this.props.setFood(this.state.foodPos);var e=setInterval(this.moveSnake,100);this.setState({intervalId:e})}},{key:"keyPressed",value:function(e){switch(e.stopPropagation(),e.keyCode){case 37:this.props.changeSnakeDirection(E.LEFT);break;case 39:this.props.changeSnakeDirection(E.RIGHT);break;case 38:this.props.changeSnakeDirection(E.UP);break;case 40:this.props.changeSnakeDirection(E.DOWN)}}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.props.score>e.score&&this.growSnake(),this.props.started&&!e.started&&this.startTheGame(),this.props.snakeOverlapped&&!e.snakeOverlapped&&(clearInterval(this.state.intervalId),setTimeout(function(){n.initializeCells()},2e3))}},{key:"initializeCells",value:function(){var e=this.state,t=e.rows,n=e.columns,a=e.snake,r=e.foodPos,c=t*n,s=(new Date).getTime();this.cellUnits=Object(y.a)(Array(c)).map(function(e,t){var c=Math.floor(t/n),i=t%n,u=c===r.row&&i===r.column;return o.a.createElement(G,{row:c,column:i,key:t+s,snake:a,foodCell:u})}),this.forceUpdate()}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-game-board",onKeyDown:this.keyPressed,tabIndex:"0",ref:"theDiv"},this.cellUnits)}}]),t}(a.PureComponent),P=Object(p.b)(function(e){return{score:H(e),snakeOverlapped:M(e),started:C(e)}},{setSnake:function(e){return function(t){t({type:"INITIALIZE_SNAKE",payload:e})}},setFood:function(e){return function(t){t({type:"SET_FOOD_LOCATION",payload:e})}},moveSnake:function(){return function(e){e({type:"MOVE_SNAKE"})}},increaseSnake:function(){return function(e){e({type:"INCREASE_SNAKE_LENGTH"})}},changeSnakeDirection:function(e){return function(t){t({type:"CHANGE_SNAKE_DIRECTION",payload:e})}}})(D),F=function(e){var t=e.board_size;return o.a.createElement(P,{size:t})},V=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.score;return o.a.createElement("div",{className:"scoreboard"},o.a.createElement("h3",null,"SCORE: ",e," "))}}]),t}(a.PureComponent),L=Object(p.b)(function(e){return{score:H(e)}},{})(V),R=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.over;return o.a.createElement("div",null,!e&&o.a.createElement("h3",null," GAME RUNNING"),e&&o.a.createElement("h3",null,"###### GAME OVER #####"))}}]),t}(a.Component),K=Object(p.b)(function(e){return{over:M(e)}},{})(R),x=function(e){var t=e.name,n=e.action,a=e.classes;return o.a.createElement("div",null,o.a.createElement("button",{onClick:n,className:"btn "+a},t))},z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).startTheGame=e.startTheGame.bind(Object(g.a)(e)),e.stopTheGame=e.stopTheGame.bind(Object(g.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"startTheGame",value:function(){this.props.startGame()}},{key:"stopTheGame",value:function(){this.props.stopGame()}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.props.snakeOverlapped&&!e.snakeOverlapped&&setTimeout(function(){n.stopTheGame()},2e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(x,{name:"Start",action:this.startTheGame}))}}]),t}(a.Component),U=Object(p.b)(function(e){return{started:C(e),snakeOverlapped:M(e)}},{startGame:function(){return function(e){e({type:"START_THE_GAME"})}},stopGame:function(){return function(e){e({type:"STOP_THE_GAME"})}}})(z),J=function(){return o.a.createElement("div",null,o.a.createElement(K,null),o.a.createElement(U,null),o.a.createElement(L,null))},W={rows:20,columns:20},Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:j},o.a.createElement("div",{className:"App"},o.a.createElement(F,{board_size:W}),o.a.createElement(J,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.41ea69be.chunk.js.map