const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
const serviceAccount = require('./hackerwolf-82dbc-firebase-adminsdk-dvoqv-367deb5e8c'); // Replace with your service account file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to assign an "admin" role to a user
const assignAdminRole = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`Admin role assigned to user: ${uid}`);
  } catch (error) {
    console.error('Error assigning admin role:', error);
  }
};

// Replace with the UID of the user you want to make an admin
const uid = 'n5rBLMOc9aeISquvATWXBeam47z2';
assignAdminRole(uid);
