import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectedItem } from '../../model/selectedItem';

@Component({
  selector: 'app-manage-node',
  templateUrl: './manage-node.component.html',
  styleUrls: ['./manage-node.component.css']
})
export class ManageNodeComponent implements OnInit {
  selectedItemText: string;
  selectedItem: SelectedItem;
  @Input() buttonText: string;
  @Input('data')
  set data(value: SelectedItem) {
    this.selectedItemText = value.text;
    this.selectedItem = value;
  }

  @Output() textChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.textChanged.emit(this.selectedItemText);
  }

}
