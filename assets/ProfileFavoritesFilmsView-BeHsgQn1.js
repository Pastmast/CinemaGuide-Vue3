import{d as y,p as C,s as m,q as F,v as p,x as b,o as S,a as t,b as f,e as o,h as e,F as a,n as c,g as d,y as T,r as V,z as u,l as z,j as i,T as A,A as M,k as N,C as B,_ as P}from"./index-CsBI_whN.js";const j=u+"#favorite",I=u+"#profile-icon",R=u+"#close-icon",$={key:0,class:"profile-favorites-films"},q={class:"container"},E={class:"profile-favorites-films__menu"},H={class:"button-text"},L={class:"button-text"},W={class:"profile-favorites-films__list"},D=["onClick"],G=y({__name:"ProfileFavoritesFilmsView",setup(J){const{windowSize:r}=C(),{isAuthenticated:h}=m(F()),{setFavoritesMovies:l}=p(),{favoritesMovies:k}=m(p()),x=z(),_=b(!1);function g(){_.value=!0,x.push("/profile")}async function w(v){try{await B.delete(`/favorites/${v}`,{headers:{"Content-Type":"application/json"},withCredentials:!0}),await l()}catch(s){console.error("Ошибка при удалении из избранного:",s)}}return S(async()=>{await l()}),(v,s)=>(i(),t(a,null,[f(A,{class:"header-profile"}),o(h)?(i(),t("section",$,[e("div",q,[s[4]||(s[4]=e("h2",{class:"profile-favorites-films__title"},"Мой аккаунт",-1)),e("div",E,[e("button",{class:"profile-favorites-films__menu-favorites",onClick:s[0]||(s[0]=(...n)=>o(l)&&o(l)(...n))},[s[1]||(s[1]=e("span",{class:"menu-icon"},[e("svg",{class:"favorites-icon-favorite",width:"24",height:"24","aria-hidden":"true"},[e("use",{"xlink:href":j})])],-1)),e("span",H,[o(r).x<768?(i(),t(a,{key:0},[c("Избранное")],64)):o(r).x>=768?(i(),t(a,{key:1},[c("Избранные фильмы")],64)):d("",!0)])]),e("button",{class:T(["profile-favorites-films__menu-settings",{active:_.value}]),onClick:g},[s[2]||(s[2]=e("span",{class:"menu-icon"},[e("svg",{class:"favorites-icon-settings",width:"24",height:"24","aria-hidden":"true"},[e("use",{"xlink:href":I})])],-1)),e("span",L,[o(r).x<768?(i(),t(a,{key:0},[c("Настройки")],64)):o(r).x>=768?(i(),t(a,{key:1},[c("Настройка аккаунта")],64)):d("",!0)])],2)]),e("ul",W,[(i(!0),t(a,null,V(o(k),n=>(i(),t("li",{key:n.id,class:"film-card-item"},[e("button",{class:"film-card-item__btn-close",onClick:K=>w(n.id)},s[3]||(s[3]=[e("svg",{class:"close-icon",width:"24",height:"24","aria-hidden":"true"},[e("use",{"xlink:href":R})],-1)]),8,D),f(M,{movie:n,"card-size":String},null,8,["movie"])]))),128))])])])):d("",!0),f(N,{class:"footer-profile-favorites"})],64))}}),Q=P(G,[["__scopeId","data-v-26e159dc"]]);export{Q as default};