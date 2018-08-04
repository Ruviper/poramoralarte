import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTracksComponent } from './comment-tracks.component';

describe('CommentTracksComponent', () => {
  let component: CommentTracksComponent;
  let fixture: ComponentFixture<CommentTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
