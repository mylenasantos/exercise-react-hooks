import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Style from './styles';
import api from '../../services/api';

export default function Home()
{
  const [family, setFamily] = useState([]);
  //state - const batata, setBatata = tipo do estado
  useEffect(() => {
    //useEffect vai sempre renderizar primeiro e ele pode receber função
    async function getData() {
      const response = await api.get('/family');
      //a info está dentro do data, fazer console.log(response) para visualizar melhor
      setFamily(response.data);
    }
    getData();
  }, []); //o useEffect precisa desse parametro => pesquisar sobre o useEffect 
  return (<> 
    <Style.Container>
      {!!family && family.length > 0 && family.map(item => {
        return (
          <div>
          <Style.Image >
        <img src={item.image_person}
          alt="baby image" />
      </Style.Image >
      <Style.Input>
        <ul> 
          <li>
            < TextField id = "outlined-basic" label = "Name" variant = "outlined" value={item.name} />
          </li>

          <li>
            < TextField id = "outlined-basic" label = "Surname" variant = "outlined" value={item.surname} />
          </li>

          <li>
            < TextField id = "outlined-basic" label = "Age" variant = "outlined" value={item.age} />
          </li>
        </ul>
      </Style.Input>
      </div>
        )
      })}
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
