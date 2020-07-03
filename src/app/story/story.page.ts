/* tslint:disable */
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {
  sentences: string[];
  visibleSentenceIndex = 0;
  hiddenSentenceIndex = -1;
  started: boolean;

  @ViewChild("textWrapper", { read: ElementRef }) private textWrapper: ElementRef;

  constructor(public data: DataService, public location: Location) { }

  ngOnInit() {
    // this.sentences = this.data.text.splitKeep(/[.?!\n]/g, false);
    this.sentences = this.data.text.splitKeep(/[\n]/g, false);
  }

  showNextSentence(event) {
    if (event.target != event.currentTarget) return;
    this.started = true;
    this.visibleSentenceIndex++;

    if (this.sentences[this.visibleSentenceIndex - 1].endsWith('\n') && this.sentences[this.visibleSentenceIndex] == '\n') {
      this.visibleSentenceIndex += 1;
      this.hiddenSentenceIndex = this.visibleSentenceIndex;
      this.showNextSentence(event)
      return
    }
    if (this.sentences[this.visibleSentenceIndex] == '\n') {
      this.showNextSentence(event)
      return
    }

    if (this.visibleSentenceIndex > this.sentences.length) {
      this.location.back()
    }
    setTimeout(() => this.textWrapper.nativeElement.scroll(0, 999999), 100)
  }

  restart() {
    this.visibleSentenceIndex = 0;
    this.hiddenSentenceIndex = -1;
  }
}

String.prototype.splitKeep = function(splitter, ahead) {
  const self = this;
  const result: string[] = [];
  if (splitter !== '') {
    const matches = [];
    // Getting mached value and its index
    var replaceName = splitter instanceof RegExp ? "replace" : "replaceAll";
    var r = self[replaceName](splitter, function (m, i, e) {
      matches.push({ value: m, index: i });
      return getSubst(m);
    });
    // Finds split substrings
    var lastIndex = 0;
    for (var i = 0; i < matches.length; i++) {
      var m = matches[i];
      var nextIndex = ahead == true ? m.index : m.index + m.value.length;
      if (nextIndex != lastIndex) {
        var part = self.substring(lastIndex, nextIndex);
        result.push(part);
        lastIndex = nextIndex;
      }
    };
    if (lastIndex < self.length) {
      var part = self.substring(lastIndex, self.length);
      result.push(part);
    };
    // Substitution of matched string
    function getSubst(value) {
      var substChar = value[0] == '0' ? '1' : '0';
      var subst = '';
      for (var i = 0; i < value.length; i++) {
        subst += substChar;
      }
      return subst;
    };
  }
  else {
    result.push(self);
  };
  return result;
};
