import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule, RequestOptions } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoryPage } from '../pages/category-page/category-page';
import { Terms } from '../pages/terms/terms'
import { Invite } from '../pages/invite/invite'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RequestOptionsService } from '../services/request';
import { AdMobPro } from '@ionic-native/admob-pro';
import { AdMob } from '@ionic-native/admob';
import { AdMobFree} from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';

var config = {
    apiKey: "AIzaSyBO1I28NKj1B_COwFl1h6NkoGmz5bvfltY",
    authDomain: "gluten-cb643.firebaseapp.com",
    databaseURL: "https://gluten-cb643.firebaseio.com",
    projectId: "gluten-cb643",
    storageBucket: "gluten-cb643.appspot.com",
    messagingSenderId: "342328438663"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage,
    Terms,
    Invite
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  }),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage,
    Terms,
    Invite
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobPro,
    AdMob,
    AdMobFree,
     InAppBrowser,
     SocialSharing,
     RequestOptionsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: RequestOptions, useClass: RequestOptionsService },
  ]
})
export class AppModule {}
