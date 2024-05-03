/* eslint-disable react/prop-types */

import { useState } from 'react';

export function TwitterFollowCard(props) {
    const [isFollowing, setIsFollowing] = useState(props.)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${props.userName}`} alt={`El avatar de ${props.userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{props.children}</strong>
                    <span className='tw-followCard-infoUserName'>@{props.userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )

}

TwitterFollowCard.defaultProps = {
    userName: 'Default User',
    children: 'Default Name',
};