import { Component, OnInit } from '@angular/core';
import {Person} from './person.model';


@Component({
    selector: 'app-personer',
    templateUrl: './personer.component.html',
    styleUrls: ['person.component.css', '../../shared/styles/styles.css']
})
export class PersonerComponent implements OnInit {

    teamMembers: Person[] = [
        new Person('/../assets/pics/louise.jpg',    'Louise Willemoes',   'Kunderelationer',   'noget@noget.dk', 'https://www.linkedin.com/in/louise-willemoes-jensen-3017ab103/'),
        new Person('/../assets/pics/fahad-n.png',     'Fahad S.Ali',       'Lead Developer', 'nogetandet@noget.dk', 'https://www.linkedin.com/in/fahad-s-ali-380a25127/'),
        new Person('/../assets/pics/ann-sofie.jpg', 'Ann-Sofie Buchwald', 'Junior Konsulent',  'ann-sofie', 'https://www.linkedin.com/in/ann-sofie-buchwald-a9020a128/'),
        new Person('/../assets/pics/emil.jpg',      'Emil Jørgensen',     'Backend-Udvikler',   'noget@noget.dk', 'https://www.linkedin.com/in/emilfrjorgensen/'),
        new Person('/../assets/pics/jonas.jpg',     'Jonas Mikkelsen',    'Frontend-Udvikler',  'Mikkelsen.v.jonas@gmail.com', 'https://www.linkedin.com/in/jonas-mikkelsen-7672a0103/'),
        new Person('/../assets/pics/martin.jpg',    'Martin Dahl Jensen', 'Projekt Manager', 'MartinDahlJen@gmail.com', 'https://www.linkedin.com/in/martin-dahl-jensen-a92524138/'),
    ];

    constructor() { }

    ngOnInit() {
    }

}
