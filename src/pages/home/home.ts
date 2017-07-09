import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  arrData = [];


  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase, ) {
    this.fdb.list("/news/news").subscribe(_data => {
      this.arrData = _data;
      console.log(this.arrData);
    });

  }

  public onClick(event, item) {
    // Rename the href to whatever you have in your DB. If link just change to item.link
    window.open(item.link, '_newtab', 'location=yes');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.arrData.push(this.arrData.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
