import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';
const user = new User();
const company = new Company();
const customMap1 = new CustomMap('map');
customMap1.addMarker(user);
customMap1.addMarker(company);
