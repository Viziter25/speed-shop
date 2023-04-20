import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {PATH} from 'constants/path';
import {Layout} from 'components/layout/Layout';
import {Main} from 'features/main/Main';
import {PageMaker} from 'features/pageMaker/PageMaker';


export const Pages = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={PATH.MAIN} element={<Main/>} />
          <Route path={PATH.PAGE_MAKER} element={<PageMaker/>} />
        </Route>
      </Routes>
    </div>
  );
};