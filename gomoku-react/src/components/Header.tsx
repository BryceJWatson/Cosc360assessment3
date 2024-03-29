import style from './Header.module.css'
import { useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context'

export default function Header() {
  const navigate = useNavigate()
  const { user, logout } = useContext(UserContext)
  const location = useLocation()

  const getActions = () => {
    if (user) {
      return (
        <>
          <button className={style.action} onClick={() => navigate('games')}>
            Previous Games
          </button>
          <button
            className={style.action}
            onClick={() => {
              logout()
              navigate('/')
            }}
          >
            Logout
          </button>
        </>
      )
    } else {
      return location.pathname !== '/login' ? (
        <button className={style.action} onClick={() => navigate('login')}>
          Login
        </button >
      ) : (
        <button className={style.action} onClick={() => navigate('Signup')}>
          Sign Up
        </button>
      )

    }
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to="/">Gomoku</Link>
        <div className={style.actions}>
          {getActions()}
        </div>
      </div>
    </header>
  )
}