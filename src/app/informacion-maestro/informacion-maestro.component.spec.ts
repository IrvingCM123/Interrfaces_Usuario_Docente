import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionMaestroComponent } from './informacion-maestro.component';

describe('InformacionMaestroComponent', () => {
  let component: InformacionMaestroComponent;
  let fixture: ComponentFixture<InformacionMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
