import React, { useEffect, useState } from 'react';
import Baby from '../../assets/images/baby.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Style from './styles';

export default function Home()
{
  return (<>
    <Style.Container >
      <Style.Image >
        <img src={
          Baby
        } 
          alt="baby image" />
      </Style.Image >
      <Style.Input>
        <ul> 
          <li>
            < TextField id = "outlined-basic" label = "Name" variant = "outlined" / >
          </li>

          <li>
            < TextField id = "outlined-basic" label = "Surname" variant = "outlined" / >
          </li>

          <li>
            < TextField id = "outlined-basic" label = "Age" variant = "outlined" / >
          </li>
        </ul>
      </Style.Input>

      <Style.Button>
        <ul>
          <li>
            < Button variant = "contained" color = "primary"> Adicionar + </Button>
          </li>
        </ul>
      </Style.Button>
    </Style.Container>
  </>

  )
}
