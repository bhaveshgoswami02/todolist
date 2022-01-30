import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTodoDoneListingComponent } from './manage-todo-done-listing.component';

describe('ManageTodoDoneListingComponent', () => {
  let component: ManageTodoDoneListingComponent;
  let fixture: ComponentFixture<ManageTodoDoneListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTodoDoneListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTodoDoneListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
