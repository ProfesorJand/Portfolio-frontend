(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,c){e.exports={containerProyects:"proyects_containerProyects___9uqD",container:"proyects_container__3jgbR",img_thumbnail:"proyects_img_thumbnail__3o8TS",InputGithub:"proyects_InputGithub__knwzg",Info_Actions_Github:"proyects_Info_Actions_Github__1eLwE"}},14:function(e,t,c){e.exports={container:"perfil_container__2Dc4V",containerLeft:"perfil_containerLeft__2U_zX",containerRight:"perfil_containerRight__1Dy53",image:"perfil_image__2pNv2","image-cropped-transform":"perfil_image-cropped-transform__2a5RP"}},29:function(e,t,c){e.exports={sidenav:"navbar_sidenav__2PZUB"}},42:function(e,t,c){},44:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),i=c(28),s=c.n(i),r=(c(42),c(29)),o=c.n(r),j=c(2);function l(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:o.a.sidenav,children:[Object(j.jsx)("a",{href:"#aboutMe",children:"About"}),Object(j.jsx)("a",{href:"#proyects",children:"Proyects"}),Object(j.jsx)("a",{href:"#contact",children:"Contact"})]})})}c(44);var d=c(14),b=c.n(d),u=c.p+"static/media/Foto_cuadrada_Jorge.221612ff.png",h=c(15),m=c(0),p=c(7),O=c.n(p);function x(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:O.a.container,children:[Object(j.jsx)("div",{className:"containerIcons",children:Object(j.jsx)(m.b.Provider,{value:{className:"".concat(O.a["react-icons-github"]," ").concat(O.a["react-icons"]," ")},children:Object(j.jsx)(h.a,{})})}),Object(j.jsx)("div",{className:"containerIcons",children:Object(j.jsx)(m.b.Provider,{value:{className:"".concat(O.a["react-icons-linkedin"],"  ").concat(O.a["react-icons"]," ")},children:Object(j.jsx)(h.c,{})})}),Object(j.jsx)("div",{className:"containerIcons",children:Object(j.jsx)(m.b.Provider,{value:{className:"".concat(O.a["react-icons-instagram"]," ").concat(O.a["react-icons"]," ")},children:Object(j.jsx)(h.b,{})})}),Object(j.jsx)("div",{className:"containerIcons",children:Object(j.jsx)(m.b.Provider,{value:{className:"".concat(O.a["react-icons-youtube"],"  ").concat(O.a["react-icons"]," ")},children:Object(j.jsx)(h.d,{})})})]})})}function _(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tituloH2",id:"aboutMe",children:Object(j.jsx)("h2",{children:"About Me"})}),Object(j.jsxs)("div",{className:b.a.container,children:[Object(j.jsxs)("div",{className:b.a.containerLeft,children:[Object(j.jsx)("h3",{className:"tituloH2",children:"Jorge Andrade"}),Object(j.jsxs)("p",{children:["Full Stack Developer con formaci\xf3n como Ingeniero Industrial. Experiencias trabajando en NodeJS, React, Redux, SQL entre otras tecnolog\xedas del sector. Creador pagina web"," ",Object(j.jsx)("a",{href:"https://guiadeparche.com",children:"guiadeparche.com"})," posicionada como #1 en SEO. Me destaco por pensamiento creativo, resoluci\xf3n de problemas, trabajo en equipo, comunicaci\xf3n y autonom\xeda."]}),Object(j.jsx)(x,{})]}),Object(j.jsx)("div",{className:b.a.containerRight,children:Object(j.jsx)("img",{className:b.a["image-cropped-transform"],src:u,alt:"ProfesorJand Perfil Img"})})]})]})}var f=c(9),v=c(13),g=c.n(v),N=c(21),y=c(24),S=c(33);function M(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){N.a.get("https://api.github.com/users/ProfesorJand/repos").then((function(e){return e.data})).then((function(e){return n(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tituloH2",id:"proyects",children:Object(j.jsx)("h2",{children:"Github - Proyects"})}),Object(j.jsx)("div",{className:g.a.containerProyects,children:c&&c.map((function(e){return Object(j.jsxs)("div",{className:g.a.container+" mySlides w3-animate-fading",children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("img",{className:"".concat(g.a.img_thumbnail),src:"https://raw.githubusercontent.com/".concat(e.full_name,"/main/thumbnail.png"),alt:"Repo thumbnail"}),Object(j.jsx)("p",{children:e.description}),Object(j.jsxs)("div",{className:g.a.Info_Actions_Github,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(y.b,{})," ",e.stargazers_count]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(y.a,{})," ",e.watchers_count]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(S.a,{})," ",e.forks_count]})]}),Object(j.jsx)("input",{className:g.a.InputGithub,value:"Go Repository",type:"button",onClick:function(){window.open(e.html_url,"_blank")}})]},e.id)}))})]})}var P=c(26),E=c(34),I=c(8),k=c.n(I);function w(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(f.a)(i,2),r=s[0],o=s[1],l=Object(a.useState)(""),d=Object(f.a)(l,2),b=d[0],u=d[1],h=Object(a.useState)(!1),m=Object(f.a)(h,2),p=m[0],O=m[1],x=Object(a.useState)(!1),_=Object(f.a)(x,2),v=_[0],g=_[1],y=Object(a.useState)(),S=Object(f.a)(y,2),M=S[0],I=S[1];function w(){return(w=Object(E.a)(Object(P.a)().mark((function e(t){return Object(P.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N.a.post("https://portfolio-backend.adaptable.app/sendEmail",{email:c,subject:r,emailMessage:b}).then((function(e){console.log(e.data),O(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){p&&function(e){var t=e;I(e),g(!0);var c=setInterval((function(){I(t),--t<0&&(clearInterval(c),g(!1))}),1e3)}(60)}),[p]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tituloH2",id:"contact",children:Object(j.jsx)("h2",{children:"Contact"})}),Object(j.jsx)("div",{className:k.a.container,children:v?p?Object(j.jsxs)("div",{className:k.a.divSended,children:[Object(j.jsx)("p",{children:"Email sended \u2714\ufe0f"}),Object(j.jsxs)("p",{children:["Please Wait ",M," seconds to send another Email"]})]}):Object(j.jsxs)("div",{className:k.a.divSended,children:[Object(j.jsx)("p",{children:"\u274c Email error \u274c"}),Object(j.jsxs)("p",{children:["Please Wait ",M," seconds to send another Email"]})]}):Object(j.jsxs)("form",{className:k.a.form,onSubmit:function(e){!function(e){w.apply(this,arguments)}(e)},children:[Object(j.jsx)("input",{className:k.a.inputEmail,type:"email",placeholder:"Email",value:c,onChange:function(e){n(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:k.a.inputSubject,type:"text",placeholder:"Subject",value:r,onChange:function(e){o(e.target.value)},minLength:"4",required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:k.a.DivTextarea,children:Object(j.jsx)("textarea",{className:k.a.textarea,value:b,onChange:function(e){u(e.target.value)},placeholder:"Message...",required:!0})}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:k.a.submit,type:"submit",value:"Submit"})]})})]})}c(49);function A(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(M,{}),Object(j.jsx)(w,{})]})}var R=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"containerApp",children:[Object(j.jsx)("div",{className:"containerApp-Left",children:Object(j.jsx)(l,{})}),Object(j.jsx)("div",{className:"containerApp-Right",children:Object(j.jsx)(A,{})})]})})};s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}))},7:function(e,t,c){e.exports={container:"socialMedia_container__3APao","react-icons":"socialMedia_react-icons__BccMz","react-icons-github":"socialMedia_react-icons-github__15Cao","react-icons-linkedin":"socialMedia_react-icons-linkedin__2dn4T","react-icons-instagram":"socialMedia_react-icons-instagram__1hG_M","react-icons-youtube":"socialMedia_react-icons-youtube__3q-xD"}},8:function(e,t,c){e.exports={container:"contact_container__CAhLE",form:"contact_form__37lTT",DivTextarea:"contact_DivTextarea__mZJMB",textarea:"contact_textarea__9f3s1",inputEmail:"contact_inputEmail__2M5iA",inputSubject:"contact_inputSubject__3xozQ",submit:"contact_submit__1otiO",divSended:"contact_divSended__2pCUz"}}},[[50,1,2]]]);
//# sourceMappingURL=main.6f836c38.chunk.js.map