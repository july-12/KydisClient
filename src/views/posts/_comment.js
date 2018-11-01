import React from 'react'
import dayjs from 'dayjs';

import { Pane, Avatar, Text } from 'evergreen-ui';

export default ({ data }) => {
  return (
    <Pane display="flex" marginTop={30} minHeight={70}>
      <Pane flex={0} marginRight={10} >
        <Avatar name="R" size={40} />
      </Pane>
      <Pane flex={1} padding={8} >
        <Text>
          { data.content }
        </Text>
      </Pane>
      <Pane color="#425A70">
        { dayjs(data.createdAt).format('MMM`DD') }
      </Pane>
    </Pane>
  )
}
