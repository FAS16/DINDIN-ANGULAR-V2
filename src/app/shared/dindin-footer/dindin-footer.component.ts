import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './dindin-footer.component.html',
    styleUrls: ['dindin-foooter.component.css', '../../shared/master_styles.css']
})
export class FooterComponent implements OnInit {
    Footer_Tekst= 'DinDin bringer fremtiden for madbestilling i din fritid ind i nutiden. DinDin repræsenterer den højeste kvalitet, fængende brugervenlighed, og mad i verdensklasse.';
    MoedDinDin = ['Mød DinDin', 'Forside', 'Restauranter', 'Om DinDin', 'Kom på kortet'];
    BrugForHjaelp = ['Brug for hjælp', 'Kontakt os', 'Kundeservice', 'Find Medarbejder'];
    Adresse = ['Adresse', 'DinDin ApS', 'Anker Engelundsvej 1, 2800 Kgs. Lyngby', 'info@dindin.dk'];

    constructor() { }

    ngOnInit() {
    }

}
