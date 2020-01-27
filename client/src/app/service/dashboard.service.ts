import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

const treeUrl = `http://localhost:8000/tree`;//'assets/tree.json';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http: HttpClient) { }

  getTreeInfo() {
    return this.http.get(treeUrl);
  }

  addTreeInfo(nodeText: string, parentId: string) {
    const body = new HttpParams()
    .set('parentId', parentId)
    .set('name', nodeText);

    return this.http.post(treeUrl, body);
  }

  updateTreeInfo(nodeText: string, nodeId: number) {
    const body = new HttpParams()
    .set('name', nodeText);

    return this.http.patch(treeUrl+'/'+nodeId,body);
  }

  deleteTreeInfo(nodeId: number) {
    return this.http.delete(treeUrl+'/'+nodeId);
  }
}
