import React, { useEffect, useState } from 'react'
import Styles from './index.module.css'
import $ from 'jquery'
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
    function updateSliderArrowsStatus(
        cardsContainer,
        containerWidth,
        cardCount,
        cardWidth
    ) {
        if (
            $(cardsContainer).scrollLeft() + containerWidth <
            cardCount * cardWidth + 15
        ) {
            $("#slide-right-container").addClass("active");
        } else {
            $("#slide-right-container").removeClass("active");
        }
        if ($(cardsContainer).scrollLeft() > 0) {
            $("#slide-left-container").addClass("active");
        } else {
            $("#slide-left-container").removeClass("active");
        }
    }
    $(function () {
        // Scroll products' slider left/right
        let div = $("#cards-container");
        let cardCount = $(div)
            .find(".cards")
            .children(".card").length;
        let speed = 1000;
        let containerWidth = $(".container").width();
        let cardWidth = 250;

        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

        //Remove scrollbars
        $("#slide-right-container").click(function (e) {
            console.log("SD")
            if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
                $(div).animate(
                    {
                        scrollLeft: $(div).scrollLeft() + cardWidth
                    },
                    {
                        duration: speed,
                        complete: function () {
                            setTimeout(
                                updateSliderArrowsStatus(
                                    div,
                                    containerWidth,
                                    cardCount,
                                    cardWidth
                                ),
                                1005
                            );
                        }
                    }
                );
            }
            updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
        });
        $("#slide-left-container").click(function (e) {
            if ($(div).scrollLeft() + containerWidth > containerWidth) {
                $(div).animate(
                    {
                        scrollLeft: "-=" + cardWidth
                    },
                    {
                        duration: speed,
                        complete: function () {
                            setTimeout(
                                updateSliderArrowsStatus(
                                    div,
                                    containerWidth,
                                    cardCount,
                                    cardWidth
                                ),
                                1005
                            );
                        }
                    }
                );
            }
            updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
        });

        // If resize action ocurred then update the container width value
        $(window).resize(function () {
            try {
                containerWidth = $("#cards-container").width();
                updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
            } catch (error) {
                console.log(
                    `Error occured while trying to get updated slider container width: 
                  ${error}`
                );
            }
        });
    });
    return (
        <div className="slide-container">
            {/* slide start*/}
            <div id="slide-left-container">
                <div className="slide-left">
                </div>
            </div>
            <div id="cards-container">
                <div className="cards">

                    {movies && movies.Search &&
                        movies.Search.map((data, index) => (
                            <div className="card">
                                <img src={data.Poster} alt="Animals" style={{ width: "100%" }} />
                                <div class="card-title">
                                    <h4>
                                        <b>{data.Title}</b>
                                    </h4>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div id="slide-right-container">
                <div className="slide-right">
                </div>
            </div>
        </div>
        // {/* <div className={Styles.wrapper} id="home">
        //     <section className={Styles['main-container']}>
        //         <div className={Styles.location} id={Styles.home}>
        //             <h1 id={Styles.home}>Popular on Netflix</h1>
        //             <div className={Styles.box}>
        //                 {movies && movies.Search &&
        //                     movies.Search.map((data, index) => (
        //                         <div className="movies"><a key={`popluar${index}`} ><img src={data.Poster} alt={data.Title} /></a><p>{data.Title}</p></div>
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         <h1 id="trendingList">Trending Now</h1>
        //         <div className={Styles.box}>
        //             {movies && movies.Search &&
        //                 movies.Search.map((data, index) => (
        //                     <div className="movies"><a key={`trending${index}`} ><img src={data.Poster} alt={data.Title} /></a><p>{data.Title}</p></div>
        //                 ))
        //             }
        //         </div>
        //         <h1 id="tvSection">TV Shows</h1>
        //         <div className={Styles.box} >
        //             {movies && movies.Search &&
        //                 movies.Search.map((data, index) => (
        //                    <div className="movies"><a key={`tv${index}`} ><img src={data.Poster} alt={data.Title} /></a><p>{data.Title}</p></div>
        //                 ))
        //             }
        //         </div>
        //         <h1 id="movieSection">Blockbuster Action &amp; Adventure</h1>
        //         <div className={Styles.box}>
        //             {movies && movies.Search &&
        //                 movies.Search.map((data, index) => (
        //                     <div className="movies"><a key={`blog${index}`}><img src={data.Poster} alt={data.Title} /></a><p>{data.Title}</p></div>
        //                 ))
        //             }
        //         </div>
        //         <h1 id="netflix-originals">Netflix Originals</h1>
        //         <div className={Styles.box}>
        //             {movies && movies.Search &&
        //                 movies.Search.map((data, index) => (
        //                     <div className="movies"><a key={`netflix${index}`} ><img src={data.Poster} alt={data.Title} /></a><p>{data.Title}</p></div>
        //                 ))
        //             }
        //         </div>
        //     </section>
        // </div> */}

    )
}

export default VideoSection