import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'
const Loading = () => {
    return (
        <Stack>
            {
                Array(11).fill(0).map((_, i) => <Skeleton key={i} height='50px' />)
            }
        </Stack>
    )
}

export default Loading