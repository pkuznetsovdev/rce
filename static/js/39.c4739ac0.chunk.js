"use strict";(self.webpackChunkrce=self.webpackChunkrce||[]).push([[39],{7210:function(e,t,i){i.d(t,{A:function(){return r}});var n=i(969),o=(i(2791),i(184)),r={BASIC_USAGE:[{el:(0,o.jsx)(n.CE.Text,{modifiers:["accent"],children:"Hello world!"}),stringified:'<CE.Text modifiers={["accent"]}>Hello world!</CE.Text>'},{el:(0,o.jsx)(n.CE.Text,{config:{content:"Hello world!",modifiers:["title"]}}),stringified:"<CE.Text config={{ content: \"Hello world!\", modifiers: ['title'] }} />"},{el:(0,o.jsx)(n.CE.Image,{src:"path/to/image.jpg"}),stringified:'<CE.Image src="path/to/image.jpg" />'}],TAG_USAGE:[{el:(0,o.jsx)(n.CE.Text,{children:"Text Content Element"}),stringified:"<CE.Text>Text Content Element</CE.Text>"},{el:(0,o.jsx)(n.CE.Text,{modifiers:["title"],children:"Example with modifier"}),stringified:"<CE.Text modifiers={['title']}>Example with modifier</CE.Text>"},{el:(0,o.jsx)(n.CE.Text,{modifiers:["title"],tag:"h1",children:'Example with "h1" tag'}),stringified:'<CE.Text modifiers={[\'title\']} tag="h1">Example with "h1" tag</CE.Text>'},{el:(0,o.jsx)(n.CE.Text,{config:{content:"Hello world!",tag:"h3"},children:"Example with config"}),stringified:"<CE.Text config={{ content: \"Hello world!\", tag: 'h3' }}>Example with config</CE.Text>"},{el:(0,o.jsx)(n.CE.Block,{children:"Block Content Element"}),stringified:"<CE.Block>Block Content Element</CE.Block>"},{el:(0,o.jsx)(n.CE.Block,{tag:"section",children:"Example with section tag"}),stringified:'<CE.Block tag="section">Example with section tag</CE.Block>'}]}},3094:function(e,t,i){i.d(t,{K:function(){return o}});var n={IndexPage:{header:{rawContent:"React Content Elements",modifiers:["main-header"]},subHeader:"Your first Web Content Factory",textBlocks:[{title:"Web Content Development(WCD)",text:{rawContent:"<b>Web Content Development</b> is appliance of your  <i>content data</i> to the digital page</br>It stands for CRUD operations with the <i>content data</i> of the page"},caption:""},{title:"How did you solve it before?",items:["Use UX lib or develop basic structures internally to get basic reusable structures","Apply UI lib or develop style system internally to describe the outlook of the code structures","Maintain the code structures and style system on a daily base","Refactor it due to changed requirements"],caption:void 0},{title:"Why bother?",items:["Custom approach for basic structures architecture by company/team/developer","Custom approach for style system by company/team/developer","Duplicating same patterns by project","Endless refactoring to meet new requirements"],caption:void 0},{title:"Why React Content Elements?",items:["Formalized HTML and CSS development pattern"],caption:void 0}],options:[{image:{src:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",srcSet:{xs:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea058.jpg"}},title:{rawContent:"Option #1"},description:"Description of option"},{image:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",title:"Option #2",description:"Description of option"},{image:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",title:"Option #3",description:"Description of option"}]}};function o(e){return n[e]}},4629:function(e,t,i){i.d(t,{A:function(){return d}});var n=i(1413),o=i(3433),r=i(4925),s=(i(2791),i(969)),a=i(9380),c=i(184),l=["modifiers","children","title"],d=function(e){var t=e.modifiers,i=void 0===t?[]:t,d=e.children,p=e.title,f=(0,r.Z)(e,l);return(0,c.jsxs)(s.CE.Block,(0,n.Z)((0,n.Z)({},f),{},{modifiers:["page"].concat((0,o.Z)(i)),children:[(0,c.jsxs)(s.CE.Block,{modifiers:["container"],children:[(0,c.jsx)(a.h4,{}),(0,c.jsx)(s.CE.Text,{modifiers:["page-title"],config:p})]}),(0,c.jsx)(s.CE.Block,{tag:"main",modifiers:["main"],children:d})]}))}},3981:function(e,t,i){i.d(t,{A:function(){return m}});var n=i(9439),o=i(4942),r=i(1413),s=i(2791),a=i(969),c=i(8922),l=i(7770),d=i(4485),p=i(7011),f=i(1508),u=i(184),m=(Object.keys(a.CE).reduce((function(e,t){return(0,r.Z)((0,r.Z)({},e),{},(0,o.Z)({},t.toLowerCase(),"CE.".concat(c.MB.capitalize(t))))}),{}),function(e){var t=e.ex;return Array.isArray(t)?(0,u.jsx)(a.CE.List,{modifiers:["code-examples"],children:t.map((function(e){return(0,u.jsx)(x,(0,r.Z)({},e),e.el.toString())}))}):(0,u.jsx)(x,(0,r.Z)({},t),t.el.toString())}),x=function(e){var t=e.el,i=e.stringified,o=(e.noResult,s.useRef(null)),r=s.useState(""),c=(0,n.Z)(r,2),m=c[0],x=c[1],h=(0,s.useContext)(f.N).theme;return s.useEffect((function(){""===m&&x(o.current.innerHTML)}),[m]),(0,u.jsxs)(a.CE.Block,{modifiers:["code-example"],children:[(0,u.jsx)("div",{ref:o,style:{display:"none"},children:t}),(0,u.jsx)(l.Z,{language:"javascript",style:"dark"===h?d.Z:p.Z,wrapLongLines:!0,children:i}),(0,u.jsx)(l.Z,{language:"html",style:"dark"===h?d.Z:p.Z,wrapLongLines:!0,children:"// HTML \n".concat(m)})]})}},9039:function(e,t,i){i.r(t);i(2791);var n=i(969),o=i(4629),r=i(3094),s=i(3981),a=i(7210),c=i(184);t.default=function(){(0,r.K)("IndexPage");return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.A,{className:"home",title:"What?",children:[(0,c.jsxs)(n.CE.Block,{modifiers:["section","container"],children:[(0,c.jsx)(n.CE.Text,{children:"React Content Elements is another JavaScript Library."}),(0,c.jsx)(n.CE.Text,{children:"It is designed to provide another level of HTML(structure) and CSS(styles) development experience."}),(0,c.jsx)(n.CE.Text,{children:"Simple, quick and linear solution for all of your daily base development routine."}),(0,c.jsx)(n.CE.Text,{children:"Following webpage is created within the RCE library. The result is available in 'Elements' tab via developer tools."})]}),(0,c.jsx)(s.A,{ex:a.A.BASIC_USAGE})]})})}},8922:function(e,t,i){i.d(t,{MB:function(){return o},X:function(){return a}});var n={space:" ",srcSetDivider:", "},o={getClassNames:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.flat(1).filter((function(e){return e&&"string"===typeof e})).map((function(e){return e.trim().toLowerCase()})).join(n.space)},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},r=i(9439),s=i(2791);function a(e){var t=s.useState(e[0]),i=(0,r.Z)(t,2);return[i[0],i[1]]}}}]);
//# sourceMappingURL=39.c4739ac0.chunk.js.map