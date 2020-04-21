import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Movie Photo's";
  image1 = 'https://upload.wikimedia.org/wikipedia/en/8/81/The_Equalizer_poster.jpg';
  image2 = 'https://www.indiewire.com/wp-content/uploads/2019/05/07956f40-77c4-11e9-9073-657a85982e73.jpg?w=780';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg';

  constructor() { }

  ngOnInit() {
  }

}