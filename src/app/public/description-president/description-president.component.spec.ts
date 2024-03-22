import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPresidentComponent } from './description-president.component';

describe('DescriptionPresidentComponent', () => {
  let component: DescriptionPresidentComponent;
  let fixture: ComponentFixture<DescriptionPresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionPresidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
