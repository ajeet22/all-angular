import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOuterComponent } from './houter.component';

describe('HOuterComponent', () => {
  let component: HOuterComponent;
  let fixture: ComponentFixture<HOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOuterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
