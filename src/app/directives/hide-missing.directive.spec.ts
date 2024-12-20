import { Component, DebugElement } from '@angular/core';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HideMissingDirective } from './hide-missing.directive';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <img [src]="image" class="image" appHideMissing />`,
})
class TestHideMissingComponent { }

describe('HidemissingDirective', () => {
  let fixture: ComponentFixture<TestHideMissingComponent>;
  let debugEl: DebugElement;
  let loader: HarnessLoader;
  let directiveEl: DebugElement;
  let directiveInstance: HideMissingDirective;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HideMissingDirective, TestHideMissingComponent],
      }).compileComponents();
    }),
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(TestHideMissingComponent);
    debugEl = fixture.debugElement;
    loader = TestbedHarnessEnvironment.loader(fixture);
    directiveEl = debugEl.query(By.directive(HideMissingDirective));
    directiveInstance = directiveEl.injector.get(HideMissingDirective);
  });

  it('should create an instance', () => {
    expect(directiveEl).toBeDefined();
  });
});
