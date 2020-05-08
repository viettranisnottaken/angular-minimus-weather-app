import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './user.interface';
import { USERS } from './users.db';

describe('SignupService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('public interface', () => {
    describe('#signup', () => {
      let length: number;
      let user: User;

      beforeEach(() => {
        user = {
          id: 1,
          name: 'viet',
          email: 'viet1000@gmail.com',
          password: '123456',
          cities: [],
        };

        length = USERS.length;

        service.signup(user);
      });

      it('length should be longer by 1', () => {
        expect(USERS.length).toBe(length + 1);
      });

      it('should include new user', () => {
        expect(USERS).toContain(user);
      });
    });
  });
});
