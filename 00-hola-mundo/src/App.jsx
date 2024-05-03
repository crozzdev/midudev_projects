import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: "midudev",
        name: "Miguel Angel Duran",
        isFollowing: true,
    },
    {
        userName: "pheralb",
        name: "Pablo Hernandez",
        isFollowing: false,
    },
    {
        userName: "juantvel95",
        name: "Juan David Toro",
        isFollowing: true,
    },

]


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