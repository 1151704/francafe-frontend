import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsumosRegistrarComponent } from './modal-insumos-registrar.component';

describe('ModalInsumosRegistrarComponent', () => {
  let component: ModalInsumosRegistrarComponent;
  let fixture: ComponentFixture<ModalInsumosRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInsumosRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInsumosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
