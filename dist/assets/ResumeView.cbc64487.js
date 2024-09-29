import{_ as h,N as v,B as y,r as _,a as b,o as i,c as s,b as e,d as p,F as r,e as c,t as o,f as d,n as f,w as S,p as k,g as x}from"./index.7943f1d2.js";const w={data(){return{educationJourney:[{id:1,title:"University Of Mumbai",desc:"Bachelor of Science in Information Technology.",year:"2013 \u2014 2016"},{id:2,title:"M.H. Saboo Siddik College of Engineering",desc:"Higher Secondary School Certificate.",year:"2011 \u2014 2013"},{id:3,title:"M. H. Saboo Siddik Polytechnic",desc:"Staff Selection Commission.",year:"2011"}],experienceJourney:[{id:0,title:"Sr. Fullstack Developer",desc:"At Nexgeno Technology Pvt Ltd.",year:"2023 \u2014 Present"},{id:1,title:"Fullstack Developer",desc:"At Mak Enterprises.",year:"2020 \u2014 2023"},{id:2,title:"Web Application Developer",desc:"At Mak Enterprises.",year:"2019 \u2014 2020"},{id:3,title:"Jr. Web Designer",desc:"At Mak Enterprises.",year:"2018 \u2014 2019"}],myCodingSkillsList:[{id:1,title:"Laravel",percentage:"75"},{id:2,title:"Codeigniter",percentage:"75"},{id:3,title:"PHP",percentage:"75"},{id:4,title:"MySQL",percentage:"75"},{id:5,title:"PostgreSQL",percentage:"25"},{id:6,title:"jQuery",percentage:"75"},{id:7,title:"WordPress",percentage:"75"},{id:8,title:"JavaScript",percentage:"60"},{id:9,title:"HTML",percentage:"80"},{id:10,title:"CSS",percentage:"80"},{id:11,title:"Bootstrap",percentage:"80"},{id:12,title:"Git",percentage:"60"},{id:13,title:"VueJS",percentage:"20"},{id:14,title:"ReactJS",percentage:"25"},{id:15,title:"NodeJS",percentage:"15"},{id:16,title:"MongoDB",percentage:"15"},{id:17,title:"NextJS",percentage:"15"}],myLanguageSkillsList:[{id:1,title:"English",percentage:"60"},{id:2,title:"Hindi",percentage:"80"},{id:3,title:"Urdu",percentage:"85"}],myCertifications:null}},methods:{loadMyCertifications(){this.myCertifications=[{id:0,name:"Sr. Software Developer",image:"/resume/img/skills/nexgeno-logo.png",url:"/resume/img/skills/best-manager-at-nexgeno.jpg"},{id:1,name:"Web Application Developer",image:"/resume/img/skills/mak-logo-1.png",url:"/resume/img/skills/web-application-developer-certificate-2022-1.jpg"},{id:2,name:"VueJS Developer Course",image:"/resume/img/skills/vuejs.png",url:"https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/92665/6717859_92665.pdf?1662301098"},{id:3,name:"cPanel & WHM Administrator",image:"/resume/img/skills/cpanel.png",url:"https://university.cpanel.net/user/401041"},{id:4,name:"UI / UX Web Designer",image:"/resume/img/skills/mak-logo-1.png",url:"/resume/img/skills/ui-ux-web-designer-certificate.jpg"}]},viewCredential(l){window.open(l,"_blank")}},mounted(){this.loadMyCertifications()},components:{NavigationMain:v,BreadcrumbInner:y}},n=l=>(k("data-v-7b334824"),l=l(),x(),l),C={class:"box-outer"},M={class:"nav-container"},D={class:"row"},J={class:"col-12 col-lg-7"},L=n(()=>e("h2",{class:"title title--h2"},[e("span",{class:"box box--s2 icon-box"},[e("i",{class:"fa-solid fa-book-open"})]),d("Education ")],-1)),B={class:"timeline"},N={class:"title title--h4 timeline__title"},E={class:"timeline__period"},I={class:"timeline__description"},P={class:"col-12 col-lg-5"},A=n(()=>e("h2",{class:"title title--h2"},[e("span",{class:"box box--s2 icon-box"},[e("i",{class:"fa-regular fa-code"})]),d("Experience ")],-1)),H={class:"timeline"},T={class:"title title--h4 timeline__title"},V={class:"timeline__period"},W={class:"timeline__description"},z=n(()=>e("h2",{class:"title title--h2 mt-3"},"Current Role & Responsibilities",-1)),R=n(()=>e("ul",{class:"role-list"},[e("li",null,"Work on new application features."),e("li",null,"Team communication."),e("li",null,"Task creation, prioritization, and distribution."),e("li",null,"Third-party tools configuration."),e("li",null," Fix bugs and problems across the entire codebase in an efficient, timely manner. "),e("li",null,"Excellent problem solving skills.")],-1)),j=n(()=>e("h2",{class:"title title--h2 mt-3"},"Coding Skills",-1)),F={class:""},U={class:"row"},Q={class:"progress-text"},q={class:"progress-bar"},G=["aria-valuenow"],O=n(()=>e("h2",{class:"title title--h2 mt-3"},"Licenses & Certifications",-1)),X={class:"row"},K={class:"case-item box box--s2 box-inner"},Y={class:"case-item__icon",alt:""},Z={class:"title title--h3",style:{"margin-top":"-4px"}},$={class:"case-item__caption"},ee=["href"],te=d("See Credential "),ie=n(()=>e("i",{class:"fa-regular fa-arrow-up-right-from-square"},null,-1)),se=[te,ie];function oe(l,ne,le,ae,a,re){const g=_("NavigationMain"),m=_("BreadcrumbInner"),u=b("lazy");return i(),s("div",C,[e("div",M,[p(g)]),p(m,{titleData:"Resume"}),e("div",D,[e("div",J,[L,e("div",B,[(i(!0),s(r,null,c(a.educationJourney,t=>(i(),s("article",{key:t.id,class:"timeline__item"},[e("h5",N,o(t.title),1),e("span",E,o(t.year),1),e("p",I,o(t.desc),1)]))),128))])]),e("div",P,[A,e("div",H,[(i(!0),s(r,null,c(a.experienceJourney,t=>(i(),s("article",{key:t.id,class:"timeline__item"},[e("h5",T,o(t.title),1),e("span",V,o(t.year),1),e("p",W,o(t.desc),1)]))),128))])])]),z,R,j,e("div",F,[e("div",U,[(i(!0),s(r,null,c(a.myCodingSkillsList,t=>(i(),s("div",{key:t.id,class:"progress col-lg-4 col-12"},[e("div",Q,[e("span",null,o(t.title),1),d(" "+o(t.percentage)+"% ",1)]),e("div",q,[e("span",{role:"progressbar","aria-valuenow":t.percentage,"aria-valuemin":"0","aria-valuemax":"100",style:f({width:t.percentage+"%","z-index":2})},null,12,G)])]))),128))])]),O,e("div",X,[(i(!0),s(r,null,c(a.myCertifications,t=>(i(),s("div",{key:t.id,class:"col-12 col-lg-6"},[e("div",K,[S(e("img",Y,null,512),[[u,t.image]]),e("div",null,[e("h3",Z,o(t.name),1),e("p",$,[e("a",{href:t.url,target:"_blank"},se,8,ee)])])])]))),128))])])}const de=h(w,[["render",oe],["__scopeId","data-v-7b334824"]]);export{de as default};
