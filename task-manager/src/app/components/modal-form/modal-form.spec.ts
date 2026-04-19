import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormComponent } from './modal-form';

describe('Modal', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
