// export class diseasesModel{
//     diseases:medicineModel[]

//     constructor(diseases:medicineModel[]){
//         this.diseases = diseases
//     }
// }

// export class medicineModel{
//     medicinename:string
//     dosage:number
//     days:number
//     meal:string

//     constructor(medicinename:string, dosage:number, days:number, meal:string){
//         this.medicinename = medicinename
//         this.dosage = dosage
//         this.days = days
//         this.meal = meal
//     }
// }

export class Disease {
    id: number;
    name: string;
}

export class Medicine {
    id: number;
    name: string;
    diseasesId: number;
    disabled: boolean;
}

export class SelectedMedicine {
    medicineId: number;
    medicineDosage: number;
    medicineTiming: string;
    afterBeforeMeal: boolean;
    medicineDays: number;
}

export class Prescription {
    doctorMobileNumber: string;
    patientMobileNumber: string;
    expiryDate: number;
    medicines: SelectedMedicine[];
}
