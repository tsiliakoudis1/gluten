import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser'
/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-page',
  templateUrl: 'category-page.html',
})


export class CategoryPage {
  public products;
  public category_title;

  constructor(public navCtrl: NavController,
    public params: NavParams,
    public http: Http,
    private sanitizer: DomSanitizer
    ) {
    this.products = [];
    this.category_title = this.params.get('title');

    this.http.get(`https://api.cosmicjs.com/v1/gluten/object-type/products/search?metafield_key=category&metafield_value=${this.params.get('id')}`).subscribe((resp) => {
      let data = resp.json();
      console.log(data);
      if (data.objects) {
        this.products = data.objects;
      }
      else {
        this.products = [];
      }
    });
  }

  sanContent(product): any {
    return this.sanitizer.bypassSecurityTrustHtml(product.content);
  }
}
