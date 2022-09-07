import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploLifeCicleComponent } from './ejemplo-life-cicle.component';

describe('EjemploLifeCicleComponent', () => {
  let component: EjemploLifeCicleComponent;
  let fixture: ComponentFixture<EjemploLifeCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploLifeCicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploLifeCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
