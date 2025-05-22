import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationInputMessageComponent } from './validation-input-message.component';

describe('ValidationInputMessageComponent', () => {
  let component: ValidationInputMessageComponent;
  let fixture: ComponentFixture<ValidationInputMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationInputMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationInputMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
