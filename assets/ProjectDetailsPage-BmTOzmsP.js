import{_,r as m,k as f,m as g,q as p,A as n,l,s as u,f as h,o as v,a as D,b as e,t as b,i as j,F as P}from"./index-B63aHYVF.js";import{v as x,f as c}from"./GlobalUtils-RTtlYDsE.js";const y={components:{PortableText:x},setup(){let s=m({}),r=f(),i=g(),a=`*[_type == "project" && slug.current == '`+r.params.slug+`']{
      location,
      startDate,
      endDate,
      slug,
      details,
      organization,
      title,
      availability,
      "aboutImage": aboutImage.asset->url,
    }[0...50]`;const d=()=>{u.fetch(a).then(o=>{if(l.log("yessir",r.params.slug,o),o.length>0){let t=o[0];t.startDate=c(t.startDate),t.endDate=c(t.endDate),s.value=t}}).catch(o=>{l.error("Error fetching data:",o)})};return p(()=>{n.selectedProject.title?s.value=n.selectedProject:(l.log(a),d()),l.log(s.value)}),{project:s,router:i,fetchData(){u.fetch(a).then(o=>{o.forEach(t=>{t.startDate=c(t.startDate),t.endDate=c(t.endDate),n.selectedProject=t,s.value=t})},o=>{})}}}},k=e("i",{class:"mdi mdi-arrow-left back-arrow"},null,-1),w=e("p",{class:"back-arrow p-0 m-0"},"All Projects",-1),A=[k,w],B={class:"container py-3"},E={class:"row"},I={class:"col-12"},T={class:"col-12 text-center"},q=["src","alt"],C={class:"col-12 pt-3"};function F(s,r,i,a,d,o){const t=h("PortableText");return v(),D(P,null,[e("button",{class:"selectable btn d-flex h-50 py-0 mb-2",onClick:r[0]||(r[0]=N=>a.router.back())},A),e("div",B,[e("div",E,[e("div",I,[e("h2",null,b(a.project.title),1)]),e("div",T,[e("img",{class:"img-fluid",src:a.project.aboutImage,alt:a.project.title+"project image"},null,8,q)]),e("div",C,[j(t,{value:a.project.details,components:{}},null,8,["value"])])])])],64)}const V=_(y,[["render",F]]);export{V as default};
