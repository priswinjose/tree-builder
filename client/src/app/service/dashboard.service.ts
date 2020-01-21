import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const treeUrl = 'assets/tree.json';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http: HttpClient) { }

  getTreeInfo() {
    return this.http.get(treeUrl);
  }
}
