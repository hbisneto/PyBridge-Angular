import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerwarnComponent } from './pickerwarn.component';

describe('PickerwarnComponent', () => {
  let component: PickerwarnComponent;
  let fixture: ComponentFixture<PickerwarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickerwarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerwarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
