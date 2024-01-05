
import {Box, styled, Typography} from '@mui/material';

import { navData } from '../../constants/data';

const Components = styled(Box)`
    display: flex;
    margin: 55px 130px 0px 130px;
    justify-content: space-between;
    
`
const Container = styled(Box)`
    padding: 12px 6px;
    text-align: center;
`
const Text = styled(Typography)`
    font-weight: 550;
    font-size: 15px;
    font-family: inherit;
`
const Navbar = () =>{
    return(
        <Components>
            {
                navData.map(data =>(
                   <Container>
                    <img src={data.url} alt="nav" style={{width: 64}}/>
                    <Text>{data.text}</Text>
                   </Container> 
                )
                )
            }
        </Components>
    )
}

export default Navbar;