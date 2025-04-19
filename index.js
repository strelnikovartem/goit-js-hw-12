import{a as v,S as w,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const B="49762911-ec3b435e9780d83fd842f10c5",M="https://pixabay.com/api/";async function u(o,t=1){const s=new URLSearchParams({key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}),{data:a}=await v(M,{params:s});return a}const q=new w(".gallery-link",{captionsData:"alt",captionDelay:250,animationSpeed:350,captionPosition:"outside"}),p=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".loadMoreBtn");function m(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:L,downloads:S})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${a}">
		<img 
		  class="gallery-image" 
		  src="${s}" 
		  alt="${e}" 
		/>
	</a>
    <div class="info">
      <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${r}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${n}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${L}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${S}</p>
          </li>
      </ul>
    </div>
</li>
`).join("");p.insertAdjacentHTML("beforeend",t),q.refresh()}function x(){p.innerHTML=""}function y(){f.classList.remove("hidden")}function g(){f.classList.add("hidden")}function b(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const P=document.querySelector(".form"),$=document.querySelector(".loadMoreBtn");P.addEventListener("submit",R);$.addEventListener("click",E);let c="",i=1;async function R(o){if(o.preventDefault(),x(),d(),i=1,c=o.target.elements["search-text"].value.trim(),o.target.reset(),!c){l.error({message:"Enter valid query",position:"topRight"});return}y();try{const{hits:t,totalHits:s}=await u(c,i);if(t.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432});return}m(t),b(),Math.ceil(s/15)===i&&(d(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}finally{g()}}async function E(o){i+=1,d(),y();try{const{hits:t,totalHits:s}=await u(c,i);m(t);const{height:a}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"}),b(),Math.ceil(s/15)===i&&(d(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}finally{g()}}
//# sourceMappingURL=index.js.map
