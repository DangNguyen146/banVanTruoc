import { DAT_HANG } from "./constant";

const sateDefault = {
  dangSachGheDangDat: [],
};
const DatHangReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "DAT_HANG": {
      let dangSachHangUpDate = [...state.dangSachHang];
      // let index = dangSachHangUpDate.findIndex(
      //   (hang) => hang.maHang === action.hang.maHang
      // );
      // if (index !== -1) {
      //   dangSachHangUpDate.splice(index, 1);
      // } else {
      //   dangSachHangUpDate.push(action.ghe);
      // }
      //cập nhật lại state
      state.dangSachGheDangDat = dangSachHangUpDate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default DatHangReducer;
