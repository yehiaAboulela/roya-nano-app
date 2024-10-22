import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var Fancybox: any;

@Component({
  selector: 'app-landing-1',
  templateUrl: './landing-1.component.html',
  styleUrl: './landing-1.component.css',
})
export class Landing1Component {
  constructor(private fb: FormBuilder) {}

  services: string[] = [
    'Nano Ceramic',
    'Nano Graphene',
    'PPF',
    'Thermal Insolation',
    'Free Consultation',
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    center: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  leadForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', Validators.required],
    carModel: ['', Validators.required],
    carBrand: ['', Validators.required],
    serviceType: ['', Validators.required],
  });

  openVideo(src: string): void {
    Fancybox.show(
      [
        {
          src: src,
          type: 'iframe',
          options: {
            iframe: {
              preload: false,
              width: 640,
              height: 360,
            },
          },
        },
      ],
      {
        dragToClose: true,
        closeButton: true,
        Toolbar: true,
        Thumbs: true, // Disable Thumbnails
        infinite: false, // Disable infinite scroll
        animated: true,
      }
    );
  }

  onSubmit() {
    if (this.leadForm.valid) {
      console.log(this.leadForm.value);
      // Add your logic to handle form submission
    } else {
      console.log('Form is invalid');
    }
  }
  scrollToForm() {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  }
}
