import {Person} from './person.model'
import { IMarriageRecord } from './Interfaces/IMarriage-record.model';
export class MarriageRecord {
    marriageDate:Date=new Date();
    persons:Person[] = [];

    public static CreateFromResponse(response: IMarriageRecord): MarriageRecord{

        const marriageRecord = new MarriageRecord();
        marriageRecord.marriageDate = response.marriageDate;
        marriageRecord.persons = response.persons ? response.persons.map((x) => Person.CreateFromResponse(x)) : [];

        return marriageRecord;

    }

}


