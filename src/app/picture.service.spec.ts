import { TestBed } from '@angular/core/testing';

import { PictureService } from './picture.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('PictureService', () => {
  let service: PictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PictureService],
    });
    service = TestBed.inject(PictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('public interface', () => {
    describe('#getImageFromServer', () => {
      it('should return an observable', (done: DoneFn) => {
        const returnedObservable = service.getImageFromServer('/200');

        expect(returnedObservable).toBeInstanceOf(Observable);

        done();
      });
    });
  });
});
