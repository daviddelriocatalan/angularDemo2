import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaHijoComponent } from './capa-hijo.component';

describe('CapaHijoComponent', () => {
  let component: CapaHijoComponent;
  let fixture: ComponentFixture<CapaHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapaHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
