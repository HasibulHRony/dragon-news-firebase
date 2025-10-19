import { React, createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const user = {
        name: "Hablu Mia",
        email: "Hablu@mia.com"
    };


    const authData = {
        user,

    };

    return <AuthContext value={authData}>{children}</AuthContext>
}
export default AuthProvider;