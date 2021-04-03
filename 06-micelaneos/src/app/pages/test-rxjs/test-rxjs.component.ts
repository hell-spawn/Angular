import { Component, OnInit } from '@angular/core';
import {
    combineLatest,
    merge,
    Observable,
    Observer,
    Subject,
    Subscriber,
} from 'rxjs';
import {
    debounceTime,
    delay,
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    skip,
    take,
    tap,
} from 'rxjs/operators';

@Component({
    selector: 'app-test-rxjs',
    templateUrl: './test-rxjs.component.html',
    styleUrls: ['./test-rxjs.component.css'],
})
export class TestRxjsComponent implements OnInit {
    cars$ = new Subject<Car>();
    trucks$ = new Subject<Truck>();

    constructor() {}

    ngOnInit(): void {
        console.log('Init TestRxjsComponent');
        //this.customObserbable();
        //this.getCarsBlack();
        //this.getOnlyColoCar();
        //this.emitNewValueWhenValueIsDifferent();
        //this.exercise_2();
        //this.exercise_3();
        //this.exercise_4();
        //this.exercise_5();
        //this.exercise_6();
        this.exercise_7();
        this.initialize();
    }

    /*
     *step 0: Custom Observable and observer
     */

    customObserbable() {
        console.log('STEP 0:Custom Observable and observer');
        const myObserver: Observer<any> = {
            next: (x) => {
                if (!isNaN(x)) {
                    console.log(x + 10);
                    return;
                }
                console.log(`${x} is not a number.`);
            },
            error: (err) => {
                console.log('Error: ', err);
            },
            complete: () => {
                console.log('Job end.');
            },
        };

        const myObservadle = new Observable((subscriber) => {
            subscriber.next(5),
                subscriber.next('hello'),
                subscriber.next(3),
                subscriber.error('I am a failure'), // End Job
                subscriber.next(7); //not run
        });

        const myObservadle2 = new Observable((subcriber) => {
            subcriber.next(1),
                subcriber.complete(), // End Job
                subcriber.next(4); // not run
        });

        myObservadle.subscribe(myObserver);
        myObservadle2.subscribe(myObserver);

        console.log('END STEP 0');
    }

    // EXERCISES
    // TIP: whenever you start at the next exercise it's recommended to refresh to result browser
    // this is to prevent memory leaks

    // #1 ---
    // step 1: only get cars that have the 'color' black or red
    getCarsBlack() {
        console.log(
            '#1 STEP 1: only get cars that have the "color" black or red'
        );
        const carsBlack = this.cars$.pipe(
            filter((car) => car.color === 'black' || car.color === 'red')
        );

        carsBlack.subscribe((x) => console.log(x));
        console.log('END STEP 1');
    }
    // step 2: only get the 'color' of the car
    getOnlyColoCar() {
        console.log('#1 STEP 2: only get the "color" of the car');
        const colorsCards = this.cars$.pipe(
            map((car) => `${car.id}: ${car.color}`)
        );
        colorsCards.subscribe((x) => console.log(x));
        console.log('END STEP 2');
    }
    // step 3: only emit a new value when the value is different from the previous one

    emitNewValueWhenValueIsDifferent() {
        console.log(
            '#1 STEP 3: only emit a new value when the value is different from the previous one'
        );
        const uniqueColors = this.cars$.pipe(
            distinctUntilChanged((car_a, car_b) => car_a.color === car_b.color)
        );
        uniqueColors.subscribe((car) => console.log(car.id));
        console.log('END STEP 3');
    }
    // step 1: --c1--c2--c3--c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
    // step 2: --c1--c2------c4

    // #2 ---
    // step 1: skip the first 3 cars from the stream
    // step 2: take only the first 5 cars from the stream, ignore all the others
    // stream: --c1--c2--c3--c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
    // step 1: c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
    // step 2: c4--c5--c6--c7--c8
    exercise_2() {
        console.log('#2:');
        const resutl = this.cars$.pipe(skip(3), take(5));
        resutl.subscribe((x) => console.log(x.id));
        console.log('#2 END');
    }

