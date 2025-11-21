import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeriaComponent } from './valeria.component';

describe('ValeriaComponent', () => {
  let component: ValeriaComponent;
  let fixture: ComponentFixture<ValeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValeriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
