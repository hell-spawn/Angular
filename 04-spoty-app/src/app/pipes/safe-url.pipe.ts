import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}

    transform(uri: string): SafeResourceUrl {
        const mainUrl = 'https://open.spotify.com/embed?uri=';
        return this.domSanitizer.bypassSecurityTrustResourceUrl(
            `${mainUrl}${uri}`
        );
    }
}
