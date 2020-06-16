import React, { useEffect } from 'react'
import styled from 'styled-components'

import { navigate } from '@reach/router'

import Text from '_components/text'
import Flex from '_components/flex'
import Button from '_components/button'
import Box from '_components/box'

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const StyledButton = styled(Button).attrs({
  variant: 'primary',
  height: '40px',
  width: '100px',
  borderRadius: 3,
  mr: 3,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 8px;
`

const HomeView = () => {
  useEffect(() => {
    navigate(`networks`)
  })

  return (
    <Container>
      <Box mb={3}>
        <Text textStyle="title" />
      </Box>
      <Text textStyle="bodyText" />
      <Text my={3} textStyle="bodyText" />
    </Container>
  )
}

export default HomeView
