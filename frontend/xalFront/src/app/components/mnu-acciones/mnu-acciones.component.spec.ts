import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnuAccionesComponent } from './mnu-acciones.component';

describe('MnuAccionesComponent', () => {
  let component: MnuAccionesComponent;
  let fixture: ComponentFixture<MnuAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnuAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnuAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
