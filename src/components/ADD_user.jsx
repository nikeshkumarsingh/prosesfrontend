import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormLabel,
    FormControl,
    Input
  } from '@chakra-ui/react'
import { useState } from 'react'
export const Adduser=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");
  
    return (
      <>
        <Button onClick={onOpen}>Add User</Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add User Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>User name</FormLabel>
                <Input  placeholder='User name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mobile Number</FormLabel>
                <Input placeholder='Enter mobile number' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Enter full address' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }