import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: [ './stats.component.scss']
})

export class StatsComponent implements OnInit {
  links: Observable<any>;

  constructor(private http: StatsService, private  titleService: Title,
              private metaService: Meta) {}
  ngOnInit() {
    this.setPageMeta();
    this.links = this.http.getStats().pipe(map(data => data.stats));
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
