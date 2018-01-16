import React from 'react'
import Icon from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook} from '@fortawesome/fontawesome-free-brands'

const IconList = () => {
    return (
        <ul className={"list-inline text-center"}>
            <li className={"list-inline-item"}><a href={"#"}><Icon icon={faGithub} size={"2x"}/></a></li>
            <li className={"list-inline-item"}><a href={"#"}><Icon icon={faTwitter} size={"2x"}/></a></li>
            <li className={"list-inline-item"}><a href={"#"}><Icon icon={faFacebook} size={"2x"}/></a></li>
        </ul>
    );
};

export default IconList;