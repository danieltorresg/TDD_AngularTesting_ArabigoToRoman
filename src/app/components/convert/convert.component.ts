import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArabigoToRomanService } from 'src/app/arabigo-to-roman.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
})
export class ConvertComponent implements OnInit {
  converNumberForm: FormGroup;
  convertedNumber: String = 'Enter a number';

  constructor(
    private formBuilder: FormBuilder,
    private arabigoToRomanService: ArabigoToRomanService
  ) {
    this.converNumberForm = this.formBuilder.group({
      numberToConvert: [null, Validators.required],
    });
  }

  ngOnInit(): void { }

  convertNumber() {
    try {
      this.convertedNumber = this.arabigoToRomanService.arabigo_to_roman(
        this.f.numberToConvert.value
      );
      if (this.convertedNumber == 'This conversion system does not accept numbers greater than 1000') {
        throw new Error('Este sistema de conversión no acepta numeros mayores a 1000')
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
    }
    console.log('number convert with succes');
  }

  get f(): any {
    return this.converNumberForm.controls;
  }
}