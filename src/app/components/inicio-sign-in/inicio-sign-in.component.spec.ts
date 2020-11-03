import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSignInComponent } from './inicio-sign-in.component';

describe('InicioSignInComponent', () => {
  let component: InicioSignInComponent;
  let fixture: ComponentFixture<InicioSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
