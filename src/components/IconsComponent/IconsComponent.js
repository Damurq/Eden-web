import React                                                                    from 'react'
import { AiOutlineSend }                                                        from 'react-icons/ai'
import { BsTelephone, BsInstagram, BsFacebook }                                 from 'react-icons/bs'
import { FaLinkedinIn }                                                         from 'react-icons/fa'
import { MdOutlineCollections }                                                 from 'react-icons/md'
import { HiOutlineMail, HiOutlineLocationMarker }                               from 'react-icons/hi'
import { MdOutlineWeb }                                                         from 'react-icons/md'
import { SiAltiumdesigner }                                                     from 'react-icons/si'


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
            case 'linkedin':
                element = <FaLinkedinIn className={className} />
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