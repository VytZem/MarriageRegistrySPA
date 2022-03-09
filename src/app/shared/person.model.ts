import { IPerson } from "./Interfaces/IPerson.model";

export class Person {
    firstName:string='';
    lastName:string='';
    personalCode:string='';


    public static CreateFromResponse(response: IPerson): Person{
        const person = new Person();

        person.firstName = response.firstName;
        person.lastName = response.lastName;
        person.personalCode = response.personalCode;

        return person;
    }

}
