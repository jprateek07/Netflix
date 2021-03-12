import React, { useEffect, useState } from 'react'
import Styles from './index.module.css'
function VideoSection() {

    const [dataToPopulate, setDataToPopulate] = useState([])

    useEffect(() => {
        fetch('https://fake-movie-database-api.herokuapp.com/api?s=Star Wars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setDataToPopulate(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <>
            <div className={Styles.wrapper}>
                <section className={Styles['main-container']}>
                    <div className={Styles.location} id={Styles.home}>
                        <h1 id={Styles.home}>Popular on Netflix</h1>
                        <div className={Styles.box}>
                            {dataToPopulate && dataToPopulate.Search &&
                                dataToPopulate.Search.map((data, index) => (
                                    <a key={`popluar${index}`} ><img src={data.Poster} alt={data.title} /></a>
                                ))
                            }
                        </div>
                    </div>
                    <h1 id={Styles.myList}>Trending Now</h1>
                    <div className={Styles.box}>
                        {dataToPopulate && dataToPopulate.Search &&
                            dataToPopulate.Search.map((data, index) => (
                                <a key={`trending${index}`} ><img src={data.Poster} alt={data.title} /></a>
                            ))
                        }
                    </div>
                    <h1 id={Styles.tvShows}>TV Shows</h1>
                    <div className={Styles.box}>
                        {dataToPopulate && dataToPopulate.Search &&
                            dataToPopulate.Search.map((data, index) => (
                                <a key={`tv${index}`} ><img src={data.Poster} alt={data.title} /></a>
                            ))
                        }
                    </div>
                    <h1 id={Styles.movies} >Blockbuster Action &amp; Adventure</h1>
                    <div className={Styles.box}>
                        {dataToPopulate && dataToPopulate.Search &&
                            dataToPopulate.Search.map((data, index) => (
                                <a key={`blog${index}`}><img src={data.Poster} alt={data.title} /></a>
                            ))
                        }
                    </div>
                    <h1 id={Styles.originals}>Netflix Originals</h1>
                    <div className={Styles.box}>
                        {dataToPopulate && dataToPopulate.Search &&
                            dataToPopulate.Search.map((data, index) => (
                                <a key={`netflix${index}`} ><img src={data.Poster} alt={data.title} /></a>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default VideoSection