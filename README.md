## Notes

#### Description / Summary

#### Current React Version of this project

```
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
```

#### Architecture of the Project

./src

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜hero-bcg-2.jpeg
 ┃ ┣ 📜hero-bcg.jpeg
 ┃ ┗ 📜logo.svg
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜AddToCart.tsx
 ┃ ┃ ┣ 📜AmountButtons.tsx
 ┃ ┃ ┣ 📜CartButtons.tsx
 ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┣ 📜GridView.tsx
 ┃ ┃ ┣ 📜Hero.tsx
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┣ 📜PageHero.tsx
 ┃ ┃ ┣ 📜ProductImages.tsx
 ┃ ┃ ┗ 📜Stars.tsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📜CartColumns.tsx
 ┃ ┃ ┣ 📜CartItem.tsx
 ┃ ┃ ┣ 📜CartTotals.tsx
 ┃ ┃ ┣ 📜CheckoutForm.tsx
 ┃ ┃ ┣ 📜Contact.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜ListView.tsx
 ┃ ┃ ┣ 📜Product.tsx
 ┃ ┃ ┗ 📜Services.tsx
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📜CartContent.tsx
 ┃ ┃ ┣ 📜FeaturedProducts.tsx
 ┃ ┃ ┣ 📜Filter.tsx
 ┃ ┃ ┣ 📜Navbar.tsx
 ┃ ┃ ┣ 📜ProductList.tsx
 ┃ ┃ ┣ 📜Sidebar.tsx
 ┃ ┃ ┗ 📜Sort.tsx
 ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜StripeCheckout.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂context
 ┃ ┣ 📜cart_context.tsx
 ┃ ┣ 📜filter_context.tsx
 ┃ ┣ 📜products_context.tsx
 ┃ ┗ 📜user_context.tsx
 ┣ 📂pages
 ┃ ┣ 📜About.tsx
 ┃ ┣ 📜AuthWrapper.tsx
 ┃ ┣ 📜Cart.tsx
 ┃ ┣ 📜Checkout.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜PrivateRoute.tsx
 ┃ ┣ 📜Products.tsx
 ┃ ┗ 📜SingleProduct.tsx
 ┣ 📂reducers
 ┃ ┣ 📜cart_reducer.ts
 ┃ ┣ 📜filter_reducer.ts
 ┃ ┗ 📜products_reducer.ts
 ┣ 📂types
 ┃ ┣ 📜action-types.ts
 ┃ ┗ 📜data-types.ts
 ┣ 📂utils
 ┃ ┣ 📜constants.tsx
 ┃ ┗ 📜helpers.ts
 ┣ 📜app.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```
