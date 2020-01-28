import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { SelectedItem } from '../../model/selectedItem';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  config = {
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    //maxHeight: 800
  };

  @Input('treeData')
  set treeData(data) {
    this.treeDataSet = data;
    this.items = this.getdata();
  }

  @Input('treeDatas')
  set treeDatas(data) {
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
