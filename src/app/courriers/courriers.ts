import {UserDetail} from '../users/user-details/user-detail';

export class Courriers {
  id: number;
  senderName: string;
  receiverName: string;
  objet: string;
  senderDate: string;
  receiverDate: string;
  addedDate: string;
  referenceNumber: string;
  saver: string;
  typeCourrier: string;
  status: boolean;
  users: UserDetail[];
}


