function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["story-story-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story/story.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoryStoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content (click)=\"showNextSentence($event)\">\n  <div story (click)=\"showNextSentence($event)\">\n    <div title>{{data.title}}</div>\n    <div #textWrapper text-wrapper>\n      <div hider></div>\n      <div text>\n        <span *ngFor=\"let sentence of sentences; let i = index\">\n          <span *ngIf=\"i <= visibleSentenceIndex && i > hiddenSentenceIndex\">{{sentence}}</span>\n          <br *ngIf=\"i <= visibleSentenceIndex && i > hiddenSentenceIndex && sentence == '\\n'\"/>\n        </span>\n      </div>\n    </div>\n    <div final *ngIf=\"visibleSentenceIndex == sentences.length\">\n      Финальные заставки\n    </div>\n  </div>\n  <div starter *ngIf=\"!started\" (click)=\"started = true\">\n    <div (click)=\"showNextSentence($event)\">\n      Запускай запись экрана с микрофоном\n    </div>\n    <ion-button (click)=\"started = true\">Поехали</ion-button>\n  </div>\n  <div panel *ngIf=\"started\">\n    <div remains (click)=\"showNextSentence($event)\">\n      Осталось предложений <div (click)=\"showNextSentence($event)\">{{sentences.length - visibleSentenceIndex}}</div>\n    </div>\n    <ion-button restart (click)=\"restart()\">Начать с начала</ion-button>\n    <ion-button back (click)=\"location.back()\" color=\"secondary\">Закончить</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/story/story-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/story/story-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: StoryPageRoutingModule */

  /***/
  function srcAppStoryStoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryPageRoutingModule", function () {
      return StoryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _story_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./story.page */
    "./src/app/story/story.page.ts");

    var routes = [{
      path: '',
      component: _story_page__WEBPACK_IMPORTED_MODULE_3__["StoryPage"]
    }];

    var StoryPageRoutingModule = function StoryPageRoutingModule() {
      _classCallCheck(this, StoryPageRoutingModule);
    };

    StoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/story/story.module.ts":
  /*!***************************************!*\
    !*** ./src/app/story/story.module.ts ***!
    \***************************************/

  /*! exports provided: StoryPageModule */

  /***/
  function srcAppStoryStoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryPageModule", function () {
      return StoryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _story_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./story-routing.module */
    "./src/app/story/story-routing.module.ts");
    /* harmony import */


    var _story_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./story.page */
    "./src/app/story/story.page.ts");

    var StoryPageModule = function StoryPageModule() {
      _classCallCheck(this, StoryPageModule);
    };

    StoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _story_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoryPageRoutingModule"]],
      declarations: [_story_page__WEBPACK_IMPORTED_MODULE_6__["StoryPage"]]
    })], StoryPageModule);
    /***/
  },

  /***/
  "./src/app/story/story.page.scss":
  /*!***************************************!*\
    !*** ./src/app/story/story.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoryStoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: sdfsdfsd;\n  --color: #282828;\n  background-image: url(https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: gray;\n  position: relative;\n}\n\n[starter] {\n  text-align: center;\n}\n\n[starter] div {\n  font-size: 300%;\n  padding: 20px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n[story] {\n  height: 100vw;\n  position: relative;\n}\n\n[title] {\n  padding: 30px 10px;\n  font-size: 150%;\n}\n\n[text-wrapper] {\n  padding: 0 10px 20px;\n  max-height: 280px;\n  overflow: scroll;\n  scroll-behavior: smooth;\n  /*[hider] {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 20px;\n  }*/\n}\n\n[final] {\n  position: absolute;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 10px;\n  text-align: center;\n  width: 100%;\n}\n\n[panel] {\n  margin-top: 30px;\n  padding: 10px;\n  text-align: center;\n}\n\n[panel] [remains] div {\n  margin: -20px;\n  font-size: 1000%;\n  color: #3dc2ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpeWxlYmlkL3Byb2plY3RzL3N0b3J5dGVsbGVyL3NyYy9hcHAvc3Rvcnkvc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9zdG9yeS9zdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUZBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBT0Usa0JBQUE7QUNKRjs7QURGRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBRUE7Ozs7O0lBQUE7QUNTRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0lGOztBRERJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnkvc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHNkZnNkZnNkO1xuICAtLWNvbG9yOiAjMjgyODI4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waXRzaGFuZ2VyLWx0ZC5jby51ay9pbWFnZXMvY29sb3Vycy82MzctVExfVHJhY2luZy5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltzdGFydGVyXSB7XG4gIGRpdiB7XG4gICAgZm9udC1zaXplOiAzMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbltzdG9yeV0ge1xuICBoZWlnaHQ6IDEwMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bdGl0bGVdIHtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBmb250LXNpemU6IDE1MCU7XG59XG5bdGV4dC13cmFwcGVyXSB7XG4gIHBhZGRpbmc6IDAgMTBweCAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cbiAgLypbaGlkZXJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgfSovXG59XG5cbltmaW5hbF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5bcGFuZWxdIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBbcmVtYWluc10ge1xuXG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbjogLTIwcHg7XG4gICAgICBmb250LXNpemU6IDEwMDAlO1xuICAgICAgY29sb3I6ICMzZGMyZmY7XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogc2Rmc2Rmc2Q7XG4gIC0tY29sb3I6ICMyODI4Mjg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpdHNoYW5nZXItbHRkLmNvLnVrL2ltYWdlcy9jb2xvdXJzLzYzNy1UTF9UcmFjaW5nLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5bc3RhcnRlcl0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5bc3RhcnRlcl0gZGl2IHtcbiAgZm9udC1zaXplOiAzMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5bc3RvcnldIHtcbiAgaGVpZ2h0OiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5bdGl0bGVdIHtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBmb250LXNpemU6IDE1MCU7XG59XG5cblt0ZXh0LXdyYXBwZXJdIHtcbiAgcGFkZGluZzogMCAxMHB4IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgLypbaGlkZXJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgfSovXG59XG5cbltmaW5hbF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbltwYW5lbF0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5bcGFuZWxdIFtyZW1haW5zXSBkaXYge1xuICBtYXJnaW46IC0yMHB4O1xuICBmb250LXNpemU6IDEwMDAlO1xuICBjb2xvcjogIzNkYzJmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/story/story.page.ts":
  /*!*************************************!*\
    !*** ./src/app/story/story.page.ts ***!
    \*************************************/

  /*! exports provided: StoryPage */

  /***/
  function srcAppStoryStoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryPage", function () {
      return StoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* tslint:disable */


    var StoryPage = /*#__PURE__*/function () {
      function StoryPage(data, location) {
        _classCallCheck(this, StoryPage);

        this.data = data;
        this.location = location;
        this.visibleSentenceIndex = 0;
        this.hiddenSentenceIndex = -1;
      }

      _createClass(StoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sentences = this.data.text.splitKeep(/[.?!\n]/g, false);
        }
      }, {
        key: "showNextSentence",
        value: function showNextSentence(event) {
          if (event.target != event.currentTarget) return;
          this.started = true;
          this.visibleSentenceIndex++;

          if (this.sentences[this.visibleSentenceIndex] == '\n' && this.sentences[this.visibleSentenceIndex + 1] == '\n') {
            this.visibleSentenceIndex += 2;
            this.hiddenSentenceIndex = this.visibleSentenceIndex;
            this.showNextSentence(event);
            return;
          }

          if (this.sentences[this.visibleSentenceIndex] == '\n') {
            this.showNextSentence(event);
            return;
          }

          if (this.visibleSentenceIndex > this.sentences.length) {
            this.location.back();
          } // setTimeout(() => this.textWrapper.nativeElement.scroll(0, 999999), 100)

        }
      }, {
        key: "restart",
        value: function restart() {
          this.visibleSentenceIndex = 0;
          this.hiddenSentenceIndex = -1;
        }
      }]);

      return StoryPage;
    }();

    StoryPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("textWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], StoryPage.prototype, "textWrapper", void 0);
    StoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-story',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./story.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./story.page.scss */
      "./src/app/story/story.page.scss"))["default"]]
    })], StoryPage);

    String.prototype.splitKeep = function (splitter, ahead) {
      var self = this;
      var result = [];

      if (splitter !== '') {
        // Substitution of matched string
        var getSubst = function getSubst(value) {
          var substChar = value[0] == '0' ? '1' : '0';
          var subst = '';

          for (var i = 0; i < value.length; i++) {
            subst += substChar;
          }

          return subst;
        };

        var matches = []; // Getting mached value and its index

        var replaceName = splitter instanceof RegExp ? "replace" : "replaceAll";
        var r = self[replaceName](splitter, function (m, i, e) {
          matches.push({
            value: m,
            index: i
          });
          return getSubst(m);
        }); // Finds split substrings

        var lastIndex = 0;

        for (var i = 0; i < matches.length; i++) {
          var m = matches[i];
          var nextIndex = ahead == true ? m.index : m.index + m.value.length;

          if (nextIndex != lastIndex) {
            var part = self.substring(lastIndex, nextIndex);
            result.push(part);
            lastIndex = nextIndex;
          }
        }

        ;

        if (lastIndex < self.length) {
          var part = self.substring(lastIndex, self.length);
          result.push(part);
        }

        ;
        ;
      } else {
        result.push(self);
      }

      ;
      return result;
    };
    /***/

  }
}]);
//# sourceMappingURL=story-story-module-es5.js.map