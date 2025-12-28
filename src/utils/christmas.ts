/**
 * Prüft, ob das aktuelle Datum in der Weihnachtszeit liegt
 * Weihnachtszeit: 1. Dezember bis 26. Dezember
 */
export function isChristmasSeason(): boolean {
  const now = new Date();
  const month = now.getMonth(); // 0-11 (Dezember = 11)
  const day = now.getDate();
  
  // Dezember (month === 11) und Tag zwischen 1 und 26
  return month === 11 && day >= 1 && day <= 26;
}
