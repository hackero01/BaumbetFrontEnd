import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaumComponent } from './baum.component';

describe('BaumComponent', () => {
  let component: BaumComponent;
  let fixture: ComponentFixture<BaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
