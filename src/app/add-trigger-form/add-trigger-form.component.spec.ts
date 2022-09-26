import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTriggerFormComponent } from './add-trigger-form.component';

describe('AddTriggerFormComponent', () => {
  let component: AddTriggerFormComponent;
  let fixture: ComponentFixture<AddTriggerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTriggerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTriggerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
