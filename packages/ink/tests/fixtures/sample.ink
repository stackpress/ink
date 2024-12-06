---
title: Sample Component
---
<script>
import { ref } from 'vue';
import OtherComponent from './other.ink';

export default {
  components: {
    OtherComponent
  },
  setup() {
    const count = ref(0);
    return { count };
  }
}
</script>

<div>
  <h1>{{ title }}</h1>
  <p>Count: {{ count }}</p>
  <other-component />
</div>

<style>
h1 { color: blue; }
</style>
