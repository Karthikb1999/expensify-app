import * as firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()


export { firebase, database as default }


// database.ref('expenses')
//     .on("value", (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 ...childSnapshot.val(),
//                 id: childSnapshot.key
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses')
//     .on("child_removed", (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })


// database.ref('expenses')
//     .on("child_changed", (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })


// database.ref('expenses')
//     .on("child_added", (snapshot) => {
//         console.log("added", snapshot.key, snapshot.val())
//     })

// database.ref('expenses').push({
//     description: 'helicopter',
//     amount: 10000,
//     note: '',
//     createdAt: 0
// })
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const { name, job: { title }, job: { company } } = snapshot.val()
//     console.log(`${name} is working as ${title} in ${company}.`)
// }, (e) => {
//     console.log("Error", e)
// })


// database.ref('job')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//         console.log("Error", e)
//     })


// database.ref().set({
//     name: 'karthik',
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: 'software dev',
//         company: 'google'
//     },
//     isSingle: true,
//     location: {
//         city: "erode",
//         state: "tamil nadu"
//     }
// }).then(() => {
//     console.log("Data is saved")
// }).catch((e) => {
//     console.log("There is an error.", e)
// })


// firebase.database().ref().remove().then(() => {
//     console.log("Removed")
// }).catch((e) => {
//     console.log("Interrupted", e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'bangalore'
// })