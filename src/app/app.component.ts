import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;
  id: FormControl = new FormControl('', Validators.required);
  username: FormControl = new FormControl(
    '',
    [Validators.required,
      Validators.maxLength(3),
      this.rudeWordsValidate]
    );

  constructor() {
    this.form = new FormGroup(
      {
        id: this.id,
        username: this.username
      },
    );
  }

  // tslint:disable-next-line: typedef
  rudeWordsValidate(controls: AbstractControl) {
    console.log(controls.value);
    if (controls.value.includes('durak')) {
      return { rudeWord: true };
    }
    return null;
  }

  action(): void {
    console.log(this.id.value);
    console.log(this.form);
    console.log(this.id);
    console.log(this.username);

  }



}
