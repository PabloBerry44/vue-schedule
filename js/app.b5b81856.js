(function(){"use strict";var e={98:function(e,l,n){var o=n(963),t=n(252),i=n(262),u=n(577),a=n.p+"img/folder.dcfb02fd.webp";const r=["onClick"],c=(0,t._)("p",null,"New folder",-1),s=(0,t._)("button",null,"Confirm",-1),d={key:1,class:"foldersView"},v={key:0,class:"noFoldersMsg"},f=(0,t.Uk)(" No folders yet. "),p=(0,t._)("br",null,null,-1),m=(0,t.Uk)(),k=(0,t._)("br",null,null,-1),w=(0,t.Uk)(" Tap "),h={class:"plusSample"},b=(0,t.Uk)(" to add new folder. "),g=["onClick"],y=["onClick"],_=["onClick"],C={class:"number"},U=["onClick"],S={key:2,class:"viewSchedule"},D={class:"folder"},O=["onClick"],x=["onClick"];var F={__name:"App",setup(e){let l=0,n=0,F=(0,i.iH)("folders");const H=(0,i.iH)(0),N=(0,i.iH)([{id:l++,name:"Sample Folder",notes:[{id:n++,text:"Sample Note Title",complete:!1},{id:n++,text:"Another sample title",complete:!1}]}]),j=(0,i.iH)("Folders"),M=(0,i.iH)(""),W=()=>{M.value=""};let q=(0,i.iH)(!1);const z=()=>{q.value=!q.value},T=e=>{N.value.push({id:l++,name:e,notes:[]}),z()},V=e=>{N.value=N.value.filter((l=>l.id!==e))},Y=e=>{for(let l=0;l<N.value.length;l++)N.value[l].id==e&&(H.value=l);A()},A=()=>{"schedule"==F.value?(F.value="folders",j.value="Folders"):(F.value="schedule",j.value=N.value[H.value].name)},K=e=>{N.value[H.value].notes.push({id:n++,text:e,complete:!1})},P=e=>{N.value[H.value].notes=N.value[H.value].notes.filter((l=>l.id!==e))},E=e=>{for(let l=0;l<N.value[H.value].notes.length;l++)N.value[H.value].notes[l].id==e&&(e=l);N.value[H.value].notes[e].complete?N.value[H.value].notes[e].complete=!1:N.value[H.value].notes[e].complete=!0};return(e,l)=>{const n=(0,t.up)("ion-icon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("nav",null,["schedule"==(0,i.SU)(F)?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"back",onClick:A},[(0,t.Wm)(n,{name:"arrow-back-outline"})])):(0,t.kq)("",!0),"folders"==(0,i.SU)(F)?((0,t.wg)(),(0,t.iD)("button",{key:1,class:"addFolder",onClick:z},[(0,t.Wm)(n,{name:"add-outline"})])):(0,t.kq)("",!0),(0,t.Uk)(" "+(0,u.zw)(j.value),1)]),(0,i.SU)(q)?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"overlay",onClick:(0,o.iM)(z,["self"])},[(0,t._)("form",{onSubmit:l[1]||(l[1]=(0,o.iM)((l=>T(e.newFolderName)),["prevent"])),class:"prompt"},[c,(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":l[0]||(l[0]=l=>e.newFolderName=l)},null,512),[[o.nr,e.newFolderName]]),s],32)],8,r)):(0,t.kq)("",!0),"folders"==(0,i.SU)(F)?((0,t.wg)(),(0,t.iD)("div",d,[0==N.value.length?((0,t.wg)(),(0,t.iD)("p",v,[f,p,m,k,w,(0,t._)("span",h,[(0,t.Wm)(n,{name:"add-outline"})]),b])):((0,t.wg)(!0),(0,t.iD)(t.HY,{key:1},(0,t.Ko)(N.value,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t._)("div",{class:"folder",onClick:(0,o.iM)((l=>Y(e.id)),["self"])},[(0,t._)("img",{onClick:l=>Y(e.id),src:a},null,8,y),(0,t._)("p",{class:"name",onClick:l=>Y(e.id)},[(0,t.Uk)((0,u.zw)(e.name)+" ",1),(0,t._)("span",C,"("+(0,u.zw)(e.notes.length)+")",1)],8,_),(0,t._)("button",{onClick:l=>V(e.id)},[(0,t.Wm)(n,{name:"close-outline"})],8,U)],8,g)])))),128))])):(0,t.kq)("",!0),"schedule"==(0,i.SU)(F)?((0,t.wg)(),(0,t.iD)("div",S,[(0,t._)("div",D,[(0,t._)("form",{onSubmit:l[3]||(l[3]=(0,o.iM)((e=>(K(M.value),W())),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=e=>M.value=e),placeholder:"New task"},null,512),[[o.nr,M.value]]),(0,t._)("button",null,[(0,t.Wm)(n,{name:"add-outline"})])],32),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(N.value[H.value].notes,(e=>((0,t.wg)(),(0,t.iD)("div",{class:(0,u.C_)(["note",{complete:e.complete}]),onClick:(0,o.iM)((l=>E(e.id)),["self"]),key:e.id},[(0,t.Uk)((0,u.zw)(e.text)+" ",1),(0,t._)("button",{class:"removeNote",onClick:l=>P(e.id)},[(0,t.Wm)(n,{name:"close-outline"})],8,x)],10,O)))),128))])])):(0,t.kq)("",!0)],64)}}};const H=F;var N=H;(0,o.ri)(N).mount("#app")}},l={};function n(o){var t=l[o];if(void 0!==t)return t.exports;var i=l[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(l,o,t,i){if(!o){var u=1/0;for(s=0;s<e.length;s++){o=e[s][0],t=e[s][1],i=e[s][2];for(var a=!0,r=0;r<o.length;r++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var c=t();void 0!==c&&(l=c)}}return l}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,t,i]}}(),function(){n.d=function(e,l){for(var o in l)n.o(l,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:l[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){n.p="/Vue-Schedule/"}(),function(){var e={143:0};n.O.j=function(l){return 0===e[l]};var l=function(l,o){var t,i,u=o[0],a=o[1],r=o[2],c=0;if(u.some((function(l){return 0!==e[l]}))){for(t in a)n.o(a,t)&&(n.m[t]=a[t]);if(r)var s=r(n)}for(l&&l(o);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkproject"]=self["webpackChunkproject"]||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(98)}));o=n.O(o)})();
//# sourceMappingURL=app.b5b81856.js.map