import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const checkPasswords: ValidatorFn = (
  group: FormGroup
): ValidationErrors => {
  const pass = group.get('password').value;
  const confirmPass = group.get('passwordConfirmation').value;
  return pass && confirmPass && pass === confirmPass
    ? null
    : { notMatched: true };
};
