import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationsService } from '../../shared/services/applications.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent {
  cv: any = '';
  constructor(private fb: FormBuilder, private appServ: ApplicationsService) {}
  applicantForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    position: ['', [Validators.required]],
    coverLetter: ['', [Validators.required]],
    cv: [null, [Validators.required]],
  });
  onFileSelected(event: any) {
    this.cv = event.target.files[0];
  }
  onSubmit() {
    if (this.applicantForm.valid && this.cv) {
      let finalform = new FormData();
      Object.keys(this.applicantForm.value).forEach((cur) => {
        if (cur !== 'cv') {
          finalform.append(cur, this.applicantForm.controls[cur].value);
        }
      });
      finalform.append('application', this.cv);

      this.appServ.postApplication(finalform).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }

  scrollToForm() {
    document
      .getElementById('applyFormParent')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
