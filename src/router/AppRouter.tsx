import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage';


import { DashboardPage } from '../dashboard';
import Principal from '../landing/Main/components/Principal';
import RegistrationFlow from '../landing/Registration/RegistrationFlow';


const AppRouter = () => {

    const authStatus: string  = 'not-authenticated';
    
    useEffect(() => {
        console.log({authStatus});
    }, [authStatus]);

    if(authStatus === 'checking') {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return (
        <Routes>
            {
                (authStatus === 'authenticated')
                ? (
                    <>
                        <Route path="*" element={<DashboardPage/>}/>
                        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
                    </>
                )
                : (
                    <>
                        <Route path="*" element={<Principal/>}/>
                        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegistrationFlow/>}/>
                    </>
                )
            }
            {/* <Route path="/*" element={<Navigate to="/auth/login" />}/> */}
        </Routes>
    )
}

export default AppRouter