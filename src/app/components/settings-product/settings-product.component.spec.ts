import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProductComponent } from './settings-product.component';

describe('SettingsProductComponent', () => {
  let component: SettingsProductComponent;
  let fixture: ComponentFixture<SettingsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
