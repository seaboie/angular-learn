import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildClassicComponent } from './child-classic.component';

describe('ChildClassicComponent', () => {
  let component: ChildClassicComponent;
  let fixture: ComponentFixture<ChildClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
