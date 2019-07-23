import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: [ './stats.component.scss' ]
})
export class StatsComponent implements OnInit {
	links: any;
	constructor(private http:StatsService) {}

	ngOnInit() {
    this.http.getStats().subscribe(data=>{
      this.links=data['stats']

    })
  }
}
