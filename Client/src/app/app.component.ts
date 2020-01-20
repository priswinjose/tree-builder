import { Component } from '@angular/core';
import { SelectedItem } from './shared/model/selectedItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // need to fix passing empty object passing
  selectedItem = [];
  updateNode(data) {
    console.log('UpdateNode', data);
  }

  addNode(data) {
    console.log('AddNode', data);
  }

  onSelectedNode(item) {
    this.selectedItem = item;
    console.log(item);
  }
}
