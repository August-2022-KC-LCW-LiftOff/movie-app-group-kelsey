import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})

export class ScrollToTopComponent implements OnInit {

  constructor() { }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

}

