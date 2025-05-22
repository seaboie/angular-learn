import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormFieldComponent } from './share-form-field.component';

describe('ShareFormFieldComponent', () => {
  let component: ShareFormFieldComponent;
  let fixture: ComponentFixture<ShareFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
