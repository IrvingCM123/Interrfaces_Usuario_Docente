import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoBajaComponent } from './correo-baja.component';

describe('CorreoBajaComponent', () => {
  let component: CorreoBajaComponent;
  let fixture: ComponentFixture<CorreoBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreoBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
