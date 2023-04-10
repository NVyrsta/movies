(()=>{"use strict";var e={9706:(e,t,i)=>{i(6992),i(8674),i(9601),i(7727);var o=i(5010),r=i(3396),n=(0,r._)("header",null,null,-1);function s(e,t){var i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,(0,r._)("main",null,[(0,r.Wm)(i)])],64)}var a=i(89);const c={},u=(0,a.Z)(c,[["render",s]]),l=u;var v=i(2483),m=i(7139),f={class:"home"},_=(0,r._)("input",{type:"submit",value:"Search",class:"search-form__button"},null,-1),d={class:"router-link-button"},p={class:"movies"},h={class:"movies__list"},w={class:"movie__img-container"},g=["src","alt"],y=["onClick"],b={class:"movie__year"},k={class:"movie__title"};function D(e,t,i,n,s,a){var c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,o.iM)((function(){return n.searchMovies&&n.searchMovies.apply(n,arguments)}),["prevent"])),class:"search-form"},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"What are you looking for?","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.query=e}),class:"search-form__input"},null,512),[[o.nr,n.query]]),_],32),(0,r._)("button",d,[(0,r.Wm)(c,{to:"/favorites"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Go to Favorites")]})),_:1})]),(0,r._)("div",p,[(0,r._)("div",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.movies,(function(t){return(0,r.wg)(),(0,r.iD)("div",{class:"movie",key:t.imdbID},[(0,r._)("div",w,[(0,r.Wm)(c,{to:"/movie/"+t.imdbID,class:"movie__link"},{default:(0,r.w5)((function(){return[(0,r._)("img",{src:t.Poster,alt:t.Title+" poster"},null,8,g)]})),_:2},1032,["to"]),(0,r._)("button",{onClick:function(i){return e.$store.commit("toggleFavorites",t)}}," Add to Favorites ",8,y)]),(0,r._)("p",b,(0,m.zw)(t.Year),1),(0,r._)("h3",k,(0,m.zw)(t.Title),1)])})),128))])])])}var M=i(124),I=i(8534),x=(i(3210),i(1539),i(2222),i(8862),i(9826),i(4870)),S=i(65);const O={apikey:"7c53913c"},F={setup:function(){var e=(0,x.iH)(""),t=(0,S.MT)({state:{movies:[]},mutations:{setMovies:function(e,t){e.movies=t},setQuery:function(e,t){e.query=t}},actions:{searchMovies:function(e,t){return(0,I.Z)((0,M.Z)().mark((function i(){var o,r,n;return(0,M.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(o=e.commit,""===t.trim()){i.next=18;break}return i.prev=2,i.next=5,fetch("http://www.omdbapi.com/?apikey=".concat(O.apikey,"&s=").concat(t));case 5:return r=i.sent,i.next=8,r.json();case 8:n=i.sent,o("setMovies",n.Search),o("setQuery",t),localStorage.setItem("query",t),localStorage.setItem("movies",JSON.stringify(n.Search)),i.next=18;break;case 15:i.prev=15,i.t0=i["catch"](2),console.error(i.t0);case 18:case"end":return i.stop()}}),i,null,[[2,15]])})))()}},getters:{getMovieById:function(e){return function(t){return e.movies.find((function(e){return e.imdbID===t}))}}}}),i=(0,r.Fl)((function(){return t.state.movies})),o=function(){t.dispatch("searchMovies",e.value),e.value=""};return(0,r.bv)((function(){var e=localStorage.getItem("query"),i=localStorage.getItem("movies");e&&i?(t.commit("setQuery",e),t.commit("setMovies",JSON.parse(i))):t.dispatch("searchMovies","star wars")})),{query:e,searchMovies:o,movies:i}}},z=(0,a.Z)(F,[["render",D]]),Z=z,j=i.p+"img/imdb-icon.43a8f297.svg";var C={class:"movie-details"},T={class:"movie-details__content"},Y={class:"movie-details__img-container"},H=["src"],q={class:"movie-details__info"},P={class:"movie-details__title"},W={class:"movie-details__actors"},A={class:"movie-details__genre"},U={class:"movie-details__statistics"},B={class:"movie-details__year"},J={class:"movie-details__runtime"},K={class:"movie-details__imdbRating"},N=(0,r._)("img",{src:j,alt:"icon"},null,-1),Q={class:"movie-details__plot"},R={class:"movie-details__director"},$={class:"movie-details__country"};function G(e,t,i,o,n,s){var a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",null,[(0,r.Wm)(a,{to:"/"},{default:(0,r.w5)((function(){return[(0,r.Uk)("BACK")]})),_:1})]),(0,r._)("div",C,[(0,r._)("div",T,[(0,r._)("div",Y,[(0,r._)("img",{src:o.movie.Poster,alt:"movie poster"},null,8,H)]),(0,r._)("div",q,[(0,r._)("h2",P,(0,m.zw)(o.movie.Title),1),(0,r._)("h3",W,"Actors: "+(0,m.zw)(o.movie.Actors),1),(0,r._)("h4",A,(0,m.zw)(o.movie.Genre),1),(0,r._)("div",U,[(0,r._)("span",B,(0,m.zw)(o.movie.Year),1),(0,r._)("span",J,(0,m.zw)(o.movie.Runtime),1),(0,r._)("span",K,[N,(0,r.Uk)(" "+(0,m.zw)(o.movie.imdbRating),1)])]),(0,r._)("p",Q,(0,m.zw)(o.movie.Plot),1),(0,r._)("div",R," Director: "+(0,m.zw)(o.movie.Director),1),(0,r._)("div",$,"Country: "+(0,m.zw)(o.movie.Country),1)])])])],64)}const L={setup:function(){var e=(0,x.iH)({}),t=(0,v.yj)();return(0,r.wF)((0,I.Z)((0,M.Z)().mark((function i(){var o,r;return(0,M.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,fetch("http://www.omdbapi.com/?apikey=".concat(O.apikey,"&i=").concat(t.params.id,"&plot=full"));case 2:return o=i.sent,i.next=5,o.json();case 5:r=i.sent,e.value=r;case 7:case"end":return i.stop()}}),i)})))),{movie:e}}},E=(0,a.Z)(L,[["render",G]]),V=E;var X=(0,r._)("h2",null,"My Favorites",-1),ee={class:"movies"},te={class:"movies__list"},ie={key:0},oe=(0,r._)("p",null,"You haven't added any movies to your favorites yet.",-1),re=[oe],ne={class:"movie__img-container"},se=["src","alt"],ae=["onClick"],ce={class:"movie__year"},ue={class:"movie__title"};function le(e,t,i,o,n,s){var a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",null,[(0,r.Wm)(a,{to:"/"},{default:(0,r.w5)((function(){return[(0,r.Uk)("BACK")]})),_:1})]),(0,r._)("div",null,[X,(0,r._)("div",ee,[(0,r._)("div",te,[0===s.favorites.length?((0,r.wg)(),(0,r.iD)("div",ie,re)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(s.getFavorites(),(function(t){return(0,r.wg)(),(0,r.iD)("div",{key:t.imdbID,class:"movie"},[(0,r._)("div",ne,[(0,r.Wm)(a,{to:"/movie/"+t.imdbID,class:"movie__link"},{default:(0,r.w5)((function(){return[(0,r._)("img",{src:t.Poster,alt:t.Title+" poster"},null,8,se)]})),_:2},1032,["to"]),(0,r._)("button",{onClick:function(i){return e.$store.commit("toggleFavorites",t)}}," Add to Favorites ",8,ae)]),(0,r._)("p",ce,(0,m.zw)(t.Year),1),(0,r._)("h3",ue,(0,m.zw)(t.Title),1)])})),128))])])])],64)}const ve={computed:{favorites:function(){var e=JSON.parse(localStorage.getItem("favorites"));return e||this.$store.state.favorites}},methods:{getFavorites:function(){return this.favorites}}},me=(0,a.Z)(ve,[["render",le]]),fe=me;var _e=[{path:"/",name:"Home",component:Z},{path:"/movie/:id",name:"Movie Detail",component:V},{path:"/favorites",name:"Favorite Movies",component:fe}],de=(0,v.p7)({history:(0,v.PO)("/"),routes:_e});const pe=de;i(5212),i(7327),i(7658);const he=(0,S.MT)({state:{movies:[],favorites:[],query:""},mutations:{setMovies:function(e,t){e.movies=t},saveFavoritesInLocalStorage:function(e){window.localStorage.setItem("favorites",JSON.stringify(e.favorites))},toggleFavorites:function(e,t){e.favorites.some((function(e){return e.imdbID===t.imdbID}))?e.favorites=e.favorites.filter((function(e){return e.imdbID!==t.imdbID})):e.favorites.push(t),this.commit("saveFavoritesInLocalStorage")}},actions:{searchMovies:function(e,t){var i=this;return(0,I.Z)((0,M.Z)().mark((function o(){var r,n,s;return(0,M.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=e.commit,""===t.trim()){o.next=16;break}return o.prev=2,o.next=5,fetch("http://www.omdbapi.com/?apikey=".concat(env.apikey,"&s=").concat(t));case 5:return n=o.sent,o.next=8,n.json();case 8:s=o.sent,r("setMovies",s.Search),console.log("films",i.movies),o.next=16;break;case 13:o.prev=13,o.t0=o["catch"](2),console.error(o.t0);case 16:case"end":return o.stop()}}),o,null,[[2,13]])})))()}},getters:{getMovieById:function(e){return function(t){return e.movies.find((function(e){return e.imdbID===t}))}}}});(0,o.ri)(l).use(pe).use(he).mount("#app")}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.m=e,(()=>{var e=[];i.O=(t,o,r,n)=>{if(!o){var s=1/0;for(l=0;l<e.length;l++){for(var[o,r,n]=e[l],a=!0,c=0;c<o.length;c++)(!1&n||s>=n)&&Object.keys(i.O).every((e=>i.O[e](o[c])))?o.splice(c--,1):(a=!1,n<s&&(s=n));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[o,r,n]}})(),(()=>{i.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return i.d(t,{a:t}),t}})(),(()=>{i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{i.p="/"})(),(()=>{var e={143:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[s,a,c]=o,u=0;if(s.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var l=c(i)}for(t&&t(o);u<s.length;u++)n=s[u],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(l)},o=self["webpackChunkcinemate"]=self["webpackChunkcinemate"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=i.O(void 0,[998],(()=>i(9706)));o=i.O(o)})();
//# sourceMappingURL=app.7d09ee5a.js.map