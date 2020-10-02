import {Role} from '../role';

export class UserDetail{
  id: number;
  fullname: string;
  email: string;
  enabled: boolean;
  fonction: string;
  dateNaissance: string;
  matricule: string;
  roles: Role[];
}
