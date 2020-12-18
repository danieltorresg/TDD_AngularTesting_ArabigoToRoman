import { TestBed } from '@angular/core/testing';
import { ArabigoToRomanService } from './arabigo-to-roman.service';

describe('ArabigoToRomanService', () => {
  let service: ArabigoToRomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArabigoToRomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Número 1`, () => {
    expect(service.arabigo_to_roman(1)).toEqual('I');
  });

  it(`Número 4`, () => {
    expect(service.arabigo_to_roman(4)).toEqual('IV');
  });

  it(`Número 5`, () => {
    expect(service.arabigo_to_roman(5)).toEqual('V');
  });

  it(`Número 10`, () => {
    expect(service.arabigo_to_roman(10)).toEqual('X');
  });

  it(`Número 27`, () => {
    expect(service.arabigo_to_roman(27)).toEqual('XXVII');
  });

  it(`Número 50`, () => {
    expect(service.arabigo_to_roman(50)).toEqual('L');
  });

  it(`Número 54`, () => {
    expect(service.arabigo_to_roman(54)).toEqual('LIV');
  });

  it(`Número 100`, () => {
    expect(service.arabigo_to_roman(100)).toEqual('C');
  });

  it(`Número 499`, () => {
    expect(service.arabigo_to_roman(499)).toEqual('CDXCIX');
  });

  it(`Número 500`, () => {
    expect(service.arabigo_to_roman(500)).toEqual('D');
  });

  it(`Número 1000`, () => {
    expect(service.arabigo_to_roman(1000)).toEqual('M');
  });

/*   it(`Número 1001`, () => {
    expect(service.arabigo_to_roman(1001)).toThrow(new Error('Este sistema de conversión no acepta numeros mayores a 1000'));
  }); */



});
