import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdownComponent } from './updown.component';

describe('UpdownComponent', () => {
  let component: UpdownComponent;
  let fixture: ComponentFixture<UpdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
