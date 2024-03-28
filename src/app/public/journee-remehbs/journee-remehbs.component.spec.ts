import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneeRemehbsComponent } from './journee-remehbs.component';

describe('JourneeRemehbsComponent', () => {
  let component: JourneeRemehbsComponent;
  let fixture: ComponentFixture<JourneeRemehbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneeRemehbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JourneeRemehbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
