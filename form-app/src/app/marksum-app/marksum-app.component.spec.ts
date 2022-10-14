import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksumAppComponent } from './marksum-app.component';

describe('MarksumAppComponent', () => {
  let component: MarksumAppComponent;
  let fixture: ComponentFixture<MarksumAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksumAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksumAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
