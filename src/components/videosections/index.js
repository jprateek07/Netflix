import React, { useEffect, useState } from 'react'
import Styles from './index.module.css'
import $ from 'jquery'
function VideoSection(props) {

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
            $(`#slide-right-container-${props.id}`).addClass("active");
        } else {
            $(`#slide-right-container-${props.id}`).removeClass("active");
        }
        if ($(cardsContainer).scrollLeft() > 0) {
            $(`#slide-left-container-${props.id}`).addClass("active");
        } else {
            $(`#slide-left-container-${props.id}`).removeClass("active");
        }
    }
    $(function () {
        let div = $(`#cards-container-${props.id}`);
        let cardCount = $(div).find(".movie-cards").children().length
        console.log(cardCount)
        let speed = 1000;
        let containerWidth = $(".container").width();
        let cardWidth = 250;
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
        //Remove scrollbars
        $(`#slide-right-container-${props.id}`).click(function (e) {
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
        $(`#slide-left-container-${props.id}`).click(function (e) {
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
                containerWidth = $(".container").width();
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
        <div className="movies-section">
            <h1>{props.header}</h1>
            <div className={`${Styles['slide-container']}`}>
                {/* slide start*/}
                <div id={`slide-left-container-${props.id}`}>
                    <div className={`${Styles["slide-left"]}`}>
                    </div>
                </div>
                <div id={`cards-container-${props.id}`} className={`${Styles['cards-container']}`}>
                    <div className={`${Styles.cards} movie-cards`}>
                        {movies && movies.Search &&
                            movies.Search.map((data, index) => (
                                <div className={`${Styles.card} movies`}>
                                    <img src={data.Poster} alt="Animals" style={{ width: "100%" }} onError={(e) => { e.target.onerror = null; e.target.src = "/assets/img/movie1.jpg" }} />
                                    <div class={`${Styles["card-title"]}`}>
                                        <h4>
                                            <b>{data.Title}</b>
                                        </h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div id={`slide-right-container-${props.id}`}>
                    <div className={`${Styles["slide-right"]}`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection