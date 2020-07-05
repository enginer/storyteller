import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoryLinesPage } from './story-lines.page';

describe('StoryLinesPage', () => {
  let component: StoryLinesPage;
  let fixture: ComponentFixture<StoryLinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryLinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoryLinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
