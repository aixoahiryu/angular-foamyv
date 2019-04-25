import firebase from "firebase";
//var admin = require("firebase-admin");


var config = {
  apiKey: "AIzaSyBAeZRr9p89nb9821FANWtPHC3GxnvS0og",
  authDomain: "angular1-25780.firebaseapp.com",
  databaseURL: "https://angular1-25780.firebaseio.com",
  projectId: "angular1-25780",
  storageBucket: "angular1-25780.appspot.com",
  messagingSenderId: "461407356175"
};

var adminConfig = {
  "type": "service_account",
  "project_id": "angular1-25780",
  "private_key_id": "aeef940c3a7336439adfbe39f104fe01f43cfc26",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEtPzPpucTBPuA\nntSbGNaJxJbuLuxHZ3wl1o+TH1i95F4FH2F+HboqQzqMtvVB/kTA0MBWgt7RMddm\n1MoRa4qqzipuT9GpZtFIi5lhVEd32HWY8r7bHUCbgWnPb3VNvhGP8K51ARn2jeKS\npXLuOxOzcIWz1FyIaKOlRwE9VEgdke7ESKnt6cdm+bd7gj63wGM756p+wahfcgNo\nFYg+hGAjZFnUbdDkby8JDCnO9o44T+idg878zv5Yieg6VISFrEqqcQ80i9e8X6P6\nG0Q60U9tlVRf3xPgUmDJsmqOjapakHO/veAthsnPyKWlE8W/QZTzLchXtHDN/GQb\nnSkQEhwpAgMBAAECggEAA+2cVdY+q5PQJPGnC8Dbee1V2URRHhzsLwJBpD2+Qy6G\nDSKjCwZzcwgcKXa2355BB7uzd5bN9c4Bv/E0ZtQntQEAemr4JCKkP8df5QBum+9T\n692/H3eOVHypXQXcCRUoWyBCj54Zw2Fyepy4tpax7kWrOdveDDBQwkpwdSXTedmo\n/UTVL420qLCMl26pepV9bTJeyWHFH4Ex8wEtUZDAwfO4NgXO82PgDNKd2/RwqsOe\nWhRooeY7ze+NNf0Y+WZsBcpimTaf0KdPjmWWjWZGawhLO81Fw0CIV7x5G4Osaybp\n2AUoTaBap0JRrIf90lH1s/z54yLHX+sI0jzNTzcaoQKBgQDhjT8FQus9bduL4fL5\nyMO5REWuqeD/8id3qV3Y+cGls1rP2p+gJUbHiFAAsLW1iFC8sz9fru0FTVQLIH/m\nbQlbTmNQ02WCtEobpZ5bpB3shabybgw1RCx3cl2OZkzU+tjFyXUokYlfTfyoW7wO\nNxWkoEkzPqVgZd4BzBRkm5oWUQKBgQDfQugbCDjWR7YA9hSwtqiNFC6gxrviBzhd\nDcRJdPayR6Yjk8r31dVVBzsS2pza/qwprP3UB7wuUD0fD7JLvxGp1CySyfOEjvqk\n/qMo2QuK8fak0sUdlya5afM76LlXGFqe3UuKBsKhZsJ3eNe4pQR4eeGfsAjZ/VXX\nLmdbwNI6WQKBgQCd3ayUVCguEKwvle/oYFqNW3miLIis26JAIKzs5rJg9c3D2XMM\nNcr6cS/9q7Ei48wOpy7eG6MNqPf/6blbYEnCPHVK5wsPlnygKSVTYuUG3OzilZ+5\n0IOG/ub4eiWglAoRNVXpFSQfLoh+leZj1K4zUXSqh1hcxi/C9kH3wOjyYQKBgBla\nLaU0L9AVYJOHXh4a/9TVX94d8yPdkgbvE0UMJR9lh3YuyDOQcqMvKQQhEwLDPKWW\n4VP8dOAFeItYavSzA7x3PYCFskNxQQEPcVOoIelrRIi+7mdHzLvtThOVf8ZmG5RC\nqNtJnTxawOZ0MHrlMjbEEFzjzn2CiQbgXBhNMxIxAoGAZNosgfcn74pyQ3jskEo7\n8tLxEZIwaQQgw9NF698K1LUZ8PMLVoW5N/vwIwpNFUySyjPevTof+jV8CiK3omYW\nzWiDjeK/+R4ouQ27Q5FyZ1y11vavH3u+Fd6beCBExhjAenfQ3xabHr+ZbwyAhu3H\nsKQdLjATyhxLZ8cCEbUPQ60=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ue4na@angular1-25780.iam.gserviceaccount.com",
  "client_id": "114700084941704198416",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ue4na%40angular1-25780.iam.gserviceaccount.com"
}


const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;

/*const admin = firebaseAdmin.initializeApp({
  credential: admin.credential.cert(adminConfig),
  databaseURL: 'https://angular1-25780.firebaseio.com'
});
export default admin;*/
