import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieaComponent } from './seriea.component';

describe('SerieaComponent', () => {
  let component: SerieaComponent;
  let fixture: ComponentFixture<SerieaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
