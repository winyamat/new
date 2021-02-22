
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  interactiveCanvas: any;
  callbacks: any = {};
  imageLoader = true;
  showSplashScreen = true;

  constructor() {
    this.interactiveCanvas = (window as any).interactiveCanvas;

    this.callbacks.onUpdate = (data: any) => {
      this.callbacks.html_data = data;
      switch (data.scene) {
        case 'WELCOME':
          console.log('welcome got called');
          break;
      }
    };
  }

  ngOnInit(): void {
    this.initializeScenes();
  }

  initializeScenes = () => {
    this.interactiveCanvas.getHeaderHeightPx().then((height: any) => {
      $(document.body).css('margin-top', `${height}px`);
      this.interactiveCanvas.ready(this.callbacks);
    });
  }

}
