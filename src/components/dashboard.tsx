import { Container, Box, Button } from "@material-ui/core"
import { observer } from "mobx-react-lite"
import { Redirect } from "react-router-dom"
import usersStore from "../store/usersStore"
import './components.css'


const Dashboard = observer(() => {

if (!usersStore.isAuth) {
        return <Redirect to={'/login'} />        
    }

    return (

        <Container>
        
            <h1>Dashboard</h1>
            <h3>{usersStore.users[usersStore.userIndex].login}</h3>
            <Box>
                <Button     variant="contained" 
                            color="primary" 
                            onClick={()=>usersStore.logOff()}
                            className="standartButton" >
                            Log off
                </Button>
            </Box>        

        </Container>

    )

})

export default Dashboard