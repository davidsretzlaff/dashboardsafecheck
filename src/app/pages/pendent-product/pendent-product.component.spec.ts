import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendentProductComponent } from './pendent-product.component';

describe('PendentProductComponent', () => {
  let component: PendentProductComponent;
  let fixture: ComponentFixture<PendentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
