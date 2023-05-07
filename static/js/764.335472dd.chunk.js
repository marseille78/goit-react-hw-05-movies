"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{728:function(t,e,r){r.d(e,{Z:function(){return o}});var n="Button_box__qrBQi",a=r(184),o=function(t){var e=t.children,r=t.onClick;return(0,a.jsx)("div",{className:n,onClick:r,children:e})}},547:function(t,e,r){r.d(e,{Z:function(){return p}});var n=r(87),a="MovieItem_box__xoqOx",o="MovieItem_poster__2QxTy",i="MovieItem_info__1V8JC",c="MovieItem_title__JQYXo",s="MovieItem_rating__FVA0T",u=r(184),p=function(t){var e=t.data,r=e.movieId,p=e.poster_path,v=e.title,f=e.vote_average,h=t.state;return(0,u.jsxs)(n.rU,{to:"/movies/".concat(r),state:h,className:a,children:[(0,u.jsx)("div",{className:o,children:(0,u.jsx)("img",{src:p,alt:v})}),(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("span",{className:s,children:f}),(0,u.jsx)("h3",{className:c,children:v})]})]})}},764:function(t,e,r){r.r(e);var n=r(433),a=r(439),o=r(791),i=r(87),c=r(689),s=r(758),u=r(547),p=r(108),v=r(728),f=r(332),h=r(184);e.default=function(){var t=(0,i.lr)(),e=(0,a.Z)(t,1)[0].get("search"),r=(0,o.useState)(1),l=(0,a.Z)(r,2),d=l[0],m=l[1],g=(0,o.useState)([]),_=(0,a.Z)(g,2),w=_[0],x=_[1],j=(0,o.useState)(0),b=(0,a.Z)(j,2),y=b[0],k=b[1],M=(0,o.useState)(!1),Z=(0,a.Z)(M,2),I=Z[0],C=Z[1],N=(0,o.useState)(null),O=(0,a.Z)(N,2),R=O[0],P=O[1],S=(0,c.TH)();(0,o.useEffect)((function(){C(!0),s.E.searchMovies(e,d).then((function(t){var e=t.results,r=t.total_results;k(r),x((function(t){return[].concat((0,n.Z)(t),(0,n.Z)(e))}))})).catch((function(t){P(t)})).finally((function(){C(!1)}))}),[d,e]);var F=w.map((function(t){return(0,h.jsx)(u.Z,{data:t,state:{from:S}},t.movieId)}));return(0,h.jsxs)(h.Fragment,{children:[I&&(0,h.jsx)(p.Z,{}),(0,h.jsxs)("h1",{children:['Searched by "',e,'"']}),(0,h.jsx)("div",{className:"listMovies",children:R?(0,h.jsxs)(f.Z,{children:["I'm sorry. I don't have movies \"",e,'"']}):F}),!R&&w.length>0&&w.length<y&&(0,h.jsx)(v.Z,{onClick:function(){return m((function(t){return t+1}))},children:"Load more"})]})}},758:function(t,e,r){function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,{E:function(){return b}});var o=r(144),i=r(671);function c(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var s=0;function u(t){return"__private_"+s+++"_"+t}var p=r(757),v=r.n(p),f=function(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},h=u("transformTrending"),l=u("transformMovieDetails"),d=u("transformCredits"),m=u("transformMovieReviews"),g=(0,o.Z)((function t(){var e=this;(0,i.Z)(this,t),Object.defineProperty(this,m,{value:j}),Object.defineProperty(this,d,{value:x}),Object.defineProperty(this,l,{value:w}),Object.defineProperty(this,h,{value:_}),this.getResource=function(){var t=a(v().mark((function t(e){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(e,"api_key=").concat("221af12348c3ca060963c8b12f5995d3"));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getTrending=a(v().mark((function t(){var r,n,a=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,e.getResource("/trending/movie/day?page=".concat(r,"&"));case 3:return n=t.sent,t.abrupt("return",c(e,h)[h](n));case 5:case"end":return t.stop()}}),t)}))),this.searchMovies=function(){var t=a(v().mark((function t(r){var n,a,o=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,e.getResource("/search/movie?query=".concat(r,"&page=").concat(n,"&"));case 3:return a=t.sent,t.abrupt("return",c(e,h)[h](a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getMovieDetails=function(){var t=a(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/movie/".concat(r,"?"));case 2:return n=t.sent,t.abrupt("return",c(e,l)[l](n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getMovieCredits=function(){var t=a(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/movie/".concat(r,"/credits?"));case 2:return n=t.sent,t.abrupt("return",c(e,d)[d](n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getMovieReviews=function(){var t=a(v().mark((function t(r){var n,a,o=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,e.getResource("/movie/".concat(r,"/reviews?page=").concat(n,"&"));case 3:return a=t.sent,t.abrupt("return",c(e,m)[m](a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}));function _(t){var e=t.results,r=t.total_results,n=e.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{movieId:e,title:r,poster_path:n?"https://image.tmdb.org/t/p/w500"+n:"/goit-react-hw-05-movies/img/noimage.jpg",vote_average:t.vote_average.toFixed(2)}}));return{results:n,total_results:r}}function w(t){var e=t.genres,r=t.overview,n=t.poster_path,a=t.production_companies,o=t.production_countries,i=t.release_date,c=t.title,s=t.vote_average;return{genres:e.map((function(t){return t.name})),overview:r,poster_path:n?"https://image.tmdb.org/t/p/w500"+n:"goit-react-hw-05-movies/img/noimage.jpg",production_companies:a.map((function(t){return t.name})),production_countries:o.map((function(t){return t.name})),release_date:f(i),title:c,vote_average:s.toFixed(2)}}function x(t){return t.cast.map((function(t){var e=t.character,r=t.name,n=t.profile_path;return{id:t.id,character:e,name:r,profile_path:n?"https://image.tmdb.org/t/p/w500"+n:"/goit-react-hw-05-movies/img/noimage.jpg"}}))}function j(t){return t.results.map((function(t){var e=t.author,r=t.author_details.avatar_path,n=t.content,a=t.created_at,o=t.updated_at,i=t.url,c=t.id;return{author:e,avatar_path:r?r.includes("http")?r.slice(1):"https://image.tmdb.org/t/p/w500"+r:"/goit-react-hw-05-movies/img/noimage.jpg",content:n,created_at:f(a),updated_at:f(o),url:i,id:c}}))}var b=new g}}]);
//# sourceMappingURL=764.335472dd.chunk.js.map