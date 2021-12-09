import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyStaticComponent } from './formly-static.component';

describe('FormlyStaticComponent', () => {
  let component: FormlyStaticComponent;
  let fixture: ComponentFixture<FormlyStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
