(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{369:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,O=p["".concat(l,".").concat(u)]||p[u]||m[u]||b;return a?r.a.createElement(O,i(i({ref:t},c),{},{components:a})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<b;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(369)),l={id:"options-bottomTabs",title:"Bottom Tabs Options",sidebar_label:"Bottom Tabs"},i={unversionedId:"api/options-bottomTabs",id:"version-6.12.2/api/options-bottomTabs",isDocsHomePage:!1,title:"Bottom Tabs Options",description:"`js",source:"@site/versioned_docs/version-6.12.2/api/options-bottomTabs.mdx",slug:"/api/options-bottomTabs",permalink:"/react-native-navigation/6.12.2/api/options-bottomTabs",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/api/options-bottomTabs.mdx",version:"6.12.2",sidebar_label:"Bottom Tabs",sidebar:"version-6.12.2/api",previous:{title:"The options object",permalink:"/react-native-navigation/6.12.2/api/options-root"},next:{title:"Bottom Tab Options",permalink:"/react-native-navigation/6.12.2/api/options-bottomTab"}},o=[{value:"<code>animate</code>",id:"animate",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>barStyle</code>",id:"barstyle",children:[]},{value:"<code>currentTabId</code>",id:"currenttabid",children:[]},{value:"<code>currentTabIndex</code>",id:"currenttabindex",children:[]},{value:"<code>drawBehind</code>",id:"drawbehind",children:[]},{value:"<code>elevation</code>",id:"elevation",children:[]},{value:"<code>hideShadow</code>",id:"hideshadow",children:[]},{value:"<code>hideOnScroll</code>",id:"hideonscroll",children:[]},{value:"<code>preferLargeIcons</code>",id:"preferlargeicons",children:[]},{value:"<code>tabsAttachMode</code>",id:"tabsattachmode",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>titleDisplayMode</code>",id:"titledisplaymode",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]},{value:"<code>visible</code>",id:"visible",children:[]}],c={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  bottomTabs: {},\n};\n")),Object(b.b)("h2",{id:"animate"},Object(b.b)("inlineCode",{parentName:"h2"},"animate")),Object(b.b)("p",null,"Controls whether toggling visibility states will be animated."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"backgroundcolor"},Object(b.b)("inlineCode",{parentName:"h2"},"backgroundColor")),Object(b.b)("p",null,"Change the background color."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"barstyle"},Object(b.b)("inlineCode",{parentName:"h2"},"barStyle")),Object(b.b)("p",null,"Controls whether the BottomTabs use dark (black) or light (default) visual style. Requires ",Object(b.b)("inlineCode",{parentName:"p"},"translucent: true"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('default','black')"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"currenttabid"},Object(b.b)("inlineCode",{parentName:"h2"},"currentTabId")),Object(b.b)("p",null,"Select a tab by the id (componentId) of a child contained in it. See ",Object(b.b)("a",{parentName:"p",href:"#selectingtabsprogrammatically"},"Selecting tabs programmatically")," for a detailed explanation."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"currenttabindex"},Object(b.b)("inlineCode",{parentName:"h2"},"currentTabIndex")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"drawbehind"},Object(b.b)("inlineCode",{parentName:"h2"},"drawBehind")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"elevation"},Object(b.b)("inlineCode",{parentName:"h2"},"elevation")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h2",{id:"hideshadow"},Object(b.b)("inlineCode",{parentName:"h2"},"hideShadow")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))),Object(b.b)("h2",{id:"hideonscroll"},Object(b.b)("inlineCode",{parentName:"h2"},"hideOnScroll")),Object(b.b)("p",null,"Hides the BottomTabs on scroll to increase the amount of content visible to the user.\nThe options requires that the scrollable view will be the root view of the screen and that it specifies ",Object(b.b)("inlineCode",{parentName:"p"},"nestedScrollEnabled: true"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h2",{id:"preferlargeicons"},Object(b.b)("inlineCode",{parentName:"h2"},"preferLargeIcons")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h2",{id:"tabsattachmode"},Object(b.b)("inlineCode",{parentName:"h2"},"tabsAttachMode")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('together','afterInitialTab','onSwitchToTab')"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"testid"},Object(b.b)("inlineCode",{parentName:"h2"},"testID")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"titledisplaymode"},Object(b.b)("inlineCode",{parentName:"h2"},"titleDisplayMode")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Android"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('alwaysShow','showWhenActive','alwaysHide')"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h2",{id:"translucent"},Object(b.b)("inlineCode",{parentName:"h2"},"translucent")),Object(b.b)("p",null,"A Boolean value that indicates whether the BottomTabs are translucent. For this option to function as expected the screen needs to be drawn behind the BottomTabs; Make sure the list component you're using (FlatList for example) is the root component in the screen and not SafeAreaView. When SafeAreView is the root component it shifts the content above the BottomTabs and the translucent effect isn't visible."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))),Object(b.b)("h2",{id:"visible"},Object(b.b)("inlineCode",{parentName:"h2"},"visible")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))))}d.isMDXComponent=!0}}]);