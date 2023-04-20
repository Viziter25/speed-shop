import React, {useState} from 'react';
import s from './PageMaker.module.scss';
import headImg from 'assets/image/pageMaker/headerPage2.svg';
import burgerIcon from 'assets/image/burger.svg';
import {Sidebar} from 'components/sidebar/Sidebar';
import footImg from 'assets/image/pageMaker/footerPage2.svg';
import {useNavigate} from 'react-router-dom';
import {PATH} from 'constants/path';
import {Slider} from 'components/slider/Slider';

export const PageMaker = () => {

  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(PATH.MAIN)
  }
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

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
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className={s.contentTextBlock}>
            <p className={s.contentText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing
            </p>
          </div>
          <div className={s.contentButtonBlock}>
            <button className={s.btn} onClick={onClickHandler}>BACK</button>
          </div>
        </div>
        <Slider/>
      </div>
      <img src={footImg} alt="headerImage" className={s.image}/>
    </div>
  );
};

