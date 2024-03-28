import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caroussel2Component } from './caroussel2.component';

describe('Caroussel2Component', () => {
  let component: Caroussel2Component;
  let fixture: ComponentFixture<Caroussel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caroussel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Caroussel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
