import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss'],
  providers: [PictureService],
})
export class CredentialComponent implements OnInit {
  profilePicture: Observable<string>;

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.getImageFromServer();
  }

  private getImageFromServer() {
    this.profilePicture = this.pictureService.getImageFromServer(
      '/id/296/3072/2048'
    );
  }
}
