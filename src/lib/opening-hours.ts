export interface DaySchedule {
  day: number; // JS Date#getDay(): 0 = Sonntag ... 6 = Samstag
  label: string;
  open?: string; // "HH:MM"
  close?: string; // "HH:MM"
  closed?: boolean;
}

export const openingHours: DaySchedule[] = [
  { day: 1, label: "Montag", closed: true },
  { day: 2, label: "Dienstag", closed: true },
  { day: 3, label: "Mittwoch", open: "10:00", close: "17:00" },
  { day: 4, label: "Donnerstag", open: "10:00", close: "17:00" },
  { day: 5, label: "Freitag", open: "10:00", close: "17:00" },
  { day: 6, label: "Samstag", open: "10:00", close: "13:00" },
  { day: 0, label: "Sonntag", closed: true },
];

export const address = {
  street: "Steinweg 9",
  zipCity: "34317 Habichtswald-Ehlen",
  phone: "+49 162 2857299",
};
