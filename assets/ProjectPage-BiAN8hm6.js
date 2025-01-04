import{r as l,j as e,c as m,u as z,l as x,A as N,L as G,w as R,b as u,m as f,x as Y,N as E}from"./index-BpxjGuEW.js";import{P as J}from"./Page-C3MZH0Wy.js";import{P as k}from"./ParallaxSlider-Aow_Xq5a.js";import{a as S,S as D,T as I}from"./Header-DpveS1yE.js";import{A as w}from"./AppImage-B9V-e1nQ.js";const q="_ParallaxImagesGroupSliders_j0xjz_1",F={ParallaxImagesGroupSliders:q},T=l.memo(r=>{const{className:o,sliders:t}=r,{scrollYProgress:s}=S({offset:["start end","end start"]}),a=t.slice(0,4),c=t.slice(4,8);return e.jsxs("div",{className:m(F.ParallaxImagesGroupSliders,{},[o]),children:[e.jsx(k,{images:a,progress:s}),e.jsx(k,{revers:!0,images:c,progress:s,direction:"right"})]})});T.displayName="ParallaxImagesGroupSliders";const K="_ProjectButtons_1mn9e_1",X="_wrapper_1mn9e_4",Q="_link_1mn9e_10",V="_arrow_1mn9e_15",W="_prev_1mn9e_19",d={ProjectButtons:K,wrapper:X,link:Q,arrow:V,prev:W},A=l.memo(r=>{const{className:o,nameProject:t}=r,{t:s}=z("projectPage"),[a]=l.useState(x.findIndex(p=>p.path===t)),[c]=l.useState(a<x.length-1?x[a+1]:null),[i]=l.useState(a!==0?x[a-1]:null);return e.jsx("div",{className:m(d.ProjectButtons,{},[o]),children:e.jsxs("div",{className:d.wrapper,children:[i&&e.jsx(N,{variant:"clear",children:e.jsxs(G,{className:m(d.link,{},[d.prev]),to:R(i.path),children:[e.jsx("span",{children:s("previous project")}),e.jsx(D,{className:d.arrow})]})}),c&&e.jsx(N,{variant:"clear",children:e.jsxs(G,{className:d.link,to:R(c.path),children:[e.jsx("span",{children:s("next project")}),e.jsx(D,{className:d.arrow})]})})]})})});A.displayName="ProjectButtons";const Z=""+new URL("iphone-CoXgj5pM.webp",import.meta.url).href,ee="_ProjectMobile_1mxen_1",se="_picture_1mxen_4",te="_image_1mxen_19",ae="_device_1mxen_27",re="_laptopImage_1mxen_35",g={ProjectMobile:ee,picture:se,image:te,device:ae,laptopImage:re},H=l.memo(r=>{const{className:o,images:t}=r,{big:s,small:a}=t;return e.jsxs("div",{className:m(g.ProjectMobile,{},[o]),children:[e.jsx("div",{className:g.picture,children:e.jsx(w,{className:g.image,src:s,spare:a,alt:"project image",loading:"lazy"})}),e.jsx("div",{className:g.device,children:e.jsx(w,{className:g.laptopImage,src:Z,alt:"mobile image"})})]})});H.displayName="ProjectMobile";const oe="_ProjectDevices_pw5l0_1",ce="_wrapper_pw5l0_4",le="_mobiles_pw5l0_11",ne="_mobile_pw5l0_11",v={ProjectDevices:oe,wrapper:ce,mobiles:le,mobile:ne},U=l.memo(r=>{const{className:o,images:t}=r,s=l.useRef(null),{scrollYProgress:a}=S({target:s,offset:["start end","end start"]}),c=u(a,[0,1],["12%","-12%"]),i=u(a,[0,1],["0%","0%"]),p=u(a,[0,1],["-12%","12%"]),h=[c,i,p];return e.jsx("div",{ref:s,className:m(v.ProjectDevices,{},[o]),children:e.jsx("div",{className:v.wrapper,children:e.jsx("div",{className:v.mobiles,children:t==null?void 0:t.map((P,j)=>e.jsx(f.div,{style:{y:h[j]},className:v.mobile,children:e.jsx(H,{images:P})},j))})})})});U.displayName="ProjectDevices";const ie="_ProjectHeader_nun5t_1",me="_wrapper_nun5t_4",pe="_title_nun5t_9",de="_content_nun5t_13",_e="_list_nun5t_16",je="_listItem_nun5t_21",ge="_buttons_nun5t_30",xe="_btn_nun5t_37",n={ProjectHeader:ie,wrapper:me,title:pe,content:de,list:_e,listItem:je,buttons:ge,btn:xe},O=l.memo(r=>{const{className:o,project:t}=r,{t:s}=z("projectPage"),a=l.useRef(null),{scrollYProgress:c}=S({target:a,offset:["start end","end start"]}),i=u(c,[0,1],["70%","0%"]),p=u(c,[0,1],["-25%","35%"]);return e.jsx("section",{ref:a,className:m(n.ProjectHeader,{},[o]),children:e.jsxs("div",{className:n.wrapper,children:[e.jsx("h1",{className:n.title,children:t.name}),e.jsxs("div",{className:n.content,children:[e.jsxs("ul",{className:n.list,children:[e.jsxs("li",{className:n.listItem,children:[e.jsx(I,{borderBottom:!0,smallSize:!0,children:s("my role")}),e.jsx("span",{children:t.role})]}),e.jsxs("li",{className:n.listItem,children:[e.jsx(I,{borderBottom:!0,smallSize:!0,children:s("location and year")}),e.jsxs("span",{children:[t.location," © ",t.year]})]}),e.jsxs("li",{className:n.listItem,children:[e.jsx(I,{borderBottom:!0,smallSize:!0,children:s("technologies")}),e.jsx("span",{children:t.technologies})]})]}),e.jsxs("div",{className:n.buttons,children:[e.jsx(f.div,{style:{y:i},className:n.btn,children:e.jsx(N,{variant:"round",blueBgColor:!0,children:e.jsx("a",{href:t.projectURL,target:"_blank",rel:"noreferrer",children:s("Live site")})})}),t.gitURL&&e.jsx(f.div,{style:{y:p},className:n.btn,children:e.jsx(N,{variant:"round",roundSmall:!0,children:e.jsx("a",{href:t.gitURL,target:"_blank",rel:"noreferrer",children:s("Code")})})})]})]})]})})});O.displayName="ProjectHeader";const ue=""+new URL("device-mbp-15-Bxpmpolq.webp",import.meta.url).href,he=""+new URL("tablet-D3zK6JJD.webp",import.meta.url).href,Pe="_ProjectLaptop_1hl0o_1",ve="_wrapper_1hl0o_4",be="_picture_1hl0o_10",Ne="_image_1hl0o_26",we="_device_1hl0o_34",Ie="_laptopImage_1hl0o_42",_={ProjectLaptop:Pe,wrapper:ve,picture:be,image:Ne,device:we,laptopImage:Ie},$=l.memo(r=>{const{className:o,images:t,tablet:s}=r,{big:a,small:c}=t;return e.jsx("div",{className:m(_.ProjectLaptop,{[_.tablet]:s},[o]),children:e.jsxs("div",{className:_.wrapper,children:[e.jsx("div",{className:_.picture,children:e.jsx(w,{className:_.image,src:a,spare:c,alt:"project image",loading:"lazy"})}),e.jsx("div",{className:_.device,children:e.jsx(w,{className:_.laptopImage,src:s?he:ue,alt:"macbook image"})})]})})});$.displayName="ProjectLaptop";const fe="_ProjectPage_1mtx6_1",$e="_wrapper_1mtx6_1",Se="_container_1mtx6_4",ye="_laptop_1mtx6_9",Le="_sliders_1mtx6_10",Me="_bgGreen_1mtx6_13",Be="_bgOrange_1mtx6_16",b={ProjectPage:fe,wrapper:$e,container:Se,laptop:ye,sliders:Le,bgGreen:Me,bgOrange:Be},Ge=r=>{var h,P,j,y,L,M,B;const{className:o}=r,{name:t}=Y(),[s]=l.useState(()=>x.find(C=>C.path===t));if(!s)return e.jsx(E,{});const a=(P=(h=s==null?void 0:s.images)==null?void 0:h.devices)==null?void 0:P.laptop,c=(y=(j=s==null?void 0:s.images)==null?void 0:j.devices)==null?void 0:y.tablet,i=(M=(L=s==null?void 0:s.images)==null?void 0:L.devices)==null?void 0:M.mobile,p=(B=s==null?void 0:s.images)==null?void 0:B.sliders;return e.jsxs(J,{className:m(b.ProjectPage,{},[o]),children:[e.jsx(O,{project:s}),e.jsx($,{images:a,className:b.laptop}),e.jsx(U,{className:b.bgGreen,images:i}),e.jsx($,{className:b.bgOrange,images:c,tablet:!0}),e.jsx(T,{sliders:p}),e.jsx(A,{nameProject:t})]})};Ge.displayName="ProjectPage";export{Ge as default};
