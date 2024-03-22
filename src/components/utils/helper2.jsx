import React from "react";

const helper2 = ({link}) => {
    return (
        <div
            className="link"
            onClick={() => {
                window.open(link, "_blank");
            }}
        >
        </div>
    );
};

export default helper2;