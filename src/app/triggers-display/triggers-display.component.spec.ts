import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggersDisplayComponent } from './triggers-display.component';

describe('TriggersDisplayComponent', () => {
  let component: TriggersDisplayComponent;
  let fixture: ComponentFixture<TriggersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggersDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
