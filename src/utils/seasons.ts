/**
 * Berechnet das Ostersonntag-Datum für ein gegebenes Jahr
 * Verwendet die Gaußsche Osterformel
 */
export function getEasterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-basiert
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  
  return new Date(year, month, day);
}

/**
 * Prüft, ob das aktuelle Datum in der Osterzeit liegt
 * Osterzeit: 1 Woche vor bis 1 Woche nach Ostersonntag
 */
export function isEasterSeason(): boolean {
  const now = new Date();
  const year = now.getFullYear();
  const easter = getEasterSunday(year);
  
  // 7 Tage vor und nach Ostern
  const start = new Date(easter);
  start.setDate(easter.getDate() - 7);
  
  const end = new Date(easter);
  end.setDate(easter.getDate() + 7);
  
  // Nur Datum vergleichen, nicht Zeit
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  
  return today >= startDate && today <= endDate;
}

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
 * Neujahrszeit: 1. Januar (Hufeisen)
 */
export function isNewYearSeason(): boolean {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();
  
  // Nur am 1. Januar
  return month === 0 && day === 1;
}

/**
 * Prüft, ob das aktuelle Datum in der Feuerwerkszeit liegt
 * Feuerwerkszeit: 31. Dezember und 1. Januar
 */
export function isFireworksSeason(): boolean {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();
  
  // 31. Dezember ODER 1. Januar
  return (month === 11 && day === 31) || (month === 0 && day === 1);
}

export type SeasonalOrnament = 'christmas' | 'newyear' | 'easter' | null;

/**
 * Gibt zurück, welches saisonale Ornament angezeigt werden soll
 */
export function getSeasonalOrnament(): SeasonalOrnament {
  if (isChristmasSeason()) return 'christmas';
  if (isNewYearSeason()) return 'newyear';
  if (isEasterSeason()) return 'easter';
  return null;
}
