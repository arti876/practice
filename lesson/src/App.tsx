// import { useState } from "react";

// export function App() {
//   const [isActive, setIsActive] = useState(false);
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <div className={isActive && "dark"}>
//         <button className="btn" onClick={() => setIsActive(!isActive)}>
//           dark
//         </button>
//       </div>
//       <input
//         type="text"
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//       />
//     </>
//   );
// }

// <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>

//   const [form, setForm] = useState({
//     name: '',
//     hasError: false,
//     reason: 'help',
//   })

//     function handleNameChange(event) {
//     setForm((prev) => ({
//       ...prev,
//       name: event.target.value,
//       hasError: event.target.value.trim().length === 0,
//     }))
//   }


export default function App() {

  return (
    <>
    </>
  );
}


// import axios from "axios";
    
// async function getRandomUsers() {
//   try {
//     const data = await axios.get("/api/users/random_user?size=3");
//     return data;
//   } catch(err) {
//     console.log("error: ", err);
//   }
// }