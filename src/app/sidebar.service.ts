import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private http: HttpClient, private env: EnvService) {}

  getProfilePicture(): Observable<Blob> {
    return this.http.get(this.env.envProps.profilePicUrl.concat('/200'), {
      responseType: 'blob',
    });
  }
}
