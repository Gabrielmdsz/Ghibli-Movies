import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/homePage'
import { FilmsDetails } from '../pages/FilmsDetails'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:id' element={<FilmsDetails />} />
        </Routes>
    )
}