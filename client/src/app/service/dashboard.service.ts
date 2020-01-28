import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

const treeUrl = `http://localhost:8000/tree`;//'assets/tree.json';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http: HttpClient) { }

  /*
   * Function which will send a GET API call to server and fetch all trees.
   */
  getTreeInfo() {
    return this.http.get(treeUrl);
  }

  /*
   * Function which will send a POST API request to server and add a new node into the desired tree.
   */
  addTreeInfo(nodeText: string, parentId: string) {
    const body = new HttpParams()
    .set('parentId', parentId)
    .set('name', nodeText);

    return this.http.post(treeUrl, body);
  }

  /*
   * Function which will send a PATCH API request to server and update the desired node in a tree.
   */
  updateTreeInfo(nodeText: string, nodeId: number) {
    const body = new HttpParams()
    .set('name', nodeText);

    return this.http.patch(treeUrl+'/'+nodeId,body);
  }

  /*
   * Function which will send a DELETE API request to server and remove a desired node from a tree.
   */
  deleteTreeInfo(nodeId: number) {
    return this.http.delete(treeUrl+'/'+nodeId);
  }
}
