import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModernComponent } from './child-modern.component';

describe('ChildModernComponent', () => {
  let component: ChildModernComponent;
  let fixture: ComponentFixture<ChildModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildModernComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
