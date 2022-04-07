import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeGeneratorComponent } from './bridge-generator.component';

describe('BridgeGeneratorComponent', () => {
  let component: BridgeGeneratorComponent;
  let fixture: ComponentFixture<BridgeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
