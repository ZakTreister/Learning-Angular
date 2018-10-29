import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../public/services/countries-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  input: string;
  countries: any;
  constructor(private cService: CountriesServiceService) { }

  ngOnInit() {
  }

  getCountries() {
    this.cService.getCountries(this.input).subscribe((response) => {
      this.countries = response;
    }, (error) => {
      this.countries=[];
      alert("No countries returned")
    })
  }
}
