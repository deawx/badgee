function n(n){var e=null!=k.include&&!k.include.test(n),t=null!=k.exclude&&k.exclude.test(n);return e||t}function e(n){return{none:function(){return k.include=null,k.exclude=null,n(),this},include:function(e){return void 0===e&&(e=null),e!==k.include&&(k.include=e,n()),this},exclude:function(e){return void 0===e&&(e=null),e!==k.exclude&&(k.exclude=e,n()),this}}}var t=function(){},r=function(n,e){for(var t in n)e(n[t],t)},u=function(n,e){for(var t in e)n[t]=e[t];return n},l=function(n){return u({},n)},i=function(n,e){return u(l(n),e)},o=window.console||{},c=["debug","error","group","groupCollapsed","info","log","warn"],f=["clear","dir","groupEnd"],d=function(n){r(c,n)},a=function(n){r(f,n)},s=function(n){d(n),a(n)};s(function(n){o[n]=o[n]||t});var g={enabled:!0,styled:!0},b=l(g),y=function(n){return"object"==typeof n&&(b=i(g,n)),b},p={},v={"border-radius":"2px",padding:"1px 3px",margin:"0 1px",color:"white"},h={style:function(n,e){if(null!=n&&null!=e)e=i(v,e),p[n]=e;else if(null!=n)return p[n];return Object.keys(p)},defaults:function(n){return null!=n&&(v=n),v},stringForStyle:function(n){var e=[];return r(p[n],function(n,t){e.push(t+":"+n+";")}),e.join("")}},x={},w={color:"black"};h.style("green",i(x,{background:"green"})),h.style("red",i(x,{background:"red"})),h.style("orange",i(w,{background:"orange"}));var k={include:null,exclude:null},S={},j=function(n,e,t){var r=[];if(b.styled||(e=!1),t){var u=S[t];r=j(u.badgee.label,u.style,u.parent)}if(n){var l=e?"%c"+n:"["+n+"]";r[0]=""+(r[0]||"")+l}return e&&r.push(h.stringForStyle(e)),r},m=function(e,r){var u=this,l=j(this.label,e,r);if(!b.enabled||n(l[0]))return void s(function(n){return u[n]=t});d(function(n){u[n]=(e=o[n]).bind.apply(e,[o].concat(l));var e}),a(function(n){u[n]=o[n].bind(o)})},F=function(n,e,t){this.label=n,m.bind(this,e,t)(),S[this.label]={badgee:this,style:e,parent:t}};F.prototype.define=function(n,e){return new F(n,e,this.label)};var C=function(){r(S,function(n){m.bind(n.badgee,n.style,n.parent)()})},E=new F;E.style=h.style,E.defaultStyle=h.defaults,E.get=function(n){return(S[n]||{}).badgee},E.filter=e(C),E.config=function(n){return n&&(y(n),C()),b};try{E.log()}catch(n){E=i(o,{define:function(){return E},style:E.style,defaultStyle:E.defaultStyle,filter:E.filter,get:function(){return E},config:function(){return E.config}})}var O=E;module.exports=O;
//# sourceMappingURL=badgee.js.map