import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  gallery: { id: number; imgs: string[] }[] = [
    {
      id: 1,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/alpha/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/alpha/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/alpha/3.jpg',
      ],
    },
    {
      id: 2,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/audi/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/audi/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/audi/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/audi/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/audi/5.jpg',
      ],
    },
    {
      id: 3,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/bmw/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/bmw/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/bmw/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/bmw/4.jpg',
      ],
    },
    {
      id: 4,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/hyundai/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/hyundai/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/hyundai/3.jpg',
      ],
    },
    {
      id: 5,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/mercedes/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes/7.jpg',
      ],
    },
    {
      id: 6,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/peugeot/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/7.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/8.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/9.jpg',
        'https://tools.royalnanoceramic.com/gallery/peugeot/10.jpg',
      ],
    },
    {
      id: 7,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/pourche/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/pourche/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/pourche/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/pourche/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/pourche/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/pourche/6.jpg',
      ],
    },
    {
      id: 8,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/rangrover/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/7.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/8.jpg',
        'https://tools.royalnanoceramic.com/gallery/rangrover/9.jpg',
      ],
    },
    {
      id: 9,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/skoda/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/skoda/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/skoda/3.jpg',
      ],
    },
    {
      id: 10,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/tesla/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/tesla/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/tesla/3.jpg',
      ],
    },
    {
      id: 11,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/volkswagen/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen/5.jpg',
      ],
    },
    {
      id: 12,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/bmw2/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/bmw2/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/bmw2/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/bmw2/4.jpg',
      ],
    },
    {
      id: 13,
      imgs: ['https://tools.royalnanoceramic.com/gallery/jeep/1.jpg'],
    },
    {
      id: 14,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/mercedes2/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/7.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/8.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes2/9.jpg',
      ],
    },
    {
      id: 15,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/mercedes3/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/7.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/8.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes3/9.jpg',
      ],
    },
    {
      id: 16,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/mercedes4/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes4/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes4/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes4/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes4/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes4/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes4/7.jpg',
      ],
    },
    {
      id: 17,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/mercedes5/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes5/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes5/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes5/4.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes5/5.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes5/6.jpg',
        'https://tools.royalnanoceramic.com/gallery/mercedes5/7.jpg',
      ],
    },
    {
      id: 18,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/volkswagen2/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen2/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen2/3.jpg',
      ],
    },
    {
      id: 19,
      imgs: [
        'https://tools.royalnanoceramic.com/gallery/volkswagen3/1.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen3/2.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen3/3.jpg',
        'https://tools.royalnanoceramic.com/gallery/volkswagen3/4.jpg',
      ],
    },
  ];
}
