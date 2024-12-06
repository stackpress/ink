---
title: Form Component
---
<script form>
export default {
  data() {
    return {
      value: ''
    };
  }
}
</script>

<div>
  <input type="text" v-model="value" />
</div>
