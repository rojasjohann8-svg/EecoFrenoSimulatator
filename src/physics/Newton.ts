// =========================================
// EcoFreno Simulator
// Motor Físico - Segunda Ley de Newton
// =========================================

/**
 * Calcula la fuerza aplicada.
 * Fórmula:
 * F = m × a
 */

export function calcularFuerza(
  masa: number,
  aceleracion: number
): number {

  return masa * aceleracion;

}

/**
 * Calcula la aceleración.
 * Fórmula:
 * a = F / m
 */

export function calcularAceleracion(
  fuerza: number,
  masa: number
): number {

  return fuerza / masa;

}