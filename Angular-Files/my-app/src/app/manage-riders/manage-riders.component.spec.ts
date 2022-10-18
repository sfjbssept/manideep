import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRidersComponent } from './manage-riders.component';

describe('ManageRidersComponent', () => {
  let component: ManageRidersComponent;
  let fixture: ComponentFixture<ManageRidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
