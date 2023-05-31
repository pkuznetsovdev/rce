"use strict";(self.webpackChunkrce=self.webpackChunkrce||[]).push([[294],{3094:function(e,t,i){i.d(t,{K:function(){return s}});var n={IndexPage:{header:{rawContent:"React Content Elements",modifiers:["main-header"]},subHeader:"Your first Web Content Factory",textBlocks:[{title:"Web Content Development(WCD)",text:{rawContent:"<b>Web Content Development</b> is appliance of your  <i>content data</i> to the digital page</br>It stands for CRUD operations with the <i>content data</i> of the page"},caption:""},{title:"How did you solve it before?",items:["Use UX lib or develop basic structures internally to get basic reusable structures","Apply UI lib or develop style system internally to describe the outlook of the code structures","Maintain the code structures and style system on a daily base","Refactor it due to changed requirements"],caption:void 0},{title:"Why bother?",items:["Custom approach for basic structures architecture by company/team/developer","Custom approach for style system by company/team/developer","Duplicating same patterns by project","Endless refactoring to meet new requirements"],caption:void 0},{title:"Why React Content Elements?",items:["Formalized HTML and CSS development pattern"],caption:void 0}],options:[{image:{src:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",srcSet:{xs:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea058.jpg"}},title:{rawContent:"Option #1"},description:"Description of option"},{image:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",title:"Option #2",description:"Description of option"},{image:"https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",title:"Option #3",description:"Description of option"}]}};function s(e){return n[e]}},4629:function(e,t,i){i.d(t,{A:function(){return d}});var n=i(1413),s=i(3433),r=i(4925),o=(i(2791),i(969)),a=i(9380),c=i(184),l=["modifiers","children","title"],d=function(e){var t=e.modifiers,i=void 0===t?[]:t,d=e.children,m=e.title,f=(0,r.Z)(e,l);return(0,c.jsxs)(o.CE.Block,(0,n.Z)((0,n.Z)({},f),{},{modifiers:["page"].concat((0,s.Z)(i)),children:[(0,c.jsxs)(o.CE.Block,{modifiers:["container"],children:[(0,c.jsx)(a.h4,{}),(0,c.jsx)(o.CE.Text,{modifiers:["page-title"],config:m})]}),(0,c.jsx)(o.CE.Block,{tag:"main",modifiers:["main"],children:d})]}))}},9034:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var n=i(9439),s=i(2791),r=i(969),o=i(4629),a=i(3094),c=i(184),l=function(e){e.image,e.title;return(0,c.jsxs)(r.CE.Block,{className:"docs-content-header",children:[(0,c.jsxs)(r.CE.Text,{children:[(0,c.jsx)("mark",{children:"Content Elements"})," represent basic HTML structures.",(0,c.jsx)("br",{}),"Development process with ",(0,c.jsx)("mark",{children:"Content Elements"})," is formalized in terms of generating basic structures(HTML) and styles(CSS).",(0,c.jsx)("br",{}),"Basic structure is any piece of HTML or/and CSS that is generated via ",(0,c.jsx)("mark",{children:"Content Elements"}),"."]}),(0,c.jsx)(r.CE.Text,{modifiers:["list-title"],content:"Let\u2019s clarify a set of dependencies for the web content development flow:"}),(0,c.jsx)(r.CE.List,{modifiers:["disc"],content:["HTML (set of basic structures instead of manual code duplications)","CSS (simple and scalable style system, less dependent on HTML structure)","SEO (tag name, aria-attributes, e.t.c. - simple adjustment in one click)"]})]})},d=i(4942),m=i(1413),f=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};function x(e){var t=s.useState(e[0]),i=(0,n.Z)(t,2);return[i[0],i[1]]}var p=i(7770),u=i(4485),h=(Object.keys(r.CE).reduce((function(e,t){return(0,m.Z)((0,m.Z)({},e),{},(0,d.Z)({},t.toLowerCase(),"CE.".concat(f(t))))}),{}),function(e){var t=e.ex;return Array.isArray(t)?(0,c.jsx)(r.CE.List,{modifiers:["code-examples"],children:t.map((function(e){return(0,c.jsx)(C,(0,m.Z)({},e),e.el.toString())}))}):(0,c.jsx)(C,(0,m.Z)({},t),t.el.toString())}),C=function(e){var t=e.el,i=e.stringified,o=(e.noResult,s.useRef(null)),a=s.useState(""),l=(0,n.Z)(a,2),d=l[0],m=l[1];return s.useEffect((function(){""===d&&m(o.current.innerHTML)}),[d]),(0,c.jsxs)(r.CE.Block,{modifiers:["code-example"],children:[(0,c.jsx)("div",{ref:o,style:{display:"none"},children:t}),(0,c.jsx)(p.Z,{language:"javascript",style:u.Z,wrapLongLines:!0,children:i}),(0,c.jsx)(p.Z,{language:"html",style:u.Z,wrapLongLines:!0,children:"// HTML \n".concat(d)})]})},E={BASIC_USAGE:[{el:(0,c.jsx)(r.CE.Text,{modifiers:["accent"],children:"Hello world!"}),stringified:'<CE.Text modifiers={["accent"]}>Hello world!</CE.Text>'},{el:(0,c.jsx)(r.CE.Text,{config:{content:"Hello world!",modifiers:["title"]}}),stringified:"<CE.Text config={{ content: \"Hello world!\", modifiers: ['title'] }} />"},{el:(0,c.jsx)(r.CE.Image,{src:"path/to/image.jpg"}),stringified:'<CE.Image src="path/to/image.jpg" />'}],TAG_USAGE:[{el:(0,c.jsx)(r.CE.Text,{children:"Text Content Element"}),stringified:"<CE.Text>Text Content Element</CE.Text>"},{el:(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"Example with modifier"}),stringified:"<CE.Text modifiers={['title']}>Example with modifier</CE.Text>"},{el:(0,c.jsx)(r.CE.Text,{modifiers:["title"],tag:"h1",children:'Example with "h1" tag'}),stringified:'<CE.Text modifiers={[\'title\']} tag="h1">Example with "h1" tag</CE.Text>'},{el:(0,c.jsx)(r.CE.Text,{config:{content:"Hello world!",tag:"h3"},children:"Example with config"}),stringified:"<CE.Text config={{ content: \"Hello world!\", tag: 'h3' }}>Example with config</CE.Text>"},{el:(0,c.jsx)(r.CE.Block,{children:"Block Content Element"}),stringified:"<CE.Block>Block Content Element</CE.Block>"},{el:(0,c.jsx)(r.CE.Block,{tag:"section",children:"Example with section tag"}),stringified:'<CE.Block tag="section">Example with section tag</CE.Block>'}]},g=function(e){var t=e.src;return(0,c.jsx)(r.CE.Image,{src:t,className:"code-example"})},j=i.p+"static/media/Screenshot 2023-04-02 at 15.22.45.74430c33a77f55c61a7b.png",b=i.p+"static/media/Screenshot 2023-04-02 at 15.23.04.b7e4f3ccba15c597a0c7.png",T=i.p+"static/media/Screenshot 2023-04-02 at 15.23.16.c64c93d352991ff7f89a.png",v=i.p+"static/media/Screenshot 2023-04-04 at 22.24.54.ad711c009afe8b33158e.png",y=i.p+"static/media/Screenshot 2023-04-02 at 15.22.35.c5b13795741b6bdaa12b.png",w=i.p+"static/media/Screenshot 2023-04-02 at 15.23.38.90c7a1eddea6c9cf4410.png",k=function(e){var t=e.btnText,i=e.btnTextCollapsed,o=e.children,a=e.isCollapsedByDefault,l=void 0!==a&&a,d=s.useState((function(){return l})),m=(0,n.Z)(d,2),f=m[0],x=m[1],p=i&&!f?i:t;return(0,c.jsxs)(r.CE.Block,{className:"collapsible",children:[(0,c.jsx)(r.CE.Button,{content:p,onClick:function(){return x((function(e){return!e}))},modifiers:["collapsible-trigger","b"]}),(0,c.jsx)(r.CE.Block,{modifiers:["collapsible-content",f&&"collapsed"],children:o})]})},S=["Tag","Modifiers","Content","Config"],B={Tag:function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"Tag"}),(0,c.jsx)(r.CE.Text,{content:["Each <mark>Content Element</mark> has a default tag applied by name of the element.","If the tag is provided explicitely it will be used at first priority.","The deafult value can be overriden by special modifers as well, f.e. 'title' modifier will change the default 'p' tag to 'h3'"]}),(0,c.jsx)(p.Z,{language:"javascript",style:u.Z,wrapLongLines:!0,children:"const DEFAULT_TAGS_BY_NAME = {\n    text: 'p',\n    block: 'div',\n    image: 'img',\n    list: 'ul',\n    link: 'a',\n    divider: 'hr',\n    button: 'button',\n}\n"}),(0,c.jsx)(h,{ex:E.TAG_USAGE})]})},Modifiers:function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"Modifiers"}),(0,c.jsx)(r.CE.Text,{content:["By modifiers you adjust styles or behavoiur of the generated HTML structure.","Each modifier is a string that represents a meaningful label for the particular element in HTML structure.","Modifiers extend base <mark>Content Element</mark> class name and might change bahaviour, f.e. override a default tag in case tag was not provided explicitely via \u2018tag\u2019 property."]}),(0,c.jsx)(g,{src:j}),(0,c.jsx)(r.CE.Text,{modifiers:["list-title"],children:"Modifiers have following features:"}),(0,c.jsxs)(r.CE.List,{modifiers:["disc"],children:[(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.CE.Text,{children:"Above and Beyond"}),(0,c.jsx)(g,{src:b}),(0,c.jsx)(r.CE.Text,{content:["<code>above-[$ce-breakpoint]</code> - styles are applied for screen size \u2265 <code>$ce-breakpoint-value</code>","<code>beyond-[$ce-breakpoint]</code> - styles are applied for screen size < <code>$ce-breakpoint-value</code>"]}),(0,c.jsx)(g,{src:T})]}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.CE.Text,{children:"Size"}),(0,c.jsx)(r.CE.Text,{children:"To define Content Element size use breakpoint key as a modifier:"}),(0,c.jsx)(g,{src:v})]})]})]})},Content:function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"Tag"}),(0,c.jsx)(r.CE.Text,{content:["Each <mark>Content Element</mark> has a default tag applied by name of the element.","If the tag is provided explicitely it will override a default value.","It also depends on a template\u2019s implementation."]}),(0,c.jsx)(g,{src:y})]})},Config:function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"Config"}),(0,c.jsx)(r.CE.Text,{content:["By config you can adjust all element properties.","Properties provided via config will be applied at main priority."]}),(0,c.jsx)(g,{src:w})]})}},L=i.p+"static/media/Screenshot 2023-04-02 at 15.23.46.0f35e87bb1da68f1e85d.png",M=i.p+"static/media/Screenshot 2023-04-02 at 15.23.55.e4433e7cba1cb63bfd7b.png",H=i.p+"static/media/Screenshot 2023-04-02 at 15.24.06.a7cfd745f84a2bb8169c.png",Z=i.p+"static/media/Screenshot 2023-04-02 at 15.24.12.281aa8ce74373ba1f046.png",A=["HTML","CSS"],_={HTML:function(){var e=x(S),t=(0,n.Z)(e,2),i=t[0],o=t[1],a=s.useMemo((function(){return B[i]}),[i]);return(0,c.jsxs)(r.CE.Block,{className:"docs-html",children:[(0,c.jsxs)(r.CE.Text,{modifiers:["list-title"],children:["All ",(0,c.jsx)("mark",{children:"Content Elements"})," are grouped by its role in the page:"]}),(0,c.jsx)(r.CE.List,{modifiers:["disc","i"],content:Object.keys(r.CE)}),(0,c.jsxs)(r.CE.Text,{modifiers:["list-title"],children:["All ",(0,c.jsx)("mark",{children:"Content Elements"})," have 4 special properties:"]}),(0,c.jsx)(r.CE.List,{modifiers:["disc","i"],content:S}),(0,c.jsxs)(r.CE.Text,{modifiers:["list-title"],children:["All ",(0,c.jsx)("mark",{children:"Content Elements"})," have a base classname:"]}),(0,c.jsx)(r.CE.List,{modifiers:["disc"],content:["<i>ce ce-[name]</i><br />f.e. \u2018ce ce-text\u2019 for <mark>Text Content Element</mark>"]}),(0,c.jsx)(k,{btnText:"Show basic usage examples",btnTextCollapsed:"Hide basic usage examples",children:(0,c.jsx)(h,{ex:E.BASIC_USAGE})}),(0,c.jsxs)(r.CE.Text,{modifiers:["title"],children:[(0,c.jsx)("mark",{children:"Content Elements"})," properties"]}),(0,c.jsx)(r.CE.List,{modifiers:["row","docs-tabs"],listItemTemplate:function(e){var t=e.tab;return(0,c.jsx)(r.CE.Button,{type:"button",modifiers:["docs-tab",i===t&&"active","docs-tab-properties"],onClick:function(){return o(t)},children:t})},content:S.map((function(e){return{tab:e}}))}),(0,c.jsx)(r.CE.Divider,{}),(0,c.jsx)(a,{})]})},CSS:function(e){e.image,e.title;return(0,c.jsxs)(r.CE.Block,{className:"docs-html",children:[(0,c.jsx)(r.CE.Text,{children:"Base Content Element class name is:"}),(0,c.jsx)(r.CE.Text,{modifiers:["with-disc"],content:["<code>ce ce-[name]</code>"]}),(0,c.jsx)(r.CE.Text,{children:"Modifiers extend the base Content Element class name with following pattern: "}),(0,c.jsx)(r.CE.Text,{modifiers:["with-disc"],content:["<code>ce ce-[name] ce--[modifier] ce--[another-modifier]</code>"]}),(0,c.jsxs)(r.CE.Text,{children:["Styles are applied to the ",(0,c.jsx)("mark",{children:"Content Elements"})," via mixins."]}),(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"@byName"}),(0,c.jsx)(g,{src:L}),(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"@byModifier"}),(0,c.jsx)(g,{src:M}),(0,c.jsx)(r.CE.Text,{modifiers:["title"],children:"@withModifier"}),(0,c.jsx)(g,{src:H}),(0,c.jsx)(r.CE.Text,{modifiers:["list-title"],children:(0,c.jsx)("mark",{children:"Additional mixins:"})}),(0,c.jsx)(r.CE.List,{modifiers:["disc"],content:["<code>@nextByName</code>","<code>@nextByModifier</code>"]}),(0,c.jsx)(g,{src:Z})]})}},D=function(){(0,a.K)("IndexPage");var e=x(A),t=(0,n.Z)(e,2),i=t[0],d=t[1],m=s.useMemo((function(){return _[i]}),[i]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.A,{className:"docs",title:"Docs",children:(0,c.jsxs)(r.CE.Block,{modifiers:["container","docs-content"],children:[(0,c.jsx)(l,{}),(0,c.jsx)(r.CE.List,{modifiers:["row","docs-tabs"],listItemTemplate:function(e){var t=e.tab;return(0,c.jsx)(r.CE.Button,{modifiers:["docs-tab",i===t&&"active"],onClick:function(){return d(t)},children:t})},content:A.map((function(e){return{tab:e}}))}),(0,c.jsx)(r.CE.Divider,{}),(0,c.jsx)(m,{})]})})})}}}]);
//# sourceMappingURL=294.abd85a4d.chunk.js.map