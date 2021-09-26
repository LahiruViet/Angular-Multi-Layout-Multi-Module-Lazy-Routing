import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsettingComponent } from './setting.component';

describe('SsettingComponent', () => {
  let component: SsettingComponent;
  let fixture: ComponentFixture<SsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
