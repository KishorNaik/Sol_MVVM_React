import {ChangeEvent, Component} from "react";
import { MovieModel } from "../Models/MovieModel";
import {MovieData,SearchMovie} from "../Services/MovieService";


interface IMovieProps{
    
}

interface IMovieState{
    MovieList?:MovieModel[]|undefined,
    SearchFilter?:string|undefined
}

export default abstract class MovieViewModel extends Component<IMovieProps,IMovieState>{

    constructor(props:IMovieProps){
        super(props);

        this.state={
            MovieList:[],
            SearchFilter:''
        };
    }

    public async componentDidMount(){
       
        this.setState({
            MovieList:await MovieData()
        });
    }

    private SearchFilterStateHasChange=(sercheFilterValue:string|undefined,stateUpdateChanged:()=>void):void=>{
        this.setState({ SearchFilter:sercheFilterValue},()=> stateUpdateChanged());
    }

    private MovieListStateHasChange=(movieList:MovieModel[]|undefined):void=>{
        this.setState({
            MovieList:movieList
        });
    }

    protected SearchFilterInputChangeEventHandler=(event:ChangeEvent<HTMLInputElement>):void=>{
       this.SearchFilterStateHasChange(
            event.target.value,
            async ()=>{

                // Filter Movie and according to that Movie List State Change
                console.log("After State Update: ",event.target.value);
                let searchFilterValue=event.target.value;

                let movieList=await MovieData();
                

                let filterMovieList=await SearchMovie(searchFilterValue,movieList);

                console.log("Movie List:",filterMovieList);
                if(filterMovieList===undefined){
                    this.MovieListStateHasChange(await MovieData());
                }
                else
                {
                    this.MovieListStateHasChange(filterMovieList!);
                }
                console.log("Movie List State 1:",this.state.MovieList);
            });
    }

    

    

    

    
}