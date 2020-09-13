import React from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render () {
        return (
            <div className="footer">Made with 💻 by <a href="https://portfolio-itsjuanit.now.sh/" target="_blank">Itsjuanit</a></div>
        )
    }
}

export default Footer;