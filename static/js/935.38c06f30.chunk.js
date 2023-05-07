"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[935],{935:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(439),a=r(791),i=r(87),o=r(758),c=r(108),s="Reviews_box__AYRi0",u="Reviews_item__DJKij",p="Reviews_avatar__aE2Wu",v="Reviews_body__SwBTK",h="Reviews_details__E-KVc",d="Reviews_content__13k0w",f=r(332),l=r(184),m=function(){var e=(0,i.lr)(),t=(0,n.Z)(e,1)[0],r=(0,a.useState)([]),m=(0,n.Z)(r,2),g=m[0],_=m[1],w=(0,a.useState)(!1),x=(0,n.Z)(w,2),j=x[0],b=x[1],y=(0,a.useState)(null),R=(0,n.Z)(y,2),k=R[0],M=R[1],N=t.get("id");(0,a.useEffect)((function(){b(!0),o.E.getMovieReviews(N).then((function(e){_(e)})).catch((function(e){_([]),M(e)})).finally((function(){b(!1)}))}),[N]);var Z=g.map((function(e){var t=e.author,r=e.avatar_path,n=e.content,a=e.created_at,i=e.updated_at,o=e.url,c=e.id;return(0,l.jsxs)("li",{className:u,children:[(0,l.jsx)("div",{className:p,children:(0,l.jsx)("img",{src:r,alt:t})}),(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)("h3",{children:t}),(0,l.jsxs)("p",{className:h,children:["Created at ",a," ",i&&(0,l.jsxs)("span",{children:["( Updated at ",i," )"]})]}),(0,l.jsx)("div",{className:d,children:n}),(0,l.jsx)("a",{href:o,children:"Link to original"})]})]},c)})),O=0===Z.length?(0,l.jsx)("h2",{children:"No reviews"}):(0,l.jsx)("ul",{className:s,children:Z});return(0,l.jsxs)(l.Fragment,{children:[j&&(0,l.jsx)(c.Z,{}),k?(0,l.jsx)(f.Z,{children:"I'm sorry. Something happened wrong"}):{content:O}]})}},758:function(e,t,r){function n(e,t,r,n,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function c(e){n(o,a,i,c,s,"next",e)}function s(e){n(o,a,i,c,s,"throw",e)}c(void 0)}))}}r.d(t,{E:function(){return b}});var i=r(144),o=r(671);function c(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var s=0;function u(e){return"__private_"+s+++"_"+e}var p=r(757),v=r.n(p),h=function(e){var t=new Date(e);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())},d=u("transformTrending"),f=u("transformMovieDetails"),l=u("transformCredits"),m=u("transformMovieReviews"),g=(0,i.Z)((function e(){var t=this;(0,o.Z)(this,e),Object.defineProperty(this,m,{value:j}),Object.defineProperty(this,l,{value:x}),Object.defineProperty(this,f,{value:w}),Object.defineProperty(this,d,{value:_}),this.getResource=function(){var e=a(v().mark((function e(t){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t,"api_key=").concat("221af12348c3ca060963c8b12f5995d3"));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getTrending=a(v().mark((function e(){var r,n,a=arguments;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,t.getResource("/trending/movie/day?page=".concat(r,"&"));case 3:return n=e.sent,e.abrupt("return",c(t,d)[d](n));case 5:case"end":return e.stop()}}),e)}))),this.searchMovies=function(){var e=a(v().mark((function e(r){var n,a,i=arguments;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,t.getResource("/search/movie?query=".concat(r,"&page=").concat(n,"&"));case 3:return a=e.sent,e.abrupt("return",c(t,d)[d](a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMovieDetails=function(){var e=a(v().mark((function e(r){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/movie/".concat(r,"?"));case 2:return n=e.sent,e.abrupt("return",c(t,f)[f](n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMovieCredits=function(){var e=a(v().mark((function e(r){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/movie/".concat(r,"/credits?"));case 2:return n=e.sent,e.abrupt("return",c(t,l)[l](n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMovieReviews=function(){var e=a(v().mark((function e(r){var n,a,i=arguments;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,t.getResource("/movie/".concat(r,"/reviews?page=").concat(n,"&"));case 3:return a=e.sent,e.abrupt("return",c(t,m)[m](a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));function _(e){var t=e.results,r=e.total_results,n=t.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{movieId:t,title:r,poster_path:n?"https://image.tmdb.org/t/p/w500"+n:"/goit-react-hw-05-movies/img/noimage.jpg",vote_average:e.vote_average.toFixed(2)}}));return{results:n,total_results:r}}function w(e){var t=e.genres,r=e.overview,n=e.poster_path,a=e.production_companies,i=e.production_countries,o=e.release_date,c=e.title,s=e.vote_average;return{genres:t.map((function(e){return e.name})),overview:r,poster_path:n?"https://image.tmdb.org/t/p/w500"+n:"goit-react-hw-05-movies/img/noimage.jpg",production_companies:a.map((function(e){return e.name})),production_countries:i.map((function(e){return e.name})),release_date:h(o),title:c,vote_average:s.toFixed(2)}}function x(e){return e.cast.map((function(e){var t=e.character,r=e.name,n=e.profile_path;return{id:e.id,character:t,name:r,profile_path:n?"https://image.tmdb.org/t/p/w500"+n:"/goit-react-hw-05-movies/img/noimage.jpg"}}))}function j(e){return e.results.map((function(e){var t=e.author,r=e.author_details.avatar_path,n=e.content,a=e.created_at,i=e.updated_at,o=e.url,c=e.id;return{author:t,avatar_path:r?r.includes("http")?r.slice(1):"https://image.tmdb.org/t/p/w500"+r:"/goit-react-hw-05-movies/img/noimage.jpg",content:n,created_at:h(a),updated_at:h(i),url:o,id:c}}))}var b=new g}}]);
//# sourceMappingURL=935.38c06f30.chunk.js.map