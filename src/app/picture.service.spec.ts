import { TestBed } from '@angular/core/testing';

import { PictureService } from './picture.service';
import { HttpClientModule } from '@angular/common/http';

describe('PictureService', () => {
  let service: PictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xdescribe('public interface', () => {
    describe('#getProfilePicture', () => {
      it('should return blob', (done: DoneFn) => {});
    });
  });
});
