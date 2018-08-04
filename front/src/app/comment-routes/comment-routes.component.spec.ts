import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRoutesComponent } from './comment-routes.component';

describe('CommentRoutesComponent', () => {
  let component: CommentRoutesComponent;
  let fixture: ComponentFixture<CommentRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
