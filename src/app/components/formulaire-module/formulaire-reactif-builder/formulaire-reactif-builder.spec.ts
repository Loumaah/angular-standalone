import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReactifBuilder } from './formulaire-reactif-builder';

describe('FormulaireReactifBuilder', () => {
  let component: FormulaireReactifBuilder;
  let fixture: ComponentFixture<FormulaireReactifBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireReactifBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireReactifBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
