function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"fP/T":function(n,e,t){"use strict";t.r(e),t.d(e,"StoryPageModule",(function(){return S}));var i=t("ofXK"),c=t("3Pt+"),r=t("TEn/"),o=t("tyNb"),s=t("fXoL"),a=t("EnSQ"),b=["textWrapper"];function l(n,e){if(1&n){var t=s.Nb();s.Mb(0,"span",0),s.Ub("click",(function(n){return s.bc(t),s.Wb(2).showNextSentence(n)})),s.fc(1),s.Lb()}if(2&n){var i=s.Wb().$implicit;s.zb(1),s.gc(i)}}function u(n,e){if(1&n){var t=s.Nb();s.Mb(0,"br",0),s.Ub("click",(function(n){return s.bc(t),s.Wb(2).showNextSentence(n)})),s.Lb()}}function f(n,e){if(1&n){var t=s.Nb();s.Mb(0,"span",0),s.Ub("click",(function(n){return s.bc(t),s.Wb().showNextSentence(n)})),s.ec(1,l,2,1,"span",10),s.ec(2,u,1,0,"br",10),s.Lb()}if(2&n){var i=e.$implicit,c=e.index,r=s.Wb();s.zb(1),s.Zb("ngIf",c<=r.visibleSentenceIndex&&c>r.hiddenSentenceIndex),s.zb(1),s.Zb("ngIf",c<=r.visibleSentenceIndex&&c>r.hiddenSentenceIndex&&i.endsWith("\n"))}}function d(n,e){if(1&n){var t=s.Nb();s.Mb(0,"div",11),s.Ub("click",(function(n){return s.bc(t),s.Wb().showNextSentence(n)})),s.fc(1," \u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043a\u0438 "),s.Lb()}}function p(n,e){if(1&n){var t=s.Nb();s.Mb(0,"div",12),s.Ub("click",(function(n){s.bc(t);var e=s.Wb();return e.started=!0,e.showNextSentence(n)})),s.Mb(1,"div",0),s.Ub("click",(function(n){return s.bc(t),s.Wb().showNextSentence(n)})),s.fc(2,' \u0412\u043a\u043b\u044e\u0447\u0438 \u0440\u0435\u0436\u0438\u043c "\u043d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442\u044c" \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0439 \u0437\u0430\u043f\u0438\u0441\u044c \u044d\u043a\u0440\u0430\u043d\u0430 \u0441 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u043e\u043c '),s.Lb(),s.Mb(3,"ion-button",0),s.Ub("click",(function(){return s.bc(t),s.Wb().started=!0})),s.fc(4,"\u041f\u043e\u0435\u0445\u0430\u043b\u0438"),s.Lb(),s.Lb()}}function h(n,e){if(1&n){var t=s.Nb();s.Mb(0,"div",13),s.Mb(1,"div",14),s.Ub("click",(function(n){return s.bc(t),s.Wb().showNextSentence(n)})),s.fc(2," \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439 "),s.Mb(3,"div",0),s.Ub("click",(function(n){return s.bc(t),s.Wb().showNextSentence(n)})),s.fc(4),s.Lb(),s.Lb(),s.Mb(5,"ion-button",15),s.Ub("click",(function(){return s.bc(t),s.Wb().restart()})),s.fc(6,"\u041d\u0430\u0447\u0430\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"),s.Lb(),s.Mb(7,"ion-button",16),s.Ub("click",(function(){return s.bc(t),s.Wb().location.back()})),s.fc(8,"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c"),s.Lb(),s.Mb(9,"div",17),s.Mb(10,"ion-button",18),s.Ub("click",(function(){return s.bc(t),s.Wb().newPage()})),s.fc(11,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),s.Lb(),s.Lb(),s.Lb()}if(2&n){var i=s.Wb();s.zb(4),s.gc((null==i.sentences?null:i.sentences.length)-i.visibleSentenceIndex)}}var g,v=((g=function(){function n(e,t){_classCallCheck(this,n),this.data=e,this.location=t,this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}return _createClass(n,[{key:"ngOnInit",value:function(){this.sentences=this.data.text.replace(/\u2800/g," ").splitKeep(/\.\.|\.|\?|\!|\n/g,!1)}},{key:"showNextSentence",value:function(n){var e=this;n&&n.target!=n.currentTarget||(this.started=!0,this.visibleSentenceIndex++,this.visibleSentenceIndex>this.sentences.length?this.location.back():""!=this.sentences[this.visibleSentenceIndex].trim()?setTimeout((function(){return e.textWrapper.nativeElement.scroll(0,999999)}),100):this.showNextSentence())}},{key:"restart",value:function(){this.visibleSentenceIndex=0,this.hiddenSentenceIndex=-1}},{key:"newPage",value:function(){if(""==this.sentences[this.visibleSentenceIndex+1].trim())return this.visibleSentenceIndex++,void this.newPage();this.hiddenSentenceIndex=this.visibleSentenceIndex,this.showNextSentence()}}]),n}()).\u0275fac=function(n){return new(n||g)(s.Jb(a.a),s.Jb(i.f))},g.\u0275cmp=s.Db({type:g,selectors:[["app-story"]],viewQuery:function(n,e){var t;1&n&&s.hc(b,!0,s.l),2&n&&s.ac(t=s.Vb())&&(e.textWrapper=t.first)},decls:11,vars:5,consts:[[3,"click"],["story","",3,"click"],["title",""],["text-wrapper",""],["textWrapper",""],["text","",3,"click"],[3,"click",4,"ngFor","ngForOf"],["final","",3,"click",4,"ngIf"],["starter","",3,"click",4,"ngIf"],["panel","",4,"ngIf"],[3,"click",4,"ngIf"],["final","",3,"click"],["starter","",3,"click"],["panel",""],["remains","",3,"click"],["restart","","color","secondary",3,"click"],["back","","color","secondary",3,"click"],[2,"padding-top","20px"],[2,"width","100%",3,"click"]],template:function(n,e){1&n&&(s.Mb(0,"ion-content",0),s.Ub("click",(function(n){return e.showNextSentence(n)})),s.Mb(1,"div",1),s.Ub("click",(function(n){return e.showNextSentence(n)})),s.Mb(2,"div",2),s.fc(3),s.Lb(),s.Mb(4,"div",3,4),s.Mb(6,"div",5),s.Ub("click",(function(n){return e.showNextSentence(n)})),s.ec(7,f,3,2,"span",6),s.Lb(),s.Lb(),s.ec(8,d,2,0,"div",7),s.Lb(),s.ec(9,p,5,0,"div",8),s.ec(10,h,12,1,"div",9),s.Lb()),2&n&&(s.zb(3),s.gc(e.data.title),s.zb(4),s.Zb("ngForOf",e.sentences),s.zb(1),s.Zb("ngIf",e.visibleSentenceIndex==(null==e.sentences?null:e.sentences.length)),s.zb(1),s.Zb("ngIf",!e.started),s.zb(1),s.Zb("ngIf",e.started))},directives:[r.c,i.h,i.i,r.b],styles:["ion-content[_ngcontent-%COMP%]{--background:sdfsdfsd;--color:#282828;background-image:url(https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg);background-size:contain;background-repeat:no-repeat;background-color:grey;position:relative}[starter][_ngcontent-%COMP%]{text-align:center}[starter][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:200%;padding:20px;margin-bottom:30px;margin-top:30px}[story][_ngcontent-%COMP%]{height:100vw;position:relative}[title][_ngcontent-%COMP%]{padding:30px 10px;font-size:150%}[text-wrapper][_ngcontent-%COMP%]{padding:0 10px 20px;max-height:280px;overflow:scroll;scroll-behavior:smooth}[final][_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 auto;width:100%}[final][_ngcontent-%COMP%], [panel][_ngcontent-%COMP%]{padding:10px;text-align:center}[panel][_ngcontent-%COMP%]{margin-top:30px}[panel][_ngcontent-%COMP%]   [remains][_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:-20px;font-size:1000%;color:#3dc2ff}"]}),g);String.prototype.splitKeep=function(n,e){var t=[];if(""!==n){var i=[];this[n instanceof RegExp?"replace":"replaceAll"](n,(function(n,e,t){return i.push({value:n,index:e}),function(n){for(var e="0"==n[0]?"1":"0",t="",i=0;i<n.length;i++)t+=e;return t}(n)}));for(var c=0,r=0;r<i.length;r++){var o=i[r],s=1==e?o.index:o.index+o.value.length;if(s!=c){var a=this.substring(c,s);t.push(a),c=s}}c<this.length&&(a=this.substring(c,this.length),t.push(a))}else t.push(this);return t};var x,k,w=[{path:"",component:v}],M=((k=function n(){_classCallCheck(this,n)}).\u0275mod=s.Hb({type:k}),k.\u0275inj=s.Gb({factory:function(n){return new(n||k)},imports:[[o.i.forChild(w)],o.i]}),k),S=((x=function n(){_classCallCheck(this,n)}).\u0275mod=s.Hb({type:x}),x.\u0275inj=s.Gb({factory:function(n){return new(n||x)},imports:[[i.b,c.a,r.l,M]]}),x)}}]);