(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{5905:function(e,s,l){"use strict";l.d(s,{M:function(){return c}});var i=l(990),a=l(6546);let c=()=>{i.p8.registerPlugin(a.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{i.p8.fromTo(e,{opacity:0,y:40,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,duration:.4,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-scale");s.forEach(e=>{var s=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");i.p8.fromTo(e,{ease:"sine",scale:s},{scale:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-parallax");window.innerWidth>960&&l.forEach(e=>{var s=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");i.p8.fromTo(e,{ease:"sine",y:s},{y:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let c=document.querySelectorAll(".mil-rotate");c.forEach(e=>{var s=e.dataset.value;i.p8.fromTo(e,{ease:"sine",rotate:0},{rotate:s,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelector(".mil-back-to-top .mil-link");i.p8.set(r,{x:-30,opacity:0}),i.p8.to(r,{x:0,opacity:1,ease:"sine",scrollTrigger:{trigger:"body",start:"top -40%",end:"top -40%",toggleActions:"play none reverse none"}}),i.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}})}},6641:function(e,s,l){"use strict";l.d(s,{R0:function(){return c},UQ:function(){return a},jl:function(){return i}});let i=()=>{let e=document.querySelectorAll('a[href^="#"]');e.forEach(e=>{e.addEventListener("click",s=>{event.preventDefault();var l=document.querySelector(e.getAttribute("href")),i=0;window.innerWidth<1200&&(i=90),window.scrollTo({top:l.offsetTop-i,behavior:"smooth"})})})},a=()=>{var e,s=document.getElementsByClassName("mil-accordion-menu");for(e=0;e<s.length;e++)s[e].onclick=function(){this.classList.toggle("mil-active");var e=this.nextElementSibling;e.style.height?e.style.height=null:e.style.height=e.scrollHeight+"px"}},c=()=>{var e=document.querySelector(".mil-current-page");let s=document.querySelector(".mil-main-menu ul li.mil-active > a");var l="";void 0!=s&&(l=s.innerHTML),e.innerHTML=l}},62:function(e,s,l){"use strict";l.d(s,{Z:function(){return k}});var i=l(5893),a=l(7294),c=l(5905),r=l(990),n=l(979),t=l.n(n);let m=()=>{let e=document.querySelector(".mil-ball"),s=e.querySelector(".mil-icon-1"),l=e.querySelector(".mil-more-text"),i=e.querySelector(".mil-choose-text"),a=e.querySelector("svg");r.p8.set(e,{xPercent:-50,yPercent:-50}),document.addEventListener("pointermove",function(s){r.p8.to(e,{duration:.6,ease:"sine",x:s.clientX,y:s.clientY})});let c=document.querySelectorAll(".mil-drag, .mil-more, .mil-choose");c.forEach(s=>{s.addEventListener("mouseover",s=>{r.p8.to(e,.2,{width:90,height:90,opacity:1,ease:"sine"})}),s.addEventListener("mouseleave",s=>{r.p8.to(e,.2,{width:20,height:20,opacity:.1,ease:"sine"})})});let n=document.querySelectorAll(".mil-accent-cursor");n.forEach(s=>{s.addEventListener("mouseover",s=>{r.p8.to(e,.2,{background:t().accentColor,ease:"sine"}),e.classList.add("mil-accent")}),s.addEventListener("mouseleave",s=>{r.p8.to(e,.2,{background:t().darkColor,ease:"sine"}),e.classList.remove("mil-accent")})});let m=document.querySelectorAll(".mil-drag");m.forEach(e=>{e.addEventListener("mouseover",e=>{r.p8.to(s,.2,{scale:"1",ease:"sine"})}),e.addEventListener("mouseleave",e=>{r.p8.to(s,.2,{scale:"0",ease:"sine"})})});let o=document.querySelectorAll(".mil-more");o.forEach(e=>{e.addEventListener("mouseover",e=>{r.p8.to(l,.2,{scale:"1",ease:"sine"})}),e.addEventListener("mouseleave",e=>{r.p8.to(l,.2,{scale:"0",ease:"sine"})})});let d=document.querySelectorAll(".mil-choose");d.forEach(e=>{e.addEventListener("mouseover",e=>{r.p8.to(i,.2,{scale:"1",ease:"sine"})}),e.addEventListener("mouseleave",e=>{r.p8.to(i,.2,{scale:"0",ease:"sine"})})});let h=document.querySelectorAll("a:not(.mil-choose, .mil-more, .mil-drag, .mil-accent-cursor), input, textarea, .mil-accordion-menu");h.forEach(s=>{s.addEventListener("mouseover",s=>{r.p8.to(e,.2,{scale:0,ease:"sine"}),r.p8.to(a,.2,{scale:0})}),s.addEventListener("mouseleave",s=>{r.p8.to(e,.2,{scale:1,ease:"sine"}),r.p8.to(a,.2,{scale:1})})});let x=document.querySelector("body");x.addEventListener("mousedown",s=>{r.p8.to(e,.2,{scale:.1,ease:"sine"})}),x.addEventListener("mouseup",s=>{r.p8.to(e,.2,{scale:1,ease:"sine"})})};var o=l(6641),d=l(1664),h=l.n(d),x=l(2806),j=l(4002),v=l(1163);let u=e=>{let{extraClass:s}=e,{asPath:l}=(0,v.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("footer",{className:"mil-dark-bg",children:(0,i.jsx)("div",{className:"mi-invert-fix",children:(0,i.jsxs)("div",{className:"container mil-p-120-60",children:[(0,i.jsxs)("div",{className:"row justify-content-between",children:[(0,i.jsxs)("div",{className:"col-md-4 col-lg-4 mil-mb-60",children:[(0,i.jsx)("div",{className:"mil-muted mil-logo mil-up mil-mb-30",children:x.Mv.jY.f}),(0,i.jsx)("p",{className:"mil-light-soft mil-up mil-mb-30",children:"Subscribe our newsletter:"}),(0,i.jsxs)("form",{action:x.Xd.Gp.H,method:"post",target:"_blank",className:"mil-subscribe-form mil-up",children:[(0,i.jsx)("input",{type:"email",placeholder:"Enter our email",name:"EMAIL",required:!0}),(0,i.jsx)("input",{type:"hidden",name:x.Xd.Gp.J}),(0,i.jsx)("button",{type:"submit",className:"mil-button mil-icon-button-sm mil-arrow-place",children:(0,i.jsx)(j.Z,{})})]})]}),(0,i.jsx)("div",{className:"col-md-7 col-lg-6",children:(0,i.jsxs)("div",{className:"row justify-content-end",children:[(0,i.jsx)("div",{className:"col-md-6 col-lg-7",children:(0,i.jsx)("nav",{className:"mil-footer-menu mil-mb-60",children:(0,i.jsx)("ul",{children:x.Mv.GI.map((e,s)=>(0,i.jsx)("li",{className:-1!=l.indexOf(e.link)&&"/"!=e.link||l==e.link?"mil-active mil-up":"mil-up",children:(0,i.jsx)(h(),{href:e.link,children:e.label})},"footer-menu-item-".concat(s)))})})}),(0,i.jsx)("div",{className:"col-md-6 col-lg-5",children:(0,i.jsxs)("ul",{className:"mil-menu-list mil-up mil-mb-60",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Privacy Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Terms and conditions"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Cookie Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Careers"})})]})})]})})]}),(0,i.jsxs)("div",{className:"row justify-content-between flex-sm-row-reverse",children:[(0,i.jsx)("div",{className:"col-md-7 col-lg-6",children:(0,i.jsxs)("div",{className:"row justify-content-between",children:[(0,i.jsxs)("div",{className:"col-md-6 col-lg-5 mil-mb-60",children:[(0,i.jsx)("h6",{className:"mil-muted mil-up mil-mb-30",children:"Canada"}),(0,i.jsxs)("p",{className:"mil-light-soft mil-up",children:["71 South Los Carneros Road, California ",(0,i.jsx)("span",{className:"mil-no-wrap",children:"+51 174 705 812"})]})]}),(0,i.jsxs)("div",{className:"col-md-6 col-lg-5 mil-mb-60",children:[(0,i.jsx)("h6",{className:"mil-muted mil-up mil-mb-30",children:"Germany"}),(0,i.jsxs)("p",{className:"mil-light-soft mil-up",children:["Leehove 40, 2678 MC De Lier, Netherlands ",(0,i.jsx)("span",{className:"mil-no-wrap",children:"+31 174 705 811"})]})]})]})}),(0,i.jsx)("div",{className:"col-md-4 col-lg-6 mil-mb-60",children:(0,i.jsxs)("div",{className:"mil-vert-between",children:[(0,i.jsx)("div",{className:"mil-mb-30",children:(0,i.jsx)("ul",{className:"mil-social-icons mil-up",children:x.xs.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.link,target:"_blank",className:"social-icon",children:(0,i.jsx)("i",{className:e.icon})})},"footer-social-item-".concat(s)))})}),(0,i.jsx)("p",{className:"mil-light-soft mil-up",children:x.Mv.JG})]})})]})]})})})})},p=e=>{let{layout:s,bg:l,instagram:a,extraClass:c}=e;switch(s){case 1:case 2:return;default:return(0,i.jsx)(u,{bg:l,instagram:a,extraclassName:c})}},g=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"mil-back-to-top",children:(0,i.jsxs)("a",{href:"#top",className:"mil-link mil-dark mil-arrow-place",children:[(0,i.jsx)("span",{children:"Back to top"}),(0,i.jsx)(j.Z,{})]})})});var N=l(4835);let f=e=>{let{extraClass:s}=e,[l,c]=(0,a.useState)(!1),r=[],{asPath:n}=(0,v.useRouter)();x.Fs.G.forEach((e,s)=>{let l="";0!=e.children&&(l="mil-has-children"),(-1!=n.indexOf(e.link)&&"/"!=e.link||n==e.link)&&(l+=" mil-active");let i=Object.assign({},e,{classes:l});r.push(i)});let t=e=>{e.preventDefault();let s=document.querySelectorAll(".mil-has-children ul");s.forEach(e=>{e.classList.remove("mil-active")});let l=document.querySelectorAll(".mil-has-children a");l.forEach(e=>{e.classList.remove("mil-active")}),e.target.classList.toggle("mil-active"),e.target.parentNode.querySelector("ul").classList.toggle("mil-active")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"mil-menu-frame ".concat(l?"mil-active":""),children:[(0,i.jsxs)("div",{className:"mil-frame-top",children:[(0,i.jsx)(h(),{href:x.Fs.j.p,className:"mil-logo",children:x.Fs.j.N}),(0,i.jsx)("div",{className:"mil-menu-btn ".concat(l?"mil-active":""),onClick:()=>c(!l),children:(0,i.jsx)("span",{})})]}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"mil-menu-content",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-xl-5",children:(0,i.jsx)("nav",{className:"mil-main-menu",id:"swupMenu",children:(0,i.jsx)("ul",{children:r.map((e,s)=>(0,i.jsxs)("li",{className:e.classes,children:[(0,i.jsx)(h(),{href:e.link,onClick:0!=e.children?e=>t(e):"",children:e.label}),0!=e.children&&(0,i.jsx)("ul",{children:e.children.map((e,l)=>(0,i.jsx)("li",{className:-1!=n.indexOf(e.link)&&"/"!=e.link||n==e.link?"mil-active":"",children:(0,i.jsx)(h(),{href:e.link,children:e.label})},"header-submenu".concat(s,"-item-").concat(l)))})]},"header-menu-item-".concat(s)))})})}),(0,i.jsx)("div",{className:"col-xl-7",children:(0,i.jsxs)("div",{className:"mil-menu-right-frame",children:[(0,i.jsx)("div",{className:"mil-animation-in",children:(0,i.jsx)("div",{className:"mil-animation-frame",children:(0,i.jsx)("div",{className:"mil-animation mil-position-1 mil-scale","data-value-1":"2","data-value-2":"2",children:(0,i.jsx)(N.Z,{})})})}),(0,i.jsxs)("div",{className:"mil-menu-right",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-8 mil-mb-60",children:[(0,i.jsx)("h6",{className:"mil-muted mil-mb-30",children:"Projects"}),(0,i.jsxs)("ul",{className:"mil-menu-list",children:[(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/projects/project-1",className:"mil-light-soft",children:"Interior design studio"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/projects/project-2",className:"mil-light-soft",children:"Home Security Camera"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/projects/project-3",className:"mil-light-soft",children:"Kemia Honest Skincare"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/projects/project-4",className:"mil-light-soft",children:"Cascade of Lava"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/projects/project-5",className:"mil-light-soft",children:"Air Pro by Molekule"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/projects/project-6",className:"mil-light-soft",children:"Tony's Chocolonely"})})]})]}),(0,i.jsxs)("div",{className:"col-lg-4 mil-mb-60",children:[(0,i.jsx)("h6",{className:"mil-muted mil-mb-30",children:"Useful links"}),(0,i.jsxs)("ul",{className:"mil-menu-list",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Privacy Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Terms and conditions"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Cookie Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#.",className:"mil-light-soft",children:"Careers"})})]})]})]}),(0,i.jsx)("div",{className:"mil-divider mil-mb-60"}),(0,i.jsxs)("div",{className:"row justify-content-between",children:[(0,i.jsxs)("div",{className:"col-lg-4 mil-mb-60",children:[(0,i.jsx)("h6",{className:"mil-muted mil-mb-30",children:"Canada"}),(0,i.jsxs)("p",{className:"mil-light-soft mil-up",children:["71 South Los Carneros Road, California ",(0,i.jsx)("span",{className:"mil-no-wrap",children:"+51 174 705 812"})]})]}),(0,i.jsxs)("div",{className:"col-lg-4 mil-mb-60",children:[(0,i.jsx)("h6",{className:"mil-muted mil-mb-30",children:"Germany"}),(0,i.jsxs)("p",{className:"mil-light-soft",children:["Leehove 40, 2678 MC De Lier, Netherlands ",(0,i.jsx)("span",{className:"mil-no-wrap",children:"+31 174 705 811"})]})]})]})]})]})})]})})})]}),(0,i.jsx)("div",{className:"mil-curtain"}),(0,i.jsxs)("div",{className:"mil-frame",children:[(0,i.jsxs)("div",{className:"mil-frame-top",children:[(0,i.jsx)(h(),{href:x.Fs.j.p,className:"mil-logo",children:x.Fs.j.N}),(0,i.jsx)("div",{className:"mil-menu-btn ".concat(l?"mil-active":""),onClick:()=>c(!l),children:(0,i.jsx)("span",{})})]}),(0,i.jsxs)("div",{className:"mil-frame-bottom",children:[(0,i.jsx)("div",{className:"mil-current-page"}),(0,i.jsx)(g,{})]})]})]})},y=e=>{let{layout:s,extraClass:l}=e;switch(s){case 1:case 2:return;default:return(0,i.jsx)(f,{extarclassName:l})}},b=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mil-ball",children:[(0,i.jsx)("span",{className:"mil-icon-1",children:(0,i.jsx)("svg",{viewBox:"0 0 128 128",children:(0,i.jsx)("path",{d:"M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2 c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2 L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9 z"})})}),(0,i.jsx)("div",{className:"mil-more-text",children:"More"}),(0,i.jsx)("div",{className:"mil-choose-text",children:"Сhoose"})]})}),L=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"mil-progress-track",children:(0,i.jsx)("div",{className:"mil-progress"})})}),w=e=>{let{children:s,header:l,footer:r,noHeader:n,noFooter:t,extraClass:d}=e;return(0,a.useEffect)(()=>{(0,c.M)(),m(),(0,o.jl)(),(0,o.R0)()},[]),(0,i.jsxs)("div",{className:"mil-wrapper",id:"top",children:[(0,i.jsx)(b,{}),(0,i.jsx)(L,{}),!n&&(0,i.jsx)(y,{layout:l,extraclassName:d}),(0,i.jsx)("div",{className:"mil-content",children:(0,i.jsxs)("div",{id:"swupMain",className:"mil-main-transition",children:[s,!t&&(0,i.jsx)(p,{layout:r})]})})]})};var k=w},4835:function(e,s,l){"use strict";var i=l(5893);let a=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mil-dodecahedron",children:[(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"mil-pentagon",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})]})});s.Z=a},4002:function(e,s,l){"use strict";var i=l(5893);let a=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"mil-arrow",children:(0,i.jsx)("path",{d:"M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"})});s.Z=a},979:function(e){e.exports={accentColor:"#98afba",darkColor:"#000",lightColor:"#fff"}}}]);