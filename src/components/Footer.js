import React from 'react'
import IconList from './IconList'

const Footer = () => {
    return (
        <footer>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'mx-auto'}>
                        <IconList/>
                        <p className={"copyright text-muted"}>Copyright &copy; Glyn 2018</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;