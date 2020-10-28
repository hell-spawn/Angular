import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: String, ...args: unknown[]): string {
        let names = value.toLowerCase().split(' ');
        return names.map(name => {
            return name[0].toUpperCase() + name.substr(1);
        }).join(' ');
    }

}
