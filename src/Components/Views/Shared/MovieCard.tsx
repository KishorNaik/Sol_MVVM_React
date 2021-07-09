import React from "react";
import { MovieModel } from "../../Models/MovieModel";

interface IMovieCardProps{
    MovieData?:MovieModel
}

export const MovieCard=(props:IMovieCardProps):JSX.Element=>{
        return (
            <React.Fragment>
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
                    <div className="card m-3">
                        <img className='card-img-top' src={props.MovieData?.URL} alt={props.MovieData?.Title}></img>
                        <div style={{backgroundColor:"black",height:"40px"}}>
                            <h5 className="card-title" style={
                                    {
                                        color:"white", 
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                {props.MovieData?.Title}
                            </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                {props.MovieData?.Details}
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )   
}