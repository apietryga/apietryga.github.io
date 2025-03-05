import{i as k,c as l,a as c,w as m,b as t,t as e,F as r,r as _,H as $,j as w,o,k as v,l as u}from"./entry.0498322a.js";import{_ as b}from"./custom.bf26ae55.js";const C=""+globalThis.__publicAssetsURL("img/cv/anotni-pietryga-2024.jpg"),D=t("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),V=t("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),L=t("link",{href:"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",rel:"stylesheet"},null,-1),M={class:"overCV"},T={class:"download-links"},H={class:"cv",ref:"cv"},N=t("picture",null,[t("img",{src:C,alt:"Antoni Pietryga profile photo"})],-1),A=["href"],P=["href"],j=["href"],B=["href"],E=["href"],F=["href"],U={class:"link"},Y={class:"role"},q={class:"summary"},R={class:"li-header"},S={class:"title"},z={key:0},G={class:"date"},I=["innerHTML"],J={key:0,class:"desc"},K={key:1},O={class:"li-subheader"},Q={class:"date"},W=["innerHTML"],X={class:"desc"},Z={key:0,class:"stack"},x={key:2,class:"stack"},tt={class:"description"},lt=k({__name:"cv",setup(nt){const y=({date_from:n,date_to:h})=>{if(!n||!h)return"";let p=h?new Date(h.split(".").reverse().join(".")):new Date;isNaN(p.getTime())&&(p=new Date);const f=new Date(n.split(".").reverse().join(".")),i=Math.abs(p-f),d=Math.ceil(i/(1e3*60*60*24))/365,a=Math.floor(d),g=Math.floor((d-a)*12);return"&nbsp;("+a+"y, "+g+"m)"};return(n,h)=>{const p=$,f=w,i=b;return o(),l(r,null,[c(p,null,{default:m(()=>[D,V,L]),_:1}),t("div",M,[t("div",T,[c(f,{class:"btn",target:"_blank",to:"/cvs/Pietryga_Antoni_2025_03_CV_pl.pdf",download:"/cvs/Pietryga_Antoni_2025_03_CV_pl.pdf",style:{"margin-top":"2em"}},{default:m(()=>[v(e(n.$t("cv.download"))+" PL ",1)]),_:1}),c(f,{class:"btn",target:"_blank",to:"/cvs/Pietryga_Antoni_2025_03_CV_pl.pdf",download:"/cvs/Pietryga_Antoni_2025_03_CV_en.pdf",style:{"margin-top":"2em"}},{default:m(()=>[v(e(n.$t("cv.download"))+" EN ",1)]),_:1})]),t("div",H,[t("article",null,[N,t("h2",null,e(n.$t("cv.contact.title")),1),t("ul",null,[t("li",null,[t("a",{class:"link",href:"mailto:"+n.$t("contact.icons.mail")},[c(i,{type:"mail"}),t("span",null,e(n.$t("contact.icons.mail")),1)],8,A)]),t("li",null,[t("a",{class:"link",href:"tel:"+n.$t("contact.icons.phone").replace(/ /g,"")},[c(i,{type:"phone"}),t("span",null,e(n.$t("contact.icons.phone")),1)],8,P)]),t("li",null,[t("a",{class:"link",href:n.$t("cv.contact.webpage"),target:"_blank"},[c(i,{type:"web"}),t("span",null,e(n.$t("cv.contact.webpage").replace("https://","")),1)],8,j)]),t("li",null,[t("a",{class:"link",href:n.$t("contact.icons.github"),target:"_blank"},[c(i,{type:"github"}),t("span",null,e(n.$t("cv.contact.social_name")),1)],8,B)]),t("li",null,[t("a",{class:"link",href:n.$t("contact.icons.linkedin"),target:"_blank"},[c(i,{type:"linkedin"}),t("span",null,e(n.$t("cv.contact.social_name")),1)],8,E)])]),t("h2",null,e(n.$t("cv.main_skills.title")),1),t("ul",null,[t("li",null,[(o(!0),l(r,null,_(n.$t("cv.main_skills.items"),s=>(o(),l("a",{class:"link",href:n.$t("cv.contact.webpage")+"/projects?q="+s.name,target:"_blank"},[c(i,{type:s.ico},null,8,["type"]),t("span",null,e(s.name),1)],8,F))),256))])]),t("h2",null,e(n.$t("cv.languages.title")),1),t("ul",null,[(o(!0),l(r,null,_(n.$t("cv.languages.items"),s=>(o(),l("li",null,[t("div",U,[c(i,{type:s.ico},null,8,["type"]),t("span",null,[t("p",null,e(s.name),1),t("p",null,e(s.desc),1)])])]))),256))])]),t("section",null,[t("header",null,[t("h1",null,e(n.$t("author")),1),t("p",Y,e(n.$t("role")),1),t("h2",null,e(n.$t("cv.summary.title")),1),t("p",q,e(n.$t("cv.summary.content")),1),t("h2",null,e(n.$t("cv.experience.title")),1)]),t("ol",null,[(o(!0),l(r,null,_(n.$t("cv.experience.items"),s=>{var d;return o(),l("li",null,[t("header",R,[t("p",S,[t("h3",null,e(s.role),1),s.items?u("",!0):(o(),l("sup",z,e(s.title),1))]),t("p",G,[(d=s.items)!=null&&d.length?u("",!0):(o(),l(r,{key:0},[t("span",null,e(s.date_from+" - "+s.date_to),1),t("span",{innerHTML:y(s)},null,8,I)],64))])]),s.items?u("",!0):(o(),l("p",J,e(s.desc),1)),s.items?(o(),l("ul",K,[(o(!0),l(r,null,_(s.items,a=>(o(),l("li",null,[t("div",O,[t("p",Q,[t("span",null,e(a.date_from+" - "+a.date_to),1),t("span",{innerHTML:y(a)},null,8,W)]),t("h4",null,e(a.company),1)]),t("p",X,e(a.desc),1),a.stack?(o(),l("p",Z,[(o(!0),l(r,null,_(a.stack,g=>(o(),l("span",null,e(g),1))),256))])):u("",!0)]))),256))])):u("",!0),s.stack?(o(),l("p",x,[(o(!0),l(r,null,_(s.stack,a=>(o(),l("span",null,e(a),1))),256))])):u("",!0)])}),256))]),t("p",tt,e(n.$t("cv.experience.description")),1)])],512)])],64)}}});export{lt as default};
