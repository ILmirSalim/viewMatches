import './MatchCard.scss'
import card_image from '../../assets/icon.svg'
import { UserBlock } from '../UserBlock/UserBlock'
import { Match, MatchStatus } from '../../store/matches/types'
import { useState } from 'react'

type MatchCardProps = {
    match: Match
}

enum TeamType {
    HOMETEAM = 'homeTeam',
    AWAYTEAM = 'awayTeam'
}

enum StatusColors {
    Ongoing = '#21ba45',
    Finished = '#e53935',
    Scheduled = '#ff9800'
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    const [isOpenInfoMatch, setIsOpenInfoMatch] = useState(false)

    const getStatusText = (status: MatchStatus) => {
        switch (status) {
            case 'Ongoing': return 'Live'
            case 'Finished': return 'Finished'
            case 'Scheduled': return 'Scheduled'
            default: return status
        }
    }

    const toggleInfoMatch = () => {
        setIsOpenInfoMatch(!isOpenInfoMatch)
    }

    return (
        <div className='match-card-wrapper' onClick={toggleInfoMatch}>
            <div className='match-card'>
                <div className='command-left'>
                    <img src={card_image} alt="" />
                    {match.awayTeam.name}
                </div>
                <div className='score-container'>
                    <div className='score'>
                        {match.awayScore} : {match.homeScore}
                    </div>
                    <div
                        className='match-status'
                        style={{
                            backgroundColor: StatusColors[match.status],
                        }}
                    >
                        {getStatusText(match.status)}
                    </div>
                </div>
                <div className='command-right'>
                    {match.homeTeam.name}
                    <img src={card_image} alt="" />
                </div>
            </div>
            {isOpenInfoMatch &&
                <div className='command-statistic'>
                    <UserBlock match={match} teamType={TeamType.AWAYTEAM} />
                    <UserBlock match={match} teamType={TeamType.HOMETEAM} />
                </div>
            }
        </div>
    )
}