    // #3 ---
    // step 1: only get the cars with the 'color' blue
    // step 2: console log the cars inside the stream
    // step 3: delay the emit of the values by 500ms
    // stream: --c1--c2--c3--c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
    // step 1: c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
    // step 2: c4--c5--c6--c7--c8
    // step 2: c4--c5--c6--c7--c8
    exercise_3() {
        console.log('#3:');
        const resutl = this.cars$.pipe(
            filter((x) => x.color === 'blue'),
            tap((x) => console.log(x.id)),
            delay(500)
        );
        resutl.subscribe((x) => console.log(x.id));
        console.log('#3 END');
    }
    // #4 ---
    // step 1: only get the 'make' of the car
    // step 2: only emit a new value when there hasn't been any activity on the stream for at least 500ms
    exercise_4() {
        console.log('#4:');
        const result = this.cars$.pipe(
            map((x) => x.make),
            debounceTime(500)
        );
        result.subscribe((x) => console.log(x));
        console.log('#4 END');
    }
    // #5 ---
    // step 1: combine all cars with all trucks (don't use the 'merge' operator)
    exercise_5() {
        console.log('#5:');
        combineLatest(this.cars$, this.trucks$).subscribe((x) =>
            console.log(x)
        );
        console.log('#5 END');
    }

    // #6 ---
    // step 1: merge all cars with all trucks (don't use the 'combineLatest' operator)
    exercise_6() {
        console.log('#6:');
        merge(this.cars$, this.trucks$).subscribe((vehicle) =>
            console.log(vehicle)
        );
        console.log('#6 END');
    }

    // #7 ---
    // step 1: merge all cars with all trucks (don't use the 'combineLatest' operator)
    // step 2: make sure that the trucks output before the cars

    exercise_7() {
        console.log('#7:');
        merge(this.cars$.pipe(delay(2000)), this.trucks$).subscribe((vehicle) =>
            console.log(vehicle)
        );
        console.log('#6 END');
    }

    initialize() {
        // DO NOT REMOVE
        this.cars$.next({
            id: 'c1',
            make: 'BMW',
            model: 'M5',
            color: 'red',
        });
        this.cars$.next({
            id: 'c2',
            make: 'Mercedes',
            model: 'E',
            color: 'black',
        });
        this.cars$.next({
            id: 'c3',
            make: 'Audi',
            model: 'RS6',
            color: 'green',
        });
        this.cars$.next({
            id: 'c4',
            make: 'Citroen',
            model: 'C4',
            color: 'black',
        });
        this.trucks$.next({
            id: 't1',
            make: 'MAN',
            model: 'big',
            color: 'red',
        });
        this.trucks$.next({
            id: 't2',
            make: 'Mercedes',
            model: 'bigger',
            color: 'black',
        });
        this.cars$.next({
            id: 'c5',
            make: 'Peugeot',
            model: '308',
            color: 'red',
        });
        this.cars$.next({
            id: 'c6',
            make: 'Maserati',
            model: 'GranTurismo',
            color: 'black',
        });
        this.cars$.next({
            id: 'c7',
            make: 'Astin Martin',
            model: 'DB9',
            color: 'silver',
        });
        this.cars$.next({
            id: 'c8',
            make: 'Nissan',
            model: 'Note',
            color: 'blue',
        });
        this.cars$.next({
            id: 'c9',
            make: 'Opel',
            model: 'Corsa',
            color: 'blue',
        });
        this.cars$.next({
            id: 'c10',
            make: 'Ford',
            model: 'GT',
            color: 'red',
        });
        this.cars$.next({
            id: 'c11',
            make: 'Volvo',
            model: 'S90',
            color: 'silver',
        });
        this.trucks$.next({
            id: 't3',
            make: 'Scania',
            model: 'biggest',
            color: 'green',
        });
        this.trucks$.next({
            id: 't4',
            make: 'Renault',
            model: 'small',
            color: 'black',
        });
        this.trucks$.next({
            id: 't5',
            make: 'Ford',
            model: 'smaller',
            color: 'red',
        });
        this.trucks$.next({
            id: 't6',
            make: 'DAF',
            model: 'smallest',
            color: 'black',
        });
        this.trucks$.next({
            id: 't7',
            make: 'Volvo',
            model: 'swedish',
            color: 'silver',
        });
        setTimeout(() => {
            this.cars$.next({
                id: 'c12',
                make: 'McLaren',
                model: 'P1',
                color: 'blue',
            });
            this.cars$.next({
                id: 'c13',
                make: 'Koenigsegg',
                model: 'One:1',
                color: 'blue',
            });
        }, 1000);
    }

    // delayed
}

type Car = {
    readonly id: string;
    readonly make: string;
    readonly model: string;
    readonly color: string;
};

type Truck = {
    readonly id: string;
    readonly make: string;
    readonly model: string;
    readonly color: string;
};
