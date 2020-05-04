import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';
import { HttpClientModule } from '@angular/common/http';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('public interface', () => {
    describe('#getProfilePicture', () => {
      it('should return blob', (done: DoneFn) => {
        service.getProfilePicture().subscribe((picture) => {
          expect(picture).toBeInstanceOf(Blob);
          done();
        });
      });
    });
  });
});
