import React from "react";
import Header from "./Header";
import BoardInfoBar from "./BoardInfoBar";

const BaseLayout = ({ children }) => {
    return (
        <div className="base-layout">
            <Header />
            <BoardInfoBar />
            <main>{children}</main>
        </div>
    );
};

export default BaseLayout;
