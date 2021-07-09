import React from "react";
import { MovieModel } from "../../Models/MovieModel";
import {MovieCard} from "./MovieCard";

interface IMovieCardListProps{
    MovieList?:MovieModel[]|undefined
}

export const MovieCardList=(props:IMovieCardListProps):JSX.Element=>{
    return (
        <React.Fragment>
            {props.MovieList?.map((element:MovieModel | undefined)=>{
                //console.log(element);
                return (
                    <MovieCard MovieData={element} key={element?.URL}></MovieCard>
                )
            })}
            
        </React.Fragment>
    )
}