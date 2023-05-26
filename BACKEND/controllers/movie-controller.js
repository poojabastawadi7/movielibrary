import jwt from "jsonwebtoken";
import Movie from "../models/Movie";

export const addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];  
    // why split is? first ele = Bearer sec is token

    if(!extractedToken && extractedToken.trim() === ""){
        return res.status(404).json({ message: "Token Not Found" });
    }

    console.log(extractedToken);
    let adminId ;

    //verify token of admin

    jwt.verify(extractedToken, process.env.SECRET_KEY,(err, decrypted) => {
        if(err) {
            return res.status(400).json({ message : '${err.message}'})
        }
        else {
            adminId = decrypted.id ;
            return;
        }
    });

    //create new movie
        const { title, text, image, admin} = req.body;
        if(!title && title.trim() === "" &&
            !image && image.trim() === ""){
                return res.status(422).json({ message: "Invalid inputs"});
            }

        let movie;
        try{
            movie = new Movie({title, text, image, admin:adminId});
            movie = await movie.save();
        } catch(err) {
            return console.log(err);
        }
        
        if(!movie) {
            return res.status(500).json({ message: "Request failed"});
        }

        return res.status(201).json({ movie });
};

export const getAllMovies = async (req, res, next) => {
    let movies;

    try {
        movies = await Movie.find();

    } catch(err) {
        return console.log(err);
    }

    if(!movies){
        return res.status(500).json({ message : "Request failed"});

    }

    return res.status(200).json({ movies });
}

export const getMovieById = async (req, res, next) => {
    const id = req.params.id;
    let movie;

    try {
        movie = await Movie.findById(id)
    }catch(err) {
        return console.log(err);
    }

    if(!movie) {
        return res.status(404).json({ message: "Invalid movie ID"})
    }

    return res.status(200).json({movie})
}
