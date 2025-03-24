import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-header-alt',
  templateUrl: './header-alt.component.html',
  styleUrl: './header-alt.component.css',
})
export class HeaderAltComponent implements OnInit, AfterViewInit {
  constructor(private LanguageService: LanguageService) {}
  @ViewChild('bgVideo', { static: false })
  bgVideo!: ElementRef<HTMLVideoElement>;

  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }

  ngAfterViewInit(): void {
    const videoElement = this.bgVideo.nativeElement;
    videoElement.play(); // Plays the video
    videoElement.muted = true;
  }
}
