import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'minutesandsecondes'
})
export class MinutesAndSecondes implements PipeTransform {
    transform(value: number ) {
        const minute = Math.floor(value / 60 );
        const second = value % 60;
        const time = minute + ':' + second;
        return time;
    }

}