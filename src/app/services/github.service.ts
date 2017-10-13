import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username: string;
	private client_id = '459826751b3721bbbf42';
	private client_secret = '18b9794c4766384096ea131cd2201ae2cd5a50d9';

	constructor(private _http: Http){ //calling a service using underscore
		console.log('Github service ready....');
		this.username = 'ishachopde';
	}

	//get user function
	getUser(){
	//making a get request
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret)
			.map(res => res.json());
	// because its json
	}
	
	//get repo function
	getRepos(){
	//making a get request
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret'+this.client_secret)
			.map(res => res.json());
	// because its json
	}


	updateUser(username:string){
		this.username = username;
	}
}