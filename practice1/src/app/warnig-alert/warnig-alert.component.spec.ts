import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnigAlertComponent } from './warnig-alert.component';

describe('WarnigAlertComponent', () => {
  let component: WarnigAlertComponent;
  let fixture: ComponentFixture<WarnigAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnigAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnigAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
