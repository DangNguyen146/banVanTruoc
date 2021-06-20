const sateDefault = {
  dangSachVanDangDat: [],
};
const datHangReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "DAT_HANG": {
      let dangSachHangUpDate = [...state.dangSachVanDangDat];
      let index = dangSachHangUpDate.findIndex(
        (van) => van.maVan === action.van.maVan
      );
      if (index !== -1) {
        state.dangSachVanDangDat[index].soLuong++;
      } else {
        dangSachHangUpDate.push(action.van);
      }
      //cập nhật lại state
      state.dangSachVanDangDat = dangSachHangUpDate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default datHangReducer;
