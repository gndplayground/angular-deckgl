import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLondonComponent } from './demo-london.component';

describe('DemoLondonComponent', () => {
  let component: DemoLondonComponent;
  let fixture: ComponentFixture<DemoLondonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLondonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLondonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
