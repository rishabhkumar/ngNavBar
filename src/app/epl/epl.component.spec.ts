import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EplComponent } from './epl.component';

describe('EplComponent', () => {
  let component: EplComponent;
  let fixture: ComponentFixture<EplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
