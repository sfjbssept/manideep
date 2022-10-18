import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderIssuesComponent } from './rider-issues.component';

describe('RiderIssuesComponent', () => {
  let component: RiderIssuesComponent;
  let fixture: ComponentFixture<RiderIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
