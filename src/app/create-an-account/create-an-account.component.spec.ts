import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnAccountComponent } from './create-an-account.component';

describe('CreateAnAccountComponent', () => {
  let component: CreateAnAccountComponent;
  let fixture: ComponentFixture<CreateAnAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
