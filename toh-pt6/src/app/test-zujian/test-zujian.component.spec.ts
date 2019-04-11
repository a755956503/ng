import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZujianComponent } from './test-zujian.component';

describe('TestZujianComponent', () => {
  let component: TestZujianComponent;
  let fixture: ComponentFixture<TestZujianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZujianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZujianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
