(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"fP/T":function(n,e,t){"use strict";t.r(e),t.d(e,"StoryPageModule",(function(){return k}));var c=t("ofXK"),i=t("3Pt+"),o=t("TEn/"),r=t("tyNb"),s=t("fXoL"),b=t("EnSQ");const l=["textWrapper"];function a(n,e){if(1&n){const n=s.Nb();s.Mb(0,"span",0),s.Ub("click",(function(e){return s.bc(n),s.Wb(2).showNextSentence(e)})),s.fc(1),s.Lb()}if(2&n){const n=s.Wb().$implicit;s.zb(1),s.gc(n)}}function d(n,e){if(1&n){const n=s.Nb();s.Mb(0,"br",0),s.Ub("click",(function(e){return s.bc(n),s.Wb(2).showNextSentence(e)})),s.Lb()}}function u(n,e){if(1&n){const n=s.Nb();s.Mb(0,"span",0),s.Ub("click",(function(e){return s.bc(n),s.Wb().showNextSentence(e)})),s.ec(1,a,2,1,"span",10),s.ec(2,d,1,0,"br",10),s.Lb()}if(2&n){const n=e.$implicit,t=e.index,c=s.Wb();s.zb(1),s.Zb("ngIf",t<=c.visibleSentenceIndex&&t>c.hiddenSentenceIndex),s.zb(1),s.Zb("ngIf",t<=c.visibleSentenceIndex&&t>c.hiddenSentenceIndex&&n.endsWith("\n"))}}function f(n,e){if(1&n){const n=s.Nb();s.Mb(0,"div",11),s.Ub("click",(function(e){return s.bc(n),s.Wb().showNextSentence(e)})),s.fc(1," \u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043a\u0438 "),s.Lb()}}function p(n,e){if(1&n){const n=s.Nb();s.Mb(0,"div",12),s.Ub("click",(function(){return s.bc(n),s.Wb().started=!0})),s.Mb(1,"div",0),s.Ub("click",(function(){return s.bc(n),s.Wb().started=!0})),s.fc(2,' \u0412\u043a\u043b\u044e\u0447\u0438 \u0440\u0435\u0436\u0438\u043c "\u043d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442\u044c" \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0439 \u0437\u0430\u043f\u0438\u0441\u044c \u044d\u043a\u0440\u0430\u043d\u0430 \u0441 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u043e\u043c '),s.Lb(),s.Mb(3,"ion-button",0),s.Ub("click",(function(){return s.bc(n),s.Wb().started=!0})),s.fc(4,"\u041f\u043e\u0435\u0445\u0430\u043b\u0438"),s.Lb(),s.Lb()}}function g(n,e){if(1&n){const n=s.Nb();s.Mb(0,"div",13),s.Mb(1,"div",14),s.Mb(2,"ion-button",15),s.Ub("click",(function(){return s.bc(n),s.Wb().newPage()})),s.fc(3,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),s.Lb(),s.Lb(),s.Mb(4,"div",16),s.Ub("click",(function(e){return s.bc(n),s.Wb().showNextSentence(e)})),s.fc(5," \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439 "),s.Mb(6,"div",0),s.Ub("click",(function(e){return s.bc(n),s.Wb().showNextSentence(e)})),s.fc(7),s.Lb(),s.Lb(),s.Mb(8,"ion-button",17),s.Ub("click",(function(){return s.bc(n),s.Wb().restart()})),s.fc(9,"\u041d\u0430\u0447\u0430\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"),s.Lb(),s.Mb(10,"ion-button",18),s.Ub("click",(function(){return s.bc(n),s.Wb().location.back()})),s.fc(11,"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c"),s.Lb(),s.Lb()}if(2&n){const n=s.Wb();s.zb(7),s.gc((null==n.sentences?null:n.sentences.length)-n.visibleSentenceIndex)}}let h=(()=>{class n{constructor(n,e){this.data=n,this.location=e,this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}ngOnInit(){this.sentences=this.data.text.replace(/\u2800/g," ").splitKeep(/\.\.|\.|\?|\!|\n/g,!1)}showNextSentence(n){n&&n.target!=n.currentTarget||(this.started=!0,this.visibleSentenceIndex++,this.visibleSentenceIndex>this.sentences.length?this.location.back():""!=this.sentences[this.visibleSentenceIndex].trim()?setTimeout(()=>this.textWrapper.nativeElement.scroll(0,999999),100):this.showNextSentence())}restart(){this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}newPage(){if(""==this.sentences[this.visibleSentenceIndex+1].trim())return this.visibleSentenceIndex++,void this.newPage();this.hiddenSentenceIndex=this.visibleSentenceIndex,this.showNextSentence()}}return n.\u0275fac=function(e){return new(e||n)(s.Jb(b.a),s.Jb(c.f))},n.\u0275cmp=s.Db({type:n,selectors:[["app-story"]],viewQuery:function(n,e){var t;1&n&&s.hc(l,!0,s.l),2&n&&s.ac(t=s.Vb())&&(e.textWrapper=t.first)},decls:11,vars:5,consts:[[3,"click"],["story","",3,"click"],["title",""],["text-wrapper",""],["textWrapper",""],["text","",3,"click"],[3,"click",4,"ngFor","ngForOf"],["final","",3,"click",4,"ngIf"],["starter","",3,"click",4,"ngIf"],["panel","",4,"ngIf"],[3,"click",4,"ngIf"],["final","",3,"click"],["starter","",3,"click"],["panel",""],[2,"padding-bottom","20px"],[2,"width","100%",3,"click"],["remains","",3,"click"],["restart","","color","secondary",3,"click"],["back","","color","secondary",3,"click"]],template:function(n,e){1&n&&(s.Mb(0,"ion-content",0),s.Ub("click",(function(n){return e.showNextSentence(n)})),s.Mb(1,"div",1),s.Ub("click",(function(n){return e.showNextSentence(n)})),s.Mb(2,"div",2),s.fc(3),s.Lb(),s.Mb(4,"div",3,4),s.Mb(6,"div",5),s.Ub("click",(function(n){return e.showNextSentence(n)})),s.ec(7,u,3,2,"span",6),s.Lb(),s.Lb(),s.ec(8,f,2,0,"div",7),s.Lb(),s.ec(9,p,5,0,"div",8),s.ec(10,g,12,1,"div",9),s.Lb()),2&n&&(s.zb(3),s.gc(e.data.title),s.zb(4),s.Zb("ngForOf",e.sentences),s.zb(1),s.Zb("ngIf",e.visibleSentenceIndex==(null==e.sentences?null:e.sentences.length)),s.zb(1),s.Zb("ngIf",!e.started),s.zb(1),s.Zb("ngIf",e.started))},directives:[o.c,c.h,c.i,o.b],styles:["ion-content[_ngcontent-%COMP%]{--background:sdfsdfsd;--color:#282828;background-image:url(https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg);background-size:contain;background-repeat:no-repeat;background-color:grey;position:relative}[starter][_ngcontent-%COMP%]{text-align:center}[starter][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:200%;padding:20px;margin-bottom:30px;margin-top:30px}[story][_ngcontent-%COMP%]{height:100vw;position:relative}[title][_ngcontent-%COMP%]{padding:30px 10px;font-size:150%}[text-wrapper][_ngcontent-%COMP%]{padding:0 10px 20px;max-height:280px;overflow:scroll;scroll-behavior:smooth}[final][_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 auto;width:100%}[final][_ngcontent-%COMP%], [panel][_ngcontent-%COMP%]{padding:10px;text-align:center}[panel][_ngcontent-%COMP%]{margin-top:10px}[panel][_ngcontent-%COMP%]   [remains][_ngcontent-%COMP%]{margin-bottom:20px}[panel][_ngcontent-%COMP%]   [remains][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:-20px;font-size:700%;color:#3dc2ff}"]}),n})();String.prototype.splitKeep=function(n,e){const t=this,c=[];if(""!==n){const l=[];t[n instanceof RegExp?"replace":"replaceAll"](n,(function(n,e,t){return l.push({value:n,index:e}),function(n){for(var e="0"==n[0]?"1":"0",t="",c=0;c<n.length;c++)t+=e;return t}(n)}));for(var i=0,o=0;o<l.length;o++){var r=l[o],s=1==e?r.index:r.index+r.value.length;if(s!=i){var b=t.substring(i,s);c.push(b),i=s}}i<t.length&&(b=t.substring(i,t.length),c.push(b))}else c.push(t);return c};const x=[{path:"",component:h}];let v=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(e){return new(e||n)},imports:[[r.i.forChild(x)],r.i]}),n})(),k=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(e){return new(e||n)},imports:[[c.b,i.a,o.l,v]]}),n})()}}]);