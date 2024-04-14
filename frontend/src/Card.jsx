import {Image, VStack ,Button,Text} from '@chakra-ui/react'
import React from 'react'

function Card({amount,img , checkouthandler}) {
  return (
    <VStack>
        <Image src={img} boxSize={"64"} objectFit={'cover'}/>
        <Text>{amount}</Text>
        <Button onClick={() => checkouthandler(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card

