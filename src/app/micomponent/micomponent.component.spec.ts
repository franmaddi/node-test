import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicomponentComponent } from './micomponent.component';

describe('MicomponentComponent', () => {
  let component: MicomponentComponent;
  let fixture: ComponentFixture<MicomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
