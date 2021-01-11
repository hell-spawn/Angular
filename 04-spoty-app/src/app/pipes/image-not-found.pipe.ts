import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageNotFound',
})
export class ImageNotFoundPipe implements PipeTransform {
    transform(images: any[]): string {
        if (images.length > 0) {
            return images[0].url;
        }
        return 'assets/img/image_not_available.png';
    }
}
