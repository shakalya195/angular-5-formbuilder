import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppComponent } from './edit-app.component';

describe('EditAppComponent', () => {
  let component: EditAppComponent;
  let fixture: ComponentFixture<EditAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
