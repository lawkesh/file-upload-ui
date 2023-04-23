import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S3UploadService {
  private apiUrl = 'http://localhost:3000/upload';

  constructor(private http: HttpClient) {}

  upload(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(this.apiUrl, formData).toPromise();
  }
}