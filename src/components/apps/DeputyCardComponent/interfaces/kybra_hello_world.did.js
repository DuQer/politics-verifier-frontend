export const idlFactory = ({ IDL }) => {
  const Voivodeship = IDL.Variant({
    'podkarpackie' : IDL.Null,
    'pomorskie' : IDL.Null,
    'kujawsko_pomorskie' : IDL.Null,
    'zachodniopomorskie' : IDL.Null,
    'warmińsko_mazurskie' : IDL.Null,
    'wielkopolskie' : IDL.Null,
    'łódzkie' : IDL.Null,
    'dolnośląskie' : IDL.Null,
    'podlaskie' : IDL.Null,
    'świętokrzyskie' : IDL.Null,
    'śląskie' : IDL.Null,
    'małopolskie' : IDL.Null,
    'mazowieckie' : IDL.Null,
    'opolskie' : IDL.Null,
    'lubelskie' : IDL.Null,
    'lubuskie' : IDL.Null,
  });
  const EducationLevel = IDL.Variant({
    'średnie_ogólne' : IDL.Null,
    'podstawowe' : IDL.Null,
    'wyższe' : IDL.Null,
    'zawodowe' : IDL.Null,
    'średnie_zawodowe' : IDL.Null,
  });
  const Deputy = IDL.Record({
    'district_name' : IDL.Text,
    'active' : IDL.Bool,
    'birth_location' : IDL.Text,
    'voivodeship' : Voivodeship,
    'number_of_votes' : IDL.Nat32,
    'club' : IDL.Text,
    'profession' : IDL.Text,
    'email' : IDL.Text,
    'district_num' : IDL.Nat8,
    'first_name' : IDL.Text,
    'education_level' : EducationLevel,
    'last_name' : IDL.Text,
    'card_id' : IDL.Nat16,
    'second_name' : IDL.Opt(IDL.Text),
    'birth_date' : IDL.Text,
  });
  return IDL.Service({
    'add_deputy' : IDL.Func([Deputy], [], []),
    'get_deputy' : IDL.Func([IDL.Nat16], [IDL.Opt(Deputy)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
