import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuventusComponent } from './juventus.component';

describe('JuventusComponent', () => {
  let component: JuventusComponent;
  let fixture: ComponentFixture<JuventusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuventusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuventusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
