import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  profilePicUrl = 'https://picsum.photos';

  constructor(private http: HttpClient) {}

  getProfilePicture(): Observable<any> {
    return this.http.get(this.profilePicUrl.concat('/200'), {
      responseType: 'blob',
    });
  }
}
