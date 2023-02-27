import React from 'react'
import './moviecard.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMovieContext } from '../Context/GlobalContext';
import * as actions from '../Context/ActionTypes'
const MovieControl = ({movie , type}) => {
	const MovieContext = useMovieContext()
  return (
	<div className='inner-card-controls'>
		{
			type === "watchlist" && (
				<>
				<button onClick={()=>MovieContext.MoviesDispatch({
					type : actions.ADD_MOVIE_TO_WATCHED,
					payload: movie
				})} className='ctrl-btn'>
					<VisibilityIcon/>
				</button>
				<button onClick={()=>MovieContext.MoviesDispatch({
					type : actions.REMOVE_MOVIE_FROM_WATCHLIST,
					payload : movie.imdbID
				})} className='ctrl-btn'>
					<DeleteIcon/>
				</button>
				</>
			)
		}
			{
			type === "watched" && (
				<>
				<button onClick={()=>MovieContext.MoviesDispatch({
					type : actions.MOVE_TO_WATCHLIST,
					payload: movie
				})} className='ctrl-btn'>
					<VisibilityOffIcon/>
				</button>
				<button onClick={()=>MovieContext.MoviesDispatch({
					type : actions.REMOVE_FROM_WATCHED,
					payload : movie.imdbID
				})} className='ctrl-btn'>
					<DeleteIcon/>
				</button>
				</>
			)
		}
	</div>
  )
}

export default MovieControl