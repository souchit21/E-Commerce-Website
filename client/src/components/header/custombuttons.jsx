
import {Box, Button, Typography, styled, Badge} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../login/LoginDialog';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Profile from './Profile';

const Cart = styled(Link)`
    display: flex;
    text-decoration: none;
    color: '#FFFFFF'
`

const Wrapper = styled(Box)`
 display: flex;
 margin: 0 3% 0 auto;
 align-items: center;
 & > button, & > p, & > div{
    margin-right: 40px;
    font-size: 14px;
   
 }
`
const StyledButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    height: 28px;
`

const CustomButtons = ()=>{
    const [open, setOpen] = useState(false);
    const [account, setAccount] = useState('');
    const openDialog=()=>{
        setOpen(true);
    }
    const {cartItems} = useSelector(state => state.cart);
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <StyledButton variant='contained' onClick={()=> openDialog()}>Login</StyledButton>
            }
            
            <Typography style={{marginTop: 4, width: 138}}>Become a Seller</Typography>
            <Typography style={{marginTop: 4}}>More</Typography>

            <Cart to="/cart" >
                <Badge badgeContent={cartItems?.length} color='secondary'>
                    <ShoppingCartIcon style={{color:'#ffff'}}/>
                </Badge>
                <Typography style={{marginLeft:2, marginTop: 4, color: '#ffff'}}>Cart</Typography>
            </Cart>

        <LoginDialog open = {open} setOpen={setOpen} account={account} setAccount={setAccount}/>
        </Wrapper>
        
    )
}

export default  CustomButtons;