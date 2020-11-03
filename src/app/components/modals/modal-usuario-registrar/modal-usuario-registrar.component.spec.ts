import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuarioRegistrarComponent } from './modal-usuario-registrar.component';

describe('ModalUsuarioRegistrarComponent', () => {
  let component: ModalUsuarioRegistrarComponent;
  let fixture: ComponentFixture<ModalUsuarioRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsuarioRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsuarioRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
