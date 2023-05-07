"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[990],{990:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(439),a=r(791),o=r(87),i=r(758),c=r(273),u="cast_box__l-Euw",s="cast_item__DWdfp",p="cast_name__81-1N",v=r(184),f=function(){var t=(0,o.lr)(),e=(0,n.Z)(t,1)[0],r=(0,a.useState)([]),f=(0,n.Z)(r,2),h=f[0],l=f[1],m=(0,a.useState)(!1),d=(0,n.Z)(m,2),g=d[0],_=d[1],w=(0,a.useState)(null),x=(0,n.Z)(w,2),b=x[0],y=x[1],j=e.get("id");(0,a.useEffect)((function(){_(!0),i.E.getMovieCredits(j).then((function(t){l(t)})).catch((function(t){y(t)})).finally((function(){_(!1)}))}),[j]);var k=h.map((function(t){var e=t.profile_path,r=t.character,n=t.name;return(0,v.jsxs)("li",{className:s,children:[(0,v.jsx)("img",{src:e,alt:n}),(0,v.jsxs)("p",{className:p,children:[n," ",(0,v.jsxs)("span",{children:["(",r,")"]})]})]},n)})),M=g&&(0,v.jsx)(c.Z,{}),R=b?(0,v.jsx)("h2",{children:b.message}):(0,v.jsx)("ul",{className:u,children:k});return(0,v.jsxs)(v.Fragment,{children:[M,R]})}},758:function(t,e,r){function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,{E:function(){return y}});var o=r(144),i=r(671);function c(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var u=0;function s(t){return"__private_"+u+++"_"+t}var p=r(757),v=r.n(p),f=function(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},h=s("transformTrending"),l=s("transformMovieDetails"),m=s("transformCredits"),d=s("transformMovieReviews"),g=(0,o.Z)((function t(){var e=this;(0,i.Z)(this,t),Object.defineProperty(this,d,{value:b}),Object.defineProperty(this,m,{value:x}),Object.defineProperty(this,l,{value:w}),Object.defineProperty(this,h,{value:_}),this.getResource=function(){var t=a(v().mark((function t(e){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(e,"api_key=").concat("221af12348c3ca060963c8b12f5995d3"));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getTrending=a(v().mark((function t(){var r,n,a=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,e.getResource("/trending/movie/day?page=".concat(r,"&"));case 3:return n=t.sent,t.abrupt("return",c(e,h)[h](n));case 5:case"end":return t.stop()}}),t)}))),this.searchMovies=function(){var t=a(v().mark((function t(r){var n,a,o=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,e.getResource("/search/movie?query=".concat(r,"&page=").concat(n,"&"));case 3:return a=t.sent,t.abrupt("return",c(e,h)[h](a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getMovieDetails=function(){var t=a(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/movie/".concat(r,"?"));case 2:return n=t.sent,t.abrupt("return",c(e,l)[l](n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getMovieCredits=function(){var t=a(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/movie/".concat(r,"/credits?"));case 2:return n=t.sent,t.abrupt("return",c(e,m)[m](n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getMovieReviews=function(){var t=a(v().mark((function t(r){var n,a,o=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,e.getResource("/movie/".concat(r,"/reviews?page=").concat(n,"&"));case 3:return a=t.sent,t.abrupt("return",c(e,d)[d](a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}));function _(t){var e=t.results,r=t.total_results,n=e.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{movieId:e,title:r,poster_path:n?"https://image.tmdb.org/t/p/w500"+n:"/goit-react-hw-05-movies/img/noimage.jpg",vote_average:t.vote_average.toFixed(2)}}));return{results:n,total_results:r}}function w(t){var e=t.genres,r=t.overview,n=t.poster_path,a=t.production_companies,o=t.production_countries,i=t.release_date,c=t.title,u=t.vote_average;return{genres:e.map((function(t){return t.name})),overview:r,poster_path:n?"https://image.tmdb.org/t/p/w500"+n:"goit-react-hw-05-movies/img/noimage.jpg",production_companies:a.map((function(t){return t.name})),production_countries:o.map((function(t){return t.name})),release_date:f(i),title:c,vote_average:u.toFixed(2)}}function x(t){return t.cast.map((function(t){var e=t.character,r=t.name,n=t.profile_path;return{id:t.id,character:e,name:r,profile_path:n?"https://image.tmdb.org/t/p/w500"+n:"/goit-react-hw-05-movies/img/noimage.jpg"}}))}function b(t){return t.results.map((function(t){var e=t.author,r=t.author_details.avatar_path,n=t.content,a=t.created_at,o=t.updated_at,i=t.url,c=t.id;return{author:e,avatar_path:r?r.includes("http")?r.slice(1):"https://image.tmdb.org/t/p/w500"+r:"/goit-react-hw-05-movies/img/noimage.jpg",content:n,created_at:f(a),updated_at:f(o),url:i,id:c}}))}var y=new g}}]);
//# sourceMappingURL=990.c6bbf13a.chunk.js.map