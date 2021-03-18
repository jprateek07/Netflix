import React, { useEffect, useState } from 'react'
import Styles from './index.module.css'
function VideoSection() {

    const [movies, setmovies] = useState([])

    useEffect(() => {
        fetch('https://fake-movie-database-api.herokuapp.com/api?s=Star Wars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setmovies(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <>
            <div className={Styles.wrapper} id="home">
                <section className={Styles['main-container']}>
                    <div className={Styles.location} id={Styles.home}>
                        <h1 id={Styles.home}>Popular on Netflix</h1>
                        <div className={Styles.box}>
                            {movies && movies.Search &&
                                movies.Search.map((data, index) => (
                                    <div className="movies"><a key={`popluar${index}`} ><img src={data.Poster} alt={data.Title} 
                                    onError={(e)=>{e.target.onerror = null; e.target.src="/assets/img/default1.jpg"}} /></a><p>{data.Title}</p></div>
                                ))
                            }
                        </div>
                    </div>
                    <h1 id="trendingList">Trending Now</h1>
                    <div className={Styles.box}>
                        {movies && movies.Search &&
                            movies.Search.map((data, index) => (
                                <div className="movies"><a key={`trending${index}`} ><img src={data.Poster} alt={data.Title}
                                onError={(e)=>{e.target.onerror = null; e.target.src="/assets/img/default1.jpg"}} /></a><p>{data.Title}</p></div>
                            ))
                        }
                    </div>
                    <h1 id="tvSection">TV Shows</h1>
                    <div className={Styles.box} >
                        {movies && movies.Search &&
                            movies.Search.map((data, index) => (
                               <div className="movies"><a key={`tv${index}`} ><img src={data.Poster} alt={data.Title} 
                               onError={(e)=>{e.target.onerror = null; e.target.src="/assets/img/default1.jpg"}} /></a><p>{data.Title}</p></div>
                            ))
                        }
                    </div>
                    <h1 id="movieSection">Blockbuster Action &amp; Adventure</h1>
                    <div className={Styles.box}>
                        {movies && movies.Search &&
                            movies.Search.map((data, index) => (
                                <div className="movies"><a key={`blog${index}`}><img src={data.Poster} alt={data.Title} 
                                onError={(e)=>{e.target.onerror = null; e.target.src="/assets/img/default1.jpg"}} /></a><p>{data.Title}</p></div>
                            ))
                        }
                    </div>
                    <h1 id="netflix-originals">Netflix Originals</h1>
                    <div className={Styles.box}>
                        {movies && movies.Search &&
                            movies.Search.map((data, index) => (
                                <div className="movies"><a key={`netflix${index}`} ><img src={data.Poster} alt={data.Title} 
                                onError={(e)=>{e.target.onerror = null; e.target.src="/assets/img/default1.jpg"}} /></a><p>{data.Title}</p></div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default VideoSection