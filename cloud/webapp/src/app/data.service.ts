import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { 
	}


	getLatestOptions(){
		this.getOptions().then((data) => {
			console.log("options are " + JSON.stringify(data));
		});
	}

	getOptions(){
		return new Promise<any>(resolve => {
	        this.http.get('http://localhost:5857/api/v1/users/options').subscribe(response => {
	            resolve(response);
	        });
	    });
	}
}
