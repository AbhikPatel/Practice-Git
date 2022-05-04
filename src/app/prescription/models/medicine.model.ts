export class diseasesModel{
    diseases:medicineModel[]

    constructor(diseases:medicineModel[]){
        this.diseases = diseases
    }
}

export class medicineModel{
    medicinename:string
    dosage:number
    days:number
    meal:string

    constructor(medicinename:string, dosage:number, days:number, meal:string){
        this.medicinename = medicinename
        this.dosage = dosage
        this.days = days
        this.meal = meal
    }
}