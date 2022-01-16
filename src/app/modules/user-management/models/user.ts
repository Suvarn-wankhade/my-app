export class User {
    name: string;
    email: string;
    gender: string;
    address: string;
    dateOfBirth: string;
    id: number;
    isSelected: boolean;

    constructor(name: string, email: string, gender: string, address: string,
      dateOfBirth: string, id: number, isSelected: boolean) {

      this.name = name;
      this.email = email;
      this.gender = gender;
      this.address = address;
      this.dateOfBirth = dateOfBirth;
      this.id = id;
      this.isSelected = isSelected;
    }
  }
