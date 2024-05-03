import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    return (
        <div className='App'>
            <TwitterFollowCard userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard userName="juantvel95">
                Juan David Toro
            </TwitterFollowCard>
            <TwitterFollowCard />
        </div>
    )
}