import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('pruebas en 07-deses-arr', () => {
  test('debe retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo();
    expect(numeros).toEqual(expect.any(Number));
    expect(letras).toEqual(expect.any(String));
  });
});
