import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveInImageComponent } from './drive-in-image.component';

describe('DriveInImageComponent', () => {
  let component: DriveInImageComponent;
  let fixture: ComponentFixture<DriveInImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveInImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveInImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
