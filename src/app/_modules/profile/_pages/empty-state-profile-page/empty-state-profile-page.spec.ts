import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateProfilePage } from './empty-state-profile-page';

describe('EmptyStateProfilePage', () => {
  let component: EmptyStateProfilePage;
  let fixture: ComponentFixture<EmptyStateProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateProfilePage],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
