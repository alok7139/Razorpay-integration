import { VStack,Box, Heading ,Text} from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Paymentsuccess() {

    const searchquery = useSearchParams()[0];
    // console.log(searchquery.get('reference'))

    const reference = searchquery.get('reference')
  return (
    <Box>
        <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>order Successfull</Heading>

        

        <Text>
            Refernece No.{reference};
        </Text>

        </VStack>
    </Box>
  )
}

export default Paymentsuccess
