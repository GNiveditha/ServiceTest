import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinUserdetailsComponent } from './loggedin-userdetails.component';

describe('LoggedinUserdetailsComponent', () => {
  let component: LoggedinUserdetailsComponent;
  let fixture: ComponentFixture<LoggedinUserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinUserdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedinUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
