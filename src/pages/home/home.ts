import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic/native';
import { Page } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	public base64Image: string;
  	constructor(public navCtrl: NavController) {

	}

	takePicture(){
		console.log("Camera Clicked");
		//Camera.getPicture({})

	}

}
