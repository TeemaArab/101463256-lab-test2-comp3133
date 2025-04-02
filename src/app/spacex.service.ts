import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getFilteredLaunches(filters: any): Observable<any> {
    let query = '';
  
    if (filters.year) {
      query += `&launch_year=${filters.year}`;
    }
    if (filters.launch) {
      query += `&launch_success=${filters.launch}`;
    }
    if (filters.land) {
      query += `&land_success=${filters.land}`;
    }
  
    const url = `https://api.spacexdata.com/v3/launches?limit=100${query}`;
    return this.http.get<any>(url);
  }
  
}
