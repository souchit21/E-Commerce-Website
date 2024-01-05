
import {AppBar, Toolbar, styled, Box, Typography} from '@mui/material';
import Search from '../header/search'
import CustomButtons from '../header/custombuttons';
import { Link } from 'react-router-dom';
const Styledheader = styled(AppBar)`
    height: 65px
`
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  textDecoration: none;
  color: inherit;
`
const Subheading = styled(Typography)`
  font-size: 12px;
  font-style: italic;
  margin-top: 0;
  textDecoration: none;
  color: inherit;

`
const Login = styled(Box)`
  margin: 0 5% 0 auto;

`

const Header = ()=>{
  const logourl = 'https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007-768x432.png'
    return(
     <Styledheader>
        <Toolbar style = {{minHeight: 65}}>
          <Component to="/">
            <img src={logourl} alt="logo" style = {{ width: 85, height: 45}} />
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{color: '#FFE500', textDecoration:'none'}}>Plus</Box>
            </Subheading> 
          </Component>
          <Search/>
          <Login>
           <CustomButtons/>
          </Login>
        </Toolbar>
      </Styledheader>
    )
}
export default Header;
