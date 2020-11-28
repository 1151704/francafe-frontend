import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductosComponent } from './main-productos.component';

describe('MainProductosComponent', () => {
  let component: MainProductosComponent;
  let fixture: ComponentFixture<MainProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
