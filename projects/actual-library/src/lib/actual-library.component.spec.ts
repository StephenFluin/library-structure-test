import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualLibraryComponent } from './actual-library.component';

describe('ActualLibraryComponent', () => {
  let component: ActualLibraryComponent;
  let fixture: ComponentFixture<ActualLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
