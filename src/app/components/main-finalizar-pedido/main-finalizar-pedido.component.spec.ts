import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFinalizarPedidoComponent } from './main-finalizar-pedido.component';

describe('MainFinalizarPedidoComponent', () => {
  let component: MainFinalizarPedidoComponent;
  let fixture: ComponentFixture<MainFinalizarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFinalizarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFinalizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
