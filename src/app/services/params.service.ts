import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class ParamsService {

  constructor(private http: HttpClient) { }

  sampleParams() {

    const params = new HttpParams()
      .set('login', 'nartawak');

    this.http.get(`http://sample.com`, { params })
      .subscribe(() => {});

    // => Crée un appel HTTP GET http://sample.com?login=nartawak
  }
}
