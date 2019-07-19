import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/service/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: import('c:/Users/everis/Desktop/ProyectosAngular/angularMaterial/src/models/iphoto').IPhoto[];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {

    this.photosService.getPhotos()
      .subscribe(res => {
        this.photos = res;
        console.log('--> photos', this.photos);
      });
  }

}
