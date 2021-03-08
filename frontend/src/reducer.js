export default function reducer(state, action) {
  switch (action.type) {
    case "cart-increment":
      // if (isNaN(state.cartQty)) {
      //   return { ...state, cartQty: 1 };
      // } else {
      return { ...state, cartQty: state.cartQty + 1 };
    // }
    case "cart-decrement":
      // if (isNaN(state.cartQty)) {
      //   return { ...state, cartQty: 0 };
      // } else
      if (state.cartQty > 0) {
        return { ...state, cartQty: state.cartQty - 1 };
      } else {
        return { ...state };
      }
    case "open-drawer":
      return { ...state, drawerState: true };
    case "close-drawer":
      return { ...state, drawerState: false };
    case "dark-mode-toggle":
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error();
  }
}
