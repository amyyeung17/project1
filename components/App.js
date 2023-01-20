import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Calc from './Calc/Calc'
import Credits from './Extra/Credits'
import Help from './Extra/Help'
import Menu from './Extra/Menu'
import NotFound from './Extra/NotFound'
import Timer from './Timer/Timer'
import ToDo from './Todo/ToDo'
import Stopwatch from './Stopwatch/Stopwatch'
import { ColumnDivAlign, Container } from './Style/AllStyle'

const App = () => {
  const location = useLocation()
  const states = ['todo', 'timer', 'stopwatch', 'calculator', 'help']

  return (
    <>
      <ColumnDivAlign>
          {states.includes(location.pathname.slice(1)) && <Menu />}
        <Container> 
          <Routes>
            <Route path='/' element={<Navigate replace to='/todo' />}/>
            <Route path='/todo' element={<ToDo />} />
            <Route path='/calculator' element={<Calc />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/stopwatch' element={<Stopwatch />} />
            <Route path='/help' element={<Help />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        <Credits />
      </ColumnDivAlign>
    </>
  )
}

export default App