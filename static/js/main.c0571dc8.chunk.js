(this.webpackJsonpnibbl_app=this.webpackJsonpnibbl_app||[]).push([[0],{35:function(e,t,n){e.exports=n(48)},45:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),s=n.n(o),l=n(9),c=n(16),i=n(6),u=n(31),p=(n(44),n(45),n(10)),m=n(1),d=Object(c.c)({currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_CURRENT_USER":return e;case"LOGIN_USER":return t.user;case"UPDATE_USER":return Object(m.a)(Object(m.a)({},e),{},{display_name:t.user.display_name,bio:t.user.bio});case"LIKE_POST":case"LIKE_SINGLE_POST":return Object(m.a)(Object(m.a)({},e),{},{likes:[].concat(Object(p.a)(e.likes),[t.like])});case"UNLIKE_POST":case"UNLIKE_SINGLE_POST":return Object(m.a)(Object(m.a)({},e),{},{likes:e.likes.filter((function(e){return e.id!==t.like.id}))});case"FOLLOW_USER":return Object(m.a)(Object(m.a)({},e),{},{given_follows:[].concat(Object(p.a)(e.given_follows),[t.follow])});case"UNFOLLOW_USER":return Object(m.a)(Object(m.a)({},e),{},{given_follows:e.given_follows.filter((function(e){return e.id!==t.id}))});case"LOGOUT_USER":return{};default:return e}},isLoggedIn:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_CURRENT_USER":return e;case"LOGIN_USER":return!0;case"LOGOUT_USER":return!1;default:return e}},isLoading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_CURRENT_USER":return!0;case"LOGIN_USER":case"LOGOUT_USER":return!1;default:return e}},postsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{posts:[],currentPage:0,loadingLike:!1,loadingPosts:!1,loadingMorePosts:!1,noMorePosts:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_POSTS":return Object(m.a)(Object(m.a)({},e),{},{loadingPosts:!0});case"LOADING_MORE_POSTS":return Object(m.a)(Object(m.a)({},e),{},{loadingMorePosts:!0});case"SET_POSTS":return Object(m.a)(Object(m.a)({},e),{},{currentPage:0,posts:t.posts,loadingPosts:!1,loadingMorePosts:!1,noMorePosts:!1});case"ADD_POSTS":return Object(m.a)(Object(m.a)({},e),{},{loadingMorePosts:!1,currentPage:t.page,posts:[].concat(Object(p.a)(e.posts),Object(p.a)(t.posts))});case"ADD_POST":return Object(m.a)(Object(m.a)({},e),{},{posts:[t.post].concat(Object(p.a)(e.posts))});case"LOADING_LIKE":return Object(m.a)(Object(m.a)({},e),{},{loadingLike:!0,posts:Object(p.a)(e.posts)});case"LIKE_POST":return Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{user:Object(m.a)({},e.user),likes:[].concat(Object(p.a)(e.likes),[t.like])}):e})),loadingLike:!1});case"UNLIKE_POST":return Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.like.post_id?Object(m.a)(Object(m.a)({},e),{},{user:Object(m.a)({},e.user),likes:e.likes.filter((function(e){return e.id!==t.like.id}))}):e})),loadingLike:!1});case"NO_MORE_POSTS":return Object(m.a)(Object(m.a)({},e),{},{loadingMorePosts:!1,noMorePosts:!0});default:return e}},postData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{postNotFound:!1,loadingLike:!1,loadingPost:!0,post:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_POST":return{loadingPost:!0,loadingLike:!1,postNotFound:!1,post:e.post};case"SET_POST":return{postNotFound:!1,loadingLike:!1,loadingPost:!1,post:t.post};case"LOADING_SINGLE_LIKE":return{postNotFound:!1,loadingLike:!0,loadingPost:!1,post:Object(m.a)(Object(m.a)({},e.post),{},{user:Object(m.a)({},e.post.user),likes:Object(p.a)(e.post.likes)})};case"LIKE_SINGLE_POST":return{postNotFound:!1,loadingLike:!1,loadingPost:!1,post:Object(m.a)(Object(m.a)({},e.post),{},{user:Object(m.a)({},e.post.user),likes:[].concat(Object(p.a)(e.post.likes),[t.like])})};case"UNLIKE_SINGLE_POST":return{postNotFound:!1,loadingLike:!1,loadingPost:!1,post:Object(m.a)(Object(m.a)({},e.post),{},{user:Object(m.a)({},e.post.user),likes:e.post.likes.filter((function(e){return e.id!==t.like.id}))})};case"POST_NOT_FOUND":return{postNotFound:!0,loadingLike:!1,loadingPost:!1,post:{}};default:return e}},commentsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loadingComments:!0,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_COMMENTS":return{loadingComments:!0,comments:Object(p.a)(e.comments)};case"SET_COMMENTS":return{loadingComments:!1,comments:t.comments};case"ADD_COMMENT":return{loadingComments:!1,comments:[t.comment].concat(Object(p.a)(e.comments))};case"DELETE_COMMENT":return{loadingComments:!1,comments:e.comments.filter((function(e){return e.id!==t.id}))};default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loadingUser:!0,loadingFollow:!1,userNotFound:!1,user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_USER":return Object(m.a)(Object(m.a)({},e),{},{loadingUser:!0,user:e.user});case"SET_USER":return Object(m.a)(Object(m.a)({},e),{},{loadingUser:!1,user:t.user});case"UPDATE_USER":return Object(m.a)(Object(m.a)({},e),{},{loadingUser:!1,user:Object(m.a)(Object(m.a)({},e.user),{},{display_name:t.user.display_name,bio:t.user.bio})});case"LOADING_FOLLOW":return{loadingUser:!1,loadingFollow:!0,userNotFound:!1,user:e.user};case"SET_FOLLOW":return{loadingUser:!1,loadingFollow:!1,userNotFound:!1,user:Object(m.a)(Object(m.a)({},e.user),{},{followers_count:e.user.followers_count+1})};case"SET_UNFOLLOW":return{loadingUser:!1,loadingFollow:!1,userNotFound:!1,user:Object(m.a)(Object(m.a)({},e.user),{},{followers_count:e.user.followers_count-1})};case"USER_NOT_FOUND":return{loadingUser:!1,loadingFollow:!1,userNotFound:!0,user:e.user};default:return e}},searchData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isSearching:!1,users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH":return{isSearching:!0,users:t.users};case"CLEAR_SEARCH":return{isSearching:!1,users:[]};default:return e}},usersToFollowData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS_TO_FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:t.users});default:return e}}}),h=n(2),f=n(3),E=n(5),b=n(4),O=n(25),g=n.n(O),v=n(32);function y(e){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(g.a.mark((function e(t){var n,a,r,o,s=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:{},r={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},"GET"!==n&&(r.body=JSON.stringify(a),r.headers["Content-Type"]="application/json",r.method=n),e.prev=4,e.next=7,fetch(t,r);case 7:return o=e.sent,e.next=10,o.json();case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}var _=function(e){return localStorage.setItem("token",e.jwt),{type:"LOGIN_USER",user:e.user}},S=n(8),j=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex flex-column justify-content-center m-5"},r.a.createElement("h1",null,"Welcome To NibbL"),r.a.createElement("p",{style:{fontStyle:"italic"}},"Lets Keep It Short"),r.a.createElement("div",{className:"btn-group"},r.a.createElement(l.b,{className:"link-button",to:"/login"},"Login"),r.a.createElement(l.b,{className:"link-button",to:"/signup"},"Sign Up")))}}]),n}(a.Component),k=n(15),L=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:""},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),y("https://powerful-springs-89951.herokuapp.com/api/v1/login","POST",{email:e.state.email,password:e.state.password}).then((function(t){t.logged_in?(e.props.loginUser(t),e.props.history.push("/")):e.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{error:t.error})}))}))},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error;return r.a.createElement("div",{className:"registration w-25 p-4 mx-auto my-4"},r.a.createElement("h3",null,"Login"),a?r.a.createElement("p",{className:"error"},a):null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{onChange:this.handleChange,type:"email",name:"email",value:t,placeholder:"Enter Email",className:"form-control p-2"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:n,placeholder:"Enter Password",className:"form-control p-2"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn form-btn"},"Login"))))}}]),n}(a.Component),w=Object(i.b)(null,(function(e){return{loginUser:function(t){return e(_(t))}}}))(L),U=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),y("https://powerful-springs-89951.herokuapp.com/api/v1/users","POST",{user:{username:e.state.username,email:e.state.email,password:e.state.password,password_confirmation:e.state.password_confirmation,display_name:e.state.display_name,bio:e.state.bio}}).then((function(t){t.logged_in?(e.props.loginUser(t),e.props.history.push("/")):e.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{errors:t.errors,onSecondPage:!1})}))}))},e.state={username:"",email:"",password:"",password_confirmation:"",display_name:"",bio:"",errors:[],usernameTaken:!1},e.form=r.a.createRef(),e}return Object(f.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;t.username!==this.state.username&&y("https://powerful-springs-89951.herokuapp.com/api/v1/users/exists?username=".concat(this.state.username)).then((function(e){n.setState({usernameTaken:e.username_taken})}))}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.display_name,o=e.password,s=e.password_confirmation,l=e.bio,c=e.usernameTaken;return r.a.createElement("div",null,r.a.createElement("form",{ref:this.form,className:"d-flex justify-content-center flex-row",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"registration w-50 p-4 mx-2 my-4"},r.a.createElement("h3",null,"Sign Up"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",{htmlFor:"username"},"Username: "),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},"@")),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"username",value:t,placeholder:"Enter Username",className:"form-control p-2 ".concat(c?"is-invalid":null),required:!0})),c?r.a.createElement("small",null,"Username Taken"):null),r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{onChange:this.handleChange,type:"email",name:"email",value:n,placeholder:"Enter Email",className:"form-control p-2",required:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:o,placeholder:"Enter Password",className:"form-control p-2",required:!0})),r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",{htmlFor:"password_confirmation"},"Password Confirmation: "),r.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password_confirmation",value:s,placeholder:"Enter Password Confirmation",className:"form-control p-2",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btn btn-secondary",value:"Sign Up"}))),r.a.createElement("div",{className:"registration w-25 p-4 mx-2 my-4"},r.a.createElement("h3",null,"Personal Info"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Display Name: "),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"display_name",value:a,className:"form-control p-2"}),r.a.createElement("small",null,"This is separate from your username and can be changed later.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Bio: "),r.a.createElement("textarea",{onChange:this.handleChange,name:"bio",value:l,className:"form-control p-2"})))))}}]),n}(a.Component),P=Object(i.b)(null,(function(e){return{loginUser:function(t){return e(_(t))}}}))(U),D=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid my-5"},r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/",component:j}),r.a.createElement(S.b,{path:"/login",component:w}),r.a.createElement(S.b,{path:"/signup",component:P}),r.a.createElement(S.b,{path:"/:else",render:function(){return r.a.createElement(S.a,{to:"/"})}})))}}]),n}(a.Component),T=n(33),C=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{onChange:function(t){return e.props.handleChange(t.target.value)},value:this.props.value,type:"text",className:"form-control p-2",placeholder:"Search"}))}}]),n}(a.Component);function I(e){var t=e.user;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{onClick:function(){return e.clearSearchBar()},to:"/users/".concat(t.id)},r.a.createElement("span",null,r.a.createElement("strong",null,t.display_name)," ",r.a.createElement("small",null,"@",t.username))))}function F(e){var t=e.searchData.users;return r.a.createElement("div",{style:{zIndex:1},className:"position-absolute"},r.a.createElement("ul",{className:"list-group"},t.map((function(t){return r.a.createElement(I,{key:t.id,clearSearchBar:e.clearSearchBar,user:t})}))))}var M=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){t.length>0?e.handleSearch():e.props.clearSearch(),e.setState({value:t})},e.handleSearch=function(){e.state.value.length>0&&e.props.search(e.state.value)},e.clearSearchBar=function(){e.setState({value:""}),e.props.clearSearch()},e.state={value:""},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.handleSearch=Object(T.debounce)(this.handleSearch,500)}},{key:"render",value:function(){var e=this.props.searchData;return r.a.createElement("div",{className:"position-relative float-right mx-2"},r.a.createElement(C,{value:this.state.value,handleChange:this.handleChange}),r.a.createElement(F,{clearSearchBar:this.clearSearchBar,searchData:e}))}}]),n}(a.Component),A=Object(i.b)((function(e){return{searchData:e.searchData}}),{search:function(e){return function(t){y("https://powerful-springs-89951.herokuapp.com/api/v1/users/search?query=".concat(e)).then((function(e){return t({type:"SET_SEARCH",users:e})}))}},clearSearch:function(){return{type:"CLEAR_SEARCH"}}})(M);var R=Object(i.b)((function(e){return{currentUserId:e.currentUser.id}}))((function(e){return r.a.createElement("header",{className:"p-2 px-4 mynavbar"},r.a.createElement("div",{className:"clearfix"},r.a.createElement("button",{onClick:function(){return e.handleLogout()},className:"btn btn-outline-dark"},"Logout"),r.a.createElement(l.c,{exact:!0,to:"/",className:"float-right mx-1 btn btn-outline-dark"},"Feed"),r.a.createElement(l.c,{to:"/users/".concat(e.currentUserId),className:"float-right mx-1 btn btn-outline-dark"},"Profile"),r.a.createElement(A,null)))}));function x(e){return e.isLiked?r.a.createElement("div",{className:"post-buttons p-2"},r.a.createElement("button",{onClick:function(){var t=e.likes.find((function(t){return t.user_id===e.currentUserId}));e.loadingLike||e.unlikePost(t.id)},className:"btn post-button liked"},"Unlike ",e.likes.length)):r.a.createElement("div",{className:"post-buttons p-2"},r.a.createElement("button",{onClick:function(){e.loadingLike||e.likePost(e.postId)},className:"btn post-button unliked"},"Like ",e.likes.length))}function G(e){var t=e.time_created_string,n=e.user,a=n.id,o=n.display_name,s=n.username;return r.a.createElement("div",{className:"clearfix post-header h-25"},r.a.createElement("div",{className:"float-left mx-2"},r.a.createElement(l.b,{to:"/users/".concat(a)},r.a.createElement("h5",null,o,r.a.createElement("small",null," @".concat(s)),r.a.createElement("br",null),r.a.createElement("small",null,t)))))}var K=Object(i.b)((function(e){return{currentUserId:e.currentUser.id,currentUserLikes:e.currentUser.likes}}))((function(e){var t=e.currentUserId,n=e.currentUserLikes,a=e.loadingLike,o=e.likePost,s=e.unlikePost,c=e.post,i=c.id,u=c.content,p=c.time_created_string,m=c.user,d=c.likes,h=!!n.find((function(e){return e.post_id===i}));return r.a.createElement("div",{className:"post p-3 px-4"},r.a.createElement(G,{user:m,time_created_string:p}),r.a.createElement(l.b,{to:"/posts/".concat(i)},r.a.createElement("div",{className:"post-body p-2"},r.a.createElement("p",null,u))),r.a.createElement(x,{currentUserId:t,postId:i,loadingLike:a,likes:d,likePost:o,unlikePost:s,isLiked:h}))})),W=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={prevY:0},e.handleScroll=function(t){var n=t[0].boundingClientRect.y;e.state.prevY>n&&e.props.handleLoadMore(),e.setState({prevY:n})},e.loadMoreArea=function(){var t=e.props.postsData,n=t.loadingMorePosts;return t.noMorePosts?r.a.createElement("h3",{className:"text-center"},"No More Posts"):n?r.a.createElement("h3",null,"Loading..."):void 0},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.observer=new IntersectionObserver(this.handleScroll,{root:null,rootMargin:"0px",threshold:.5}),this.observer.observe(this.loadingRef)}},{key:"render",value:function(){var e=this,t=this.props,n=t.likePost,a=t.unlikePost,o=t.posts,s=t.loadingLike;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column rounded posts"},o.map((function(e){return r.a.createElement(K,{likePost:n,unlikePost:a,loadingLike:s,key:e.id,post:e})}))),r.a.createElement("div",{className:"mt-2 p-1",ref:function(t){return e.loadingRef=t}},this.loadMoreArea()))}}]),n}(a.Component),B=Object(i.b)(null,{likePost:function(e){return function(t){t({type:"LOADING_LIKE"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/likes","POST",{post_id:e}).then((function(e){e.errors||t({type:"LIKE_POST",id:e.post_id,like:e})}))}},unlikePost:function(e){return function(t){t({type:"LOADING_LIKE"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/likes/".concat(e),"DELETE").then((function(e){t({type:"UNLIKE_POST",like:e})}))}}})(W);function q(){return r.a.createElement("div",{className:"my-5 mx-2"},r.a.createElement("h1",null,"Loading..."))}var H=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={content:"",invalidForm:!1},e.handleChange=function(t){e.setState({content:t.target.value,invalidForm:!1})},e.handleSubmit=function(t){t.preventDefault(),t.target.reportValidity()&&e.state.content.length<=30?(e.props.createPost(e.state.content),e.setState({content:""})):e.setState({invalidForm:!0})},e}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"post-form p-3"},r.a.createElement("form",{className:"needs-validation ".concat(this.state.invalidForm?"was-validated":null),onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Content: "),r.a.createElement("textarea",{required:!0,maxLength:30,value:this.state.content,onChange:this.handleChange,className:"form-control p-3",placeholder:"Make a post!"}),r.a.createElement("small",null,"Characters Left: ",30-this.state.content.length),r.a.createElement("div",{className:"invalid-feedback"},"Invalid Post")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Post",className:"btn submit-button"}))))}}]),n}(a.Component);function J(e){var t=e.user,n=e.currentUserFollows,a=e.followUser,o=e.unfollowUser,s=function(){var e=n.find((function(e){return e.followed_user_id===t.id}));o(e.id)};return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{to:"/users/".concat(t.id)},r.a.createElement("span",null,r.a.createElement("strong",null,t.display_name)," ",r.a.createElement("small",null,"@",t.username))),n.find((function(e){return e.followed_user_id===t.id}))?r.a.createElement("button",{onClick:s,className:"btn btn-sm btn-outline-secondary d-inline mx-2"},"Unfollow"):r.a.createElement("button",{onClick:function(){return a(t.id)},className:"btn btn-sm btn-outline-secondary d-inline mx-2"},"Follow"))}var Y=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUsersToFollow()}},{key:"render",value:function(){var e=this.props,t=e.usersToFollowData,n=e.currentUserFollows,a=e.followUser,o=e.unfollowUser;return r.a.createElement("div",{className:"p-3 users-to-follow"},r.a.createElement("h4",null,"Users To Follow: "),r.a.createElement("ul",{className:"list-group"},t.users.map((function(e){return r.a.createElement(J,{key:e.id,followUser:a,unfollowUser:o,currentUserFollows:n,user:e})}))))}}]),n}(a.Component),z=Object(i.b)((function(e){return{currentUserFollows:e.currentUser.given_follows,usersToFollowData:e.usersToFollowData}}),{fetchUsersToFollow:function(){return function(e){y("https://powerful-springs-89951.herokuapp.com/api/v1/users/to_follow").then((function(t){e({type:"SET_USERS_TO_FOLLOW",users:t})}))}},followUser:function(e){return function(t){t({type:"LOADING_FOLLOW"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/follows","POST",{follow:{followed_user_id:e}}).then((function(e){e.errors||t({type:"FOLLOW_USER",follow:e})}))}},unfollowUser:function(e){return function(t){t({type:"LOADING_FOLLOW"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/follows/".concat(e),"DELETE").then((function(e){t({type:"UNFOLLOW_USER",id:e.id})}))}}})(Y),V=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLoadMore=function(){var t=e.props.postsData,n=t.loadingMorePosts,a=t.noMorePosts,r=t.currentPage;n||a||e.props.fetchMoreFeed(r+1)},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchFeed()}},{key:"render",value:function(){var e=this.props,t=e.loadingPosts,n=e.createPost;return r.a.createElement("div",{className:"mx-2 mx-lg-4 my-2"},r.a.createElement("h1",null,"Feed"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-8"},r.a.createElement(H,{createPost:n}),t?r.a.createElement(q,null):r.a.createElement(B,{handleLoadMore:this.handleLoadMore,posts:this.props.postsData.posts,postsData:this.props.postsData})),r.a.createElement("div",{className:"d-none d-lg-block col-lg-4"},r.a.createElement(z,null))))}}]),n}(a.Component),Q=Object(i.b)((function(e){return{postsData:e.postsData,loadingPosts:e.postsData.loadingPosts}}),{fetchFeed:function(){return function(e){e({type:"LOADING_POSTS"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/posts?page=0").then((function(t){e({type:"SET_POSTS",posts:t})}))}},fetchMoreFeed:function(e){return function(t){t({type:"LOADING_MORE_POSTS"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/posts?page=".concat(e)).then((function(n){0===n.length?t({type:"NO_MORE_POSTS"}):t({type:"ADD_POSTS",posts:n,page:e})}))}},createPost:function(e){return function(t){y("https://powerful-springs-89951.herokuapp.com/api/v1/posts","POST",{post:{content:e}}).then((function(e){e.errors||t({type:"ADD_POST",post:e})}))}}})(V);function X(e){var t,n=e.destroyComment,a=e.currentUserId,o=e.comment,s=o.id,l=o.body,c=o.user_id,i=o.user,u=i.display_name,p=i.username;return t=a===c?r.a.createElement("div",{className:"buttons float-right"},r.a.createElement("button",{onClick:function(){return n(s)},className:"btn btn-sm btn-danger"},"Delete")):null,r.a.createElement("div",{className:"comment p-3 my-2"},t,r.a.createElement("div",null,r.a.createElement("h5",null,u," ",r.a.createElement("small",null,"@".concat(p)))),r.a.createElement("p",null,l))}function Z(e){return r.a.createElement("div",{className:"comments d-flex flex-column"},e.comments.map((function(t){return r.a.createElement(X,{destroyComment:e.destroyComment,currentUserId:e.currentUserId,comment:t})})))}var $=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={body:""},e.handleChange=function(t){e.setState({body:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.createComment(e.props.postId,e.state.body),e.setState({body:""})},e}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"post-form rounded p-3 my-2"},r.a.createElement("h3",null,"Comment"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:this.state.body,type:"text",onChange:this.handleChange,className:"form-control p-1",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Submit",className:"btn submit-button"}))))}}]),n}(a.Component),ee=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchComments(this.props.postId)}},{key:"render",value:function(){var e=this.props,t=e.currentUserId,n=e.postId,a=e.createComment,o=e.destroyComment,s=e.loadingComments,l=e.comments;return s?r.a.createElement(q,null):r.a.createElement("div",null,r.a.createElement($,{postId:n,createComment:a}),r.a.createElement(Z,{destroyComment:o,currentUserId:t,comments:l}))}}]),n}(a.Component),te=Object(i.b)((function(e){return{currentUserId:e.currentUser.id,loadingComments:e.commentsData.loadingComments,comments:e.commentsData.comments}}),{fetchComments:function(e){return function(t){t({type:"LOADING_COMMENTS"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/comments?post_id=".concat(e)).then((function(e){t({type:"SET_COMMENTS",comments:e})}))}},createComment:function(e,t){return function(n){y("https://powerful-springs-89951.herokuapp.com/api/v1/comments","POST",{comment:{post_id:e,body:t}}).then((function(e){200===e.status&&n({type:"ADD_COMMENT",comment:e.comment})}))}},destroyComment:function(e){return function(t){y("https://powerful-springs-89951.herokuapp.com/api/v1/comments/".concat(e),"DELETE").then((function(e){t({type:"DELETE_COMMENT",id:e.id})}))}}})(ee),ne=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPost(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.postNotFound,n=e.loadingLike,a=e.loadingPost,o=e.likePost,s=e.unlikePost,l=e.post;return t?r.a.createElement(S.a,{to:"/"}):r.a.createElement("div",{className:"mx-2"},a?r.a.createElement(q,null):r.a.createElement(K,{post:l,loadingLike:n,likePost:o,unlikePost:s}),r.a.createElement(te,{postId:this.props.match.params.id}))}}]),n}(a.Component),ae=Object(i.b)((function(e){return{postNotFound:e.postData.postNotFound,loadingLike:e.postData.loadingLike,loadingPost:e.postData.loadingPost,post:e.postData.post}}),{fetchPost:function(e){return function(t){t({type:"LOADING_POST"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/posts/".concat(e)).then((function(e){404===e.status?t({type:"POST_NOT_FOUND"}):t({type:"SET_POST",post:e})}))}},likePost:function(e){return function(t){t({type:"LOADING_SINGLE_LIKE"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/likes","POST",{post_id:e}).then((function(e){e.errors||t({type:"LIKE_SINGLE_POST",id:e.post_id,like:e})}))}},unlikePost:function(e){return function(t){t({type:"LOADING_SINGLE_LIKE"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/likes/".concat(e),"DELETE").then((function(e){t({type:"UNLIKE_SINGLE_POST",like:e})}))}}})(ne),re=n(34),oe=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={displayName:e.props.user.display_name,bio:e.props.user.bio},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.updateUser(e.props.user.id,e.state),e.props.setIsEditing(!1)},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"clearfix"},r.a.createElement("h1",{className:"float-left"},"Edit"),r.a.createElement("button",{onClick:function(){return e.props.setIsEditing(!1)},className:"btn btn-danger float-right"},"Cancel")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Display Name: "),r.a.createElement("input",{onChange:this.handleChange,value:this.state.displayName,type:"text",name:"displayName",className:"form-control p-2"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Bio: "),r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.bio,name:"bio",className:"form-control p-2"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-secondary"}))))}}]),n}(a.Component),se=Object(i.b)(null,{updateUser:function(e,t){return function(n){n({type:"LOADING_USER"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/users/".concat(e),"PATCH",{user:{display_name:t.displayName,bio:t.bio}}).then((function(e){e.errors||n({type:"UPDATE_USER",user:e})}))}}})(oe);function le(e){var t=Object(a.useState)(!1),n=Object(re.a)(t,2),o=n[0],s=n[1],l=e.handleFollow,c=e.handleUnfollow,i=e.currentUserFollows,u=e.currentUserId,p=e.user,m=!!i.find((function(e){return e.followed_user_id===p.id})),d=u===p.id;return r.a.createElement("div",{className:"user-header clearfix"},o?r.a.createElement(se,{setIsEditing:s,user:p}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user-bio float-left"},r.a.createElement("h1",null,p.display_name," ",r.a.createElement("small",null,"@",p.username)),r.a.createElement("p",null,p.bio),r.a.createElement("span",{className:"d-inline-block mr-2"},"Followers: ",p.followers_count),r.a.createElement("span",{className:"d-inline-block mr-2"},"Following: ",p.followings_count)),r.a.createElement("div",{className:"float-left my-2 mx-3"},d?r.a.createElement("button",{onClick:function(){return s(!0)},className:"btn btn-secondary"},"Edit Profile"):m?r.a.createElement("button",{onClick:c,className:"btn btn-secondary"},"Unfollow"):r.a.createElement("button",{onClick:l,className:"btn btn-secondary"},"Follow"))))}var ce=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleFollow=function(){e.props.userData.loadingFollow||e.props.followUser(e.props.userData.user.id)},e.handleUnfollow=function(){var t=e.props.currentUserFollows.find((function(t){return t.followed_user_id===e.props.userData.user.id}));e.props.userData.loadingFollow||e.props.unfollowUser(t.id)},e.handleLoadMore=function(){var t=e.props.postsData,n=t.loadingMorePosts,a=t.noMorePosts,r=t.currentPage;n||a||e.props.fetchMorePostsByUser(e.props.match.params.id,r+1)},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsByUser(this.props.match.params.id),this.props.fetchUser(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&(this.props.fetchPostsByUser(this.props.match.params.id),this.props.fetchUser(this.props.match.params.id))}},{key:"render",value:function(){var e=this.props,t=e.currentUserFollows,n=e.currentUserId,a=e.postsData,o=e.userData,s=o.loadingUser,l=o.userNotFound,c=o.user;return l?r.a.createElement(S.a,{to:"/"}):r.a.createElement("div",{className:"mx-5 my-4"},r.a.createElement("div",{className:"my-2 row"},r.a.createElement("div",{className:"col-12 col-lg-8"},s?r.a.createElement(q,null):r.a.createElement(le,{handleFollow:this.handleFollow,handleUnfollow:this.handleUnfollow,currentUserFollows:t,currentUserId:n,user:c}),r.a.createElement("h3",null,"Posts: "),a.loadingPosts?r.a.createElement(q,null):r.a.createElement(B,{handleLoadMore:this.handleLoadMore,postsData:a,posts:a.posts}))))}}]),n}(a.Component),ie=Object(i.b)((function(e){return{postsData:e.postsData,userData:e.userData,currentUserFollows:e.currentUser.given_follows,currentUserId:e.currentUser.id}}),{fetchPostsByUser:function(e){return function(t){t({type:"LOADING_POSTS"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/posts?page=0&user_id=".concat(e)).then((function(e){t({type:"SET_POSTS",posts:e})}))}},fetchMorePostsByUser:function(e,t){return function(n){n({type:"LOADING_MORE_POSTS"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/posts?page=".concat(t,"&user_id=").concat(e)).then((function(e){0===e.length?n({type:"NO_MORE_POSTS"}):n({type:"ADD_POSTS",posts:e,page:t})}))}},fetchUser:function(e){return function(t){t({type:"LOADING_USER"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/users/".concat(e)).then((function(e){404===e.status?t({type:"USER_NOT_FOUND"}):t({type:"SET_USER",user:e})}))}},followUser:function(e){return function(t){t({type:"LOADING_FOLLOW"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/follows","POST",{follow:{followed_user_id:e}}).then((function(e){e.errors||(t({type:"SET_FOLLOW"}),t({type:"FOLLOW_USER",follow:e}))}))}},unfollowUser:function(e){return function(t){t({type:"LOADING_FOLLOW"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/follows/".concat(e),"DELETE").then((function(e){t({type:"SET_UNFOLLOW"}),t({type:"UNFOLLOW_USER",id:e.id})}))}}})(ce),ue=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(){e.props.logoutUser()},e}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,{handleLogout:this.handleLogout}),r.a.createElement("div",{className:"mx-lg-4 p-2 h-100 dashboard"},r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/",component:Q}),r.a.createElement(S.b,{path:"/posts/:id",component:ae}),r.a.createElement(S.b,{path:"/users/:id",component:ie}),r.a.createElement(S.b,{path:"/:else",render:function(){return r.a.createElement(S.a,{to:"/"})}}))))}}]),n}(a.Component),pe=Object(i.b)(null,{logoutUser:function(){return localStorage.removeItem("token"),{type:"LOGOUT_USER"}}})(ue),me=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.checkLoggedInStatus()}},{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,n=e.isLoading,a=t?r.a.createElement(pe,null):r.a.createElement(D,null);return r.a.createElement("div",null,n?r.a.createElement(q,null):a)}}]),n}(a.Component),de=Object(i.b)((function(e){return{isLoggedIn:e.isLoggedIn,isLoading:e.isLoading}}),(function(e){return{checkLoggedInStatus:function(){return e((function(e){e({type:"LOADING_CURRENT_USER"}),y("https://powerful-springs-89951.herokuapp.com/api/v1/logged_in").then((function(t){t.logged_in?e({type:"LOGIN_USER",user:t.user}):e({type:"LOGOUT_USER"})}))}))}}}))(me),he=Object(c.d)(d,Object(c.a)(u.a));s.a.render(r.a.createElement(i.a,{store:he},r.a.createElement(l.a,{basename:"/nibbl"},r.a.createElement(de,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c0571dc8.chunk.js.map