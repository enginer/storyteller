/* tslint:disable */
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-story-lines',
  templateUrl: './story-lines.page.html',
  styleUrls: ['./story-lines.page.scss'],
})
export class StoryLinesPage implements OnInit {
  started: boolean;
  pageSize = 253.6;
  page = 1;
  lineHeight = 90/5;
  textHeight = this.lineHeight
  text: string;

  @ViewChild("textWrapper", { read: ElementRef }) private textWrapper: ElementRef;

  constructor(public data: DataService, public location: Location) { }

  ngOnInit() {
    this.text = this.data.text.replace(/\n/g, "<br>")
        + "<center>***</center>"
  }

  showNextLine(event?: Event) {
    if (event && event.target != event.currentTarget) return;
    this.started = true;
    this.textHeight += this.lineHeight;
    if (this.textHeight >= this.pageSize) {
      this.page++
      this.textHeight = this.lineHeight
    }

    /*if (this.visibleSentenceIndex > this.sentences.length) {
      this.location.back()
      return;
    }*/

    /*if (this.sentences[this.visibleSentenceIndex - 1].replace(" ", "").endsWith('\n') && this.sentences[this.visibleSentenceIndex].trim() == '') {
      this.visibleSentenceIndex += 1;
      this.hiddenSentenceIndex = this.visibleSentenceIndex;
      this.showNextSentence()
      return
    }*/

    // setTimeout(() => this.textWrapper.nativeElement.scroll(0, 999999), 100)
  }

  restart() {
    this.textHeight = this.lineHeight;
    this.page = 1
  }

  newPage() {

  }
}
