import{_ as m,r as f,k as _,m as h,A as i,l,f as p,o as g,a as D,b as a,t as b,i as v}from"./index-cF9PEHBv.js";import{s as d}from"./sanity-DSpH5Rqu.js";import{v as j,f as c}from"./vue-portable-text-CDAqXRXx.js";const x={components:{PortableText:j},setup(){let o=f({}),n=_(),r=`*[_type == "project" && slug.current == '`+n.params.slug+`']{
      location,
      startDate,
      endDate,
      slug,
      details,
      organization,
      title,
      availability,
      "aboutImage": aboutImage.asset->url,
    }[0...50]`;const s=()=>{d.fetch(r).then(t=>{if(l.log("yessir",n.params.slug,t),t.length>0){let e=t[0];e.startDate=c(e.startDate),e.endDate=c(e.endDate),o.value=e}}).catch(t=>{l.error("Error fetching data:",t)})};return h(()=>{i.selectedProject.title?o.value=i.selectedProject:(l.log(r),s()),l.log(o.value)}),{project:o,fetchData(){d.fetch(r).then(t=>{t.forEach(e=>{e.startDate=c(e.startDate),e.endDate=c(e.endDate),i.selectedProject=e,o.value=e})},t=>{})}}}},P={class:"container-fluid py-3"},y=a("button",{class:"selectable btn d-flex h-50 py-0 mb-2"},[a("i",{class:"mdi mdi-arrow-left back-arrow"}),a("p",{class:"back-arrow p-0 m-0"},"All Projects")],-1),w={class:"row"},k={class:"col-12"},A={class:"col-12 text-center"},B=["src"];function E(o,n,r,s,t,e){const u=p("PortableText");return g(),D("div",P,[y,a("div",w,[a("div",k,[a("h2",null,b(s.project.title),1)]),a("div",A,[a("img",{class:"img-fluid",src:s.project.aboutImage,alt:"An old, rundown house next to a new house."},null,8,B)])]),v(u,{value:s.project.details,components:{}},null,8,["value"])])}const S=m(x,[["render",E]]);export{S as default};
