import React from "react";

const BoardInfoBar = () => {
    return (
        <section className="board-info-bar">
            <div className="board-controls">
                <button className="board-title btn">
                    <h2>Web Development</h2>
                </button>
                <button className="star-btn btn" aria-label="Star Board">
                    <i className="far fa-star" aria-hidden="true"></i>
                </button>
                <button className="personal-btn btn">Personal</button>
                <button className="private-btn btn">
                    <i
                        className="fas fa-briefcase private-btn-icon"
                        aria-hidden="true"
                    ></i>
                    Private
                </button>
            </div>
            <button className="menu-btn btn">
                <i
                    className="fas fa-ellipsis-h menu-btn-icon"
                    aria-hidden="true"
                ></i>
                Show Menu
            </button>
        </section>
    );
};

export default BoardInfoBar;
