(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ue}));var n=r(94),o=r(65),c=r(3),i=r.n(c),a=r(13),l=r.n(a),s=r(12),u=r.n(s),f=r(274),b=r(121),j=r(120),p=r(0);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(187);function g(){return Object(h.default)()}var y=r(278),x=r(275),m=r(276),v=r(87),S=r(277),w=r(59),P={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}},k=r(9),C=r(6),T=r(186),D=r(84),I=r(16),z=r.n(I),A=r(32),E=r(8),R=r(11),B=["style","lightColor","darkColor"],H=["style","lightColor","darkColor"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t){var r=g(),n=e[r];return n||P[r][t]}function L(e){var t=e.style,r=e.lightColor,n=e.darkColor,o=z()(e,B),c=F({light:r,dark:n},"text");return Object(R.jsx)(A.default,V({style:[{color:c},t]},o))}function N(e){var t=e.style,r=e.lightColor,n=e.darkColor,o=z()(e,H),c=F({light:r,dark:n},"background");return Object(R.jsx)(E.default,V({style:[{backgroundColor:c},t]},o))}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e){return Object(R.jsx)(L,G(G({},e),{},{style:[e.style,{fontFamily:"space-mono"}]}))}function U(e){var t=e.path;return Object(R.jsxs)(N,{children:[Object(R.jsxs)(N,{style:K.getStartedContainer,children:[Object(R.jsx)(L,{style:K.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Open up the code for this screen:"}),Object(R.jsx)(N,{style:[K.codeHighlightContainer,K.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)",children:Object(R.jsx)(J,{children:t})}),Object(R.jsx)(L,{style:K.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Change any of the text, save the file, and your app will automatically update."})]}),Object(R.jsx)(N,{style:K.helpContainer,children:Object(R.jsx)(D.default,{onPress:q,style:K.helpLink,children:Object(R.jsx)(L,{style:K.helpLinkText,lightColor:P.light.tint,children:"Tap here if your app doesn't automatically update after making changes"})})})]})}function q(){T.openBrowserAsync("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var K=C.default.create({getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function Q(){return Object(R.jsxs)(N,{style:X.container,children:[Object(R.jsx)(L,{style:X.title,children:"Modal"}),Object(R.jsx)(N,{style:X.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(R.jsx)(U,{path:"/screens/ModalScreen.tsx"}),Object(R.jsx)(n.StatusBar,{style:"ios"===k.default.OS?"light":"auto"})]})}var X=C.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function Y(e){var t=e.navigation;return Object(R.jsxs)(N,{style:Z.container,children:[Object(R.jsx)(L,{style:Z.title,children:"This screen doesn't exist."}),Object(R.jsx)(D.default,{onPress:function(){return t.replace("Root")},style:Z.link,children:Object(R.jsx)(L,{style:Z.linkText,children:"Go to home screen!"})})]})}var Z=C.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}});function $(e){e.navigation;return Object(R.jsxs)(N,{style:_.container,children:[Object(R.jsx)(L,{style:_.title,children:"Tab One"}),Object(R.jsx)(N,{style:_.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(R.jsx)(U,{path:"/screens/TabOneScreen.tsx"})]})}var _=C.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function ee(){return Object(R.jsxs)(N,{style:te.container,children:[Object(R.jsx)(L,{style:te.title,children:"Tab Two"}),Object(R.jsx)(N,{style:te.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(R.jsx)(U,{path:"/screens/TabTwoScreen.tsx"})]})}var te=C.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}}),re={prefixes:[r(185).createURL("/")],config:{screens:{Root:{screens:{TabOne:{screens:{TabOneScreen:"one"}},TabTwo:{screens:{TabTwoScreen:"two"}}}},Modal:"modal",NotFound:"*"}}};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){var t=e.colorScheme;return Object(R.jsx)(x.default,{linking:re,theme:"dark"===t?m.default:v.default,children:Object(R.jsx)(ie,{})})}var ce=Object(S.default)();function ie(){return Object(R.jsxs)(ce.Navigator,{children:[Object(R.jsx)(ce.Screen,{name:"Root",component:le,options:{headerShown:!1}}),Object(R.jsx)(ce.Screen,{name:"NotFound",component:Y,options:{title:"Oops!"}}),Object(R.jsx)(ce.Group,{screenOptions:{presentation:"modal"},children:Object(R.jsx)(ce.Screen,{name:"Modal",component:Q})})]})}var ae=Object(y.default)();function le(){var e=g();return Object(R.jsxs)(ae.Navigator,{initialRouteName:"TabOne",screenOptions:{tabBarActiveTintColor:P[e].tint},children:[Object(R.jsx)(ae.Screen,{name:"TabOne",component:$,options:function(t){var r=t.navigation;return{title:"Tab One",tabBarIcon:function(e){var t=e.color;return Object(R.jsx)(se,{name:"code",color:t})},headerRight:function(){return Object(R.jsx)(w.default,{onPress:function(){return r.navigate("Modal")},style:function(e){return{opacity:e.pressed?.5:1}},children:Object(R.jsx)(f.default,{name:"info-circle",size:25,color:P[e].text,style:{marginRight:15}})})}}}}),Object(R.jsx)(ae.Screen,{name:"TabTwo",component:ee,options:{title:"Tab Two",tabBarIcon:function(e){var t=e.color;return Object(R.jsx)(se,{name:"code",color:t})}}})]})}function se(e){return Object(R.jsx)(f.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({size:30,style:{marginBottom:-3}},e))}function ue(){var e=function(){var e=Object(p.useState)(!1),t=u()(e,2),n=t[0],o=t[1];return Object(p.useEffect)((function(){function e(){return(e=l()((function*(){try{j.preventAutoHideAsync(),yield b.loadAsync(d(d({},f.default.font),{},{"space-mono":r(217)}))}catch(e){console.warn(e)}finally{o(!0),j.hideAsync()}}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}(),t=g();return e?Object(R.jsxs)(o.SafeAreaProvider,{children:[Object(R.jsx)(oe,{colorScheme:t}),Object(R.jsx)(n.StatusBar,{})]}):null}},197:function(e,t,r){e.exports=r(265)},217:function(e,t,r){e.exports=r.p+"./fonts/SpaceMono-Regular.ttf"},239:function(e,t){}},[[197,1,2]]]);
//# sourceMappingURL=app.2f2082b9.chunk.js.map