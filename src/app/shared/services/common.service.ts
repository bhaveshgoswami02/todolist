import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loader: boolean = false
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  startLoader() {
    this.loader = true
  }

  stopLoader() {
    this.loader = false
  }

  showToast(message: any) {
    this._snackBar.open(message, "", { duration: this.durationInSeconds * 1000 })
  }

  console(message?: any, type = 'log') {
    if (type == 'log') {
      console.log(message);
    }
    if (type == 'error') {
      console.error(message);
    }
    if (type == 'warn') {
      console.warn(message);
    }
  }

}
