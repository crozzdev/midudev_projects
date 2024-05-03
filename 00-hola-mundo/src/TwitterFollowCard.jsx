/* eslint-disable react/prop-types */
export function TwitterFollowCard(props) {

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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )

}

TwitterFollowCard.defaultProps = {
    userName: 'Default User',
    children: 'Default Name',
};