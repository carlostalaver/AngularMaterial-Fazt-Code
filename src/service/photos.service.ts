import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from 'src/models/iphoto';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
  }
}
