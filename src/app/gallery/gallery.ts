import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LightgalleryModule } from 'lightgallery/angular';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

@Component({
  selector: 'app-gallery',
  imports: [LightgalleryModule, NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  settings = {
    counter: false,
    plugins: [lgZoom],
    speed: 500,
    download: false,
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
    closable: true,
    closeOnTap: true,
    showCloseIcon: true,
    mobileSettings: {
      controls: true,
      showCloseIcon: true,
      download: false,
    }
  };

  private imageFiles = [
    'MJ__0016-2.jpg', 'MJ__0016.jpg', 'MJ__0108-2.jpg', 'MJ__0108.jpg', 'MJ__0120.jpg', 'MJ__0123.jpg',
    'MJ__0142-2.jpg', 'MJ__0158-2.jpg', 'MJ__0158.jpg', 'MJ__0176.jpg', 'MJ__0187-2.jpg', 'MJ__0187.jpg',
    'MJ__0193.jpg', 'MJ__0198.jpg', 'MJ__0205.jpg', 'MJ__0212.jpg', 'MJ__0220.jpg', 'MJ__0222.jpg',
    'MJ__0255.jpg', 'MJ__0260.jpg', 'MJ__0277-2.jpg', 'MJ__0277.jpg', 'MJ__0308.jpg', 'MJ__0330.jpg',
    'MJ__0342.jpg', 'MJ__0347.jpg', 'MJ__0353.jpg', 'MJ__0354.jpg', 'MJ__9158.jpg', 'MJ__9163.jpg',
    'MJ__9196.jpg', 'MJ__9202.jpg', 'MJ__9208.jpg', 'MJ__9212.jpg', 'MJ__9221.jpg', 'MJ__9279.jpg',
    'MJ__9293.jpg', 'MJ__9309.jpg', 'MJ__9332.jpg', 'MJ__9360.jpg', 'MJ__9406.jpg', 'MJ__9412-2.jpg',
    'MJ__9412.jpg', 'MJ__9415.jpg', 'MJ__9421.jpg', 'MJ__9441.jpg', 'MJ__9481.jpg', 'MJ__9539.jpg',
    'MJ__9552.jpg', 'MJ__9618.jpg', 'MJ__9637.jpg', 'MJ__9674.jpg', 'MJ__9696.jpg', 'MJ__9740.jpg',
    'MJ__9779.jpg', 'MJ__9796.jpg', 'MJ__9873.jpg', 'MJ__9968.jpg', 'MJ__9979.jpg', 'MJ__9990.jpg'
  ];

  images = this.imageFiles.map(filename => ({
    src: `gallery/${filename}`,
    thumb: `gallery/thumbs/${filename}`
  }));
}
