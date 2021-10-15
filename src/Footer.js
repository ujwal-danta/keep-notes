import React from 'react'
import { FaGithub } from 'react-icons/fa';
import {FcContacts} from 'react-icons/fc'
import { FcAbout } from "react-icons/fc";

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/ujwal-danta/keep-notes" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href=""  target="_blank" rel="noopener noreferrer"><FcAbout/></a>
            <a href=""  target="_blank" rel="noopener noreferrer"><FcContacts/></a>
        </div>
    )
}

export default Footer