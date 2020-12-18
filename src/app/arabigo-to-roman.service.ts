import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArabigoToRomanService {
  totalRomano: string[] = [];

  constructor() { }

  arabigo_to_roman = (numeroDecimal: number):string => {
    if (numeroDecimal > 1000) throw 'Este sistema de conversión no acepta numeros mayores a 1000';
    var numeros = [1, 5, 10, 50, 100, 500, 1000],
      romanos = ["I", "V", "X", "L", "C", "D", "M"],
      numeroActual,
      letra,
      valor,
      posicion,
      aux;
    this.totalRomano = [];
    for (var i = 6; (numeroActual = numeros[i]), (letra = romanos[i]); i--) {
      
      if (numeroDecimal >= numeroActual) {
        
        var piso = Math.floor(numeroDecimal / numeroActual);
  
        
        numeroDecimal -= piso * numeroActual;
  
        if (piso < 4) {        
          while (piso--) {
            this.totalRomano.push(letra);
          }
        } else {
          valor = this.totalRomano.pop();
          posicion = (valor ? romanos.indexOf(valor) : i) + 1;
          aux = letra + (romanos[posicion] || "M");
          this.totalRomano.push(aux);
        }
      } else {
        this.totalRomano.push("");
      }
    }
  
    return this.totalRomano.join("");
  };


}
