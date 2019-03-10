import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManualComponent } from './update-manual.component';

describe('UpdateManualComponent', () => {
  let component: UpdateManualComponent;
  let fixture: ComponentFixture<UpdateManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
