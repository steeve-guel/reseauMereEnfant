import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemehbsDescComponent } from './remehbs-desc.component';

describe('RemehbsDescComponent', () => {
  let component: RemehbsDescComponent;
  let fixture: ComponentFixture<RemehbsDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemehbsDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemehbsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
