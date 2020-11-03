import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPedidoComponent } from './main-pedido.component';

describe('MainPedidoComponent', () => {
  let component: MainPedidoComponent;
  let fixture: ComponentFixture<MainPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
