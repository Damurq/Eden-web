import React from 'react'
import { template } from '../../data/MatchNewsTemplate'

const MatchNew = ({ type, info }) => {

    return (
        <div className="">
            {template[type].format(info)}
        </div>
    )
}

export default MatchNew