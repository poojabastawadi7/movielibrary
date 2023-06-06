import axios from "axios";
export const getAllUsers = async () => {
  const res = await axios.get("/user").catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const data = await res.data;
  return data;
  
};

export const getAllMovies = async () => {
    const res = await axios.get("/movie").catch((err) => console.log(err));

    if (res.status !== 200) {
      return console.log("No Data");
    }
  
    const data = await res.data;
    return data;
    
  };
  
  export const sendUserAuthRequest = async (data, signup) => {
    const res = await axios
      .post(`/user/${signup ? "signup" : "login"}`,
      {
        name: signup ? data.name : "",
        email: data.email,
        password: data.password,
      })
      
      .catch((err) => console.log(err));
  
    if (res.status !== 200 && res.status !== 201) {
      return console.log("Unexpected Error Occurred");
    }
  
    const resData = await res.data;
    return resData;
  };
  
  export const sendAdminAuthRequest = async (data) => {
    const res = await axios
      .post("/admin/login", {
        email: data.email,
        password: data.password,
      })
      .catch((err) => console.log(err));
  
    if (res.status !== 200) {
      return console.log("Unexpected Error");
    }
  
    const resData = await res.data;
    return resData;
  };

  export const getMovieDetails = async (id) => {
    const res= await axios.get(`/movie/${id}`).catch((err) => console.log(err));

    if (res.status !== 200){
      return console.log("Unexpected error");
    }

    const resData = await res.data;
    return resData;
  }

  export const addMovie = async (data) => {
    const res = await axios.post("/movie",
    
    {
      title: data.title,
      description: data.description,
      releaseDate: data.releaseDate,
      posterUrl: data.posterUrl,
      actors: data.actors,
      admin: localStorage.getItem("adminId"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
        
        ).catch((err) => console.log(err));

        if (res.status !== 201) {
          return console.log("Unexpected Error Occcured"); 
        }

        const resData = await res.data;
        return resData;
  }

  export const getUserDetails = async () => {
    const id = localStorage.getItem("userId");
    
    const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));

    if (res.status !== 200){
      return console.log("Unexpected error");
    }

    const resData = await res.data;
    return resData;
  }


// export const getAllUsers = async (UserData) => {
//     const res = await fetch('https://localhost:5000/moviesdb', {
//         method: 'GET',
//         body: JSON.stringify({
//             users: UserData 
            
//         })
//     }
//     );  
//         if (res.status !== 200){
//             return console.log("No Data");
//         }
        
//         const data = await res.data;
//         return data;
// };
// `http://localhost:5000/users/${signup ? "signup" : "login"}`

// export const sendUserAuthRequest = async (data, signup) => {
//       const res = await fetch("https://localhost:5000/users", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "<origin>",
//             "Access-Control-Allow-Methods": ["POST", "GET"] },
//         body: JSON.stringify({
//             name: signup ?  data.name : "",
//             email: data.email,
//             password: data.password 
            
//         })
//     }).catch((err) => console.log(err))
    
    
//     if(res.status !== 200 && res.status !== 201){
//     //     console.log("Unexpected Error Occured");
//     // };
//     const resData = await res.data; 
//     return resData;

// };
