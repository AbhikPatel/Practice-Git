import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medicine, Prescription, SelectedMedicine } from '../../models/medicine.model';

@Component({
  selector: 'app-prescription-form-presentation',
  templateUrl: './prescription-form-presentation.component.html',
  styleUrls: ['./prescription-form-presentation.component.scss']
})
export class PrescriptionFormPresentationComponent implements OnInit {
  diseaseGroup: FormGroup;
  medicineGroup: FormGroup;

  prescription: Prescription;

  timings: any = [
    {
      id: 0,
      value: 'Mo',
      selected: false,
    },
    {
      id: 1,
      value: 'Af',
      selected: false,
    },
    {
      id: 2,
      value: 'Ev',
      selected: false,
    },
    {
      id: 3,
      value: 'Ni',
      selected: false,
    },
  ];

  diseases = [
    {
      id: 1,
      name: 'Headache',
    },
    {
      id: 2,
      name: 'Stomachache',
    },
    {
      id: 3,
      name: 'Fever',
    },
    {
      id: 4,
      name: 'Cold',
    },
  ];

  medicines: Medicine[] = [
    {
      id: 1,
      name: 'Paracetamol0',
      diseasesId: 2,
      disabled: false,
    },
    {
      id: 2,
      name: 'Paracetamol1',
      diseasesId: 2,
      disabled: false,
    },
    {
      id: 3,
      name: 'Paracetamol2',
      diseasesId: 2,
      disabled: false,
    },
    {
      id: 4,
      name: 'Paracetamol3',
      diseasesId: 3,
      disabled: false,
    },
    {
      id: 5,
      name: 'Paracetamol4',
      diseasesId: 4,
      disabled: false,
    },
    {
      id: 6,
      name: 'Paracetamol5',
      diseasesId: 4,
      disabled: false,
    },
    {
      id: 7,
      name: 'Paracetamol6',
      diseasesId: 1,
      disabled: false,
    },
    {
      id: 8,
      name: 'Paracetamol7',
      diseasesId: 1,
      disabled: false,
    },
    {
      id: 9,
      name: 'Paracetamol8',
      diseasesId: 1,
      disabled: false,
    },
  ];

  filteredMedicines: Medicine[] = [];

  constructor(private _fb: FormBuilder) {
    this.diseaseGroup = this._fb.group({
      patientEmailId: [null],
      patientMobile: [null],
      expDate: [null],
      diseases: [null],
    });

    this.medicineGroup = this._fb.group({
      medicineId: [null],
      medicineDosage: [null],
      medicineDays: [null],
      beforeAfter: [null],
      medicineTiming: [null],
    });
  }

  ngOnInit(): void { }

  getMedicines(diseases: number[]) {
    return this.medicines.filter((medicine: Medicine) => diseases.includes(medicine.diseasesId));
  }

  removeMedicine(index: number) {
    this.filteredMedicines.splice(index, 1);
    return [...this.filteredMedicines];
  }

  onSelectionChange(item: any) {
    console.log(item)
    // this.selectedDiseases = this.diseaseGroup.value.diseases;
    this.filteredMedicines = this.getMedicines(this.diseaseGroup.value.diseases);
    this.prescription.medicines = this.prescription.medicines.filter((medicine: SelectedMedicine) => {
      return !!this.filteredMedicines.find((filteredMedicine: Medicine) => medicine.medicineId === filteredMedicine.id);
    })
  }

  onTimingSelect(ev: any) {
    this.timings[ev.target.value].selected = ev.target.checked;
    this.medicineGroup.controls['medicineTiming'].setValue(this.timings.map((timing: any) => {
      if (timing.selected) return timing.value;
    }).filter((value: any) => value != undefined).join());
  }

  onAdd() {
    console.log("Added");
    if (!this.prescription?.doctorMobileNumber) {
      this.prescription = new Prescription();
      this.prescription.doctorMobileNumber = '9879191394';
      this.prescription.patientMobileNumber = this.diseaseGroup.value.patientMobile;
      this.prescription.expiryDate = this.diseaseGroup.value.expDate;
      this.prescription.medicines = [];
    }

    this.prescription.medicines.push(this.medicineGroup.value);
    this.filteredMedicines = this.removeMedicine(this.filteredMedicines.findIndex((medicine: Medicine) => medicine.id === this.medicineGroup.value.medicineId));
    console.log(this.prescription);
    this.timings = this.timings.map((timing: any) => {
      timing.selected = false;
      return timing;
    })
    this.medicineGroup.reset();
  }
}
