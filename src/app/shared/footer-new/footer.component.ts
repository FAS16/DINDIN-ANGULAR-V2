import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['foooter.component.css', '../styles/styles.css']
})
export class FooterComponent implements OnInit {
    footerText= 'Fremtiden for nye madoplevelser';
    moedDinDin = ['MØD DINDIN', 'Forside', 'Restauranter', 'Kom på kortet'];
    hjaelp = ['HJÆLP', 'Kontakt os', 'Kundeservice', 'Find Medarbejder'];
    adresse = ['ADRESSE', 'DinDin ApS', 'Anker Engelundsvej 1, 2800', 'info@dindin.dk'];

    constructor() { }

    ngOnInit() {
    }

}
