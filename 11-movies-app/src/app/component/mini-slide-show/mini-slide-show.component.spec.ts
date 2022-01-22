import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSlideShowComponent } from './mini-slide-show.component';

describe('MiniSlideShowComponent', () => {
  let component: MiniSlideShowComponent;
  let fixture: ComponentFixture<MiniSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniSlideShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
