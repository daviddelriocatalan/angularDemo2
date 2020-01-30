import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaHijoAnyadirComponent } from './capa-hijo-anyadir.component';

describe('CapaHijoAnyadirComponent', () => {
  let component: CapaHijoAnyadirComponent;
  let fixture: ComponentFixture<CapaHijoAnyadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapaHijoAnyadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaHijoAnyadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
