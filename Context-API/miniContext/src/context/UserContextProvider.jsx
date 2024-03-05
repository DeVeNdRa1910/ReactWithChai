import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    // children mean jo bhi props aai hai unhe as it s pass kardon name can be anything

    const [user , setUser] = useState(null)

    return (
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider