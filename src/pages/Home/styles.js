import styled from 'styled-components/macro';


export const Container = styled.section `
  display: flex;
  flex-direction: column;
  margin: 15px 16px 20px 16px;
  padding: 20px 18px 20px 18px;
  background-color: #A9DFBF;
`;

export const Image = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 230px;
    height: auto;
  }
`;

export const Input = styled.div`
display: flex;
flex-direction: column;
margin: 20px 10px 20px 10px;

ul{
  display: flex;
  flex-direction: column;
  list-style: none;
}

li{
  padding: 15px 20px 15px 20px;
}
`;

export const Button = styled.div`
display: flex;
flex-direction: column;

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
} 

li{
  padding-left: 30px;
}

`;
