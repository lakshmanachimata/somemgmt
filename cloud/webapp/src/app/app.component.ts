import { Component,OnChanges, OnInit } from '@angular/core';
import { DataService } from './data.service';
//import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'mangement_data';

	constructor(  public data: DataService) {
	}

	ngOnInit() {
		this.data.getLatestOptions();
	}
	ngOnChanges(changes) {
  	}
}
