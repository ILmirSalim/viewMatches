
import avatar_user from '../../assets/avatar_global.svg'
import { Match } from '../../store/matches/types'
import './UserBlock.scss'

type UserBlockProps = {
    match: Match
    teamType: string
}

export const UserBlock: React.FC<UserBlockProps> = ({ match, teamType }) => {
    return (
        <div className='users-block'>
            <div className='users-container'>
                {teamType === 'awayTeam' ? match?.awayTeam?.players?.map((user) => (<div className='user'>
                    <div className='user-container' key={user.username}>
                        <img src={avatar_user} alt={user.username} />
                        <div>{user.username}</div>
                    </div>

                    <div className='count-block'>
                        <div className='text'>Убийств:</div>
                        <div>{user.kills}</div>
                    </div>
                </div>
                )) : match?.homeTeam?.players?.map((user) => (<div className='user'>
                    <div className='user-container' key={user.username}>
                        <img src={avatar_user} alt={user.username} />
                        <div>{user.username}</div>
                    </div>

                    <div className='count-block'>
                        <div className='text'>Убийств:</div>
                        <div>{user.kills}</div>
                    </div>
                </div>
                ))}
            </div>
            <div className='user-statistics-block'>
                <div className='text-block'>
                    <div className='text'>
                        Points:
                    </div>
                    {teamType === 'awayTeam' ? match.awayTeam.points : match.homeTeam.points}
                </div>
                <div className='text-block'>
                    <div className='text'>Место:</div>
                    <div>
                        {teamType === 'awayTeam' ? match.awayTeam.place : match.homeTeam.place}
                    </div>
                </div>
                <div className='text-block'>
                    <div className='text'>
                        Всего убийств:
                    </div>
                    <div>
                        {teamType === 'awayTeam' ? match.awayTeam.total_kills : match.homeTeam.total_kills}
                    </div>
                </div>
            </div>
        </div>
    )
}
