import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  LOCALE_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header-alt',
  templateUrl: './header-alt.component.html',
  styleUrl: './header-alt.component.css',
  standalone: false,
})
export class HeaderAltComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {}
  @ViewChild('bgVideo', { static: false })
  bgVideo!: ElementRef<HTMLVideoElement>;
}
