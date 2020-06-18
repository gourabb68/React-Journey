//takes all of the named export from firebase and dump 
//that in firebase veriable recomended by firebase
import * as firebase from 'firebase';
//initialize firebase 
const firebaseConfig = {
    apiKey: "AIzaSyB8L554zqP2u5Tr4ZF-jxWjSHHiI1pkbvo",
    authDomain: "expensify-b250d.firebaseapp.com",
    databaseURL: "https://expensify-b250d.firebaseio.com",
    projectId: "expensify-b250d",
    storageBucket: "expensify-b250d.appspot.com",
    messagingSenderId: "1074186527382",
    appId: "1:1074186527382:web:f05d3293fd515338c758b7",
    measurementId: "G-8XG6G0MPPR"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  export {firebase,database as default}
// //   //testing connection
// //   //geting ref of root of data base
// //   database.ref().set({
// //       "name": 'Gourab Banerjee',
// //       "age": 23,
// //       isSingle: false,
// //       location: {
// //           "city": "Kolkata",
// //           country: 'India'
// //       }
// //   }).then(()=>{
// //       //run when syncing is successfull
// //       console.log('Sync successful')
// //   }).catch((err)=>{
// //       console.log('This failed ',err)
// //   })

// // // //   database.ref().set('This is my object')
// // // // lets update age now instead of referencing root
// // // //we refer age..
// // //   database.ref('age').set(25);
// // // //update city..
// // //   database.ref('location/city').set('gtroad1');
// // const removeData =  database.ref('isSingle');
// // removeData.remove() 
// //   .then(()=> {
// //     console.log("Remove succeeded.")
// //   })
// //   .catch((error) =>{
// //     console.log("Remove failed: " + error.message)
// //   });

// // //   //this is how also we can remove data
// // //   //by updating to null
// // //   database.ref('isSingle').set(null);

// // //updating
// // database.ref().update({
// //     name: "poto",
// //     age: 29,
// //     isSingle: null, //deleting
// //     height: 190,
// //     "location/city": 'hooghly'//updating city

// // })

// // //fetching data
// // database.ref()
// //   .once('value')// return promise
// //   .then((snapshot)=>{
// //      const val =snapshot.val();
// //      console.log(val )
// //   })
// //   .catch((err)=>{
// //    console.log('error : ' +err)
// //   })
// //   //for particular property say location
// //   database.ref('location')
// //   .once('value')//value means all data that return promise
// //   .then((snapshot)=>{
// //      const val =snapshot.val();
// //      console.log(val )
// //   })
// //   .catch((err)=>{
// //    console.log('error : ' +err)
// //   })

// //   //listen on data when ever changes server will notify u
// //   database.ref().on('value', (snapshot)=>{
// //       console.log(snapshot.val());
// //   })

// //   //unsubscribe the reference
// //   database.ref().off


// //Firebase with array
// //lets try to set array


// const notes =[{
//     id: '12',
//     title: 'First Note',
//     body: 'this is my note'

// },{
//     id: '13',
//     title: 'Second Note',
//     body: 'this is my note'
// }];

// database.ref().set(notes);
// // //firebase stored it like this
// // const firebaseNotes ={
// //     notes: {
// //         id123: {
// //             title: 'First note',
// //             body: 'this is my note'
// //         },
// //         id124: {
// //             title: 'Second note',
// //             body: 'this is my note'
// //         }
// //     }
// // }

// //pushing data in the array
// database.ref('notes').push(
//       {
//                     title: 'third note',
//                     body: 'this is my note'
//                 }
// )

// //accesing a value from an arrayand update
// database.ref('notes/-M9vpe-4TBJSrRIAoICJ').update({
//     body: 'apple'
// })
// //lets fetch the data as an array from firebase
// database.ref('notes')
//    .once('value')
//    .then((snapshot)=>{
//        const note = [];
//        snapshot.forEach((childNote)=>{
//            note.push({
//                id: childNote.key,
//                ...childNote.val()
//            })
//        });
//        console.log(note)
//    })

//    //subscription on note everytime notes changes
//    //we will get brand new array
//    database.ref('notes').on('value',(snapshot)=>{
//     const note = [];
//     snapshot.forEach((childNote)=>{
//         note.push({
//             id: childNote.key,
//             ...childNote.val()
//         })
//     });
//     console.log(note)
//    })

//    //Subscription on note based on removing any child note
//    //when ever any child node remove we this callback will get call
//    database.ref('notes').on('child_removed',(snapshot)=>{
//        console.log(snapshot.key,snapshot.val())
//    })
//    //Subscription on note based on chaning any child note
//    //when ever any child node change we this callback will get call
//    database.ref('notes').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
//    //Subscription on note based on added any child note
//    //when ever any child node add we this callback will get call
//    database.ref('notes').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })