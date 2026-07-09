// =========================================
// EcoFreno Simulator
// Frenado
// =========================================

/*
 * Distancia de frenado
 * d = v² / (2a)
 */

export function calcularDistancia(
  velocidad: number,
  desaceleracion: number
): number {

  const v = velocidad / 3.6;

  return (v * v) / (2 * desaceleracion);

}

/**
 * Tiempo de frenado
 * t = v / a
 */

export function calcularTiempo(
  velocidad: number,
  desaceleracion: number
): number {

  const v = velocidad / 3.6;

  return v / desaceleracion;

}