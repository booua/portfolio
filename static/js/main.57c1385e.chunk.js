(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,n){e.exports=n(64)},43:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),l=(n(43),n(12)),c=n(7),s=n(22),m=function(e){var t=e.children;return r.a.createElement("section",null,t)},u=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},n,{render:function(e){return r.a.createElement(m,null,r.a.createElement(t,e))}}))},d=function(e){var t=e.children;return r.a.createElement("section",null,t)},p=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},n,{render:function(e){return r.a.createElement(d,null,r.a.createElement(t,e))}}))},f=n(9),h=n(5),E={hidden:{opacity:0,y:-15},visible:{opacity:1,y:0,transition:{delay:.5,type:"spring",damping:30,mass:2}}},g={hidden:{opacity:0,y:-50},visible:{opacity:1,y:-35,transition:{delay:.15,type:"spring",damping:30,mass:2}}},b={scale:1.1,letterSpacing:"2px"},x={scale:1.4},v={scale:.9},y={y:0,opacity:1},j={y:240,opacity:0},w=void 0,D={contactPane:{width:"80vw",height:"200px",marginLeft:"10vw",backgroundColor:"rgba(255, 255, 255, 0.6)",borderTopLeftRadius:"30px",borderTopRightRadius:"30px",position:"fixed",padding:"20px",bottom:"0",zIndex:"99999"}},C=function(e){var t=e.isToggled,n=e.hide;return o.a.createPortal(r.a.createElement(h.b.section,{style:D.contactPane,initial:!1,animate:t?y:j},"contact",r.a.createElement("div",null,"Email"),r.a.createElement("div",null,"linkedin"),r.a.createElement("div",null,"Feel free to drop me a message"),r.a.createElement("form",{className:"contact-form",onSubmit:function(e){return w.formSubmit(e)}},r.a.createElement("label",{htmlFor:"message-input"},"Your Message"),r.a.createElement("textarea",{onChange:function(e){return w.setState({message:e.target.value})},name:"message",type:"text",placeholder:"Please write your message here",required:!0}),r.a.createElement("label",{htmlFor:"message-name"},"Your Name"),r.a.createElement("input",{onChange:function(e){return w.setState({name:e.target.value})},name:"name",type:"text",placeholder:"Your Name"}),r.a.createElement("label",{htmlFor:"message-email"},"Your Email"),r.a.createElement("input",{onChange:function(e){return w.setState({email:e.target.value})},name:"email",type:"email",placeholder:"your@email.com",required:!0}),r.a.createElement("div",{className:"button--container"},r.a.createElement("button",{type:"submit",className:"button button-primary"}))),r.a.createElement("div",{onClick:n},"CLOSE")),document.body)};var O=function(e){var t=function(e){var t=Object(a.useState)(e),n=Object(f.a)(t,2),r=n[0],i=n[1];return[r,Object(a.useCallback)((function(){return i((function(e){return!e}))}),[i])]}(!1),n=Object(f.a)(t,2),i=n[0],o=n[1],c={navBar:{fontFamily:"Montserrat",color:"#afafaf",padding:"30px 10px 10px 0px",display:"flex",flex:"1 0 auto",backgroundColor:"transparent",width:"100vh",height:"2rem",transformOrigin:"top left",position:"fixed",left:"0",top:"100%",transform:"rotate(-90deg)",zIndex:"9999",outline:"none"},logo:{display:"flex",flexDirection:"row",flex:"1 0 auto",justifyContent:"right",alignItems:"right",marginRight:"30px",color:"#ffffff",textDecoration:"none",outline:"none"},navContainer:{display:"flex",flexDirection:"row",justifyContent:"center",flex:"5 0 auto"},contactIcon:{display:"flex",flexDirection:"row",flex:"1 0 auto",marginLeft:"30px"},navItem:{color:"#ffffff",paddingLeft:"30px",textDecoration:"none"}};return r.a.createElement("div",{className:"navBar",style:c.navBar},r.a.createElement(h.b.span,{whileTap:v,whileHover:b,style:c.contactIcon,onClick:o},"contact"),r.a.createElement("div",{style:c.navContainer},r.a.createElement(h.b.span,{whileTap:v,whileHover:b},r.a.createElement(l.b,{to:"/about",className:"item",style:c.navItem},"About")),r.a.createElement(h.b.span,{whileTap:v,whileHover:b},r.a.createElement(l.b,{to:"/articles",className:"item",style:c.navItem},"Articles")),r.a.createElement(h.b.span,{whileTap:v,whileHover:b},r.a.createElement(l.b,{to:"/projects",className:"item",style:c.navItem},"Projects"))),r.a.createElement(l.b,{to:"/",className:"item",style:c.logo},r.a.createElement(h.b.span,{whileTap:v,whileHover:x},r.a.createElement("img",{src:"/orb.gif",alt:"orb",style:{width:"3rem",backgroundColor:"#0e0d0d",transform:"rotate(90deg)"}}))),r.a.createElement(C,{isToggled:i,hide:o}))};var S=function(e){return r.a.createElement("footer",{className:"footer",style:{display:"flex",flexDirection:"column"}},r.a.createElement("h1",null,"FOOTER"))},T=n(30),k=n.n(T),B=n(33),H=function(e){var t=Object(B.a)({threshold:1}),n=Object(f.a)(t,2),a=n[0],i=n[1];return r.a.createElement(h.b.section,{ref:a,initial:"hidden",animate:i?"visible":"hidden"},e.children)},I={welcomeSection:{fontFamily:"Montserrat",fontWeight:"100",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",minHeight:"100vh",width:"100%"},welcomeTextBox:{maxWidth:"100vw",fontSize:"6vw",color:"white",textAlign:"center"},wrapper:{display:"flex",flex:"1 0 auto",flexDirection:"row",marginTop:"-5vh"},nameTextBox:{display:"flex",flex:"1 0 auto"},introductionTextBox:{textAlign:"center",display:"flex",flex:"1 0 auto",fontSize:"4vw",color:"white",marginTop:"3vw",marginRight:"1vw"},roleTextBox:{fontSize:"1.5vw",color:"white"}};var M=function(){return r.a.createElement("section",{style:I.welcomeSection},r.a.createElement("div",{style:I.welcomeTextBox},r.a.createElement(H,null,r.a.createElement(h.b.div,{variants:g},r.a.createElement(k.a,{fontSize:"6vw",color:"#ffffff",background:"#0e0d0d",steps:10},"Hi")),r.a.createElement("div",{style:I.wrapper},r.a.createElement(h.b.span,{variants:E,style:I.introductionTextBox},"My name is "),r.a.createElement(h.b.span,{variants:E,style:I.nameTextBox},r.a.createElement(k.a,{fontSize:"5vw",color:"#ffffff",background:"#0e0d0d",steps:15},"Jack"))),r.a.createElement(h.b.span,{variants:E,style:I.roleTextBox},"full stack developer things-doer car enthusiast"))))},A=n(16),z=n(17),Y=n(24);function F(){var e=Object(A.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s ease;\n"]);return F=function(){return e},e}function R(){var e=Object(A.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateZ(0);\n  bottom: 0;\n  background-size: cover;\n  border-radius: 1rem;\n  background-image: url(",");\n"]);return R=function(){return e},e}function W(){var e=Object(A.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return W=function(){return e},e}function N(){var e=Object(A.a)(["\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  border-radius: 1rem;\n  height: 90%;\n  transition: all 0.2s ease-out 0s;\n  box-shadow: rgba(0, 0, 0, 06) 0px 50px 100px -30px;\n"]);return N=function(){return e},e}function J(){var e=Object(A.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return J=function(){return e},e}function P(){var e=Object(A.a)(["\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  transform: perspective(921px);\n  display: flex;\n  position: relative;\n  padding: 25px;\n  max-width: 100%;\n"]);return P=function(){return e},e}var q=z.a.div(P()),Q=Object(z.a)(h.b.div)(J()),G=z.a.div(N()),L=z.a.div(W()),U=z.a.div(R(),(function(e){return e.image})),X=Object(z.a)(h.b.div)(F());function K(e){var t=e.title,n=e.height,i=void 0===n?400:n,o=e.width,c=void 0===o?300:o,s=e.index,m=e.size,u=e.irregularGrid,d=e.id,p=e.image,E=Object(a.useRef)(),g=Object(a.useState)(!1),b=Object(f.a)(g,2),x=b[0],v=b[1],y=Object(a.useState)(!1),j=Object(f.a)(y,2),w=j[0],D=j[1],C=[c/2,i/2],O=Object(h.c)(C),S=Object(Y.a)([0,c],[.03*c,.03*c*-1]),T=Object(h.e)(O,(function(e){var t=Object(f.a)(e,1)[0];return S(t)})),k=Object(Y.a)([0,i],[.03*i*-1,.03*i*1]),B=Object(h.e)(O,(function(e){var t=Object(f.a)(e,2)[1];return k(t)})),H={stiffness:150,damping:20},I=Object(h.d)(B,H),M=Object(h.d)(T,H),A=Object(h.e)(O,(function(e){var t=Object(f.a)(e,2)[1];return Object(Y.a)([0,i],[0,.3])(t)})),z=Object(h.d)(A,H),F=Object(h.e)(z,(function(e){var t=O.get(),n=Object(f.a)(t,2),a=n[0],r=n[1];r===C[1]&&(r=C[1]+1);var i=Math.atan2(r-C[1],a-C[0]),o=360*(i>0?i:2*Math.PI+i)/(2*Math.PI)-90;return"linear-gradient(".concat(o,"deg, rgba(255,255,255,").concat(e,"), rgba(255,255,255,0) 80%)")}));function R(e){if(!w){var t=e.target.getBoundingClientRect();O.set([e.clientX-t.left,e.clientY-t.top])}}function W(){return u?function(e){for(var t=[],n=0;n<=e;n++)t.push(4*n),t.push(4*n+3);return t}(m).find((function(e){return e===s+2}))?"35%":"50%":"100%"}return Object(a.useEffect)((function(){x||O.set(C)}),[x,O,C]),r.a.createElement(q,{ref:E,style:{height:"".concat(i,"px"),flex:"0 0 ".concat(W()),maxWidth:"".concat(W())}},r.a.createElement(Q,{style:{scale:1,rotateX:I,rotateY:M},whileHover:{scale:1.03},whileTap:{scale:.97},onTapCancel:function(e){D(!1),R(e)},onTapStart:function(){D(!0)},onTap:function(e){D(!1)},onHoverStart:function(){v(!0)},onHoverEnd:function(){v(!1)},onMouseMove:R},r.a.createElement(l.b,{to:"/projects/".concat(d)},r.a.createElement(G,{hover:x}),r.a.createElement(L,null,r.a.createElement("h1",null,t),r.a.createElement(U,{image:p})),r.a.createElement(X,{style:{background:F}}))))}var Z=function(e){var t=e.title,n=e.index,a=e.size,i=e.irregularGrid,o=e.id,l=e.image;return r.a.createElement(K,{title:t,index:n,image:l,size:a,id:o,irregularGrid:i})},$=n(14),V={project1:{id:"test1",title:"project1",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project2:{id:"test2",title:"project2",image:"https://images.unsplash.com/photo-1602511560221-ae4f9dd2b3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project3:{id:"test3",title:"project3",image:"https://images.unsplash.com/photo-1602527863195-2764446acf94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project4:{id:"test4",title:"project4",image:"https://images.unsplash.com/photo-1602562603289-8b52f21ef638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project5:{id:"test5",title:"project5",image:"https://images.unsplash.com/photo-1602562081457-a97b78188a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project6:{id:"test6",title:"project6",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project7:{id:"test7",title:"project7",image:"https://images.unsplash.com/photo-1602529830721-dc2928e84014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project8:{id:"test8",title:"project8",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}},_={recentProjecsContainer:{height:"100%",minHeight:"100vh",maxWidth:"100vw",width:"100%",textAlign:"center",color:"#ffffff",paddingTop:"3rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},projectSection:{display:"flex",flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"row"},recentProjectsTitle:{fontSize:"6vw",paddingTop:"10%"}};var ee=function(){return r.a.createElement("section",{style:_.recentProjecsContainer},r.a.createElement("span",{style:_.recentProjectsTitle},"Recent projects"),r.a.createElement("div",{style:_.projectSection},r.a.createElement($.Grid,null,r.a.createElement($.Row,{center:"xs"},V&&Object.values(V).map((function(e,t){return t>2?"":r.a.createElement($.Col,{xs:12,sm:6,md:4,key:"col-"+e.id},r.a.createElement(Z,{key:e.id,image:e.image,id:e.id,title:e.title}))}))))))},te=n(3),ne={resumeSection:{height:"100%",minHeight:"100vh",width:"100%",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:"url(./bg.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},resumeTitle:{fontSize:"6vw",color:"rgb(204, 204, 204)",marginBottom:"2rem"}};var ae=function(){return r.a.createElement("section",{style:ne.resumeSection},r.a.createElement("span",{style:ne.resumeTitle},"Resume"),r.a.createElement($.Grid,null,r.a.createElement($.Row,{center:"xs"},r.a.createElement($.Col,{xs:12,sm:6,md:4},r.a.createElement(te.Timeline,{dateFormat:"ll"},r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2020/10",currentYear:!0}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"Freelancer"},r.a.createElement(te.Description,{text:"Description"}),r.a.createElement(te.Description,{text:"Another description"})))),r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2019/03",endDate:"2020/05"}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"CERN"},r.a.createElement(te.Description,{text:"Full Stack Developer"}),r.a.createElement(te.Description,{text:"Technical studentship"})))),r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2017/01",endDate:"2018/12"}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"BeHappy.io"},r.a.createElement(te.Description,{text:"iOS Developer"}),r.a.createElement(te.Description,{text:"Another description"})))),r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2017/06",endDate:"2018/06"}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"uKOD"},r.a.createElement(te.Description,{text:"Description"}),r.a.createElement(te.Description,{text:"Another description"})))),r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2016/10",endDate:"2017/07"}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"Artists Entertainment"},r.a.createElement(te.Description,{text:"Full Stack Developer"}),r.a.createElement(te.Description,{text:"Another description"})))))),r.a.createElement($.Col,{xs:12,sm:6,md:4},r.a.createElement(te.Timeline,{dateFormat:"ll"},r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2020/07/01",currentYear:!0}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"Title3"},r.a.createElement(te.Description,{variant:"subtitle",text:"Subtitle"}),r.a.createElement(te.Description,{text:"Description3"}),r.a.createElement(te.Description,{text:"Another description3"})),r.a.createElement(te.Section,{title:"Another title3"},r.a.createElement(te.Description,{text:"Description3"}),r.a.createElement(te.Description,{text:"Another description3"})))),r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2020/07/01",currentYear:!0}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"Title3"},r.a.createElement(te.Description,{variant:"subtitle",text:"Subtitle"}),r.a.createElement(te.Description,{text:"Description3"}),r.a.createElement(te.Description,{text:"Another description3"})),r.a.createElement(te.Section,{title:"Another title3"},r.a.createElement(te.Description,{text:"Description3"}),r.a.createElement(te.Description,{text:"Another description3"})))))),r.a.createElement($.Col,{xs:12,sm:6,md:4},r.a.createElement(te.Timeline,{dateFormat:"ll"},r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2016/10",endDate:"2020/05"}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"AGH University of Science and Technology"},r.a.createElement(te.Description,{text:"Mechatronic Engineering"}),r.a.createElement(te.Description,{text:"Bachelor's degree"})))),r.a.createElement(te.Container,null,r.a.createElement(te.YearContent,{startDate:"2012/09",endDate:"2016/06"}),r.a.createElement(te.BodyContent,null,r.a.createElement(te.Section,{title:"Upper Secondary School of Communication"},r.a.createElement(te.Description,{text:"IT Specialist"})))))))))},re=n(37),ie=n.n(re),oe={background:{position:"absolute",top:"0",left:"0",zIndex:"1",height:"100%",minHeight:"100vh",width:"100%"}},le=function(e){var t=Object(a.useState)(0),n=Object(f.a)(t,2),i=n[0],o=n[1],l=Object(a.useRef)(null);return Object(a.useEffect)((function(){return i||o(ie()({el:l.current,backgroundColor:"#0e0d0d",color:"#ffffff",color2:"#0e0d0d",mouseControls:!0,touchControls:!1,gyroControls:!0,scale:1,scaleMobile:1,size:1.7,spacing:29})),function(){i&&i.destroy()}}),[i]),r.a.createElement("div",{ref:l,style:oe.background})},ce={contentSection:{fontFamily:"Montserrat",position:"relative",zIndex:"100",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center"},root:{backgroundColor:"#0e0d0d"}};var se=function(e){return r.a.createElement("div",{style:ce.root},r.a.createElement("section",{style:ce.contentSection},r.a.createElement(O,null),r.a.createElement(M,null),r.a.createElement(ee,null),r.a.createElement(ae,null),r.a.createElement(S,null)),r.a.createElement(le,null))},me=function(){return r.a.createElement("div",null,"Ups! 404 Not Found")};var ue=function(e){return r.a.createElement(h.b.section,{key:e.id,style:void 0===e.style?{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"}:e.style,animate:{opacity:1,scale:.95,transition:{duration:1,ease:[.43,.13,.23,.96]}},initial:{opacity:0,scale:1}},e.children)},de={root:{backgroundColor:"#0e0d0d"}};function pe(){var e=Object(A.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: calc(100% - 5rem);\n  margin-left: 4rem;\n  justify-content: center;\n"]);return pe=function(){return e},e}var fe=z.a.div(pe());var he=function(e){return r.a.createElement("div",{style:de.root},r.a.createElement(O,null),r.a.createElement(ue,null,r.a.createElement("h1",null,"PROJECTS"),r.a.createElement(fe,null,V&&Object.values(V).map((function(e,t){return r.a.createElement(Z,{size:Object.keys(V).length,index:t,key:e.id,id:e.id,title:e.title,image:e.image,irregularGrid:!0})})))))},Ee=function(e){return r.a.createElement("div",{style:de.root},r.a.createElement(O,null),r.a.createElement(ue,{id:"articles"},r.a.createElement("h1",null,"Articles")))},ge={contentSection:{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"},root:{backgroundColor:"#0e0d0d"}};var be=function(e){var t=Object(c.g)().projectId;return r.a.createElement("div",{style:ge.root},r.a.createElement(O,null),r.a.createElement(ue,{id:t},r.a.createElement("h1",null,t)))},xe=function(e){return r.a.createElement("div",{style:de.root},r.a.createElement(O,null),r.a.createElement(ue,{id:"about"},r.a.createElement("h1",null,"About me"),r.a.createElement("img",{src:"./test.png",style:{height:"75vh",bottom:"-25px",right:"2rem",position:"absolute"},alt:"le me"})))};var ve=function(){return r.a.createElement(l.a,null,r.a.createElement(h.a,{exitBeforeEnter:!0},r.a.createElement(c.d,null,r.a.createElement(u,{exact:!0,path:"/",component:se}),r.a.createElement(u,{exact:!0,path:"/projects",component:he}),r.a.createElement(u,{exact:!0,path:"/articles",component:Ee}),r.a.createElement(u,{exact:!0,path:"/about",component:xe}),r.a.createElement(u,{exact:!0,path:"/projects/:projectId",component:be}),r.a.createElement(p,{exact:!0,path:"/404",component:me}),r.a.createElement(c.a,{to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.57c1385e.chunk.js.map