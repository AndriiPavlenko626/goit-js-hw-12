import{S as v,a as L,i as l}from"./assets/vendor-C61sVsxn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=document.querySelector(".gallery"),b=new v(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){const s=t.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:i,comments:h,downloads:p})=>`
        <li class="gallery-item">
          <a href="${o}" class="gallery-link">
            <img src="${a}" alt="${e}" class="gallery-image" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${h}</p>
            <p><b>Downloads:</b> ${p}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",s),b.refresh()}function w(){m.innerHTML=""}const S="49273794-9f9572efe635ab4987a028735",E="https://pixabay.com/api/";async function y(t,s=1,a=15){try{return(await L.get(E,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}})).data}catch(o){throw console.error("Error fetching images:",o),o}}const q=document.querySelector("form");document.querySelector(".gallery");const u=document.querySelector(".loader"),c=document.querySelector(".load-more");let d="",n=1;const g=15;c.classList.add("visually-hidden");q.addEventListener("submit",async t=>{if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),n=1,!d){l.error({title:"Error",message:"Please enter a search query!"});return}w(),c.classList.add("visually-hidden"),u.classList.remove("visually-hidden");try{const s=await y(d,n);s.hits.length===0?l.warning({title:"Oops!",message:"No images found. Try again!"}):(f(s.hits),s.totalHits>g&&c.classList.remove("visually-hidden"))}catch{l.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{u.classList.add("visually-hidden")}});c.addEventListener("click",async()=>{n++,u.classList.remove("visually-hidden");try{const t=await y(d,n);f(t.hits),P(),n*g>=t.totalHits&&(c.classList.add("visually-hidden"),l.info({title:"Info",message:"You've reached the end of search results."}))}catch{l.error({title:"Error",message:"Failed to load more images. Try again later!"})}finally{u.classList.add("visually-hidden")}});function P(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
