import React from 'react';

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.posterimage} alt="" className="card_img" />
                    <div className="card_info">
                        <strong className="gener">Genre :- {props.gener}</strong>
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">Title :-{props.seriesname}</h3>
                        <h4 className="cast">Lead Cast :-{props.cast}</h4>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button className="btn">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;