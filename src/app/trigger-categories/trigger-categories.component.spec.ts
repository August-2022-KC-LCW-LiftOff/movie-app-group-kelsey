import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerCategoriesComponent } from './trigger-categories.component';

describe('TriggerCategoriesComponent', () => {
  let component: TriggerCategoriesComponent;
  let fixture: ComponentFixture<TriggerCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
