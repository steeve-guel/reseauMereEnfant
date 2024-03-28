import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemehbsComponent } from './remehbs.component';

describe('RemehbsComponent', () => {
  let component: RemehbsComponent;
  let fixture: ComponentFixture<RemehbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemehbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemehbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
