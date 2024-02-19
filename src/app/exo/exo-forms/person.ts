export class Person {
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  numero: number;
  rue: string;
  zip: number;
  city: string;
  constructor(nom:string, prenom:string, dateDeNaissance:Date, numero:number, rue:string, zip:number, city: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateDeNaissance = dateDeNaissance;
    this.numero = numero;
    this.rue = rue;
    this.zip = zip;
    this.city = city;
  }
}
