(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),r=a.n(c),s=a(2),l=a(3),m=a(5),o=a(4),u=a(6),d=function(){return i.a.createElement("div",{className:"ui fixed inverted main menu"},i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"header item"},i.a.createElement("a",{href:"https://asmdhabibullah.github.io/video-search/"},i.a.createElement("h3",null,"Youtube Video Search"))),i.a.createElement("a",{className:"teal item",href:"https://asmdhabibullah.github.io/video-search/"},"Home"),i.a.createElement("a",{className:"teal item",href:"#"},"About"),i.a.createElement("a",{className:"teal item",href:"#"},"Contact"),i.a.createElement("div",{className:"right menu"},i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"ui yellow button"},"Register")),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"ui teal button"},"Log In")))))},v=a(8),h=a.n(v),E=a(16),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={searchItem:""},a.onInputChange=function(e){a.setState({searchItem:e.target.value})},a.formSubmite=function(e){e.preventDefault(),a.props.onsearchItem(a.state.searchItem)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.formSubmite},i.a.createElement("div",{className:"field"},i.a.createElement("h1",null,"Your youtube Channel Details Info."),i.a.createElement("input",{type:"text",placeholder:"Search here...",value:this.state.searchItem,onChange:this.onInputChange}))))}}]),t}(n.Component),f=a(17),b=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDmmQ-gocGcg88k04tp_vYAt8QJXmP4UxA"}}),N=(a(45),function(e){var t=e.video,a=e.selectVideo;return i.a.createElement("div",null,i.a.createElement("div",{className:"video-items item",onClick:function(){return a(t)}},i.a.createElement("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title))))}),g=function(e){var t=e.videos,a=e.selectVideo,n=t.map(function(e){return i.a.createElement(N,{key:e.id.videoId,selectVideo:a,video:e})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},w=function(e){var t=e.video;if(!t)return i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui active dimmer"},i.a.createElement("div",{className:"ui text loader"},"Loading...")));var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:t.snippet.title,src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectVideo:null},a.onsearchItem=function(){var e=Object(E.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onSelectVideo=function(e){a.setState({selectVideo:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onsearchItem("Ustad Nouman Ali Khan")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(p,{onsearchItem:this.onsearchItem}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(g,{selectVideo:this.onSelectVideo,videos:this.state.videos})))))}}]),t}(n.Component),I=function(){return i.a.createElement("div",{class:"ui inverted vertical footer segment"},i.a.createElement("div",{class:"ui container"},i.a.createElement("div",{class:"ui stackable inverted divided equal height stackable grid"},i.a.createElement("div",{class:"three wide column"},i.a.createElement("h4",{class:"ui inverted header"},"About"),i.a.createElement("div",{class:"ui inverted link list"},i.a.createElement("a",{href:"#",class:"item"},"Sitemap"),i.a.createElement("a",{href:"#",class:"item"},"Contact Us"),i.a.createElement("a",{href:"#",class:"item"},"Religious Ceremonies"),i.a.createElement("a",{href:"#",class:"item"},"Gazebo Plans"))),i.a.createElement("div",{class:"three wide column"},i.a.createElement("h4",{class:"ui inverted header"},"Services"),i.a.createElement("div",{class:"ui inverted link list"},i.a.createElement("a",{href:"#",class:"item"},"Banana Pre-Order"),i.a.createElement("a",{href:"#",class:"item"},"DNA FAQ"),i.a.createElement("a",{href:"#",class:"item"},"How To Access"),i.a.createElement("a",{href:"#",class:"item"},"Favorite X-Men"))),i.a.createElement("div",{class:"seven wide column"},i.a.createElement("h4",{class:"ui inverted header"},"Footer Header"),i.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users.")))))},O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(y,null),i.a.createElement(I,null))}}]),t}(n.Component);r.a.render(i.a.createElement(O,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6b48aaa3.chunk.js.map