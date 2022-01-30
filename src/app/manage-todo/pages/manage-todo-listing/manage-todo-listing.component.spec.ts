import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTodoListingComponent } from './manage-todo-listing.component';

describe('ManageTodoListingComponent', () => {
  let component: ManageTodoListingComponent;
  let fixture: ComponentFixture<ManageTodoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTodoListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTodoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
