import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-project';
  selectedFeature='recipe';
  featureToDisplay(feature){
    this.selectedFeature=feature;
    console.log(this.selectedFeature)
  }

}
