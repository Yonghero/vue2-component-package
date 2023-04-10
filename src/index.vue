<template>
  <ElButton>{{ msg }}</ElButton>
</template>

<script>

import { Button } from 'element-ui'

export default {
  name: 'Vue2Com',
  components: { ElButton: Button },
  data: () => ({
    msg: 'hello'
  })
}
</script>
