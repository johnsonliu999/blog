import React from 'react'

const Header = ({title, subTitle}) => {
    return (
        <header>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-9 col-md-10 mx-auto"}>
                        <div className={"page-header"}>
                            <h1>{title}</h1>
                            <small>{subTitle}</small>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;