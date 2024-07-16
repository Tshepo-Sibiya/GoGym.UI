import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitTheGymComponent } from './hit-the-gym.component';

describe('HitTheGymComponent', () => {
  let component: HitTheGymComponent;
  let fixture: ComponentFixture<HitTheGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitTheGymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitTheGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
