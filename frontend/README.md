This is Lazar Creations' store designed by Victor Lazaro
Uses React and Material-Ui

## TODO:

- Store
  - should be more than 2 columns of items dinamically changing depending on windown size.
  - When you click on the image it takes you to the item detail page
  - Clicking on the + icon open a right hand item drawer with purchase customization options.
- Items detail page
  - ideally, page would be overlay of the store
  - Show carousel of pictures
  - dropdown for each option
  - adjust price according to options
  - switch to photo that matches the option selected
  - add to cart button with quantity
- Cart
  - items in cart are stored in Reducer or in cookie or in db??? _needs more research._
  - make the whole cart
  - should have a list of all items in the cart with the current number of each and +/- buttons on each side, unit price x total for the item.
  - list of the custom settings.
  - Total price at the bottom
  - Shipping (stripe should be able to calculate that?...)
  - international shipping
  - Taxes
  - Stripe implementation
  - Shipping address entry
  - if profile exists client info should be pre filled with option to change it.
  - add a comment section.
  - Coupon code??
- Profiles
  - create profile system
  - when user creates a profile it gets stored in the db (look for encryption for the personal info)
  - Purchase history
  - Sign in/out
- footer
  - contact info
  - terms and conditions.
  -

## TECHNOLOGIES

- React
  - Material-ui &rarr; To design the User Interface with Material design elements
  - React Router &rarr; allows to use HTML addresses to access components
  - useReducer &rarr; to hold the variables
  - useContext &rarr; to allow access of these variable accross the app
