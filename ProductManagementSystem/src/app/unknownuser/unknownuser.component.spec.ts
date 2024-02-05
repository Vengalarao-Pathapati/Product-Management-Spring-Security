import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownuserComponent } from './unknownuser.component';

describe('UnknownuserComponent', () => {
  let component: UnknownuserComponent;
  let fixture: ComponentFixture<UnknownuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
