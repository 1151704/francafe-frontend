import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductoRegistrarComponent } from './modal-producto-registrar.component';

describe('ModalProductoRegistrarComponent', () => {
  let component: ModalProductoRegistrarComponent;
  let fixture: ComponentFixture<ModalProductoRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductoRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
