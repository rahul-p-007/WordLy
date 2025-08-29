import {
  initializeApp,
  getApps,
  getApp,
  cert,
  App,
  ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// This assumes you have a service_key.json file in the parent directory.
// The `as ServiceAccount` part is the key to resolving the error.
import serviceKey from "../service_key.json";

let app: App;

if (getApps().length === 0) {
  // The error happens because the `cert` function expects a parameter of type
  // `ServiceAccount`, but TypeScript infers a generic object type from the
  // imported JSON file.
  //
  // The fix is to assert the type of `serviceKey` to `ServiceAccount`
  // so that TypeScript knows it's the correct shape.
  app = initializeApp({
    credential: cert(serviceKey as ServiceAccount),
  });
} else {
  // If the app is already initialized, get the existing instance.
  app = getApp();
}

// Get a reference to the Firestore database service.
const adminDb = getFirestore(app);

// Export the initialized DB and App for use in other parts of your application.
export { adminDb, app as adminApp };
