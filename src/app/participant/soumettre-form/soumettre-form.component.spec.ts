import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumettreFormComponent } from './soumettre-form.component';

describe('SoumettreFormComponent', () => {
  let component: SoumettreFormComponent;
  let fixture: ComponentFixture<SoumettreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoumettreFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoumettreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
