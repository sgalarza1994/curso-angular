import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedetachComponent } from './redetach.component';

describe('RedetachComponent', () => {
  let component: RedetachComponent;
  let fixture: ComponentFixture<RedetachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedetachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedetachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
