import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePopupComponent } from './create-popup.component';

describe('CreatePopupComponent', () => {
  let component: CreatePopupComponent;
  let fixture: ComponentFixture<CreatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePopupComponent]
    });
    fixture = TestBed.createComponent(CreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
