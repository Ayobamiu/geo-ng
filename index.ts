import { areas } from "./functions/nigeria-states";
import { StateCodes, NigeriaState } from "./@types";

const getNigeriaStates = (): Omit<NigeriaState, "subs">[] => {
  return areas.map(({ subs, ...state }) => state);
};

const getLGAs = (stateCode: StateCodes): string[] => {
  const state = areas.filter((state) => state.code === stateCode);
  return state.length > 0 ? state[0].lgas : [];
};

// const getLgaSubAreas = (stateCode: StateCodes, lga: string): string[] => {
//   const state = areas.filter((state) => state.code === stateCode);
//   const subAreas = state.length > 0 ? state[0]?.subs[lga] : [];
//   return subAreas;
// };

export { getNigeriaStates, getLGAs, StateCodes, NigeriaState };
