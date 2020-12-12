import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarguesInsumosComponent } from './modal-cargues-insumos.component';

describe('ModalCarguesInsumosComponent', () => {
  let component: ModalCarguesInsumosComponent;
  let fixture: ComponentFixture<ModalCarguesInsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCarguesInsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCarguesInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
