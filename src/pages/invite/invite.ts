import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the Invite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class Invite {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sharingVar: SocialSharing) {
  }

  shareSocial(){
    this.sharingVar.share("Join frifrom and get all the latest news on your free-from lifestyle!", "Join frifrom", "", "http://pointdeveloper.com/" /* url */)
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Invite');
  }

}
