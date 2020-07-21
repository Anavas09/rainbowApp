const initialState = {};
//(state = palettes, action )
const reducer = (state = initialState, { type, newPalette, paletteId }) => {
  switch (type) {
    case "ADD":
      return [...state, newPalette];

    case "REMOVE":
      const newPalettes = state.filter(palette => palette.id !== paletteId);
      return newPalettes;
    default:
      return state;
  }
};

export default reducer;