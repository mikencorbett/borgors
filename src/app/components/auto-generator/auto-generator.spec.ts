import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoGenerator } from './auto-generator';

describe('AutoGenerator', () => {
  let component: AutoGenerator;
  let fixture: ComponentFixture<AutoGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
