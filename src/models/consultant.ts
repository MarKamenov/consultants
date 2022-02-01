import { IConsultant } from "./types";

export class ConsultantDTO implements IConsultant {
    fullname: string;
    firstname:string;
    image: string;
    specialties: string[] | string;
    locations: string;
    type:string;
  
    constructor(data: IConsultant) {
      this.fullname = data.fullname;
      this.firstname = data.firstname;
      this.image = data.image;
      this.specialties = data.specialties
      this.locations = data.locations
      this.type = data.type
    }
  }