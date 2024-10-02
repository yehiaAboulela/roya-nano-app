import { Injectable } from '@angular/core';
import { BlogItem } from '../interface/blog-item';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor() {}

  blogs: BlogItem[] = [
    {
      label: 'Announcement',
      heading: 'Why Ceramic Coating is the Best Choice for Your Car',
      subHeading:
        'Learn why Royal Nano Ceramic coating is the ultimate solution for car protection and maintaining your vehicle’s shine.',
      date: 'July 3, 2024',
      img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498e834cf1afb7a9073b8_slice-blog-cover-image-4.jpg',
      points: [
        {
          head: 'What is Ceramic Coating?',
          body: 'Ceramic coating is a liquid polymer that is applied to the exterior surfaces of your car. It forms a protective layer that bonds with the paint, providing superior protection against scratches, chemical stains, and UV damage, while also enhancing the gloss and shine of your vehicle.',
        },
        {
          head: 'Benefits of Choosing Royal Nano Ceramic',
          body: 'Royal Nano Ceramic offers a premium quality ceramic coating that lasts longer and provides better protection compared to conventional wax or sealants. Our formula creates a hydrophobic layer that repels water and prevents dirt and grime buildup, making your car easier to clean and maintain.',
        },
        {
          head: 'Long-lasting Protection',
          body: 'Unlike traditional wax that wears off after a few months, Royal Nano Ceramic coatings can last for years. With proper maintenance, the coating remains intact, protecting your car’s paintwork and maintaining its showroom-like appearance.',
        },
        {
          head: 'Enhanced Value and Aesthetics',
          body: 'Investing in a ceramic coating not only improves the aesthetics of your car but also preserves its value. The enhanced shine, color depth, and long-lasting protection provided by our coatings ensure that your vehicle looks stunning and remains protected for years to come.',
        },
      ],
      id: 1,
    },
    {
      label: 'Announcement',
      heading: 'How to Maintain Your Car After a Ceramic Coating Application',
      subHeading:
        'Get tips on how to take care of your car after applying Royal Nano Ceramic coatings to maximize its durability and appearance.',
      date: 'August 10, 2024',
      img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749804f4b1dafd3ae7ba6a_olivia-blog-cover-image-2.jpg',
      points: [
        {
          head: 'Use pH-Neutral Car Wash Products',
          body: 'To maintain your ceramic-coated car, it’s important to use pH-neutral car wash products. Harsh chemicals can degrade the coating over time. A gentle shampoo will ensure the coating stays intact and maintains its hydrophobic properties.',
        },
        {
          head: 'Avoid Automatic Car Washes',
          body: 'Automatic car washes can cause micro-scratches and degrade the ceramic coating’s effectiveness. It’s best to wash your car by hand using a microfiber mitt to ensure a thorough and safe clean.',
        },
        {
          head: 'Regularly Check for Contaminants',
          body: 'Even with a ceramic coating, contaminants like tar or tree sap can bond to the surface. Regularly inspect your car and use a clay bar to remove these contaminants without damaging the coating.',
        },
        {
          head: 'Apply Ceramic Boosters',
          body: 'To maintain the shine and durability of the coating, apply a ceramic booster every few months. These boosters replenish the hydrophobic layer and enhance the overall performance of the coating.',
        },
      ],
      id: 2,
    },
    {
      label: 'Announcement',
      heading: 'Royal Nano Ceramic: The Best Solution for Car Paint Protection',
      subHeading:
        'Discover why Royal Nano Ceramic is a trusted name in the automotive industry for premium paint protection solutions.',
      date: 'September 5, 2024',
      img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637497f54ceb7489efe5e308_olivia-blog-cover-image-1.jpg',
      points: [
        {
          head: 'Unmatched Protection Against Environmental Damage',
          body: 'Royal Nano Ceramic coatings offer unmatched protection against harmful environmental elements such as acid rain, bird droppings, and harsh sunlight. Our coatings prevent paint oxidation and discoloration, keeping your car looking new.',
        },
        {
          head: 'Scratch Resistance and Durability',
          body: 'Our ceramic coatings are engineered to resist minor scratches and swirl marks that occur during regular car washing. The durable layer ensures your car’s paint remains pristine and well-protected.',
        },
        {
          head: 'Professional Application for Maximum Results',
          body: 'Our trained professionals apply the ceramic coating using precise techniques to achieve an even layer and maximum bond. This guarantees the best results and long-lasting protection for your car’s paintwork.',
        },
        {
          head: 'Affordable and Cost-Effective Solution',
          body: 'With Royal Nano Ceramic, you get premium paint protection at a cost-effective price. The long-term savings on car maintenance and repainting make it a worthwhile investment for car enthusiasts and everyday drivers alike.',
        },
      ],
      id: 3,
    },
    {
      label: 'Announcement',
      heading: 'Why Regular Detailing is Crucial for Ceramic-Coated Cars',
      subHeading:
        'Explore the importance of regular detailing to preserve the quality and effectiveness of your Royal Nano Ceramic coating.',
      date: 'October 12, 2024',
      img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749819fb7e46504d281040_olivia-blog-cover-image-5.jpg',
      points: [
        {
          head: 'Keeps Your Coating Clean and Effective',
          body: 'Regular detailing ensures that the ceramic coating remains clean and free from contaminants. Dust, dirt, and grime can diminish the hydrophobic properties, making it essential to clean the car regularly.',
        },
        {
          head: 'Enhances the Coating’s Longevity',
          body: 'By regularly maintaining your ceramic-coated vehicle, you enhance the longevity of the coating. This means the paint protection lasts longer, and your car retains its new-car appearance for years.',
        },
        {
          head: 'Restores Hydrophobic Properties',
          body: 'Over time, the hydrophobic properties of the coating may diminish. Detailing helps restore these properties, ensuring that water continues to bead off and contaminants don’t stick to the surface.',
        },
        {
          head: 'Prevents Potential Damage',
          body: 'Professional detailing helps identify potential issues early on, such as etching caused by water spots or contamination buildup. Addressing these issues promptly prevents long-term damage and keeps your coating in top condition.',
        },
      ],
      id: 4,
    },
    {
      label: 'Announcement',
      heading: 'Royal Nano Ceramic: A Guide to Paint Protection Film (PPF)',
      subHeading:
        'Learn how Paint Protection Film (PPF) from Royal Nano Ceramic can safeguard your vehicle’s vulnerable areas.',
      date: 'November 1, 2024',
      img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498bd34cf1ad081906caa_slice-blog-cover-image-5.jpg',
      points: [
        {
          head: 'What is Paint Protection Film?',
          body: 'Paint Protection Film (PPF) is a transparent layer of polyurethane applied to your car’s surface. It provides excellent protection against rock chips, scratches, and road debris, while maintaining your car’s original look.',
        },
        {
          head: 'Benefits of PPF for Your Car',
          body: 'PPF is ideal for protecting high-impact areas such as the front bumper, hood, and side mirrors. It absorbs impact, prevents paint damage, and offers self-healing properties that remove minor scratches with heat exposure.',
        },
        {
          head: 'Royal Nano Ceramic’s Premium PPF',
          body: 'Our premium PPF is designed to offer superior protection and clarity. With advanced self-healing capabilities and UV protection, it ensures your car’s paint remains protected and maintains its brilliance.',
        },
        {
          head: 'Ideal for High-Value Cars and Daily Drivers',
          body: 'Whether you drive a luxury car or a daily commuter, PPF provides a robust solution for paint protection. It is especially useful for preserving the resale value of high-end vehicles.',
        },
      ],
      id: 5,
    },
    {
      label: 'Announcement',
      heading: 'How to Choose the Right Ceramic Coating for Your Car',
      subHeading:
        'With so many options available, choosing the right ceramic coating can be challenging. This guide simplifies the process.',
      date: 'December 5, 2024',
      img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498f6fb7e4659ef282104_slice-blog-cover-image-6.jpg',
      points: [
        {
          head: 'Understanding Different Types of Ceramic Coatings',
          body: 'Not all ceramic coatings are created equal. Learn about different types such as 9H coatings, SiO2-based coatings, and graphene-infused coatings, and how they impact your car’s protection and appearance.',
        },
        {
          head: 'Choosing the Right Coating for Your Needs',
          body: 'Consider factors such as durability, gloss level, and maintenance requirements when selecting a ceramic coating. Royal Nano Ceramic offers various options to suit different needs, whether you want maximum protection or a glossy finish.',
        },
        {
          head: 'Professional vs. DIY Coatings',
          body: 'While DIY coatings are available, professional application ensures better results and longevity. Our certified technicians ensure a flawless application and long-lasting protection for your car’s paint.',
        },
        {
          head: 'Cost vs. Value: Making an Informed Decision',
          body: 'Understand the cost differences between entry-level and premium ceramic coatings. Investing in a high-quality coating may seem expensive initially, but it pays off with lower maintenance costs and enhanced paint protection.',
        },
      ],
      id: 6,
    },
  ];

  getBlogById(urlId: string): BlogItem {
    return this.blogs.filter((cur) => cur.id == Number(urlId))[0];
  }
}
