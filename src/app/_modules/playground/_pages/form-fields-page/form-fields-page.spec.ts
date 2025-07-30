import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsPage } from './form-fields-page';

describe('FormFieldsPage', () => {
  let component: FormFieldsPage;
  let fixture: ComponentFixture<FormFieldsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
