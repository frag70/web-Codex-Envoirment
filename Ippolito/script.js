const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-menu');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Apri il menu');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu');menu.hidden=!open;});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!menu.hidden&&!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width: 701px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!reduceMotion.matches){
 const reveals=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-wait','image-enter');reveals.unobserve(entry.target);}});},{threshold:0.05});
 document.querySelectorAll('.spread-intro,.food-arancini,.norma-title,.norma-frame,.food-index,.sicily-poster h2,.poster-bottom,.dessert-stage h2,.dessert-frame,.cannoli-caption,.granita-caption,.contact-head,.phone-line,.contact-cell').forEach(el=>{el.classList.add('reveal');if(el.getBoundingClientRect().top>window.innerHeight){el.classList.add('reveal-wait');reveals.observe(el);}});
 const poster=document.querySelector('.sicily-poster');
 const mark=poster.querySelector('.scroll-turn');
 let visible=false,queued=false;
 const visibility=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)schedule();});
 visibility.observe(poster);
 function update(){queued=false;if(!visible||reduceMotion.matches)return;const box=poster.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(window.innerHeight-box.top)/(window.innerHeight+box.height)));mark.style.setProperty('--spin',((progress-.5)*18).toFixed(2)+'deg');}
 function schedule(){if(visible&&!queued&&!reduceMotion.matches){queued=true;window.requestAnimationFrame(update);}}
 window.addEventListener('scroll',schedule,{passive:true});
 reduceMotion.addEventListener('change',event=>{if(event.matches){document.querySelectorAll('.reveal-wait').forEach(el=>el.classList.remove('reveal-wait'));mark.style.setProperty('--spin','0deg');}else schedule();});
}
