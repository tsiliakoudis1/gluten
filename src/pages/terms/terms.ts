import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
/**
 * Generated class for the Terms page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class Terms {

  constructor(public navCtrl: NavController, 
                public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Terms');
  }
}
