var n=function(){},t=function(n,t){for(var r in n)t(n[r],r)},r=function(n,t){for(var r in t)n[r]=t[r];return n},u=function(n){return r({},n)},e=function(n,t){return r(u(n),t)},i=window.console||{},o=["debug","error","group","groupCollapsed","info","log","warn"],c=["clear","dir","groupEnd"],l=function(n){t(o,n)},f=function(n){t(c,n)},a=function(n){l(n),f(n)};a(function(t){i[t]=i[t]||n});var d={enabled:!0,styled:!0},s=u(d),b=function(n){return n&&(s=e(d,n)),s},p={},g={"border-radius":"2px",padding:"1px 3px",margin:"0 1px",color:"white"},v=function(n,t){if(null!=n&&null!=t)t=e(g,t),p[n]=t;else if(null!=n)return p[n];return Object.keys(p)},h=function(n){return null!=n&&(g=n),g},y=function(n){var r="";return t(p[n],function(n,t){r+=t+":"+n+";"}),r},w=function(n,t){return e(n,{background:t})};t(["green","red"],function(n){v(n,w({},n))}),v("orange",w({color:"black"},"orange"));var x=null,k=null,j=function(n){return null!=x&&!x.test(n)||null!=k&&k.test(n)},m=function(n){return{none:function(){return x=null,k=null,n(),this},include:function(t){return t!==x&&(x=t,n()),this},exclude:function(t){return t!==k&&(k=t,n()),this}}},C={},E=function(n,t,r){var u=[];if(r){var e=C[r],i=e[0],o=e[1],c=e[2];u=E(i.label,o,c)}if(n){var l=t?"%c"+n:"["+n+"]";u[0]=""+(u[0]||"")+l}return t&&u.push(y(t)),u},O=function(t,r){var u=this,e=E(this.label,!!s.styled&&t,r);!s.enabled||j(e[0])?a(function(t){return u[t]=n}):(l(function(n){u[n]=(t=i[n]).bind.apply(t,[i].concat(e));var t}),f(function(n){u[n]=i[n].bind(i)}))},S=function(n,t,r){this.label=n,O.bind(this,t,r)(),C[n]=[this,t,r]};S.prototype.define=function(n,t){return new S(n,t,this.label)};var q=function(){t(C,function(n){var t=n[0],r=n[1],u=n[2];O.bind(t,r,u)()})},z=new S;z.get=function(n){return(C[n]||{})[0]};try{z.log()}catch(n){z=e(i,{define:function(){return z},get:function(){return z}})}z.style=v,z.defaultStyle=h,z.filter=m(q),z.config=function(n){return n&&"object"==typeof n&&(b(n),q()),s};var A=z;module.exports=A;
//# sourceMappingURL=badgee.js.map