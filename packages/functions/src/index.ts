import * as functions from "firebase-functions";
import { ProductsPlocFakerProvider } from "@iamlazy.dev/core/product-database";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const productsPloc = ProductsPlocFakerProvider();

export const testProductDatabaseProducts = functions.https.onRequest((req, res) => {
  productsPloc.find('name', '')
    .then(() => {
      res.json(productsPloc.state.products)
    })
})
