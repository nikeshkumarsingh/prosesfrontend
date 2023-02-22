import { Box ,Button,Flex,Text,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Tooltip,
    ModalCloseButton,
    useDisclosure,} from "@chakra-ui/react"
import { useEffect,useState } from "react"
import axios from "axios"
import {Link,useNavigate}from "react-router-dom";
import { Adduser } from "./ADD_user";
export const UserBox=()=>{
    const navigate = useNavigate();
const [userdta,setUserdta]=useState([])

const getuser=()=>{
    axios.get("http://localhost:5000/users").then((r)=>setUserdta(r.data))
    .catch((r)=>console.log(r.data))
}
useEffect(()=>{
    if(userdta.length===0){
        getuser()
    }
})

const handleEdit=()=>{
    navigate("/user",{replace:true})
}
console.log(userdta)
    return(
        <Box>
            <Adduser/>
            {userdta.map((e)=>(
             <Box style={{"display":"flex"}}>
               <Box margin={5}><Text fontSize={30}>Name</Text><br/>{e.userName}<Text></Text></Box>
               <Box margin={5}><Text fontSize={30}>Email</Text><br/><Text>{e.email}</Text></Box>
               <Box margin={5}><Text fontSize={30}>Mobile No</Text><br/><Text>{e.mobile}</Text></Box>
               <Box margin={5}><Text fontSize={30}>Address</Text><br/><Text>{e.address}</Text></Box>
               <Box><Button onClick={handleEdit}>Edit</Button><Button>del</Button></Box>
            </Box>
            ))      
          }
        </Box>
    )
}