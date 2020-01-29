import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SelectedItem } from './shared/model/selectedItem';
import { DashboardService } from './service/dashboard.service';
//import { exists } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedItem = [];
  treeData: any;
  treeDatas: any;
  parentId: any;
  displayText = 'errorTextHide';
  visible = true;

  constructor(private dashboardService: DashboardService) {
  }

  /*
   * Function to load the complete tree and it's nodes.
   */
  ngOnInit() {
    this.dashboardService.getTreeInfo().subscribe(data => {
      this.treeData = data;
    });
  }

  /*
   * Function to check if parentId is available or not.
   */
  getParentId(value) {
    if(typeof(value) != 'number') {
      this.parentId = 0;
    } else {
      this.parentId = value;
    }

    return this.parentId;
  }

  /*
   * Function to update the selected node.
   */
  updateNode(data) {
    if(typeof(data) != 'undefined') {
      this.parentId = this.getParentId(this.selectedItem['value']);
      this.dashboardService.updateTreeInfo(data, this.parentId).subscribe(
        data => { 
          this.ngOnInit();
          this.selectedItem = [];
          this.displayText = 'errorTextHide';
        }
      );
    } else {
      this.displayText = this.visible ? 'errorTextShow' : 'errorTextHide';
    }
  }

  /*
   * Function to add a new node to the tree.
   */
  addNode(data) {
    if(typeof(data) != 'undefined') {
      this.parentId = this.getParentId(this.selectedItem['value']);
      this.dashboardService.addTreeInfo(data, this.parentId).subscribe(
        data => { 
          this.ngOnInit();
          this.selectedItem = [];
          this.displayText = 'errorTextHide';
        }
      );
    } else {
      this.displayText = this.visible ? 'errorTextShow' : 'errorTextHide';
    }
  }

  /*
   * Function to delete the selected node.
   */
  deleteNode(data) {
    if(typeof(this.selectedItem['value']) != 'undefined') {
      this.dashboardService.deleteTreeInfo(this.selectedItem['value']).subscribe(
        data => { 
          this.ngOnInit();
          this.selectedItem = [];
          this.displayText = 'errorTextHide';
        }
      );
    } else {
      this.displayText = this.visible ? 'errorTextShow' : 'errorTextHide';
    }
  }

  /*
   * Function to get details of the selected node.
   */
  onSelectedNode(item) {
    this.selectedItem = item;
  }
  
}
