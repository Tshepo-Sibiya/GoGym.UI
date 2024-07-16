import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymItemsComponent } from './gym-items.component';

describe('GymItemsComponent', () => {
  let component: GymItemsComponent;
  let fixture: ComponentFixture<GymItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
