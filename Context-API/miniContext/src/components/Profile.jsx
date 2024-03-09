import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>please login</div>
    return (
        <div> 
            Welcome {user.username} And your Password is   " {user.password} "
        </div>
    )
}

export default Profile
