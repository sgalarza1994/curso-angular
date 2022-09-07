import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploattrComponent } from './ejemploattr.component';

describe('EjemploattrComponent', () => {
  let component: EjemploattrComponent;
  let fixture: ComponentFixture<EjemploattrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploattrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploattrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
