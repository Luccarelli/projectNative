import React from 'react';
import Routes from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native';
import Bar from './src/pages/header/header';
import StatusBar from './src/StatusBar';
import Splash from './src/pages/Splash';
import Cadastro from './src/pages/Cadastro';
import CadastroDados from './src/pages/Cadastro/indexPt2';
import DataDeNascimento from './src/pages/Cadastro/dataDeNascimento';
import { Foo } from './src/pages/Cadastro/toast';

import { Link, useNavigate } from "react-router-dom";
import Home from './src/pages/Home';


export default function App() {
  return (
    <>
    
    <Cadastro/>
   </>
  );
  }
  
 

