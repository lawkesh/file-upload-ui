import { Component } from '@angular/core';
import { S3UploadService } from './s3-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  title = 'file-upload';

  file: File | null = null
  msg: any
  uploadSuccess: boolean = false
  uploadFailed: boolean = false

  constructor(private s3UploadService: S3UploadService) {

  }
  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  async onSubmit() {
    if (!this.file) {
      return;
    }

    try {
      const result = await this.s3UploadService.upload(this.file);      
      this.uploadSuccess = true;
      setTimeout(()=>{
        this.uploadSuccess = false;
      }, 2000)      
    } catch (err) {      
      this.uploadFailed = true;
      setTimeout(()=>{
        this.uploadFailed = false;
      }, 2000)      
    }
  }
}