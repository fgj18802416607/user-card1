import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviseComponent } from './user-revise.component';

describe('UserReviseComponent', () => {
  let component: UserReviseComponent;
  let fixture: ComponentFixture<UserReviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
