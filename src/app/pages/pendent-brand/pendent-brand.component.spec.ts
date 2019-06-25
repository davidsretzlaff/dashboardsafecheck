import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendentBrandComponent } from './pendent-brand.component';

describe('PendentBrandComponent', () => {
  let component: PendentBrandComponent;
  let fixture: ComponentFixture<PendentBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendentBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendentBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
