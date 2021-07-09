import React, { ChangeEvent } from "react"

interface IMovieSearchProps{
    PlaceHolder?:string,
    OnSearchChange?:(event:ChangeEvent<HTMLInputElement>)=>void
}

export const MovieSearch=(props:IMovieSearchProps):JSX.Element=>{
    return (
        <React.Fragment>
            <div className="mt-3 alert alert-success">
                <input type="search" 
                    placeholder={props.PlaceHolder} 
                    className="form-control" 
                    name="search"
                    onChange={props.OnSearchChange}
                    >
                </input>
            </div>
            
        </React.Fragment>
    )
}