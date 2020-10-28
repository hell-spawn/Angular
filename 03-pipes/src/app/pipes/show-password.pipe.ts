import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'showPassword'
})
export class ShowPasswordPipe implements PipeTransform {

    transform(value: string, isShowPassword: boolean): string {
        return (isShowPassword) ? value : '*'.repeat(value.length);
    }

}
