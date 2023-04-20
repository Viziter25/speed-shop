import React, {useState} from 'react';
import headImg from '../../assets/image/header.svg'
import footImg from '../../assets/image/footer.svg'
import s from './Main.module.css'
import arrow from '../../assets/image/speedometer/arrow.svg'
import backgroundSpeed from '../../assets/image/speedometer/backgroud.svg'
import division from '../../assets/image/speedometer/division.svg'
import division1 from '../../assets/image/speedometer/division1.svg'
import division2 from '../../assets/image/speedometer/division2.svg'
import division3 from '../../assets/image/speedometer/division3.svg'
import circlePurple from '../../assets/image/speedometer/circle purple.svg'
import circleBlue from '../../assets/image/speedometer/circle blue.svg'
import circlePink from '../../assets/image/speedometer/circle pink.svg'
import {useNavigate} from 'react-router-dom';
import {PATH} from 'constants/path';
import {Sidebar} from 'components/sidebar/Sidebar';
import burgerIcon from  '../../assets/image/burger.svg'

export const Main = () => {
const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(PATH.PAGE_MAKER)
  }
  const [value, setValue] = useState('1')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const level1ClassNane = s.button + ' ' + (value === '1' ? s.active1 : s.button1)
  const level2ClassNane = s.button + ' ' + (value === '2' ? s.active2 : s.button2)
  const level3ClassNane = s.button + ' ' + (value === '3' ? s.active3 : s.button3)
  const arrowImageStyle = value === '2' ? s.arrowImage2 : value === '3'? s.arrowImage3 : s.arrowImage

  return (
    <div className={s.mainContainer}>
      <img src={headImg} alt="headerImage" className={s.image}/>

      <div className={s.headerContainer}>
        <img
          src={burgerIcon}
          className={s.burgerMenuIcon}
          onClick={handleOpen}
          alt={'open menu'}
        />

        <Sidebar open={open} handleClose={handleClose}/>
      </div>

      <div className={s.mainItem}>
        <div className={s.contentContainer}>
          <div className={s.contentTitle}>
            Bibendum neque egestas congue
          </div>
          <div className={s.contentTextBlock}>
            <p className={s.contentText}>
              lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit
              ullamcorper dignissim cras tincidunt lobortis feugiat
            </p>
          </div>
          <div className={s.contentButtonBlock}>
            <button className={s.btn} onClick={onClickHandler}>GO</button>
          </div>
        </div>
        <div className={s.speedometerBlock}>
          <div className={s.speedometerContainer}>
            <div className={s.arrow}>
              <img className={arrowImageStyle} src={arrow} alt="arrow"/>
            </div>
            <div className={s.backgroundSpeed}>
              <img src={backgroundSpeed} alt="backgroundSpeed"/>
            </div>
            <div className={s.division}>
              <img src={division} alt="division"/>
            </div>
            <div className={s.division1}>
              {value === '1' ? <img src={division1} alt="division"/>
                : value === '2' ? <img src={division2} alt="division"/>
                  : <img src={division3} alt=""/>}
            </div>
            <div className={s.circle}>
              {value === '1' ? <img src={circlePurple} alt="circlePurple"/>
                : value === '2' ? <img src={circleBlue} alt="circleBlue"/>
                  : <img src={circlePink} alt="circlePink"/>}
            </div>
          </div>
          <div className={s.buttonContainer}>
            <div>
              <button className={level1ClassNane} onClick={() => setValue('1')}>Level 1</button>
            </div>
            <div>
              <button className={level2ClassNane} onClick={() => setValue('2')}>Level 2</button>
            </div>
            <div>
              <button className={level3ClassNane} onClick={() => setValue('3')}>Level 3</button>
            </div>
          </div>
        </div>


      </div>
      <img src={footImg} alt="headerImage" className={s.image}/>
    </div>
  );
};

