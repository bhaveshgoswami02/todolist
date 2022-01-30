import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTodoAddEditComponent } from './manage-todo-add-edit.component';

describe('ManageTodoAddEditComponent', () => {
  let component: ManageTodoAddEditComponent;
  let fixture: ComponentFixture<ManageTodoAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTodoAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTodoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
