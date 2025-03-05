import{_ as F}from"./custom.bf26ae55.js";import{_ as j,o as n,c as o,a as v,l as s,b as i,F as p,r as _,t as u,g as L,f as k,w as I,j as M}from"./entry.0498322a.js";const N={props:{props:{type:Object,required:!0}},data(){const t=this.$t("projects");return{url:this.props.media,projects:t}},methods:{getIncludedProject(){return this.projects.filter(t=>t.name==this.url.name)},generateHref(t,a){return t!=null?t+"/"+this.escapeSpecialChars(a):this.href},escapeSpecialChars(t){return t.replace(/[. @ąźęłńóśźż]/gi,a=>({".":""," ":"","@":"a",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ó:"O",Ś:"S",Ź:"Z",Ż:"Z"})[a])}},mounted(){const t=document.createElement("script");t.setAttribute("src","//www.instagram.com/embed.js"),document.head.appendChild(t)}},S=["href"],z={key:1,class:"fbpost"},B=["src"],H=["href"],V=["src","alt"],P=["data-instgrm-permalink"],T={style:{padding:"16px"}},q=["href"],A=L('<div style="display:flex;flex-direction:row;align-items:center;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:40px;margin-right:14px;width:40px;"></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:100px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:60px;"></div></div></div><div style="padding:19% 0;"></div><div style="display:block;height:50px;margin:0 auto 12px;width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top:8px;"><div style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;font-style:normal;font-weight:550;line-height:18px;">View this post on Instagram</div></div>',4),E=[A],O=["src"],Z=["href"],D=["innerHTML"],J=["src","alt"],W=["src","srcdoc","title"],G={key:2,src:"https://www.facebook.com/plugins/video.php?href=${url}",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"};function K(t,a,c,h,e,d){var g,r,f,y,C,w,b,x;const m=F;return n(),o(p,null,[((g=e.url)==null?void 0:g.type)=="fbgroup"?(n(),o("a",{key:0,href:(r=e.url)==null?void 0:r.href,target:"_blank",class:"fbgroup"},[v(m,{type:"facebook"})],8,S)):s("",!0),((f=e.url)==null?void 0:f.type)=="fbpost"?(n(),o("div",z,[i("iframe",{class:"fbpost",src:"https://www.facebook.com/plugins/post.php?href="+e.url.href+"&show_text=true&width=500",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},`
    `,8,B)])):s("",!0),((y=e.url)==null?void 0:y.constructor)==Object?(n(),o(p,{key:2},[["projects"].includes(e.url.type)?(n(!0),o(p,{key:0},_(d.getIncludedProject(),l=>(n(),o("a",{key:l,href:"/projects/"+l.url,class:"externalJob"},[i("img",{src:"/img/contents/"+l.img,alt:(l==null?void 0:l.name)+" Logo"},null,8,V),i("h3",null,u(l==null?void 0:l.name),1),i("p",null,u(l==null?void 0:l.desc),1)],8,H))),128)):s("",!0),e.url.type=="igpost"?(n(),o("blockquote",{key:1,class:"instagram-media","data-instgrm-captioned":"","data-instgrm-permalink":"https://www.instagram.com/p/"+((C=e.url)==null?void 0:C.id)+"/?utm_source=ig_embed&utm_campaign=loading","data-instgrm-version":"14",style:{background:"#FFF",border:"0","border-radius":"3px","box-shadow":"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",margin:"1px","max-width":"540px","min-width":"326px",padding:"0",width:"calc(100% - 2px)"}},[i("div",T,[i("a",{href:"https://www.instagram.com/p/"+((w=e.url)==null?void 0:w.id)+"/?utm_source=ig_embed&utm_campaign=loading",style:{background:"#FFFFFF","line-height":"0",padding:"0 0","text-align":"center","text-decoration":"none",width:"100%"},target:"_blank"},E,8,q)])],8,P)):s("",!0),e.url.type=="fbvideo"?(n(),o("iframe",{key:2,src:"https://www.facebook.com/plugins/video.php?href="+e.url.href,style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},`
      `,8,O)):s("",!0),e.url.type=="github"?(n(),o("a",{key:3,href:e.url.href,target:"_blank",class:"githubContainer"},[v(m,{type:"github"}),i("p",{innerHTML:e.url.href.split("/")[e.url.href.split("/").length-1]},null,8,D)],8,Z)):s("",!0)],64)):s("",!0),typeof e.url=="string"?(n(),o(p,{key:3},[["jpg","webp"].includes((x=e.url)==null?void 0:x.split(".")[((b=e.url)==null?void 0:b.split(".").length)-1])?(n(),o("img",{key:0,src:"/img/contents/"+e.url,alt:c.props.name},null,8,J)):s("",!0),e.url.includes("youtube.com")?(n(),o("iframe",{key:1,class:"ytvideo",src:`${e.url}&autoplay=1`,srcdoc:`<style>*{box-sizing:border-box;overflow:hidden;padding:0;margin:0}.ytImgLink .ytbuttonContainer{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ytImgLink .ytbuttonContainer:hover .ytbutton{background-color:red}.ytImgLink .ytbuttonContainer .ytbutton{transition:.2s;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#474747;border-radius:50%/10%;font-size:1.5rem;height:3rem;width:4.5rem;position:relative}.ytImgLink img{position:absolute;width:100%;top:0;bottom:0;margin:auto}</style>
      <a class='ytImgLink' href=${e.url}?autoplay=1>
        <img src='${e.url.replace("www","img").replace("embed","vi")+"/hqdefault.jpg"}' alt='${c.props.name}'>
        <div class='ytbuttonContainer'>
          <span class='ytbutton'>▶</span>
        </div>
      </a>`,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",title:c.props.name},`
    `,8,W)):s("",!0),e.url.split("/").includes("videos")?(n(),o("iframe",G,`
    `)):s("",!0)],64)):s("",!0)],64)}const Q=j(N,[["render",K]]);const R={data(){const t=this.$t("projects"),a=t.findIndex(c=>c.url==this.$route.params.name[0]);return{...t[a],projectIndex:a,projects:t}},methods:{getContent(){var c,h,e;const t=[],a=Math.max(((c=this.content)==null?void 0:c.length)||0,((h=this.media)==null?void 0:h.length)||0);for(let d=0;d<=a-1;d++)t.push({header:this.content[d],name:this.name}),t.push({media:(e=this.media)==null?void 0:e[d],name:this.name});return t},getPrevNext(){return[{...this.projects[this.projectIndex-1]},{...this.projects[this.projectIndex+1]}]}}},U={class:"mainImg"},X={key:0},Y=["src","alt"],$={class:"title"},ee={class:"content"},te={key:0},re=["innerHTML"],ne={class:"prevNextWrapper"},oe=["src","alt"],ie={class:"title"};function se(t,a,c,h,e,d){const m=Q,g=M;return n(),o("div",null,[i("header",null,[i("div",U,[t.img?(n(),o("picture",X,[i("img",{src:"/img/contents/"+t.img,alt:t.name},null,8,Y)])):s("",!0),i("div",$,[i("h1",null,u(t.name),1),i("h2",null,u(t.desc),1)])])]),i("main",ee,[(n(!0),o(p,null,_(d.getContent(),r=>(n(),o(p,{key:r},[r!=null&&r.media||r!=null&&r.header?(n(),o("section",te,[r.header?(n(),o("p",{key:0,innerHTML:r.header},null,8,re)):(n(),k(m,{key:1,props:r},null,8,["props"]))])):s("",!0)],64))),128))]),i("div",ne,[(n(!0),o(p,null,_(d.getPrevNext(),r=>(n(),o("div",{key:r},[r!=null&&r.name?(n(),k(g,{key:0,to:"/projects/"+r.url},{default:I(()=>[i("picture",null,[i("img",{src:"/img/contents/"+r.img,alt:r.name+" Logo"},null,8,oe)]),i("div",ie,[i("h4",null,u(r.name),1),i("p",null,u(r.desc),1)])]),_:2},1032,["to"])):s("",!0)]))),128))])])}const ce=j(R,[["render",se]]);export{ce as default};
