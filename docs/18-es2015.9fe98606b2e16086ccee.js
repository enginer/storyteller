(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"fP/T":function(n,t,e){"use strict";e.r(t),e.d(t,"StoryPageModule",(function(){return v}));var c=e("ofXK"),i=e("3Pt+"),o=e("TEn/"),r=e("tyNb"),s=e("fXoL"),b=e("EnSQ");const a=["textWrapper"];function l(n,t){if(1&n){const n=s.Nb();s.Mb(0,"span",0),s.Ub("click",(function(t){return s.bc(n),s.Wb(2).showNextSentence(t)})),s.hc(1),s.Lb()}if(2&n){const n=s.Wb().$implicit;s.zb(1),s.ic(n)}}function d(n,t){if(1&n){const n=s.Nb();s.Mb(0,"br",0),s.Ub("click",(function(t){return s.bc(n),s.Wb(2).showNextSentence(t)})),s.Lb()}}function u(n,t){if(1&n){const n=s.Nb();s.Mb(0,"span",0),s.Ub("click",(function(t){return s.bc(n),s.Wb().showNextSentence(t)})),s.gc(1,l,2,1,"span",9),s.gc(2,d,1,0,"br",9),s.Lb()}if(2&n){const n=t.$implicit,e=t.index,c=s.Wb();s.zb(1),s.Zb("ngIf",e<=c.visibleSentenceIndex&&e>c.hiddenSentenceIndex),s.zb(1),s.Zb("ngIf",e<=c.visibleSentenceIndex&&e>c.hiddenSentenceIndex&&n.endsWith("\n"))}}function p(n,t){if(1&n){const n=s.Nb();s.Mb(0,"div",10),s.Ub("click",(function(){return s.bc(n),s.Wb().started=!0})),s.Mb(1,"div",0),s.Ub("click",(function(){return s.bc(n),s.Wb().started=!0})),s.hc(2,' \u0412\u043a\u043b\u044e\u0447\u0438 \u0440\u0435\u0436\u0438\u043c "\u043d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442\u044c" \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0439 \u0437\u0430\u043f\u0438\u0441\u044c \u044d\u043a\u0440\u0430\u043d\u0430 \u0441 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u043e\u043c '),s.Lb(),s.Mb(3,"ion-button",0),s.Ub("click",(function(){return s.bc(n),s.Wb().started=!0})),s.hc(4,"\u041f\u043e\u0435\u0445\u0430\u043b\u0438"),s.Lb(),s.Lb()}}function g(n,t){if(1&n){const n=s.Nb();s.Mb(0,"div",11),s.Mb(1,"div",12),s.Mb(2,"ion-button",13),s.Ub("click",(function(){return s.bc(n),s.Wb().newPage()})),s.hc(3,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),s.Lb(),s.Lb(),s.Mb(4,"div",14),s.Ub("click",(function(t){return s.bc(n),s.Wb().showNextSentence(t)})),s.hc(5," \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439 "),s.Mb(6,"div",0),s.Ub("click",(function(t){return s.bc(n),s.Wb().showNextSentence(t)})),s.hc(7),s.Lb(),s.Lb(),s.Mb(8,"ion-button",15),s.Ub("click",(function(){return s.bc(n),s.Wb().restart()})),s.hc(9,"\u041d\u0430\u0447\u0430\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"),s.Lb(),s.Mb(10,"ion-button",16),s.Ub("click",(function(){return s.bc(n),s.Wb().location.back()})),s.hc(11,"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c"),s.Lb(),s.Lb()}if(2&n){const n=s.Wb();s.zb(7),s.ic((null==n.sentences?null:n.sentences.length)-n.visibleSentenceIndex)}}let h=(()=>{class n{constructor(n,t){this.data=n,this.location=t,this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}ngOnInit(){this.sentences=this.data.text.replace(/\u2800/g," ").splitKeep(/\.\.|\.|\?|\!|\n/g,!1)}showNextSentence(n){n&&n.target!=n.currentTarget||(this.started=!0,this.visibleSentenceIndex++,this.visibleSentenceIndex>this.sentences.length?this.location.back():""!=this.sentences[this.visibleSentenceIndex].trim()?setTimeout(()=>this.textWrapper.nativeElement.scroll(0,999999),100):this.showNextSentence())}restart(){this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}newPage(){if(""==this.sentences[this.visibleSentenceIndex+1].trim())return this.visibleSentenceIndex++,void this.newPage();this.hiddenSentenceIndex=this.visibleSentenceIndex,this.showNextSentence()}}return n.\u0275fac=function(t){return new(t||n)(s.Jb(b.a),s.Jb(c.f))},n.\u0275cmp=s.Db({type:n,selectors:[["app-story"]],viewQuery:function(n,t){var e;1&n&&s.jc(a,!0,s.l),2&n&&s.ac(e=s.Vb())&&(t.textWrapper=e.first)},decls:10,vars:4,consts:[[3,"click"],["story","",3,"click"],["title",""],["text-wrapper",""],["textWrapper",""],["text","",3,"click"],[3,"click",4,"ngFor","ngForOf"],["starter","",3,"click",4,"ngIf"],["panel","",4,"ngIf"],[3,"click",4,"ngIf"],["starter","",3,"click"],["panel",""],[2,"padding-bottom","20px"],[2,"width","100%",3,"click"],["remains","",3,"click"],["restart","","color","secondary",3,"click"],["back","","color","secondary",3,"click"]],template:function(n,t){1&n&&(s.Mb(0,"ion-content",0),s.Ub("click",(function(n){return t.showNextSentence(n)})),s.Mb(1,"div",1),s.Ub("click",(function(n){return t.showNextSentence(n)})),s.Mb(2,"div",2),s.hc(3),s.Lb(),s.Mb(4,"div",3,4),s.Mb(6,"div",5),s.Ub("click",(function(n){return t.showNextSentence(n)})),s.gc(7,u,3,2,"span",6),s.Lb(),s.Lb(),s.Lb(),s.gc(8,p,5,0,"div",7),s.gc(9,g,12,1,"div",8),s.Lb()),2&n&&(s.zb(3),s.ic(t.data.title),s.zb(4),s.Zb("ngForOf",t.sentences),s.zb(1),s.Zb("ngIf",!t.started),s.zb(1),s.Zb("ngIf",t.started))},directives:[o.c,c.h,c.i,o.b],styles:["ion-content[_ngcontent-%COMP%]{--background:sdfsdfsd;--color:#282828;background-image:url(https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg);background-size:contain;background-repeat:no-repeat;background-color:grey;position:relative}[starter][_ngcontent-%COMP%]{text-align:center}[starter][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:200%;padding:20px;margin-bottom:30px;margin-top:30px}[story][_ngcontent-%COMP%]{height:100vw;position:relative}[title][_ngcontent-%COMP%]{padding:30px 10px;font-size:150%}[text-wrapper][_ngcontent-%COMP%]{padding:0 10px 20px;max-height:280px;overflow:scroll;scroll-behavior:smooth}[final][_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 auto;width:100%}[final][_ngcontent-%COMP%], [panel][_ngcontent-%COMP%]{padding:10px;text-align:center}[panel][_ngcontent-%COMP%]{margin-top:10px}[panel][_ngcontent-%COMP%]   [remains][_ngcontent-%COMP%]{margin-bottom:20px}[panel][_ngcontent-%COMP%]   [remains][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:-20px;font-size:700%;color:#3dc2ff}"]}),n})();String.prototype.splitKeep=function(n,t){const e=this,c=[];if(""!==n){const a=[];e[n instanceof RegExp?"replace":"replaceAll"](n,(function(n,t,e){return a.push({value:n,index:t}),function(n){for(var t="0"==n[0]?"1":"0",e="",c=0;c<n.length;c++)e+=t;return e}(n)}));for(var i=0,o=0;o<a.length;o++){var r=a[o],s=1==t?r.index:r.index+r.value.length;if(s!=i){var b=e.substring(i,s);c.push(b),i=s}}i<e.length&&(b=e.substring(i,e.length),c.push(b))}else c.push(e);return c};const f=[{path:"",component:h}];let x=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(f)],r.i]}),n})(),v=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[c.b,i.a,o.l,x]]}),n})()}}]);