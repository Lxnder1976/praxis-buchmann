/**
 * Prüft, ob das aktuelle Datum in der Weihnachtszeit liegt
 * Weihnachtszeit: 1. Dezember bis 30. Dezember
 */
export function isChristmasSeason(): boolean {
  const now = new Date();
  const month = now.getMonth(); // 0-11 (Dezember = 11)
  const day = now.getDate();
  
  // Dezember (month === 11) und Tag zwischen 1 und 30
  return month === 11 && day >= 1 && day <= 30;
}

/**
 * Prüft, ob das aktuelle Datum in der Neujahrszeit liegt
 * Neujahrszeit: 31. Dezember bis 12. Januar (Hufeisen)
 */
export function isNewYearSeason(): boolean {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();
  
  // 31. Dezember ODER 1.-12. Januar
  return (month === 11 && day === 31) || (month === 0 && day <= 12);
}

/**
 * Prüft, ob das aktuelle Datum in der Feuerwerkszeit liegt
 * Feuerwerkszeit: 31. Dezember bis 2. Januar
 */
export function isFireworksSeason(): boolean {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();
  
  // 31. Dezember ODER 1.-2. Januar
  return (month === 11 && day === 31) || (month === 0 && day <= 2);
}

export type SeasonalOrnament = 'christmas' | 'newyear' | null;

/**
 * Gibt zurück, welches saisonale Ornament angezeigt werden soll
 */
export function getSeasonalOrnament(): SeasonalOrnament {
  if (isChristmasSeason()) return 'christmas';
  if (isNewYearSeason()) return 'newyear';
  return null;
}
