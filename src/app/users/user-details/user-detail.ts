import {Role} from '../role';

export class UserDetail{
  id: number;
  fullname: string;
  email: string;
  username: string;
  enabled: boolean;
  fonction: string;
  password: string;
  dateNaissance: string;
  matricule: string;
  token: string;
  roles: Role[];
}
