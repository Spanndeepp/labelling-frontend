(this["webpackJsonplabelling-frontend"]=this["webpackJsonplabelling-frontend"]||[]).push([[0],{154:function(e,t,a){},174:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){},293:function(e,t,a){},298:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(23),s=a.n(c),i=(a(154),a(155),a(5)),r=a(22),l=a(13),o=a(11),j=a.n(o),u=a(10),b=function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null},d=function(){var e=localStorage.getItem("userType");return e?JSON.parse(e):null},h=function(){return localStorage.getItem("token")||null},g=function(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userType")},O=function(e,t,a){localStorage.getItem("token")||localStorage.setItem("token",t),localStorage.getItem("user")||localStorage.setItem("user",JSON.stringify(a)),localStorage.getItem("userType")||localStorage.setItem("userType",JSON.stringify(e))},p=a(327),m=a(326),x=(a(174),a(1));function f(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))}var v=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],s=a[1];return{value:c,onChange:function(e){s(e.target.value)}}},y=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],s=a[1],l=v(""),o=v(""),b=Object(n.useState)(null),d=Object(i.a)(b,2),h=d[0],g=d[1],m=Object(n.useState)(!1),y=Object(i.a)(m,2),N=y[0],k=y[1];Object(n.useEffect)((function(){document.getElementsByClassName("outer-log")[0].style.height=window.innerHeight-64+"px"}));var w=function(e,t){"clickaway"!==t&&k(!1)};return Object(x.jsx)("div",{className:"outer-log",children:Object(x.jsx)("div",{id:"container-log",children:Object(x.jsx)("div",{id:"form-container-log",children:Object(x.jsxs)("div",{id:"login-form-shadow",children:[Object(x.jsx)("div",{id:"loginHeading",children:Object(x.jsx)("h1",{children:"Login"})}),Object(x.jsx)("div",{className:"login-input-styles",children:Object(x.jsx)("input",Object(u.a)({className:"login-box",type:"text",placeholder:"E-Mail"},l))}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"login-input-styles",children:Object(x.jsx)("input",Object(u.a)({className:"login-box",type:"password",placeholder:"Password"},o))})}),h&&Object(x.jsx)("div",{children:Object(x.jsx)(p.a,{className:"login-snackbar-log",open:N,autoHideDuration:5e3,onClose:w,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(x.jsx)(f,{onClose:w,severity:"error",children:h})})}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"login-input-styles login-submit-btn",children:Object(x.jsx)("input",{type:"button",id:"login",className:"login",value:c?"Loading...":"Login",onClick:function(){return k(!0),g(null),s(!0),j.a.post("https://labelling-backend.herokuapp.com/api/auth/login",{email:l.value,password:o.value}).then((function(t){s(!1),0===t.data.flag?(O("labeller",t.data.token,t.data.labeller.email),e.history.push({pathname:"/dashboard",state:{user:t.data.labeller}})):1===t.data.flag&&(O("manager",t.data.token,t.data.manager.email),e.history.push({pathname:"/dashboard",state:{user:t.data.manager}}))})).catch((function(e){s(!1),400===e.response.status?g("Some of the fields are missing!!"):401===e.response.status?g(e.response.data.error):g("Something went wrong. Please try again later.")})),function(){}},disabled:c})}),Object(x.jsx)("div",{id:"registration-page",children:Object(x.jsx)(r.b,{to:"/register",children:Object(x.jsx)("h4",{children:"Not Registered? Click here to Register"})})})]})})})})},N=a.p+"static/media/ss.f3f23d4e.PNG",k=(a(180),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"gf__container",children:[Object(x.jsxs)("div",{className:"gft__container",children:[Object(x.jsx)("h1",{className:"gft__heading",children:"Great Functionality"}),Object(x.jsxs)("div",{className:"gft__text",children:["This application has been developed to work as a web alternative for YOLO model detection application which has been developed in Python. Label your images here and get them checked here itself. ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Developed by Aditya Khandelwal"]})]}),Object(x.jsx)("div",{className:"gfi__container",children:Object(x.jsx)("img",{className:"gfi__image",src:N,alt:""})})]}),Object(x.jsx)("footer",{className:"footer",children:Object(x.jsxs)("p",{children:["Developed by: Aditya Khandelwal ",Object(x.jsx)("br",{})," Contact - +91 - 9929846577 \xa0 \xa0 adityakhandelwal4201@gmail.com"]})})]})}),w=a(72),C=a(135),S=a(43),E=(a(181),function(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))}),L=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),l=r[0],o=r[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),d=b[0],h=b[1],g=Object(n.useState)(""),O=Object(i.a)(g,2),m=O[0],f=O[1],v=function(){f(""),h(""),j.a.post("https://labelling-backend.herokuapp.com/api/auth/addObject",{objectName:a}).then((function(e){f("Object Added\u270c\ud83d\udc4d")})).catch((function(e){console.log(e.response),402===e.response.status?h("Object already exists!!"):h("Something went wrong\ud83d\ude22...Please try again later!!")})),o(!0)},y=function(e){"clickaway"!==e&&o(!1)},N="center";return Object(x.jsxs)("div",{className:"add-object",children:[Object(x.jsx)("h1",{children:"Create an Object"}),Object(x.jsx)("input",{className:"enter-object",onChange:function(e){c(e.target.value)},type:"text"}),Object(x.jsx)("input",{type:"button",className:"add-object-button",onClick:v,value:"Add"}),d&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:l,autoHideDuration:5e3,onClose:y,anchorOrigin:{vertical:"top",horizontal:N},children:Object(x.jsx)(E,{onClose:y,severity:"error",children:d})})}),m&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:l,autoHideDuration:5e3,onClose:y,anchorOrigin:{vertical:"top",horizontal:N},children:Object(x.jsx)(E,{onClose:y,severity:"success",children:m})})})]})},I=(a(182),a(183),a(134)),F=function(e){var t=e.data;return Object(x.jsx)("div",{className:"table-container",children:Object(x.jsxs)(I.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Object Name"}),Object(x.jsx)("th",{children:"Assigned To"}),Object(x.jsx)("th",{children:"Status"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsx)("td",{children:e.objectName}),Object(x.jsx)("td",{children:e.assignedTo?e.assignedTo:"-"}),Object(x.jsx)("td",{children:e.status})]},t)}))})]})})},R=function(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))},A=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),l=r[0],o=r[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),d=b[0],h=b[1],g=Object(n.useState)(!1),O=Object(i.a)(g,2),m=O[0],f=O[1];Object(n.useEffect)((function(){h(""),j.a.get("https://labelling-backend.herokuapp.com/api/auth/getObject").then((function(e){c(e.data.objects),console.log(a)})).catch((function(e){h("Something went wrong...")})),f(!0)}),[]),Object(n.useEffect)((function(){o(a)}),[a]);var v=function(e){"clickaway"!==e&&f(!1)};return Object(x.jsxs)("div",{className:"add-object",children:[Object(x.jsx)("h1",{children:"Show Objects"}),Object(x.jsxs)("div",{className:"filter-criteria",children:[Object(x.jsx)("span",{className:"filter-label",children:"Filter According to:"}),a&&Object(x.jsxs)("select",{className:"filter-dropdown",onChange:function(e){o(a.filter((function(t){return t.status===e.target.value})))},children:[Object(x.jsx)("option",{value:"Assigned",children:"Assigned"}),Object(x.jsx)("option",{value:"Unassigned",children:"UnAssigned"}),Object(x.jsx)("option",{value:"Labelled",children:"Labelled"}),Object(x.jsx)("option",{value:"Accepted",children:"Accepted"}),Object(x.jsx)("option",{value:"Rejected",children:"Rejected"})]}),Object(x.jsx)("input",{type:"button",value:"Reset Filters",className:"reset-filter-button",onClick:function(){o(a)}})]}),d?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:m,autoHideDuration:5e3,onClose:v,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(x.jsx)(R,{onClose:v,severity:"error",children:d})})}):Object(x.jsx)(F,{data:l})]})},H=(a(184),function(e){var t=e.currImage,a=null,c=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(n.useState)(null),l=Object(i.a)(r,2),o=l[0],u=l[1],b=[];return Object(x.jsxs)("div",{className:"image-area",children:[Object(x.jsx)("canvas",{className:"canvas-img",tabIndex:"0",ref:c}),Object(x.jsx)("img",{style:{border:"2px solid black",boxShadow:"4px 4px 4px 4px lightgrey"},className:"labelling-img",src:t,ref:s,onLoad:function(){var e=c.current,n=s.current;e.width=n.clientWidth,e.height=n.clientHeight,a=e.getContext("2d"),u(a);var i=t.replace(".jpg",".txt");j.a.get(i).then((function(e){console.log("Res",e);for(var t=e.data.split(" "),a=1;a<t.length;a+=4)b.push({x:parseFloat(t[a]),y:parseFloat(t[a+1]),w:parseFloat(t[a+2]),h:parseFloat(t[a+3])});console.log(b),b.length&&(o.strokeStyle="black",o.lineWidth="2",o.beginPath(),b.map((function(e){return o.rect((e.x-e.w/2)*s.current.clientWidth,(e.y-e.h/2)*s.current.clientHeight,e.w*s.current.clientWidth,e.h*s.current.clientHeight)})),o.stroke())})).catch((function(e){console.log("Err",e.response)}))},alt:t})]})}),T=function(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))},D=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],u=Object(n.useState)([]),b=Object(i.a)(u,2),d=b[0],h=b[1],g=Object(n.useState)(0),O=Object(i.a)(g,2),m=O[0],f=O[1],v=Object(n.useState)(0),y=Object(i.a)(v,2),N=y[0],k=y[1],w=Object(n.useState)(""),C=Object(i.a)(w,2),S=C[0],E=C[1],L=Object(n.useState)(!1),I=Object(i.a)(L,2),F=I[0],R=I[1],A=Object(n.useState)(""),D=Object(i.a)(A,2),_=D[0],P=D[1];console.log(d,"hiiiii"),Object(n.useEffect)((function(){d.length>0&&(1===d.length?(f(0),document.getElementById("file-0").classList.add("active-file")):null!==document.getElementById("file-".concat(m))&&null!==document.getElementById("file-".concat(N))&&(document.getElementById("file-".concat(m)).classList.add("active-file"),document.getElementById("file-".concat(N)).classList.remove("active-file")))}),[d,m]);var W=d.map((function(e,t){var a=e.split("/");return Object(x.jsx)("aside",{className:"single-file",id:"file-".concat(t),children:a[a.length-1]},t)})),B=function(e){E(""),P("");var t="";"Accept"===e.target.value?t="Accepted":"Reject"===e.target.value&&(t="Rejected"),j.a.post("https://labelling-backend.herokuapp.com/api/auth/changeStatus",{object:l,status:t}).then((function(e){P("Status Changed Successfully!!")})).catch((function(e){402===e.response.status?E(e.response.data.error):E("Server isn't working")})),R(!0)},U=function(e){"clickaway"!==e&&R(!1)},z="center";return Object(x.jsxs)("div",{className:"add-object",children:[Object(x.jsx)("input",{type:"text",className:"input-object",placeholder:"Enter Object Name",name:"email",onChange:function(e){c(e.target.value),o(e.target.value)}}),Object(x.jsx)("input",{type:"button",className:"get-objects",value:"Get Images",onClick:function(){E(""),j.a.post("https://labelling-backend.herokuapp.com/api/auth/getPics",{objectName:l}).then((function(e){0===e.data.images.length?(h([]),E("No images uploaded yet")):h(e.data.images),console.log(e.data)})).catch((function(e){402===e.response.status?E("Object not found"):E("Something went wrong...")})),R(!0)}}),d.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"button",className:"image-controls previous-button",onClick:function(){k(m),f(m-1)},value:"Previous",disabled:0===m}),Object(x.jsx)("input",{type:"button",className:"image-controls",onClick:function(){k(m),f(m+1)},value:"Next",disabled:m>=d.length-1}),Object(x.jsx)("input",{type:"button",className:"image-controls",onClick:function(){k(m),f(0)},disabled:0===m,value:"Reset"}),Object(x.jsx)("input",{type:"button",className:"download-button",onClick:function(){var e=document.createElement("a");e.style.display="none",document.body.appendChild(e);var t=d[m].split("/"),n=t[t.length-1],c=d[m];e.setAttribute("href",c),e.setAttribute("download",c),e.target="_blank",e.click();var s=d[m].replace(".jpg",".txt"),i=n.replace(".jpg",".txt");i=a,j.a.get(s).then((function(e){})).then((function(e){var t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download",i),document.body.appendChild(a),a.click(),a.parentNode.removeChild(a)}))},value:"Download"}),Object(x.jsx)("input",{type:"button",className:"accept-button",onClick:B,value:"Accept"}),Object(x.jsx)("input",{type:"button",className:"reject-button",onClick:B,value:"Reject"}),Object(x.jsx)("input",{type:"button",className:"download-button",onClick:function(){for(var e=function(e){j()({url:d[e],method:"GET",responseType:"blob"}).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data])),c=document.createElement("a");c.href=n,c.setAttribute("download",a+""+e+".jpg"),document.body.appendChild(c),c.click()}))},t=0;t<d.length;t++)e(t)},value:"Download All"})]}):null,d.length?Object(x.jsxs)("div",{className:"files-images",children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsx)("div",{children:Object(x.jsxs)("strong",{children:["Total Images: ",d.length," "]})}),Object(x.jsx)("div",{className:"file-names file-margin",children:W})]}),Object(x.jsx)("div",{className:"edit-image",children:Object(x.jsx)(H,{currImage:d[m]})})]}):null,S&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:F,autoHideDuration:5e3,onClose:U,anchorOrigin:{vertical:"top",horizontal:z},children:Object(x.jsx)(T,{onClose:U,severity:"error",children:S})})}),_&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:F,autoHideDuration:5e3,onClose:U,anchorOrigin:{vertical:"top",horizontal:z},children:Object(x.jsx)(T,{onClose:U,severity:"success",children:_})})})]})},_=function(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))};var P=function(e){var t,a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),u=o[0],d=o[1],h=Object(n.useState)(0),O=Object(i.a)(h,2),m=O[0],f=O[1],v=Object(n.useState)({}),y=Object(i.a)(v,2),N=y[0],k=y[1],E=b();E||(alert("Login Again!!!"),g(),e.history.push("/login")),Object(n.useEffect)((function(){return r(""),j.a.post("https://labelling-backend.herokuapp.com/api/auth/getManager",{email:E}).then((function(e){k(e.data.manager)})).catch((function(e){402===e.response.status?r("User not found with given email"):r("Something went wrong...\ud83d\ude22"),d(!0)})),function(){}}),[]),0===m?t=Object(x.jsx)(L,{}):1===m?t=Object(x.jsx)(A,{}):2===m&&(t=Object(x.jsx)(D,{}));var I=function(e){"clickaway"!==e&&d(!1)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"labeller-info",children:[s&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:u,autoHideDuration:5e3,onClose:I,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(x.jsx)(_,{onClose:I,severity:"error",children:s})})}),"Welcome Manager ",Object(x.jsx)("span",{className:"bold-text",children:N.name}),Object(x.jsx)("input",{type:"button",className:"logout-button style-button",onClick:function(){g(),e.history.push("/login")},value:"Logout"}),Object(x.jsx)("div",{className:"manager-container",children:Object(x.jsxs)(C.a,{children:[Object(x.jsx)(S.a,{xs:12,md:4,children:Object(x.jsx)(w.a.Check,{inline:!0,type:"radio",label:"Add an Object",name:"manager-group",onChange:function(){return f(0)},defaultChecked:!0})}),Object(x.jsx)(S.a,{xs:12,md:4,children:Object(x.jsx)(w.a.Check,{inline:!0,type:"radio",label:"Show Objects List",name:"manager-group",onChange:function(){return f(1)}})}),Object(x.jsx)(S.a,{xs:12,md:4,children:Object(x.jsx)(w.a.Check,{inline:!0,type:"radio",label:"View Images",name:"manager-group",onChange:function(){return f(2)}})})]})}),Object(x.jsx)("div",{children:t})]})})},W=a(69),B=(a(186),a(142)),U=function(e){var t=e.currImage,a=e.array,c=e.setArray,s=null,r=Object(n.useRef)(),l=Object(n.useRef)(),o=Object(n.useState)({xval:0,yval:0}),j=Object(i.a)(o,2),u=j[0],b=j[1],d=Object(n.useState)("black"),h=Object(i.a)(d,2),g=h[0],O=h[1],p=Object(n.useState)(null),m=Object(i.a)(p,2),f=m[0],v=m[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),k=N[0],w=N[1];Object(n.useEffect)((function(){c([])}),[t]);var C=function(e){f.closePath(),w(!1),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.pageX-e.nativeEvent.path[0].offsetLeft-u.xval,s=e.pageY-e.nativeEvent.path[0].offsetTop-u.yval,i=t.borderColor,r=void 0===i?g:i,o=t.borderWidth,j=void 0===o?2:o;f.clearRect(0,0,l.current.clientWidth,l.current.clientHeight);var b={x:(u.xval+n/2)/l.current.clientWidth,y:(u.yval+s/2)/l.current.clientHeight,w:n/l.current.clientWidth,h:s/l.current.clientHeight};console.log(a),c([].concat(Object(W.a)(a),[b])),f.strokeStyle=r,f.lineWidth=j,f.beginPath(),a.map((function(e){return f.rect((e.x-e.w/2)*l.current.clientWidth,(e.y-e.h/2)*l.current.clientHeight,e.w*l.current.clientWidth,e.h*l.current.clientHeight)})),f.rect(u.xval,u.yval,n,s),f.stroke(),f.closePath()}(e)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"image-area",children:[Object(x.jsx)("canvas",{className:"canvas-img",tabIndex:"0",ref:r,onMouseMove:function(e){!function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(k){var n=t.pageX-t.nativeEvent.path[0].offsetLeft-u.xval,c=t.pageY-t.nativeEvent.path[0].offsetTop-u.yval,s=a.borderColor,i=void 0===s?g:s,r=a.borderWidth,o=void 0===r?2:r;e.clearRect(0,0,l.current.clientWidth,l.current.clientHeight),e.strokeStyle=i,e.lineWidth=o,e.beginPath(),e.rect(u.xval,u.yval,n,c),console.log(u.xval,u.yval,n,c),e.stroke()}}}(f)(e)},onMouseDown:function(e){return function(e){b({xval:e.pageX-e.nativeEvent.path[0].offsetLeft,yval:e.pageY-e.nativeEvent.path[0].offsetTop}),w(!0)}(e)},onMouseUp:function(e){C(e)}}),Object(x.jsx)("img",{className:"labelling-img",src:t,ref:l,onLoad:function(){var e=r.current,t=l.current;e.width=t.clientWidth,e.height=t.clientHeight,s=e.getContext("2d"),v(s)},alt:"Phone"})]}),Object(x.jsxs)("div",{children:["Change color of your box:",Object(x.jsx)(B.a,{onChangeComplete:function(e){O(e.hex)}})]})]})},z=a(140),M=a.n(z),J=(a(293),function(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))});var q=function(e){var t=e.selectedFiles,a=e.initialCount,c=e.email,s=e.obj_assigned,r=e.setImagesUploaded,l=Object(n.useState)(t[a]),o=Object(i.a)(l,2),u=o[0],b=o[1],d=Object(n.useState)(a),h=Object(i.a)(d,2),g=h[0],O=h[1],m=Object(n.useState)(a),f=Object(i.a)(m,2),v=f[0],y=f[1],N=Object(n.useState)([]),k=Object(i.a)(N,2),w=k[0],C=k[1],S=Object(n.useState)(""),E=Object(i.a)(S,2),L=E[0],I=E[1],F=Object(n.useRef)([]),R=Object(n.useState)(""),A=Object(i.a)(R,2),H=A[0],T=A[1],D=Object(n.useState)(!1),_=Object(i.a)(D,2),P=_[0],W=_[1];Object(n.useEffect)((function(){F.current=new Array(t.length).fill(!1)}),[t]),Object(n.useEffect)((function(){g<t.length&&t.length&&g>=0?b(URL.createObjectURL(t[g])):b(t[a]),t.length>0&&(1===t.length?(O(0),document.getElementById("file-0").classList.add("active-file"),b(URL.createObjectURL(t[0]))):null!==document.getElementById("file-".concat(g))&&null!==document.getElementById("file-".concat(v))&&(document.getElementById("file-".concat(g)).classList.add("active-file"),document.getElementById("file-".concat(v)).classList.remove("active-file")))}),[t,g]);for(var B=[],z=0;z<t.length;z++)B.push(Object(x.jsxs)("aside",{className:"single-file",id:"file-".concat(z),children:[F.current[z]?Object(x.jsx)(M.a,{}):null," ",t[z].name]},z));var q=function(e){"clickaway"!==e&&W(!1)},Y="center";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"button",className:"image-controls previous-button",onClick:function(){y(g),O(g-1)},value:"Previous",disabled:0===g}),Object(x.jsx)("input",{type:"button",className:"image-controls",onClick:function(){y(g),O(g+1)},value:"Next",disabled:g>=t.length-1}),Object(x.jsx)("input",{type:"button",className:"image-controls",onClick:function(){y(g),O(0)},disabled:0===g,value:"Reset"}),u&&Object(x.jsx)("input",{type:"button",className:"upload-button",onClick:function(){var e="";w.map((function(t){return e+="0 "+t.x+" "+t.y+" "+t.w+" "+t.h+"\n"}));var a=new Blob([e],{type:"text/plain"}),n=new File([a],t[g].name.replace("jpg","txt"),{type:"text/plain"}),i=new FormData;i.append("email",c),i.append("obj_assigned",s),i.append("image",t[g]),i.append("text",n),T(""),I(""),j.a.post("https://labelling-backend.herokuapp.com/api/upload/object",i).then((function(e){T("Object Uploaded"),F.current[g]=!0,r((function(e){return e+1}))})).catch((function(e){500===L.response.status?I("Images type accepted is .jpg only..."):I("Something went wrong...")})),W(!0)},value:"Upload Image"}),t.length?Object(x.jsxs)("div",{className:"files-images",children:[Object(x.jsx)("div",{className:"file-names",children:B}),Object(x.jsx)("div",{className:"edit-image",children:u&&Object(x.jsx)(U,{currImage:u,array:w,setArray:C})})]}):null,L&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:P,autoHideDuration:5e3,onClose:q,anchorOrigin:{vertical:"top",horizontal:Y},children:Object(x.jsx)(J,{onClose:q,severity:"error",children:L})})}),H&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:P,autoHideDuration:5e3,onClose:q,anchorOrigin:{vertical:"top",horizontal:Y},children:Object(x.jsx)(J,{onClose:q,severity:"success",children:H})})})]})},Y=(a(298),function(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))});var G=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),o=l[0],u=l[1],d=Object(n.useState)(0),h=Object(i.a)(d,2),O=h[0],m=h[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),y=v[0],N=v[1],k=Object(n.useState)(!1),w=Object(i.a)(k,2),C=w[0],S=w[1],E=Object(n.useState)({email:"",name:"",obj_assigned:"",obj_submitted:"",phone:"",images:[]}),L=Object(i.a)(E,2),I=L[0],F=L[1],R=b();R||(alert("Login Again!!!"),g(),e.history.push("/login"));var A=Object(n.useState)(0),H=Object(i.a)(A,2),T=H[0],D=H[1];Object(n.useEffect)((function(){return N(""),j.a.post("https://labelling-backend.herokuapp.com/api/auth/getLabeller",{email:R}).then((function(e){F(e.data.labeller),D(I.images.length)})).catch((function(e){402===e.response.status?N("User not found with given email"):N("Something went wrong...\ud83d\ude22"),S(!0)})),function(){}}),[T]),Object(n.useEffect)((function(){u(c),m(0)}),[c]);var _=function(e){"clickaway"!==e&&S(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"labeller-info",children:["Hello Labeller ",Object(x.jsx)("span",{className:"bold-text",children:I.name}),I.images.length>=200?Object(x.jsx)("input",{type:"button",onClick:function(){j.a.post("https://labelling-backend.herokuapp.com/api/auth/completeObj",{email:R}).then((function(e){F(e.data.labellerObj),D(I.images.length)})).catch((function(e){401===e.response.status?N(e.response.data.error):N("Something went wrong...\ud83d\ude22"),S(!0)}))},className:"complete-button",value:"Complete"}):null,Object(x.jsx)("input",{type:"button",className:"logout-button style-button",onClick:function(){g(),e.history.push("/login")},value:"Logout"}),Object(x.jsxs)("p",{className:"object-data",children:["Object Assigned -\xa0",Object(x.jsx)("span",{className:"bold-text",children:I?I.obj_assigned:""})]}),Object(x.jsxs)("p",{className:"object-data",children:["Objects Submitted -\xa0",Object(x.jsx)("span",{className:"bold-text",children:I?I.images.length:0})]})]}),Object(x.jsxs)("div",{className:"file-controls",children:[Object(x.jsx)("input",{type:"file",className:"choose-files-button",onChange:function(e){var t,a=Object(W.a)(e.target.files);for(t=0;t<e.target.files.length;t++)(e.target.files[t].size/1024).toFixed(2)<25&&(a.splice(t,1),alert("Image can not be displayed, kindly upload images of size more than 25kb"));s(a)},accept:".jpg",multiple:!0}),Object(x.jsx)(q,{selectedFiles:o,initialCount:O,email:I.email,obj_assigned:I.obj_assigned,setImagesUploaded:D}),y&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:C,autoHideDuration:5e3,onClose:_,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(x.jsx)(Y,{onClose:_,severity:"error",children:y})})})]})]})},X=a(71);var K=function(e){var t=e.component,a=Object(X.a)(e,["component"]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return h()?Object(x.jsx)(t,Object(u.a)({},e)):Object(x.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})};var V=function(e){var t=e.component,a=Object(X.a)(e,["component"]);return Object(n.useEffect)((function(){document.getElementsByClassName("links")[0].style.marginLeft=window.innerWidth-202-320+"px"}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("div",{className:"header-label",children:Object(x.jsx)("h2",{children:"Labelling Tool"})}),Object(x.jsxs)("div",{className:"links",children:[Object(x.jsx)(r.b,{exact:!0,activeClassName:"active",to:"/",children:"Home"}),Object(x.jsx)(r.b,{activeClassName:"active",to:"/login",children:"Login"}),Object(x.jsx)(r.b,{activeClassName:"active",to:"/register",children:"Register"})]})]}),Object(x.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return h()?Object(x.jsx)(l.a,{to:{pathname:"/dashboard"}}):Object(x.jsx)(t,Object(u.a)({},e))}}))]})},Q=a(64),Z=(a(299),a(143));a(300);function $(e){return Object(x.jsx)(m.a,Object(u.a)({elevation:6,variant:"filled"},e))}var ee=function(){var e,t,a=Object(n.useState)({email:"",password:"",cpassword:"",name:"",userType:""}),c=Object(i.a)(a,2),s=c[0],l=c[1],o=Object(n.useState)(),b=Object(i.a)(o,2),d=b[0],h=b[1],g=Object(n.useState)(null),O=Object(i.a)(g,2),m=O[0],f=O[1],v=Object(n.useState)(null),y=Object(i.a)(v,2),N=y[0],k=y[1],w=Object(n.useState)(!1),C=Object(i.a)(w,2),S=C[0],E=C[1],L="",I=function(a){e=a.target.name,t=a.target.value,l(Object(u.a)(Object(u.a)({},s),{},Object(Q.a)({},e,t)))};Object(n.useEffect)((function(){document.getElementById("registration-container").style.height=window.innerHeight-64+"px"}),[]);var F=function(e){"clickaway"!==e&&E(!1)},R="center";return Object(x.jsxs)("div",{id:"registration-container",children:[Object(x.jsx)("div",{id:"success"}),Object(x.jsx)("div",{id:"registration-form-container",children:Object(x.jsx)("form",{className:"register-form",id:"registerForm",children:Object(x.jsxs)("div",{id:"register-form-shadow",children:[Object(x.jsx)("div",{id:"registerHeading",children:Object(x.jsx)("h1",{children:"Register Here!!"})}),Object(x.jsxs)("div",{className:"register-radio",onChange:function(e){return l(Object(u.a)(Object(u.a)({},s),{},{userType:e.target.value}))},children:[Object(x.jsxs)("div",{className:"register-radio-value",children:[Object(x.jsx)("input",{type:"radio",value:"labeller",name:"radio"}),Object(x.jsx)("p",{children:"Labeller"})]}),Object(x.jsxs)("div",{className:"register-radio-value",children:[Object(x.jsx)("input",{type:"radio",value:"manager",name:"radio"}),Object(x.jsx)("p",{children:"Manager"})]})]}),Object(x.jsx)("div",{className:"register-input-styles register-input-width",children:Object(x.jsx)("input",{className:"register-box register-single-box",type:"text",value:s.name,onChange:I,placeholder:"Your Name",name:"name",id:"name",required:!0})}),Object(x.jsx)("div",{className:"register-input-styles ",children:Object(x.jsx)("input",{className:"register-box register-single-box",type:"text",value:s.email,onChange:I,name:"email",id:"email",placeholder:"E-Mail",required:!0})}),Object(x.jsxs)("div",{className:"register-input-styles register-input-width",children:[Object(x.jsx)("input",{className:"register-box register-inline-box",type:"password",value:s.password,onChange:I,name:"password",placeholder:"Password",id:"password",required:!0}),Object(x.jsx)("input",{className:"register-box register-inline-box register-right-box",type:"password",value:s.cpassword,onChange:I,name:"cpassword",placeholder:"Confirm Password",id:"cpassword",required:!0})]}),Object(x.jsx)("div",{className:"register-input-styles ",children:Object(x.jsx)(Z.a,{className:"register-box register-single-box",type:"text",value:d,onChange:h,id:"phone",placeholder:"Enter Phone No.",required:!0})}),m&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:S,autoHideDuration:5e3,onClose:F,anchorOrigin:{vertical:"top",horizontal:R},children:Object(x.jsx)($,{onClose:F,severity:"error",children:m})})}),N&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{className:"snackbar-reg",open:S,autoHideDuration:5e3,onClose:F,anchorOrigin:{vertical:"top",horizontal:R},children:Object(x.jsx)($,{onClose:F,severity:"success",children:N})})}),Object(x.jsx)("div",{className:"register-input-styles register-submit-btn",children:Object(x.jsx)("input",{id:"submitDetails",type:"button",className:"register-form-submit",onClick:function(){f(""),""===s.userType&&f("Select a user type"),s.cpassword!==s.password?f("Passwords don't match"):s.password.length<5?f("Minimum length of password is 5 characters"):(L="labeller"===s.userType?"https://labelling-backend.herokuapp.com/api/auth/registerLabeller":"https://labelling-backend.herokuapp.com/api/auth/registerManager",j.a.post(L,{email:s.email,name:s.name,password:s.password,phone:d}).then((function(e){k("Registration Successfull")})).catch((function(e){400===e.response.status?f("Some of the fields are missing!!"):402===e.response.status?f("Email id already exists"):500===e.response.status&&f("Server failed")}))),E(!0)},value:"Register"})})]})})}),Object(x.jsx)("div",{id:"login-page",children:Object(x.jsx)(r.b,{to:"/login",children:Object(x.jsx)("h4",{children:"Already Registered? Click here to Login"})})})]})};a(301);var te=function(e){var t,a=d();void 0!==e.location.state&&null!==e.location.state&&(t=e.location.state.user),"labeller"!==a&&"manager"!==a||e.history.push({pathname:"/".concat(a),state:{user:t}});var n=function(){};return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"button",onClick:n,value:"Manager"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"button",onClick:n,value:"Labeller"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"button",onClick:function(){g(),e.history.push("/login")},value:"Logout"})]})},ae=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=h();if(e){var t=b();if(t){var a=d();if(a)return j.a.get("https://labelling-backend.herokuapp.com/api/auth/me",{headers:{"Content-Type":"application/json",Authorization:"JWT fefege...",token:e,user:t}}).then((function(e){O(a,e.data.token,e.data.user),c(!1)})).catch((function(e){g(),c(!1)})),function(){}}}}),[]),a&&h()?Object(x.jsx)("div",{className:"content",children:"Checking Authentication..."}):Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(r.a,{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(V,{exact:!0,path:"/",component:k}),Object(x.jsx)(V,{path:"/register",component:ee}),Object(x.jsx)(V,{path:"/login",component:y}),Object(x.jsx)(K,{path:"/dashboard",component:te}),Object(x.jsx)(K,{path:"/manager",component:P}),Object(x.jsx)(K,{path:"/labeller",component:G})]})})})})})};s.a.render(Object(x.jsx)(ae,{}),document.getElementById("root"))}},[[302,1,2]]]);
//# sourceMappingURL=main.4e1a658d.chunk.js.map