import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { SelectedItem } from '../../model/selectedItem';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  config = {
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };

  @Output() selectedNode = new EventEmitter();
  items: TreeviewItem[];

  constructor() { }

  ngOnInit() {
    this.items = this.getdata();
  }

  getdata() {
    const treeItems = new TreeviewItem({
      text: '', value: '', children: [
        {
          text: 'Tree 1', value: 1, children: [{
            text: 'Level 2', value: 2, children: [
              { text: 'Level 2.1', value: 4 },
              { text: 'Level 2.2', value: 5 }
            ]
          }, {
            text: 'Level 3', value: 3
          }]
        },
        {
          text: 'Tree 2', value: 6, children: [{
            text: 'Level 2', value: 7, children: [
              { text: 'Level 2.1', value: 9 },
              { text: 'Level 2.2', value: 10 }
            ]
          }, {
            text: 'Level 3', value: 8, children: [
              { text: 'Level 3.1', value: 11 }
            ]
          }]
        }
      ]
    });
    return [treeItems];
  }
  select(selectedItem) {
    const item: SelectedItem =  { text: selectedItem.text, value: selectedItem.value };
    this.selectedNode.emit(item);
  }

}
