(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"fP/T":function(n,e,t){"use strict";t.r(e),t.d(e,"StoryPageModule",(function(){return k}));var c=t("ofXK"),i=t("3Pt+"),o=t("TEn/"),s=t("tyNb"),r=t("fXoL"),b=t("EnSQ");const l=["textWrapper"];function a(n,e){if(1&n){const n=r.Nb();r.Mb(0,"span",0),r.Ub("click",(function(e){return r.bc(n),r.Wb(2).showNextSentence(e)})),r.fc(1),r.Lb()}if(2&n){const n=r.Wb().$implicit;r.zb(1),r.gc(n)}}function d(n,e){if(1&n){const n=r.Nb();r.Mb(0,"br",0),r.Ub("click",(function(e){return r.bc(n),r.Wb(2).showNextSentence(e)})),r.Lb()}}function u(n,e){if(1&n){const n=r.Nb();r.Mb(0,"span",0),r.Ub("click",(function(e){return r.bc(n),r.Wb().showNextSentence(e)})),r.ec(1,a,2,1,"span",10),r.ec(2,d,1,0,"br",10),r.Lb()}if(2&n){const n=e.$implicit,t=e.index,c=r.Wb();r.zb(1),r.Zb("ngIf",t<=c.visibleSentenceIndex&&t>c.hiddenSentenceIndex),r.zb(1),r.Zb("ngIf",t<=c.visibleSentenceIndex&&t>c.hiddenSentenceIndex&&n.endsWith("\n"))}}function f(n,e){if(1&n){const n=r.Nb();r.Mb(0,"div",11),r.Ub("click",(function(e){return r.bc(n),r.Wb().showNextSentence(e)})),r.fc(1," \u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043a\u0438 "),r.Lb()}}function p(n,e){if(1&n){const n=r.Nb();r.Mb(0,"div",12),r.Ub("click",(function(e){r.bc(n);const t=r.Wb();return t.started=!0,t.showNextSentence(e)})),r.Mb(1,"div",0),r.Ub("click",(function(e){return r.bc(n),r.Wb().showNextSentence(e)})),r.fc(2,' \u0412\u043a\u043b\u044e\u0447\u0438 \u0440\u0435\u0436\u0438\u043c "\u043d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442\u044c" \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0439 \u0437\u0430\u043f\u0438\u0441\u044c \u044d\u043a\u0440\u0430\u043d\u0430 \u0441 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u043e\u043c '),r.Lb(),r.Mb(3,"ion-button",0),r.Ub("click",(function(){return r.bc(n),r.Wb().started=!0})),r.fc(4,"\u041f\u043e\u0435\u0445\u0430\u043b\u0438"),r.Lb(),r.Lb()}}function g(n,e){if(1&n){const n=r.Nb();r.Mb(0,"div",13),r.Mb(1,"div",14),r.Ub("click",(function(e){return r.bc(n),r.Wb().showNextSentence(e)})),r.fc(2," \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439 "),r.Mb(3,"div",0),r.Ub("click",(function(e){return r.bc(n),r.Wb().showNextSentence(e)})),r.fc(4),r.Lb(),r.Lb(),r.Mb(5,"ion-button",15),r.Ub("click",(function(){return r.bc(n),r.Wb().restart()})),r.fc(6,"\u041d\u0430\u0447\u0430\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"),r.Lb(),r.Mb(7,"ion-button",16),r.Ub("click",(function(){return r.bc(n),r.Wb().location.back()})),r.fc(8,"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c"),r.Lb(),r.Mb(9,"div",17),r.Mb(10,"ion-button",18),r.Ub("click",(function(){return r.bc(n),r.Wb().newPage()})),r.fc(11,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),r.Lb(),r.Lb(),r.Lb()}if(2&n){const n=r.Wb();r.zb(4),r.gc((null==n.sentences?null:n.sentences.length)-n.visibleSentenceIndex)}}let h=(()=>{class n{constructor(n,e){this.data=n,this.location=e,this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}ngOnInit(){this.sentences=this.data.text.replace(/\u2800/g," ").splitKeep(/\.\.|\.|\?|\!|\n/g,!1)}showNextSentence(n){n&&n.target!=n.currentTarget||(this.started=!0,this.visibleSentenceIndex++,this.visibleSentenceIndex>this.sentences.length?this.location.back():""!=this.sentences[this.visibleSentenceIndex].trim()?setTimeout(()=>this.textWrapper.nativeElement.scroll(0,999999),100):this.showNextSentence())}restart(){this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}newPage(){if(""==this.sentences[this.visibleSentenceIndex+1].trim())return this.visibleSentenceIndex++,void this.newPage();this.hiddenSentenceIndex=this.visibleSentenceIndex,this.showNextSentence()}}return n.\u0275fac=function(e){return new(e||n)(r.Jb(b.a),r.Jb(c.f))},n.\u0275cmp=r.Db({type:n,selectors:[["app-story"]],viewQuery:function(n,e){var t;1&n&&r.hc(l,!0,r.l),2&n&&r.ac(t=r.Vb())&&(e.textWrapper=t.first)},decls:11,vars:5,consts:[[3,"click"],["story","",3,"click"],["title",""],["text-wrapper",""],["textWrapper",""],["text","",3,"click"],[3,"click",4,"ngFor","ngForOf"],["final","",3,"click",4,"ngIf"],["starter","",3,"click",4,"ngIf"],["panel","",4,"ngIf"],[3,"click",4,"ngIf"],["final","",3,"click"],["starter","",3,"click"],["panel",""],["remains","",3,"click"],["restart","","color","secondary",3,"click"],["back","","color","secondary",3,"click"],[2,"padding-top","20px"],[2,"width","100%",3,"click"]],template:function(n,e){1&n&&(r.Mb(0,"ion-content",0),r.Ub("click",(function(n){return e.showNextSentence(n)})),r.Mb(1,"div",1),r.Ub("click",(function(n){return e.showNextSentence(n)})),r.Mb(2,"div",2),r.fc(3),r.Lb(),r.Mb(4,"div",3,4),r.Mb(6,"div",5),r.Ub("click",(function(n){return e.showNextSentence(n)})),r.ec(7,u,3,2,"span",6),r.Lb(),r.Lb(),r.ec(8,f,2,0,"div",7),r.Lb(),r.ec(9,p,5,0,"div",8),r.ec(10,g,12,1,"div",9),r.Lb()),2&n&&(r.zb(3),r.gc(e.data.title),r.zb(4),r.Zb("ngForOf",e.sentences),r.zb(1),r.Zb("ngIf",e.visibleSentenceIndex==(null==e.sentences?null:e.sentences.length)),r.zb(1),r.Zb("ngIf",!e.started),r.zb(1),r.Zb("ngIf",e.started))},directives:[o.c,c.h,c.i,o.b],styles:["ion-content[_ngcontent-%COMP%]{--background:sdfsdfsd;--color:#282828;background-image:url(https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg);background-size:contain;background-repeat:no-repeat;background-color:grey;position:relative}[starter][_ngcontent-%COMP%]{text-align:center}[starter][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:200%;padding:20px;margin-bottom:30px;margin-top:30px}[story][_ngcontent-%COMP%]{height:100vw;position:relative}[title][_ngcontent-%COMP%]{padding:30px 10px;font-size:150%}[text-wrapper][_ngcontent-%COMP%]{padding:0 10px 20px;max-height:280px;overflow:scroll;scroll-behavior:smooth}[final][_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 auto;width:100%}[final][_ngcontent-%COMP%], [panel][_ngcontent-%COMP%]{padding:10px;text-align:center}[panel][_ngcontent-%COMP%]{margin-top:30px}[panel][_ngcontent-%COMP%]   [remains][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:-20px;font-size:1000%;color:#3dc2ff}"]}),n})();String.prototype.splitKeep=function(n,e){const t=this,c=[];if(""!==n){const l=[];t[n instanceof RegExp?"replace":"replaceAll"](n,(function(n,e,t){return l.push({value:n,index:e}),function(n){for(var e="0"==n[0]?"1":"0",t="",c=0;c<n.length;c++)t+=e;return t}(n)}));for(var i=0,o=0;o<l.length;o++){var s=l[o],r=1==e?s.index:s.index+s.value.length;if(r!=i){var b=t.substring(i,r);c.push(b),i=r}}i<t.length&&(b=t.substring(i,t.length),c.push(b))}else c.push(t);return c};const x=[{path:"",component:h}];let v=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(e){return new(e||n)},imports:[[s.i.forChild(x)],s.i]}),n})(),k=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(e){return new(e||n)},imports:[[c.b,i.a,o.l,v]]}),n})()}}]);