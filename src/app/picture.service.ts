import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { EnvService } from './env.service';

@Injectable()
export class PictureService {
  isImageLoading: boolean;
  profilePicture = new Observable();

  constructor(private http: HttpClient, private env: EnvService) {}

  getImageFromServer(picLocation: string): Observable<any> {
    this.isImageLoading = true;
    return this.getProfilePicture(picLocation).pipe(
      switchMap((x) => {
        return this.createimageFromBlob(x);
      })
    );
  }

  private createimageFromBlob(image: Blob): Observable<any> {
    return new Observable((subscriber) => {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          subscriber.next(reader.result);
        },
        false
      );

      if (image) {
        reader.readAsDataURL(image);
      }
    });
  }

  private getProfilePicture(picLocation: string): Observable<Blob> {
    return this.http.get(this.env.envProps.profilePicUrl.concat(picLocation), {
      responseType: 'blob',
    });
  }
}
