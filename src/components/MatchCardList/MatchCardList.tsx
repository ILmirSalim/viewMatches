import { StatusFilter } from '../../store/matches/types';
import { useAppSelector } from '../../store/root';
import { MatchCard } from '../MatchCard/MatchCard'
import './MatchCardList.scss'

export const MatchCardList:React.FC = () => {
    const { matches, statusFilter, loading } = useAppSelector(state => state.matches)

    const filteredMatches = matches.filter(match => {
        if (statusFilter === StatusFilter.ALL) return true
        return match.status === statusFilter
    })

    return (
        <div className='match-list'>
            {filteredMatches?.map((match) => {
                return <MatchCard key={`${match.title}-${match.time}`} match={match} />
            })}
            {loading && <div className='loader'>Loading matches...</div>}
        </div>
    )
}

