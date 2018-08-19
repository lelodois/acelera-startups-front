import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaStartupComponent } from './nova-startup.component';

describe('NovaStartupComponent', () => {
  let component: NovaStartupComponent;
  let fixture: ComponentFixture<NovaStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
