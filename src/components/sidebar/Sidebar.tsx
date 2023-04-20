import closeIcon from '../../assets/image/close.svg'
import {FC} from 'react';
import s from './Sidebar.module.css'

type PropsType = {
  open: boolean
  handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
  const sidebarClass = s.sidebar
    + (open ? ' ' + s.open : '')
  return (
    <>
      {open && <div className={s.background} onClick={handleClose}/>}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose}>
          <img
            src={closeIcon}
            alt="close sidebar"
          />
        </button>

        <nav className={s.nav}>
          <div className={s.navItem}>
            <a onClick={handleClose}>Menu 1</a>
            <p className={s.go}>GO</p>
          </div>
          <div className={s.navItem}>
            <a onClick={handleClose}>Menu 2</a>
            <p className={s.go}>GO</p>
          </div>
          <div className={s.navItem}>
            <a onClick={handleClose}>Menu 3</a>
            <p className={s.go}>GO</p>
          </div>
          <div className={s.navItem}>
            <a onClick={handleClose}>Menu 4</a>
            <p className={s.go}>GO</p>
          </div>
        </nav>
      </aside>
    </>
  )
}