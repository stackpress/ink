---
title: Observable Component
---
<script observe="value,name">
export default {
  data() {
    return {
      value: '',
      name: ''
    };
  }
}
</script>

<div>
  <input type="text" v-model="value" />
  <input type="text" v-model="name" />
</div>
