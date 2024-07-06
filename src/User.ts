import { fa, faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    };
  }
  markerContent(): string {
    return `<div><h1><strong>User: ${this.name}</strong></h1></div>`;
  }
}

export { User };
