import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslcComponent } from './sslc.component';

describe('SslcComponent', () => {
  let component: SslcComponent;
  let fixture: ComponentFixture<SslcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
