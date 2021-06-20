import { DAT_HANG } from "./constant";
export const DatGeAction = (hang) => {
  return {
    type: DAT_HANG,
    hang,
  };
};
