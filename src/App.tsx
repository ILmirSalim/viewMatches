import { useEffect } from 'react';
import './App.scss'
import { Header } from './components/Header/Header'
import { MatchCardList } from './components/MatchCardList/MatchCardList'
import { fetchMatches } from './store/matches';
import { useAppDispatch } from './store/root';

function App() {
  const dispatch = useAppDispatch();

  const initPage = () => {
    dispatch(fetchMatches())
  }

  useEffect(() => {
    initPage()
  }, [])

  return (
    <div className='app'>
      <Header />
      <MatchCardList />
    </div>
  )
}

export default App
