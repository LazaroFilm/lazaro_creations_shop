export default function reducer(state, action) {
  switch (action.type) {
    case "cart-increment":
      if (isNaN(state.cartQty)) {
        return { cartQty: 1 };
      } else {
        return { cartQty: state.cartQty + 1 };
      }
    case "cart-decrement":
      if (isNaN(state.cartQty)) {
        return { cartQty: 0 };
      } else if (state.cartQty > 0) {
        return { cartQty: state.cartQty - 1 };
      } else {
        return { ...state };
      }
    case "open-drawer":
      return { drawerState: true };
    case "close-drawer":
      return { drawerState: false };
    case "dark-mode-toggle":
      return { darkMode: !state.darkMode };
    default:
      throw new Error();
  }
}
