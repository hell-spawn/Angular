import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleateFormComponent } from './templeate-form.component';

describe('TempleateFormComponent', () => {
  let component: TempleateFormComponent;
  let fixture: ComponentFixture<TempleateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
