
import{Dialog, Box, TextField,Typography, Button, styled} from '@mui/material';
import { useState } from 'react';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { notifyError, notifySuccess } from '../../utils/notifyToasts';


const Component = styled(Box)`
    display: flex;
    height: 74vh;
    width: 75vh;
`
const Image = styled(Box)`
    background: #2874f0;
    height: 83%;
    width: 35%;
    padding: 45px 35px;
`
const Wrapper=styled(Box)`
    display: flex;
    flex-direction: column;
    flex = 1;
    padding: 60px 35px;
    & > div, & > button, & > p{
        margin-top:20px;
    }
    width: 100%;
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff; 

`
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const LoginDialog = ({open, setOpen, acc, setAccount})=>{
    const handleClose=()=>{
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        //console.log('91', response);
        
        if(!response) {
            showError(true);
            handleClose();
            notifyError('Wrong Credentials');
        }
        else {
            notifySuccess("Loggedin Successfully");
            showError(false);
            handleClose();
            setAccount(login.username);
        }
         
         
    }
    
    const signupUser = async() => {
        
        let response = await authenticateSignup(signup);
        console.log('110', response);
        if(!response) {
            notifyError('username already exist, use a different username');
            return;
        }
        handleClose();
        notifySuccess("You have successfully signed up!")
        setAccount(signup.username);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const url = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
    return(
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Image> 
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography>{account.subHeading}</Typography>
                    <img src={url} style={{marginTop: 250, marginLeft: 'auto', marginRight: 'auto',  display: 'block'}}></img>
                </Image>
                {
                        account.view === 'login' ? 
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Username' />
                            {/* { error && <Error>Please enter valid Email ID/Mobile number</Error> } */}
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Text style={{textAlign:'center'}}>OR</Text>
                             {/* <RequestOTP>Request OTP</RequestOTP> */}
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount> 
                        </Wrapper> : 
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname*' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname*' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username*' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email*' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password*' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone*' />
                            <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }


            </Component>
        </Dialog>

    )
}

export default LoginDialog;