import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(formdata: FormData): Observable<HttpEvent<{}>> {
        const req = new HttpRequest('POST', 'http://localhost:8080/post', formdata, {
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
