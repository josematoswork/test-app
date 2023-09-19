import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TextInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input change', () => {
    spyOn(component, 'onInputChange');
    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.onInputChange).toHaveBeenCalled();
  });

  it('should handle registerOnChange', () => {
    const testFn = jasmine.createSpy();
    component.registerOnChange(testFn);
    expect(component.onChange).toBe(testFn);
  });

  it('should handle registerOnTouched', () => {
    const testFn = jasmine.createSpy();
    component.registerOnTouched(testFn);
    expect(component.onTouched).toBe(testFn);
  });

  it('should set disabled state', () => {
    component.setDisabledState(true);
    expect(component.isDisabledState).toBeTrue();

    component.setDisabledState(false);
    expect(component.isDisabledState).toBeFalse();
  });

  it('should write value', () => {
    const testValue = 'test value';
    component.writeValue(testValue);
    expect(component.value).toBe(testValue);
  });
});
