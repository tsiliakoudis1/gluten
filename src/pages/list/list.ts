import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Cosmic from 'cosmicjs';
import { CategoryPage } from '../../pages/category-page/category-page'
import { Http } from '@angular/http';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})


export class ListPage {
    public categories;

    constructor(
        public navCtrl: NavController,
        public http: Http,
    ) {
        this.categories = [];
        this.http.post('https://api.cosmicjs.com/v1/authenticate', { data: { user: 'harris_tsil@hotmail.com', password: 'a29111986' } }).subscribe((resp) => {
            let data = resp.json();

            console.log(data);
        });


        Cosmic.getObjectType({
            bucket: {
                slug: 'gluten',
                read_key: '6CIZzNh8tp2w1wEOgNhFukFwtQUw8MCaPaKsps4oUfNwW4l4y2',
            }
        }, {
                type_slug: 'categories'
            }, (err, res) => {
                this.categories = res.objects.all;
            });
    }
    navToCategory(category) {
        this.navCtrl.push(CategoryPage, { title: category.title });
    }


}

