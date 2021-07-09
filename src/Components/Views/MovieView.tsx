import React from "react";
import { MovieModel } from "../Models/MovieModel";
import { MovieData } from "../Services/MovieService";
import MovieViewModel from "../ViewModels/MovieViewModels";
import {MovieCardList} from "./Shared/MovieCardList"
import {MovieSearch} from "./Shared/MovieSearch";
import {NoRecordFoundAlert} from "./Shared/NoRecordFoundAlert";


export default class MovieView extends MovieViewModel{

    public render():JSX.Element{
       
        let template:JSX.Element;

        if(this.state.MovieList!=null && this.state.MovieList?.length>=1){
            template= <MovieCardList MovieList={this.state.MovieList}></MovieCardList>
        }
        else
        {
            template=<NoRecordFoundAlert></NoRecordFoundAlert>
        }
        
        return (
        
            <React.Fragment>
               <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <MovieSearch 
                            PlaceHolder="Search Movie...." 
                            OnSearchChange={this.SearchFilterInputChangeEventHandler}></MovieSearch>
                        </div>
                    </div>
                    <div className="row">
                        {template}
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="alert alert-info">
                                <div>
                                    I am not a UI designer, sorry for the BAD UI design. I am a Software Architect and i have showed you how to use MVVM pattern in React.js.
                                </div>
                                <div>
                                    Take inspiration from Blazor MVVM
                                </div>
                            </div>
                        </div>
                       
                    </div>
               </div>
            </React.Fragment>
        )
    }
}