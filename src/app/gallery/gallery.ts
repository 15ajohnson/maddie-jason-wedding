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
    'MJ__0016-2.jpg', 'MJ__0016.jpg', 'MJ__0017.jpg', 'MJ__0025.jpg', 'MJ__0108-2.jpg', 'MJ__0108.jpg', 
    'MJ__0120-2.jpg', 'MJ__0120.jpg', 'MJ__0123-2.jpg', 'MJ__0123.jpg', 'MJ__0127.jpg', 'MJ__0142-2.jpg', 
    'MJ__0142.jpg', 'MJ__0152.jpg', 'MJ__0158-2.jpg', 'MJ__0158.jpg', 'MJ__0176-2.jpg', 'MJ__0176-3.jpg', 
    'MJ__0176-4.jpg', 'MJ__0176.jpg', 'MJ__0187-2.jpg', 'MJ__0187.jpg', 'MJ__0193.jpg', 'MJ__0198.jpg', 
    'MJ__0205.jpg', 'MJ__0212.jpg', 'MJ__0213.jpg', 'MJ__0220.jpg', 'MJ__0222.jpg', 'MJ__0223.jpg', 
    'MJ__0237.jpg', 'MJ__0249.jpg', 'MJ__0254.jpg', 'MJ__0255.jpg', 'MJ__0260.jpg', 'MJ__0261-2.jpg', 
    'MJ__0261.jpg', 'MJ__0266.jpg', 'MJ__0270.jpg', 'MJ__0271-2.jpg', 'MJ__0271.jpg', 'MJ__0277-2.jpg', 
    'MJ__0277-3.jpg', 'MJ__0277.jpg', 'MJ__0289.jpg', 'MJ__0292.jpg', 'MJ__0293.jpg', 'MJ__0299-2.jpg', 
    'MJ__0299.jpg', 'MJ__0301.jpg', 'MJ__0303.jpg', 'MJ__0308.jpg', 'MJ__0312.jpg', 'MJ__0313.jpg', 
    'MJ__0329.jpg', 'MJ__0330.jpg', 'MJ__0342.jpg', 'MJ__0347.jpg', 'MJ__0353.jpg', 'MJ__0354.jpg', 
    'MJ__0355.jpg', 'MJ__9158.jpg', 'MJ__9163.jpg', 'MJ__9176-2.jpg', 'MJ__9176.jpg', 'MJ__9180.jpg', 
    'MJ__9181.jpg', 'MJ__9186-2.jpg', 'MJ__9186.jpg', 'MJ__9196.jpg', 'MJ__9200.jpg', 'MJ__9202.jpg', 
    'MJ__9208-2.jpg', 'MJ__9208.jpg', 'MJ__9212-2.jpg', 'MJ__9212.jpg', 'MJ__9217-2.jpg', 'MJ__9217.jpg', 
    'MJ__9221-2.jpg', 'MJ__9221.jpg', 'MJ__9228.jpg', 'MJ__9241.jpg', 'MJ__9264.jpg', 'MJ__9273.jpg', 
    'MJ__9279.jpg', 'MJ__9280.jpg', 'MJ__9282.jpg', 'MJ__9286.jpg', 'MJ__9289.jpg', 'MJ__9293.jpg', 
    'MJ__9309.jpg', 'MJ__9315.jpg', 'MJ__9320.jpg', 'MJ__9332.jpg', 'MJ__9340.jpg', 'MJ__9360.jpg', 
    'MJ__9382.jpg', 'MJ__9392.jpg', 'MJ__9393.jpg', 'MJ__9405-2.jpg', 'MJ__9405.jpg', 'MJ__9406.jpg', 
    'MJ__9412-2.jpg', 'MJ__9412.jpg', 'MJ__9415.jpg', 'MJ__9421-2.jpg', 'MJ__9421.jpg', 'MJ__9425.jpg', 
    'MJ__9426.jpg', 'MJ__9432-2.jpg', 'MJ__9432.jpg', 'MJ__9440.jpg', 'MJ__9441.jpg', 'MJ__9462.jpg', 
    'MJ__9466.jpg', 'MJ__9476.jpg', 'MJ__9480.jpg', 'MJ__9481.jpg', 'MJ__9486.jpg', 'MJ__9490.jpg', 
    'MJ__9506-2.jpg', 'MJ__9506.jpg', 'MJ__9539.jpg', 'MJ__9552.jpg', 'MJ__9576.jpg', 'MJ__9579.jpg', 
    'MJ__9588.jpg', 'MJ__9592.jpg', 'MJ__9599.jpg', 'MJ__9618.jpg', 'MJ__9622.jpg', 'MJ__9637-2.jpg', 
    'MJ__9637.jpg', 'MJ__9641.jpg', 'MJ__9650.jpg', 'MJ__9654-2.jpg', 'MJ__9654.jpg', 'MJ__9674.jpg', 
    'MJ__9696.jpg', 'MJ__9700.jpg', 'MJ__9706.jpg', 'MJ__9717.jpg', 'MJ__9722.jpg', 'MJ__9733.jpg', 
    'MJ__9740.jpg', 'MJ__9749.jpg', 'MJ__9759.jpg', 'MJ__9761.jpg', 'MJ__9769.jpg', 'MJ__9777.jpg', 
    'MJ__9779.jpg', 'MJ__9785.jpg', 'MJ__9796-2.jpg', 'MJ__9796.jpg', 'MJ__9799-2.jpg', 'MJ__9799.jpg', 
    'MJ__9804.jpg', 'MJ__9862.jpg', 'MJ__9871.jpg', 'MJ__9873.jpg', 'MJ__9887.jpg', 'MJ__9892.jpg', 
    'MJ__9896.jpg', 'MJ__9903.jpg', 'MJ__9917-2.jpg', 'MJ__9917.jpg', 'MJ__9928.jpg', 'MJ__9929.jpg', 
    'MJ__9933.jpg', 'MJ__9937.jpg', 'MJ__9941.jpg', 'MJ__9968.jpg', 'MJ__9969.jpg', 'MJ__9970.jpg', 
    'MJ__9971.jpg', 'MJ__9979.jpg', 'MJ__9990.jpg'
  ];

  images = this.imageFiles.map(filename => ({
    src: `gallery/${filename}`,
    thumb: `gallery/thumbs/${filename}`
  }));
}
