import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInsumosComponent } from './main-insumos.component';

describe('MainInsumosComponent', () => {
  let component: MainInsumosComponent;
  let fixture: ComponentFixture<MainInsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
