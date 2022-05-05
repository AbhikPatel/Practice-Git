import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-prescription-form-presentation',
  templateUrl: './prescription-form-presentation.component.html',
  styleUrls: ['./prescription-form-presentation.component.scss']
})
export class PrescriptionFormPresentationComponent implements OnInit {
  diseases = [
    { item_id: 1, item_text: 'Headache' },
    { item_id: 2, item_text: 'Stomachache' },
    { item_id: 3, item_text: 'Fever' },
    { item_id: 4, item_text: 'Cold' },
  ];
  medicine: any = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.diseasesGroup);
    this.medicine = this.getMedicines(this.diseasesGroup.value.diseases);
    this.selectedDiseases.add(item);
  }

  meds = [
    { item_id: 1, item_text: 'Paracetamol0', disease_id: 2 },
    { item_id: 2, item_text: 'Paracetamol1', disease_id: 2 },
    { item_id: 3, item_text: 'Paracetamol2', disease_id: 2 },
    { item_id: 4, item_text: 'Paracetamol3', disease_id: 3 },
    { item_id: 5, item_text: 'Paracetamol4', disease_id: 4 },
    { item_id: 6, item_text: 'Paracetamol5', disease_id: 4 },
    { item_id: 7, item_text: 'Paracetamol6', disease_id: 1 },
    { item_id: 8, item_text: 'Paracetamol7', disease_id: 1 },
    { item_id: 9, item_text: 'Paracetamol8', disease_id: 1 },
  ];

  getMedicines(diseases: any) {
    return this.meds.filter((medicine) => {
      return diseases.includes(medicine.disease_id);
    });
  }

  public diseasesGroup: FormGroup;
  public medicineGroup: FormGroup;
  constructor(private fb: FormBuilder, private _cdr: ChangeDetectorRef) {
    this.medicineGroup = this.fb.group(
      {
        medicinename: [null],
        dosage: [''],
        days: [''],
        meal: [''],
      }
    )

    this.diseasesGroup = this.fb.group(
      {
        exp: [''],
        mail: [''],
        diseases: [null],
      }
    )
  }

  ngOnInit(): void {
  }
  selectedMedicines: any = [];
  selectedDiseases: any = new Set();
  public onAdd() {
    // console.log(this.diseasesGroup.value.diseases);
    // console.log(this.medicineGroup.value.medicinename);
    // this.tableData.push(this.diseasesGroup.value.diseases)
    // console.log(this.tableData[0]);
    // this.selectedDiseases = new Set();
    this.diseasesGroup.value.diseases.forEach((disease: number) => {
      this.selectedDiseases.add(this.diseases.find((d) => d.item_id === disease));
    });

    let m = this.selectedMedicines.find((med: any) => {
      return this.medicineGroup.value.medicinename === med.id;
    });
    if (!m) {
      let selectedMed = this.meds.find((med: any) => {
        return med.item_id === this.medicineGroup.value.medicinename;
      });
      console.log(selectedMed);
      let dddd = this.diseases.find((val) => val.item_id === selectedMed?.disease_id);
      let newM = {
        name: selectedMed?.item_text,
        id: selectedMed?.item_id,
        dosage: this.medicineGroup.value.dosage,
        days: this.medicineGroup.value.days,
        meal: this.medicineGroup.value.meal
      };
      let tData = this.tableData.find((tdata: any) => tdata.disease === dddd?.item_text);
      tData.medicine.push(newM);
      this.selectedMedicines.push(newM);
    } else {
      m;
    }
    this.selectedDiseases.forEach((disease: any) => {
      // console.log(disease);
      this.tableData.push({ disease: disease.item_text, medicine: [] });
    })

    console.log('meds', this.selectedMedicines);
    console.log('disease', this.selectedDiseases);
    console.log(this.tableData);
    this._cdr.markForCheck();
  }

  tableData: any = [
    {
      "disease": 'fever',
      "medicine": [
        {
          'name': 'para',
          'dosage': 50,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'alpha',
          'dosage': 70,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'beta',
          'dosage': 1000,
          'days': 1,
          'meal': 'after'
        },
      ]
    },
    {
      "disease": 'headache',
      "medicine": [
        {
          'name': 'para',
          'dosage': 50,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'alpha',
          'dosage': 70,
          'days': 3,
          'meal': 'after'
        },
        {
          'name': 'beta',
          'dosage': 1000,
          'days': 1,
          'meal': 'after'
        },
      ]
    }
  ]
}
