import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchesComponent } from './user-searches.component';

describe('UserSearchesComponent', () => {
  let component: UserSearchesComponent;
  let fixture: ComponentFixture<UserSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
