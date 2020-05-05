import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EnvService } from './env.service';

@Injectable()
export class SidebarService {
  isImageLoading: boolean;
  profilePicture: any;

  constructor(private http: HttpClient, private env: EnvService) {}

  getProfilePicture(): Observable<Blob> {
    return this.http.get(this.env.envProps.profilePicUrl.concat('/200'), {
      responseType: 'blob',
    });
  }

  getImageFromServer(createimageFromBlob): void {
    this.isImageLoading = true;
    this.getProfilePicture().subscribe(
      (data) => {
        createimageFromBlob(data, this.profilePicture);
        this.isImageLoading = false;
      },
      (error) => {
        this.isImageLoading = false;
      }
    );

    console.log(this.profilePicture);
  }

  createimageFromBlob(image: Blob, profilePicture) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        profilePicture = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
