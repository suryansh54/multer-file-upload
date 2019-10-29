import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	percentage;
	public uploader: FileUploader = new FileUploader({
		url: URL,
		itemAlias: 'photo'
	});
	ngOnInit() {
		this.uploader.onAfterAddingFile = (file) => {
			file.withCredentials = false;
		};
		this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
			form.append('data', "Send data to Server.");
		};
		this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
			console.log('ImageUpload:uploaded:', item, status, response);
			console.log('File uploaded successfully');
		};
		this.uploader.onProgressItem = (progress: any) => {
			this.percentage = progress['progress'];
		};
 	}
}