import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsurveyComponent } from './landsurvey.component';

describe('LandsurveyComponent', () => {
  let component: LandsurveyComponent;
  let fixture: ComponentFixture<LandsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandsurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
