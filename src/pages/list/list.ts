import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Cosmic from 'cosmicjs';
import { CategoryPage } from '../../pages/category-page/category-page'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public categories;

  constructor(
        public navCtrl: NavController) {
        this.categories = [];

        Cosmic.getObjectType({
            bucket: {
                slug: 'gluten'
            }
        }, {
            type_slug: 'categories'
        }, (err, res) => {
            this.categories = res.objects.all;
        });
    }
    navToCategory(category) {
        this.navCtrl.push(CategoryPage, { title: category.title});
    }
}