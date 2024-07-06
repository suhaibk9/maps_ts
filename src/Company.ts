import { fa, faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    };
  }
  markerContent(): string {
    return `<div>
        <h1><strong>Company: ${this.companyName}</strong></h1><br>
     <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>`;
  }
}
export { Company };
