import { createStore } from "redux";

const initialState = [
  {
    id: 0,
    name: "Yuva Sandeep",
    number: 9494705144,
    email: "yuva.sandeep436@gmail.com",
    address: "D.no:1-181, Hyderabad",
    query: "enter some text"
  },
  {
    id: 1,
    name: "Pavan Kumar",
    number: 7793990999,
    email: "pavankumar@gmail.com",
    address: "D.no:2-181, Hyderabad",
    query: "no data added"
  }
];

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

// const sendProfileData=(profileData)=>{
//   return(dispatch)=>{
//    const response= await fetch(
//           "https://react-project-44b7c-default-rtdb.firebaseio.com/profile.json",
//           { method: "POST", body: JSON.stringify(profile) }
//         );
//       }, [profile]);
//   };
// }
const store = createStore(profileReducer);

export default store;
