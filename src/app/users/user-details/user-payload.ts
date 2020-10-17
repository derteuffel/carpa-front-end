import {Role} from '../role';

export class UserPayload{
  email: string;
  fullname: string;
  dateNaissance: Date;
  matricule: string;
  fonction: string;
  password: string;
  username: string;
  roles: string[];
}
