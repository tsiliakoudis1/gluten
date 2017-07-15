import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  arrData = [];


  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase,
    private admob: AdMobPro, private platform: Platform, ) {
    this.fdb.list("/news").subscribe(_data => {
      this.arrData = _data;
      console.log(this.arrData);
    });

    let adId;
    if (this.platform.is('android')) {
      adId = 'ca-app-pub-3357915166255253/9481765527';
    } else if (this.platform.is('ios')) {
      adId = 'ca-app-pub-3357915166255253/5436355529';
    }
    this.admob.createBanner({ adId: adId }).then(() => { this.admob.showBanner(8); });

  }

  ionViewDidLoad() {
    this.admob.onAdDismiss()
      .subscribe(() => { console.log('User dismissed ad'); });
  }

  // public clickAd2(event) {
  //   let adId;
  //   if (this.platform.is('android')) {
  //     adId = 'ca-app-pub-3357915166255253/9481765527';
  //   } else if (this.platform.is('ios')) {
  //     adId = 'ca-app-pub-3357915166255253/5436355529';
  //   }
  //   this.admob.createBanner({ adId: adId });
  // }

  public clickAd(event) {
    let adId;
    if (this.platform.is('android')) {
      adId = 'ca-app-pub-3357915166255253/5330767527';
    } else if (this.platform.is('ios')) {
      adId = 'ca-app-pub-3357915166255253/7222643128';
    }
    this.admob.prepareInterstitial({ adId: adId })
      .then(() => { this.admob.showInterstitial(); });
  }

  public onClick(event, item) {
    // Rename the href to whatever you have in your DB. If link just change to item.link
    window.open(item.url, '_newtab', 'location=yes');
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
