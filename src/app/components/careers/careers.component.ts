import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationsService } from '../../shared/services/applications.service';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
  standalone: false,
})
export class CareersComponent implements OnInit {
  cv: any = '';
  constructor(
    private fb: FormBuilder,
    private appServ: ApplicationsService,
    private toaster: ToastrService,
    private LanguageService: LanguageService
  ) {}
  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
  applicantForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    position: ['', [Validators.required]],
    coverLetter: ['', [Validators.required]],
  });
  onFileSelected(event: any) {
    this.cv = event.target.files[0];
  }
  onSubmit() {
    if (this.applicantForm.valid && this.cv) {
      let finalform = new FormData();
      Object.keys(this.applicantForm.value).forEach((cur) => {
        finalform.append(cur, this.applicantForm.controls[cur].value);
      });
      finalform.append('application', this.cv);

      this.appServ.postApplication(finalform).subscribe({
        next: (res) => {
          this.toaster.success('Thanks for being here', 'Success');
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
