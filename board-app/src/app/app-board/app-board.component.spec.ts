import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoardComponent } from './app-board.component';

describe('AppBoardComponent', () => {
  let component: AppBoardComponent;
  let fixture: ComponentFixture<AppBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
