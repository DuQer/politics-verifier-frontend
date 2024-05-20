import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Deputy {
  'district_name' : string,
  'active' : boolean,
  'birth_location' : string,
  'voivodeship' : Voivodeship,
  'number_of_votes' : number,
  'club' : string,
  'profession' : string,
  'email' : string,
  'district_num' : number,
  'first_name' : string,
  'education_level' : EducationLevel,
  'last_name' : string,
  'card_id' : number,
  'second_name' : [] | [string],
  'birth_date' : string,
}
export type EducationLevel = { 'średnie_ogólne' : null } |
  { 'podstawowe' : null } |
  { 'wyższe' : null } |
  { 'zawodowe' : null } |
  { 'średnie_zawodowe' : null };
export type Voivodeship = { 'podkarpackie' : null } |
  { 'pomorskie' : null } |
  { 'kujawsko_pomorskie' : null } |
  { 'zachodniopomorskie' : null } |
  { 'warmińsko_mazurskie' : null } |
  { 'wielkopolskie' : null } |
  { 'łódzkie' : null } |
  { 'dolnośląskie' : null } |
  { 'podlaskie' : null } |
  { 'świętokrzyskie' : null } |
  { 'śląskie' : null } |
  { 'małopolskie' : null } |
  { 'mazowieckie' : null } |
  { 'opolskie' : null } |
  { 'lubelskie' : null } |
  { 'lubuskie' : null };
export interface _SERVICE {
  'add_deputy' : ActorMethod<[Deputy], undefined>,
  'get_deputy' : ActorMethod<[number], [] | [Deputy]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
