import { IConsultant } from "../models";

export interface Consultants {
  record_count: number;
  records: Records;
  info: Info;
  errors: Errors;
}

export interface Errors {
}

export interface Info {
  page: InfoPage;
}

export interface InfoPage {
  query: string;
  current_page: number;
  num_pages: number;
  per_page: number;
  total_result_count: number;
  facets: Errors;
}

export interface Records {
  page: IConsultant[];
}

export interface PageElement {
  type: TypeEnum;
  lastname: string;
  external_id: string;
  image: string;
  fullname: string;
  roboticAssistedSurgery: string;
  professionalQualifications?: string[] | string;
  bookable: string;
  updated_at: Date;
  firstname: string;
  body: string;
  sections: string[];
  title: string;
  sortnameBookable: string;
  treatments?: string[] | string;
  locations: string;
  offersPaediatrics: string;
  gender: Gender;
  url: string;
  published_at: Date;
  specialties: string[] | string;
  sortname: string;
  gpReferralRequired: GpReferralRequired;
  popularity: number;
  info: string;
  _index: Index;
  _type: Type;
  _score: number;
  _version: null;
  _explanation: null;
  sort: null;
  id: string;
  highlight: Errors;
  languages?: string[] | string;
  insurers?: string[] | string;
}

export enum Index {
  The5F6Bbe97815A7868A43015Cb = "5f6bbe97815a7868a43015cb",
}

export enum Type {
  Doc = "_doc",
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unspecified = "Unspecified",
}

export enum GpReferralRequired {
  No = "No",
}

export enum TypeEnum {
  Consultant = "Consultant",
}
