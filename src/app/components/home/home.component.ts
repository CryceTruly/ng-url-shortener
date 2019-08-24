import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit() {
    this.setPageMeta();
  }

  private setPageMeta() {
    this.titleService.setTitle('Home| URL Shortener, Custom Links & Link Analytics');
    this.metaService.addTags(
      [
        // Open Graph Data
        { property: 'og:title' , content: 'Home| URL Shortener, Custom Links & Link Analytics'  },
        {property: 'og:url' , content: 'http://www.yourdomain.com' },
        {property: 'og:type', content: 'website'},
        {property: 'og:description',
          content: 'Btlt helps you optimize and track every touchpoint with your audience, no matter your size or reach'},
        {property: 'og:image' , content: 'http://www.yourdomain.com/image-name.jpg'},
        {property: 'og:site_name', content: 'Bitly'},
        // Twitter
        {name: 'twitter:card', content: 'URLShortner'},
        {name: 'twitter:title', content: 'Home| URL Shortener, Custom Links & Link Analytics'  },
        {name: 'twitter:description',
          content: 'Bilyt helps you optimize and track every touchpoint with your audience, no matter your size or reach'},
        {name: 'twitter:url', content: 'http://www.yourdomain.com'},
        {name: 'twitter:image', content: 'summary_large_image'}

      ]);
  }

}
