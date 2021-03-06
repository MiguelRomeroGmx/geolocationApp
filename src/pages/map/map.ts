import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [GoogleMaps]
})
export class MapPage {
  public map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps,
     private platform: Platform ){
  }

  ionViewDidLoad() {
    this.platform.ready().then(()=>{
      this.map = this.googleMaps.create('map');
      this.map.one(GoogleMapsEvent.MAP_READY).then((data:any)=>{
        let myPosition: LatLng = new LatLng(18.25124, -93.33491);
        this.map.animateCamera({target: myPosition, zoom: 10})
      })
    })
  }

}
