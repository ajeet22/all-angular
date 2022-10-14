import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercComponent } from './filterc.component';

describe('FiltercComponent', () => {
  let component: FiltercComponent;
  let fixture: ComponentFixture<FiltercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
