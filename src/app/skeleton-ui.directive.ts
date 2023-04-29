import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeletonUi]'
})
export class SkeletonUiDirective implements OnInit {

  @Input() tagInfo: boolean = false;

  constructor( private elementRef: ElementRef) { }

  ngOnChanges() {
    console.log(this.tagInfo);
  }

  ngOnInit(): void {
    // console.log(this.tagInfo);
    // console.log(this.elementRef.nativeElement.tagName);
    const elementType = this.elementRef.nativeElement.tagName.toLowerCase();
    // console.log(`Element type: ${elementType}`);
  }


}
