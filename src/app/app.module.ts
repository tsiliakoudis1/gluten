import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoryPage } from '../pages/category-page/category-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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
    CategoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
