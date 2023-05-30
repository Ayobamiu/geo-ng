export type StateCodes =
  | "FC"
  | "AB"
  | "AD"
  | "AK"
  | "AN"
  | "BA"
  | "BY"
  | "BE"
  | "BO"
  | "CR"
  | "DE"
  | "EB"
  | "ED"
  | "EK"
  | "EN"
  | "GO"
  | "IM"
  | "JI"
  | "KD"
  | "KN"
  | "KT"
  | "KE"
  | "KO"
  | "KW"
  | "LA"
  | "NA"
  | "NI"
  | "OG"
  | "ON"
  | "OS"
  | "OY"
  | "PL"
  | "RI"
  | "SO"
  | "TA"
  | "YO"
  | "ZA";

export interface NigeriaState {
  code: StateCodes;
  name: string;
  lgas: string[];
  subs: { [area: string]: string[] };
}
export function getLGAs(stateCode: StateCodes): string[];
export function getLgaSubAreas(stateCode: StateCodes, lga: string): string[];
export function getNigeriaStates(): Omit<NigeriaState, "subs">[];
