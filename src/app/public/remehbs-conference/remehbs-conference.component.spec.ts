import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemehbsConferenceComponent } from './remehbs-conference.component';

describe('RemehbsConferenceComponent', () => {
  let component: RemehbsConferenceComponent;
  let fixture: ComponentFixture<RemehbsConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemehbsConferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemehbsConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
