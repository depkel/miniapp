export interface IEmployee {
    Id: number;
    firstname: string;
    lastname: string;
    gender: string;
    salary: number;
    department?: string;
    isActive: boolean;
    photoPath: string;
    //computeMonthlySalary(AnnualSalary: number): number;


}

export class Employee implements IEmployee {
    constructor(public Id: number, public firstname: string, public lastname: string, public gender: string, public salary: number,public department:string,public isActive:boolean,public photoPath:string) {
    }

    //computeMonthlySalary(AnnualSalary: number) {
    //    return AnnualSalary / 12;
    //}
}