(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(e,t,n){e.exports=n(72)},50:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),l=n.n(r),o=(n(50),n(12)),c=n(7),s=n(23),m=n(35),d=n.n(m),u=n(8),f=n(4),p={hidden:{opacity:0,y:-15},visible:{opacity:1,y:0,transition:{delay:.5,type:"spring",damping:30,mass:2}}},h={hidden:{opacity:0,y:-50},visible:{opacity:1,y:-35,transition:{delay:.15,type:"spring",damping:30,mass:2}}},v={scale:1.1,letterSpacing:"2px"},b={scale:1.4},E={scale:.9},y={y:0,opacity:1},g={y:240,opacity:0},x={visible:function(e){return{y:0,opacity:1,transition:{duration:.7,delay:.1*e}}},hidden:{opacity:0,y:"-2rem"}},w={visible:function(e){return{y:0,opacity:1,transition:{duration:.4,delay:.2*e}}},hidden:function(e){return{opacity:0,y:100,transition:{duration:.2,delay:.2*e}}}},j={visible:function(e){return{opacity:1,transition:{duration:.4,delay:.2*e}}},hidden:function(e){return{opacity:0,transition:{duration:.2,delay:.2*e}}}},C=void 0,O={contactPane:{width:"80vw",height:"200px",marginLeft:"10vw",backgroundColor:"rgba(255, 255, 255, 0.6)",borderTopLeftRadius:"30px",borderTopRightRadius:"30px",position:"fixed",padding:"20px",bottom:"0",zIndex:"99999"}},D=function(e){var t=e.isToggled,n=e.hide;return l.a.createPortal(i.a.createElement(f.b.section,{style:O.contactPane,initial:!1,animate:t?y:g},"contact",i.a.createElement("div",null,"Email"),i.a.createElement("div",null,"linkedin"),i.a.createElement("div",null,"Feel free to drop me a message"),i.a.createElement("form",{className:"contact-form",onSubmit:function(e){return C.formSubmit(e)}},i.a.createElement("label",{htmlFor:"message-input"},"Your Message"),i.a.createElement("textarea",{onChange:function(e){return C.setState({message:e.target.value})},name:"message",type:"text",placeholder:"Please write your message here",required:!0}),i.a.createElement("label",{htmlFor:"message-name"},"Your Name"),i.a.createElement("input",{onChange:function(e){return C.setState({name:e.target.value})},name:"name",type:"text",placeholder:"Your Name"}),i.a.createElement("label",{htmlFor:"message-email"},"Your Email"),i.a.createElement("input",{onChange:function(e){return C.setState({email:e.target.value})},name:"email",type:"email",placeholder:"your@email.com",required:!0}),i.a.createElement("div",{className:"button--container"},i.a.createElement("button",{type:"submit",className:"button button-primary"}))),i.a.createElement("div",{onClick:n},"CLOSE")),document.body)};var z=function(e){var t=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),i=n[0],r=n[1];return[i,Object(a.useCallback)((function(){return r((function(e){return!e}))}),[r])]}(!1),n=Object(u.a)(t,2),r=n[0],l=n[1],c={navBar:{fontFamily:"Montserrat",color:"#afafaf",padding:"30px 10px 10px 0px",display:"flex",flex:"1 0 auto",backgroundColor:"transparent",width:"100vh",height:"2rem",transformOrigin:"top left",position:"fixed",left:"0",top:"100%",transform:"rotate(-90deg)",zIndex:"9999",outline:"none"},logo:{display:"flex",flexDirection:"row",flex:"1 0 auto",justifyContent:"right",alignItems:"right",marginRight:"30px",color:"#ffffff",textDecoration:"none",outline:"none"},navContainer:{display:"flex",flexDirection:"row",justifyContent:"center",flex:"5 0 auto"},contactIcon:{display:"flex",flexDirection:"row",flex:"1 0 auto",marginLeft:"30px"},navItem:{color:"#ffffff",paddingLeft:"30px",textDecoration:"none"}};return i.a.createElement("div",{className:"navBar",style:c.navBar},i.a.createElement(f.b.span,{whileTap:E,whileHover:v,style:c.contactIcon,onClick:l,variants:x,custom:5,animate:"visible",initial:"hidden"},"contact"),i.a.createElement("div",{style:c.navContainer},i.a.createElement(f.b.span,{whileTap:E,whileHover:v,variants:x,custom:4,animate:"visible",initial:"hidden"},i.a.createElement(o.b,{to:"/about",className:"item",style:c.navItem},"About")),i.a.createElement(f.b.span,{whileTap:E,whileHover:v,variants:x,custom:3,animate:"visible",initial:"hidden"},i.a.createElement(o.b,{to:"/articles",className:"item",style:c.navItem},"Articles")),i.a.createElement(f.b.span,{whileTap:E,whileHover:v,variants:x,custom:2,animate:"visible",initial:"hidden"},i.a.createElement(o.b,{to:"/projects",className:"item",style:c.navItem},"Projects"))),i.a.createElement(o.b,{to:"/",className:"item",style:c.logo},i.a.createElement(f.b.span,{whileTap:E,whileHover:b,variants:x,custom:1,animate:"visible",initial:"hidden"},i.a.createElement("img",{src:"/orb.gif",alt:"orb",style:{width:"3rem",backgroundColor:"#0e0d0d",transform:"rotate(90deg)"}}))),i.a.createElement(D,{isToggled:r,hide:l}))},k=function(e){var t=e.children;return i.a.createElement("section",{style:{display:"flex",width:"100vw",height:"100vh",overflow:"auto",backgroundColor:"#0e0d0d"}},i.a.createElement(z,null),i.a.createElement(d.a,null,t))},S=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return i.a.createElement(c.b,Object.assign({},n,{render:function(e){return i.a.createElement(k,null,i.a.createElement(t,e))}}))},F=function(e){var t=e.children;return i.a.createElement("section",null,t)},I=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return i.a.createElement(c.b,Object.assign({},n,{render:function(e){return i.a.createElement(F,null,i.a.createElement(t,e))}}))};var T=function(e){return i.a.createElement("footer",{className:"footer",style:{display:"flex",flexDirection:"column"}},i.a.createElement("h1",null,"FOOTER"))},B=n(31),M=n.n(B),A=n(19),R=function(e){var t=Object(A.a)({threshold:e.threshold||1}),n=Object(u.a)(t,2),a=n[0],r=n[1];return i.a.createElement(f.b.section,{style:e.style,ref:a,key:e.id,initial:"hidden",animate:r?"visible":"hidden"},e.children)},H={welcomeSection:{fontFamily:"Montserrat",fontWeight:"100",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",minHeight:"100vh",width:"100%",zIndex:"2"},welcomeTextBox:{maxWidth:"100vw",fontSize:"6vw",color:"white",textAlign:"center"},wrapper:{display:"flex",flex:"1 0 auto",flexDirection:"row",marginTop:"-5vh"},nameTextBox:{display:"flex",flex:"1 0 auto"},introductionTextBox:{textAlign:"center",display:"flex",flex:"1 0 auto",fontSize:"4vw",color:"white",marginTop:"3vw",marginRight:"1vw"},roleTextBox:{fontSize:"1.5vw",color:"white"}};var Y=function(){return i.a.createElement("section",{style:H.welcomeSection},i.a.createElement("div",{style:H.welcomeTextBox},i.a.createElement(R,null,i.a.createElement(f.b.div,{variants:h},i.a.createElement(M.a,{fontSize:"6vw",color:"#ffffff",background:"#0e0d0d",steps:10},"Hi")),i.a.createElement("div",{style:H.wrapper},i.a.createElement(f.b.span,{variants:p,style:H.introductionTextBox},"My name is"," "),i.a.createElement(f.b.span,{variants:p,style:H.nameTextBox},i.a.createElement(M.a,{fontSize:"5vw",color:"#ffffff",background:"#0e0d0d",steps:15},"Jack"))),i.a.createElement(f.b.span,{variants:p,style:H.roleTextBox},"full stack developer things-doer car enthusiast"))))},N=n(16),W=n(17),X=n(25);function J(){var e=Object(N.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s ease;\n"]);return J=function(){return e},e}function P(){var e=Object(N.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateZ(0);\n  bottom: 0;\n  background-size: cover;\n  border-radius: 1rem;\n  background-image: url(",");\n"]);return P=function(){return e},e}function q(){var e=Object(N.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return q=function(){return e},e}function Q(){var e=Object(N.a)(["\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  border-radius: 1rem;\n  height: 90%;\n  transition: all 0.2s ease-out 0s;\n  box-shadow: rgba(0, 0, 0, 06) 0px 50px 100px -30px;\n"]);return Q=function(){return e},e}function G(){var e=Object(N.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return G=function(){return e},e}function L(){var e=Object(N.a)(["\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  transform: perspective(921px);\n  display: flex;\n  position: relative;\n  padding: 25px;\n  max-width: 100%;\n"]);return L=function(){return e},e}var U=W.a.div(L()),K=Object(W.a)(f.b.div)(G()),Z=W.a.div(Q()),$=W.a.div(q()),V=W.a.div(P(),(function(e){return e.image})),_=Object(W.a)(f.b.div)(J());function ee(e){var t=e.title,n=e.height,r=void 0===n?400:n,l=e.width,c=void 0===l?300:l,s=e.index,m=e.size,d=e.irregularGrid,p=e.id,h=e.image,v=Object(a.useRef)(),b=Object(a.useState)(!1),E=Object(u.a)(b,2),y=E[0],g=E[1],x=Object(a.useState)(!1),w=Object(u.a)(x,2),j=w[0],C=w[1],O=[c/2,r/2],D=Object(f.c)(O),z=Object(X.a)([0,c],[.03*c,.03*c*-1]),k=Object(f.e)(D,(function(e){var t=Object(u.a)(e,1)[0];return z(t)})),S=Object(X.a)([0,r],[.03*r*-1,.03*r*1]),F=Object(f.e)(D,(function(e){var t=Object(u.a)(e,2)[1];return S(t)})),I={stiffness:150,damping:20},T=Object(f.d)(F,I),B=Object(f.d)(k,I),M=Object(f.e)(D,(function(e){var t=Object(u.a)(e,2)[1];return Object(X.a)([0,r],[0,.3])(t)})),A=Object(f.d)(M,I),R=Object(f.e)(A,(function(e){var t=D.get(),n=Object(u.a)(t,2),a=n[0],i=n[1];i===O[1]&&(i=O[1]+1);var r=Math.atan2(i-O[1],a-O[0]),l=360*(r>0?r:2*Math.PI+r)/(2*Math.PI)-90;return"linear-gradient(".concat(l,"deg, rgba(255,255,255,").concat(e,"), rgba(255,255,255,0) 80%)")}));function H(e){if(!j){var t=e.target.getBoundingClientRect();D.set([e.clientX-t.left,e.clientY-t.top])}}function Y(){return d?function(e){for(var t=[],n=0;n<=e;n++)t.push(4*n),t.push(4*n+3);return t}(m).find((function(e){return e===s+2}))?"35%":"50%":"100%"}return Object(a.useEffect)((function(){y||D.set(O)}),[y,D,O]),i.a.createElement(U,{ref:v,style:{height:"".concat(r,"px"),flex:"0 0 ".concat(Y()),maxWidth:"".concat(Y())}},i.a.createElement(K,{style:{scale:1,rotateX:T,rotateY:B},whileHover:{scale:1.03},whileTap:{scale:.97},onTapCancel:function(e){C(!1),H(e)},onTapStart:function(){C(!0)},onTap:function(e){C(!1)},onHoverStart:function(){g(!0)},onHoverEnd:function(){g(!1)},onMouseMove:H},i.a.createElement(o.b,{to:"/projects/".concat(p)},i.a.createElement(Z,{hover:y}),i.a.createElement($,null,i.a.createElement("h1",null,t),i.a.createElement(V,{image:h})),i.a.createElement(_,{style:{background:R}}))))}var te=function(e){var t=e.title,n=e.index,a=e.size,r=e.irregularGrid,l=e.id,o=e.image;return i.a.createElement(ee,{title:t,index:n,image:o,size:a,id:l,irregularGrid:r})},ne=n(15),ae={project1:{id:"test1",title:"project1",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project2:{id:"test2",title:"project2",image:"https://images.unsplash.com/photo-1602511560221-ae4f9dd2b3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project3:{id:"test3",title:"project3",image:"https://images.unsplash.com/photo-1602527863195-2764446acf94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project4:{id:"test4",title:"project4",image:"https://images.unsplash.com/photo-1602562603289-8b52f21ef638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project5:{id:"test5",title:"project5",image:"https://images.unsplash.com/photo-1602562081457-a97b78188a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project6:{id:"test6",title:"project6",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project7:{id:"test7",title:"project7",image:"https://images.unsplash.com/photo-1602529830721-dc2928e84014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project8:{id:"test8",title:"project8",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}},ie={recentProjecsContainer:{height:"100%",minHeight:"100vh",maxWidth:"100vw",width:"100%",textAlign:"center",color:"#ffffff",paddingTop:"3rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},projectSection:{display:"flex",flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:"10rem"},recentProjectsTitle:{fontSize:"6vw"}};var re=function(){var e=Object(A.a)({threshold:.1}),t=Object(u.a)(e,2),n=t[0],a=t[1];return i.a.createElement("section",{style:ie.recentProjecsContainer},i.a.createElement(R,{threshold:.3},i.a.createElement(f.b.span,{style:ie.recentProjectsTitle,variants:h},"Recent projects"),i.a.createElement("div",{style:ie.projectSection},i.a.createElement(ne.Grid,null,i.a.createElement(ne.Row,{center:"xs"},ae&&Object.values(ae).map((function(e,t){return t>2?"":i.a.createElement(ne.Col,{xs:12,sm:6,md:4,key:"col-"+e.id},i.a.createElement(f.b.div,{style:{width:"100%"},ref:n,custom:t,initial:"hidden",variants:w,animate:a?"visible":"hidden"},i.a.createElement(te,{key:e.id,image:e.image,id:e.id,title:e.title}),e.title))})))))))},le=n(3),oe={gradientStyle:{position:"absolute",zIndex:"3",width:"100vw",opacity:"0.7"}},ce={hidden:{opacity:0},visible:function(e){return{opacity:1,transition:{delay:.1*e,duration:.4,ease:"easeOut"}}}},se=!1,me=function(){var e=Object(A.a)({threshold:.7}),t=Object(u.a)(e,2),n=t[0];return t[1]&&(se=!0),i.a.createElement(f.b.svg,{ref:n,style:oe.gradientStyle,viewBox:"0 -200 1300 860",className:"topography-shape js-shape",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:12,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:0,fill:"rgb(101, 32, 96)"},transform:"translate(-1800, 60) scale(2.8, 2.8) skewX(30) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:11,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:1,fill:"rgb(96, 47, 106)"},transform:"translate(-1650, 55) scale(2.65, 2.65) skewX(27.5) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:10,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:2,fill:"rgb(92, 63, 115)"},transform:"translate(-1500, 50) scale(2.5, 2.5) skewX(25) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:9,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:3,fill:"rgb(87, 79, 124)"},transform:"translate(-1350, 45) scale(2.3499999999999996, 2.3499999999999996) skewX(22.5) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:8,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:4,fill:"rgb(83, 94, 133)"},transform:"translate(-1200, 40) scale(2.2, 2.2) skewX(20) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:7,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:5,fill:"rgb(79, 110, 143)"},transform:"translate(-1050, 35) scale(2.05, 2.05) skewX(17.5) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:6,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:6,fill:"rgb(74, 126, 152)"},transform:"translate(-900, 30) scale(1.9, 1.9) skewX(15) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:5,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:7,fill:"rgb(70, 141, 161)"},transform:"translate(-750, 25) scale(1.75, 1.75) skewX(12.5) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:4,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:8,fill:"rgb(65, 157, 170)"},transform:"translate(-600, 20) scale(1.6, 1.6) skewX(10) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:3,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:9,fill:"rgb(61, 173, 180)"},transform:"translate(-450, 15) scale(1.45, 1.45) skewX(7.5) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:2,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:10,fill:"rgb(56, 188, 189)"},transform:"translate(-300, 10) scale(1.3, 1.3) skewX(5) "}),i.a.createElement(f.b.path,{variants:ce,initial:"hidden",animate:se?"visible":"hidden",custom:1,d:"M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z",fill:"#FFFA72",fillRule:"nonzero",style:{position:"relative",zIndex:11,fill:"rgb(52, 204, 198)"},transform:"translate(-150, 5) scale(1.15, 1.15) skewX(2.5) "}))},de={resumeSection:{height:"100%",minHeight:"100vh",width:"100%",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column"},resumeTitle:{fontSize:"6vw",color:"rgb(204, 204, 204)",marginBottom:"2rem",zIndex:"4"},resumeContent:{zIndex:"4"},timelineTheme:{yearColor:"#fafafa",lineColor:"#c5c5c5",dotColor:"#c5c5c5",borderDotColor:"#ffffff",titleColor:"#ffffff",subtitleColor:"#afafaf",textColor:"#ffffff"}};var ue=function(){return i.a.createElement("section",{style:de.resumeSection},i.a.createElement(me,null),i.a.createElement(R,{threshold:.3,style:{zIndex:"4",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column"}},i.a.createElement(f.b.span,{style:de.resumeTitle,variants:h},"Resume"),i.a.createElement(ne.Grid,{style:de.resumeContent},i.a.createElement(ne.Row,{center:"xs"},i.a.createElement(f.b.span,{variants:j,custom:1},i.a.createElement(ne.Col,{xs:12,sm:6,md:4},i.a.createElement(le.Timeline,{dateFormat:"ll",theme:de.timelineTheme},i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2020/10",currentYear:!0}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"Freelancer"},i.a.createElement(le.Description,{text:"Description"}),i.a.createElement(le.Description,{text:"Another description"})))),i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2019/03",endDate:"2020/05"}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"CERN"},i.a.createElement(le.Description,{text:"Full Stack Developer"}),i.a.createElement(le.Description,{text:"Technical studentship"})))),i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2017/01",endDate:"2018/12"}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"BeHappy.io"},i.a.createElement(le.Description,{text:"iOS Developer"}),i.a.createElement(le.Description,{text:"Another description"})))),i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2017/06",endDate:"2018/06"}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"uKOD"},i.a.createElement(le.Description,{text:"Description"}),i.a.createElement(le.Description,{text:"Another description"})))),i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2016/10",endDate:"2017/07"}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"Artists Ent."},i.a.createElement(le.Description,{text:"Full Stack Developer"}),i.a.createElement(le.Description,{text:"Another description"}))))))),i.a.createElement(f.b.span,{variants:j,custom:2},i.a.createElement(ne.Col,{xs:12,sm:6,md:4},i.a.createElement(le.Timeline,{dateFormat:"ll",theme:de.timelineTheme},i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2020/07/01",currentYear:!0}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"Title3"},i.a.createElement(le.Description,{variant:"subtitle",text:"Subtitle"}),i.a.createElement(le.Description,{text:"Description3"}),i.a.createElement(le.Description,{text:"Another description3"})),i.a.createElement(le.Section,{title:"Another title3"},i.a.createElement(le.Description,{text:"Description3"}),i.a.createElement(le.Description,{text:"Another description3"})))),i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2020/07/01",currentYear:!0}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"Title3"},i.a.createElement(le.Description,{variant:"subtitle",text:"Subtitle"}),i.a.createElement(le.Description,{text:"Description3"}),i.a.createElement(le.Description,{text:"Another description3"})),i.a.createElement(le.Section,{title:"Another title3"},i.a.createElement(le.Description,{text:"Description3"}),i.a.createElement(le.Description,{text:"Another description3"}))))))),i.a.createElement(f.b.span,{variants:j,custom:3},i.a.createElement(ne.Col,{xs:12,sm:6,md:4},i.a.createElement(le.Timeline,{dateFormat:"ll",theme:de.timelineTheme},i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2016/10",endDate:"2020/05"}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"AGH University of Science and Technology"},i.a.createElement(le.Description,{text:"Mechatronic Engineering"}),i.a.createElement(le.Description,{text:"Bachelor's degree"})))),i.a.createElement(le.Container,null,i.a.createElement(le.YearContent,{startDate:"2012/09",endDate:"2016/06"}),i.a.createElement(le.BodyContent,null,i.a.createElement(le.Section,{title:"Upper Secondary School of Communication"},i.a.createElement(le.Description,{text:"IT Specialist"})))))))))))},fe=n(39),pe=n.n(fe),he={background:{position:"absolute",top:"0",left:"0",zIndex:"1",height:"100vh",maxHeight:"100vh",width:"100vw"}},ve=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useRef)(null);return Object(a.useEffect)((function(){return r||l(pe()({el:o.current,backgroundColor:"#0e0d0d",color:"#ffffff",color2:"#0e0d0d",mouseControls:!0,touchControls:!1,gyroControls:!0,scale:1,scaleMobile:1,size:1.7,spacing:29})),function(){r&&r.destroy()}}),[r]),i.a.createElement("div",{ref:o,style:he.background})},be={contentSection:{fontFamily:"Montserrat",position:"relative",zIndex:"100",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center"},root:{backgroundColor:"#0e0d0d"}};var Ee=function(e){return i.a.createElement(f.b.div,{style:be.root,initial:{opacity:0},animate:{opacity:1}},i.a.createElement("section",{style:be.contentSection},i.a.createElement(Y,null),i.a.createElement(ve,null),i.a.createElement(re,null),i.a.createElement(ue,null),i.a.createElement(T,null)))},ye=function(){return i.a.createElement("div",null,"Ups! 404 Not Found")};var ge=function(e){return i.a.createElement(f.b.section,{key:e.id,style:void 0===e.style?{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"}:e.style,animate:{opacity:1,scale:.95,transition:{duration:1,ease:[.43,.13,.23,.96]}},initial:{opacity:0,scale:1}},e.children)},xe={root:{backgroundColor:"#0e0d0d"}};function we(){var e=Object(N.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: calc(100% - 5rem);\n  margin-left: 4rem;\n  justify-content: center;\n"]);return we=function(){return e},e}var je=W.a.div(we());var Ce=function(e){return i.a.createElement("div",{style:xe.root},i.a.createElement(ge,null,i.a.createElement("h1",null,"PROJECTS"),i.a.createElement(je,null,ae&&Object.values(ae).map((function(e,t){return i.a.createElement(te,{size:Object.keys(ae).length,index:t,key:e.id,id:e.id,title:e.title,image:e.image,irregularGrid:!0})})))))},Oe=function(e){return i.a.createElement("div",{style:xe.root},i.a.createElement(ge,{id:"articles"},i.a.createElement("h1",null,"Articles")))},De={contentSection:{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"},root:{backgroundColor:"#0e0d0d"}};var ze=function(e){var t=Object(c.g)().projectId;return i.a.createElement("div",{style:De.root},i.a.createElement(ge,{id:t},i.a.createElement("h1",null,t)))},ke=function(e){return i.a.createElement("div",{style:xe.root},i.a.createElement(ge,{id:"about"},i.a.createElement("h1",null,"About me"),i.a.createElement("img",{src:"./test.png",style:{height:"75vh",bottom:"-25px",right:"2rem",position:"absolute"},alt:"le me"})))},Se=n(32),Fe=n.n(Se),Ie=n(40),Te=n(41),Be=n(42),Me=n(44),Ae=n(43);var Re,He=(Re=function(){return i.a.createElement(o.a,null,i.a.createElement(f.a,{exitBeforeEnter:!0},i.a.createElement(c.d,null,i.a.createElement(S,{exact:!0,path:"/",component:Ee}),i.a.createElement(S,{exact:!0,path:"/projects",component:Ce}),i.a.createElement(S,{exact:!0,path:"/articles",component:Oe}),i.a.createElement(S,{exact:!0,path:"/about",component:ke}),i.a.createElement(S,{exact:!0,path:"/projects/:projectId",component:ze}),i.a.createElement(I,{exact:!0,path:"/404",component:ye}),i.a.createElement(c.a,{to:"/404"}))))},function(e){Object(Me.a)(n,e);var t=Object(Ae.a)(n);function n(){var e;Object(Te.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0},e}return Object(Be.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Ie.a)(Fe.a.mark((function e(){var t=this;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{setTimeout((function(){t.setState({loading:!1})}),2e3)}catch(n){console.log(n),this.setState({loading:!1})}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?i.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",overflow:"hidden",zIndex:999999,backgroundColor:"#0e0d0d"}},i.a.createElement(f.b.div,{style:{position:"absolute",backgroundColor:"black",width:"100vw",height:"4px",top:"calc(50vh - 2px)",zIndex:99},x:"-100%",animate:{x:"100%"},transition:{duration:1,ease:"easeOut"}}),i.a.createElement(f.b.div,{animate:{y:"-100%"},transition:{duration:1,ease:"easeOut",delay:1},style:{backgroundColor:"#fafafa",width:"100vw",height:"50vh"}}),i.a.createElement(f.b.div,{animate:{y:"100%"},transition:{duration:1,ease:"easeOut",delay:1},style:{backgroundColor:"#fafafa",width:"100vw",height:"50vh"}})):i.a.createElement(Re,this.props)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.3cbde2a7.chunk.js.map