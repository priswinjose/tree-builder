import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './components/tree/tree.component';
import { ManageNodeComponent } from './components/manage-node/manage-node.component';
import { FormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TreeviewModule.forRoot()
  ],
  declarations: [TreeComponent, ManageNodeComponent],
  exports: [TreeComponent, ManageNodeComponent]
})
export class SharedModule { }
