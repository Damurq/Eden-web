import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { FaLinkedinIn, FaTiktok, FaTumblr } from 'react-icons/fa'
import { MdOutlineCollections } from 'react-icons/md'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineWeb } from 'react-icons/md'
import { SiAltiumdesigner } from 'react-icons/si'
import {
    BsTelephone,
    BsInstagram,
    BsFacebook,
    BsTwitter,
    BsYoutube,
    BsReddit,
    BsGithub,
    BsPinterest,
    BsSnapchat,
} from 'react-icons/bs'


const IconsComponent = ({ icon, className = '' }) => {

    const selectIcon = () => {
        let element = <div></div>
        switch (icon) {
            case 'instagram':
                element = <BsInstagram className={className} />
                break;
            case 'facebook':
                element = <BsFacebook className={className} />
                break;
            case 'linkedin':
                element = <FaLinkedinIn className={className} />
                break;
            case 'twitter':
                element = <BsTwitter className={className} />
                break;
            case 'youtube':
                element = <BsYoutube className={className} />
                break;
            case 'github':
                element = <BsGithub className={className} />
                break;
            case 'reddit':
                element = <BsReddit className={className} />
                break;
            case 'pinterest':
                element = <BsPinterest className={className} />
                break;
            case 'snapchat':
                element = <BsSnapchat className={className} />
                break;
            case 'tiktok':
                element = <FaTiktok className={className} />
                break;
            case 'tumblr':
                element = <FaTumblr className={className} />
                break;
            case 'phone':
                element = <BsTelephone className={className} />
                break;
            case 'location':
                element = <HiOutlineLocationMarker className={className} />
                break;
            case 'email':
                element = <HiOutlineMail className={className} />
                break;
            case 'portfolio':
                element = <MdOutlineCollections className={className} />
                break;
            case 'send':
                element = <AiOutlineSend className={className} />
                break;
            case 'area':
                element = <SiAltiumdesigner className={className} />
                break;
            default:
                element = <MdOutlineWeb className={className} />
                break;
        }
        return element
    }

    return (
        selectIcon()
    )
}

export default IconsComponent