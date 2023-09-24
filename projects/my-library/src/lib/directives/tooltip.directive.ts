import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[myTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('myTooltip') tooltipText: string;

  tooltipElement: HTMLElement;
  tooltipArrowElement: HTMLElement;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.style.position = 'absolute';
    this.tooltipElement.style.backgroundColor = '#000';
    this.tooltipElement.style.color = '#fff';
    this.tooltipElement.style.padding = '5px';
    this.tooltipElement.style.borderRadius = '5px';
    this.tooltipElement.style.fontSize = '12px';
    this.tooltipElement.style.zIndex = '9999';
    this.tooltipElement.style.display = 'none';
    this.tooltipElement.innerText = this.tooltipText;

    this.tooltipArrowElement = document.createElement('div');
    this.tooltipArrowElement.style.position = 'absolute';
    this.tooltipArrowElement.style.width = '0';
    this.tooltipArrowElement.style.height = '0';
    this.tooltipArrowElement.style.borderStyle = 'solid';
    this.tooltipArrowElement.style.borderWidth = '7px';
    this.tooltipArrowElement.style.borderColor =
      'transparent transparent #000 transparent';
    this.tooltipArrowElement.style.top = '-14px';
    this.tooltipArrowElement.style.left = '50%';
    this.tooltipArrowElement.style.transform = 'translateX(-50%)';

    this.tooltipElement.appendChild(this.tooltipArrowElement);
    document.body.appendChild(this.tooltipElement);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {
    const elRect = this.el.nativeElement.getBoundingClientRect();
    this.tooltipElement.style.left = '-9999px';
    this.tooltipElement.style.top = '-9999px';
    this.tooltipElement.style.display = 'block';

    setTimeout(() => {
      const tooltipWidth = this.tooltipElement.offsetWidth;

      const leftPosition = elRect.left - tooltipWidth / 2 + elRect.width / 2;
      const topPosition = elRect.top + elRect.height + 10;

      this.tooltipElement.style.left = `${leftPosition}px`;
      this.tooltipElement.style.top = `${topPosition}px`;
    }, 0);
  }

  hideTooltip() {
    this.tooltipElement.style.display = 'none';
  }
}
