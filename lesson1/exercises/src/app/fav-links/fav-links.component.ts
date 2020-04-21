import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.imdb.com/title/tt5164214/', 'https://www.imdb.com/title/tt0455944/?ref_=nv_sr_srsg_0', 'https://www.imdb.com/title/tt2911666/?ref_=nv_sr_srsg_3']
  constructor() { }

  ngOnInit() {
  }

}
