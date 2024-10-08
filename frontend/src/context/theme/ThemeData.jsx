import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeData = (props) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeData;

/////////////////////////////////Original Data///////////////////////////
// import React, { useState } from "react";
// import UserContext from "./UserContext";
// const UserData = (props) => {
//   const [user, setUser] = useState();
//   const [cart, setCart] = useState();

//   const deleteCart = async (notex) => {
//     const url = `https://react-ecommerce-five-puce.vercel.app/api/cart`;
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     updateCart();
//   };

//   const userLogin = async (userx) => {
//     const url = `https://react-ecommerce-five-puce.vercel.app/api/cart/${userx._id}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     setUser(userx);
//     setCart(json);
//   };

//   const updateCart = async () => {
//     const url = `https://react-ecommerce-five-puce.vercel.app/api/cart/${user._id}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     setCart(json);
//   };

//   const deleteSingleCart = async (id) => {
//     const url = `https://react-ecommerce-five-puce.vercel.app/api/cart/${id}`;
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     updateCart();
//   };

//   const addToCart = async ({
//     title,
//     isnew,
//     sale,
//     price,
//     oldprice,
//     image,
//     category,
//     quantity,
//   }) => {
//     const url = "https://react-ecommerce-five-puce.vercel.app/api/cart";
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         isnew,
//         sale,
//         price,
//         oldprice,
//         image,
//         category,
//         quantity,
//         user: user._id,
//       }),
//     });
//     const json = await response.json();
//     updateCart();
//   };

//   return (
//     <UserContext.Provider
//       value={{ addToCart, cart, userLogin, user, deleteSingleCart, deleteCart }}
//     >
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserData;

//////////////////////////////////Reference Data////////////////////////
//////////////////////////////////
////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
{
  /* <UserContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchAllNote }}
    >
      {props.children}
    </UserContext.Provider> */
}
/////////////////////////////////////////////

// const notesInitial = [{ name: farrukh }, { name: aliza }];
// const [notes, setNotes] = useState(notesInitial);

// //fetch all notes
// const fetchAllNote = async (noteq) => {
//   const url = "http://localhost:5000/api/notes/fetchallnotes";
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//   });
//   const json = await response.json();
//   setNotes(json);
// };
// //Add a note
// const addNote = async (noteq) => {
//   const url = "http://localhost:5000/api/notes/createnotes";
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//     body: JSON.stringify({
//       title: noteq.title,
//       description: noteq.description,
//       tag: noteq.tag,
//     }),
//   });
//   fetchAllNote();
//   //const note={
//   //   name:"" only for understanding
//   // }
//   // setNotes(notes.concat(note));
// };

// const deleteNote = async (notex) => {
//   const url = `http://localhost:5000/api/notes/deletenote/${notex}`;
//   const response = await fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//   });
//   const json = await response.json();
//   // console.log("delete is called " + notex);
//   const newNote = notes.filter((note) => note._id !== notex);
//   fetchAllNote();
//   // setNotes(newNote);
//   // console.log(notes);

//   //setNotes(json);
// };
// const updateNote = async (id, title, description, tag) => {
//   const url = `http://localhost:5000/api/notes/updatenote/${id}`;
//   const response = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//     body: JSON.stringify({ title, description, tag }),
//   });
//   const json = response.json();
//   console.log(json);
//   for (let index = 0; index < notes.length; index++) {
//     const element = notes[index];
//     if (element._id === id) {
//       element.title = title;
//       element.description = description;
//       element.tag = tag;
//     }
//   }
// };
