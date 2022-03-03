import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = 'http://localhost:8080/api/projects/';
  constructor(private httpClient: HttpClient) {}
  public getAllUsersService() {
    return this.httpClient.get(this.url);
  }
}