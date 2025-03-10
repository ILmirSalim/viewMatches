import { useState } from 'react';
import './Header.scss'
import logo from '../../assets/Match Tracker.svg'
import loader from '../../assets/Refresh.svg'
import { fetchMatches, setStatusFilter } from '../../store/matches';
import { useAppDispatch, useAppSelector } from '../../store/root';
import { StatusFilter } from '../../store/matches/types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const Header: React.FC = () => {
    const dispatch = useAppDispatch()
    const statusFilter = useAppSelector((state) => state.matches.statusFilter)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { loading, error } = useAppSelector(state => state.matches)

    const handleStatusSelect = (status: StatusFilter) => {
        dispatch(setStatusFilter(status))
        setIsDropdownOpen(false)
    }

    const handleRefresh = () => {
        dispatch(fetchMatches())
    }

    return (
        <header className='header'>
            <img src={logo} alt="Match Tracker Logo" />
            <div className='header-buttons-container'>
                {error && <ErrorMessage />}
                <div className="dropdown-wrapper">
                    <button
                        className="dropdown-button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {statusFilter}
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-list">
                            {Object.values(StatusFilter).map((status) => (
                                <div
                                    key={status}
                                    className="dropdown-item"
                                    onClick={() => handleStatusSelect(status)}
                                >
                                    {status}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button className='header-button' onClick={handleRefresh}>Обновить <img className={`icon-loader ${loading ? 'spin' : ''}`} src={loader} /></button>
            </div>
        </header>
    )
}

