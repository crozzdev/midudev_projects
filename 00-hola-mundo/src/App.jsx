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

            {users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard key={userName} initialState={isFollowing} name={name} userName={userName} />
            ))}
        </div>
    )
}