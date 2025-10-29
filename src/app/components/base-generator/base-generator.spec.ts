import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGenerator } from './base-generator';

describe('BaseGenerator', () => {
  let component: BaseGenerator;
  let fixture: ComponentFixture<BaseGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
