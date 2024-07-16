import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuItemsComponent } from './manu-items.component';

describe('ManuItemsComponent', () => {
  let component: ManuItemsComponent;
  let fixture: ComponentFixture<ManuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
