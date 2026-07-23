export interface DaySchedule {
  day: number; // JS Date#getDay(): 0 = Sonntag ... 6 = Samstag
  label: string;
  open?: string; // "HH:MM"
  close?: string; // "HH:MM"
  closed?: boolean;
}

export const openingHours: DaySchedule[] = [
  { day: 1, label: "Montag", closed: true },
  { day: 2, label: "Dienstag", open: "08:00", close: "18:00" },
  { day: 3, label: "Mittwoch", open: "08:00", close: "18:00" },
  { day: 4, label: "Donnerstag", open: "08:00", close: "18:00" },
  { day: 5, label: "Freitag", open: "08:00", close: "18:00" },
  { day: 6, label: "Samstag", open: "08:00", close: "18:00" },
  { day: 0, label: "Sonntag", open: "08:00", close: "18:00" },
];

export const address = {
  street: "Musterstraße 1",
  zipCity: "12345 Musterstadt",
  phone: "+49 30 1234567",
  email: "hallo@detlillehus.de",
};
