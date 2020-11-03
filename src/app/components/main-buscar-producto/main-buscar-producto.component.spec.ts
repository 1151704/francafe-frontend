import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBuscarProductoComponent } from './main-buscar-producto.component';

describe('MainBuscarProductoComponent', () => {
  let component: MainBuscarProductoComponent;
  let fixture: ComponentFixture<MainBuscarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBuscarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBuscarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
