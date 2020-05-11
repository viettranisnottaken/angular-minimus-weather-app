import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { UserService } from 'src/app/user.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('public interface', () => {
    describe('#onSubmit', () => {
      it('submitted should be true', () => {
        component.submitted = false;
        component.onSubmit();

        expect(component.submitted).toBeTrue();
      });

      it('should call userService.signup()', () => {
        userService = TestBed.inject(UserService);

        spyOn(userService, 'signup');

        component.onSubmit();

        expect(userService.signup).toHaveBeenCalled();
      });
    });
  });

  // xdescribe('form test', () => {
  //   describe('view to model', () => {
  //     const input = fixture.nativeElement.querySelector('input');
  //     const event = new Event('input');

  //     input.value = 'viet1';
  //     input.dispatchEvent(event);

  //     expect(fixture.componentInstance.formControls.name.value).toBe('viet1');
  //   });

  //   describe('model to view', () => {
  //     const name = component.formControls.name;
  //     const input = fixture.nativeElement.querySelector('.signup__form__input');
  //     name.setValue('viet1');

  //     expect(input.value).toBe('viet1');
  //   });
  // });
});
