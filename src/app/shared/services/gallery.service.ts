import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  gallery: { id: number; imgs: string[] }[] = [
    {
      id: 1,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/alpha/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/alpha/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/alpha/3.jpg',
      ],
    },
    {
      id: 2,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/audi/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/audi/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/audi/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/audi/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/audi/5.jpg',
      ],
    },
    {
      id: 3,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw/4.jpg',
      ],
    },
    {
      id: 4,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/hyundai/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/hyundai/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/hyundai/3.jpg',
      ],
    },
    {
      id: 5,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes/7.jpg',
      ],
    },
    {
      id: 6,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/7.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/8.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/9.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/peugeot/10.jpg',
      ],
    },
    {
      id: 7,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/pourche/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/pourche/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/pourche/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/pourche/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/pourche/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/pourche/6.jpg',
      ],
    },
    {
      id: 8,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/7.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/8.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/rangrover/9.jpg',
      ],
    },
    {
      id: 9,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/skoda/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/skoda/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/skoda/3.jpg',
      ],
    },
    {
      id: 10,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/tesla/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/tesla/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/tesla/3.jpg',
      ],
    },
    {
      id: 11,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen/5.jpg',
      ],
    },
    {
      id: 12,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw2/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw2/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw2/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/bmw2/4.jpg',
      ],
    },
    {
      id: 13,
      imgs: ['https://meek-mermaid-ea40cf.netlify.app/gallery/jeep/1.jpg'],
    },
    {
      id: 14,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/7.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/8.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes2/9.jpg',
      ],
    },
    {
      id: 15,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/7.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/8.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes3/9.jpg',
      ],
    },
    {
      id: 16,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes4/7.jpg',
      ],
    },
    {
      id: 17,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/4.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/5.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/6.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/mercedes5/7.jpg',
      ],
    },
    {
      id: 18,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen2/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen2/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen2/3.jpg',
      ],
    },
    {
      id: 19,
      imgs: [
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen3/1.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen3/2.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen3/3.jpg',
        'https://meek-mermaid-ea40cf.netlify.app/gallery/volkswagen3/4.jpg',
      ],
    },
  ];
}
