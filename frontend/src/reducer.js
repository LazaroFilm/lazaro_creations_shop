export default function reducer(state, action) {
  switch (action.type) {
    case "cart-increment":
      return { cartQty: state.cartQty + 1 };
    case "cart-decrement":
      if (state.cartQty > 0) {
        return { cartQty: state.cartQty - 1 };
      } else {
        return { ...state };
      }
    default:
      throw new Error();
  }
}
