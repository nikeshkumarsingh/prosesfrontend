import { Box,Text, Input,Button } from "@chakra-ui/react"

import {Link,useNavigate}from "react-router-dom";

export const UpdateUser=()=>{
    const navigate = useNavigate();

    const handleback=()=>{
        navigate("/",{replace:true})
    }
    return (
        <Box>
            <Text>User Name</Text>
           <Input placeholder="Enter Name"/>
           <Text>Email</Text>
           <Input  placeholder="Enter Email"/>
           <Text>Mobile Number</Text>
           <Input placeholder="Enter Mobile Number"/>
           <Text>Address</Text>
           <Input placeholder="Enter Full address"/>
           <Button>Submit</Button><Button onClick={handleback}>Go back</Button>
        </Box>
    )
}