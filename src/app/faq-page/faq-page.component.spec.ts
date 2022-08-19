import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQPageComponent } from './faq-page.component';

describe('FAQPageComponent', () => {
  let component: FAQPageComponent;
  let fixture: ComponentFixture<FAQPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
