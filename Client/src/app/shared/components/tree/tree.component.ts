import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { SelectedItem } from '../../model/selectedItem';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  config = {
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };

  @Input('treeData')
  set treeData(data) {
    this.treeDataSet = data;
    this.items = this.getdata();
  }

  @Output() selectedNode = new EventEmitter();
  items: TreeviewItem[];
  treeDataSet: any;

  constructor() { }

  getdata() {
    if(this.treeDataSet) {
      const treeItems = new TreeviewItem(this.treeDataSet);
      return [treeItems];
    }
    return null;
  }

  select(selectedItem) {
    const item: SelectedItem =  { text: selectedItem.text, value: selectedItem.value };
    this.selectedNode.emit(item);
  }

}
