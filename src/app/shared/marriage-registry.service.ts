import { Injectable } from '@angular/core';
import { MarriageRecord } from './marriage-record.model';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ApiPaths } from './api-paths.enum';
import { map, Observable } from 'rxjs';
import { IMarriageRecord } from './Interfaces/IMarriage-record.model';
@Injectable({
  providedIn: 'root'
})
export class MarriageRegistryService {

  constructor(private http:HttpClient) { }

  readonly baseURL = environment.API_URL;

  getMarriageRecordList():Observable<MarriageRecord[]>{
    return this.http.get<IMarriageRecord[]>(`${this.baseURL}${ApiPaths.MarriageRegistry}`)
    .pipe(
      map( res => res.map(item => (MarriageRecord.CreateFromResponse(item))))
      );

  }

  addMarriageRecord(data:MarriageRecord){
    console.log({data: data})
    return this.http.post(`${this.baseURL}${ApiPaths.MarriageRegistry}`, data);
  }

}
