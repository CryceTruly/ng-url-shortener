import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: [ './stats.component.scss' ]
})
export class StatsComponent implements OnInit {
	links: any;
	constructor(private http:StatsService,public router: Router) {
    console.log(
     this.router.config.values);
  }

	ngOnInit() {
    this.http.getStats().subscribe(data=>{
      this.links=data['stats']

    })

  }
}
