<script>
  import { props } from '@stackpress/ink';
  //import props
  const { list } = props<{ list: string[] }>();
</script>

<if true={list.length > 0}>
  <ul class="mb-3 p-3 text-center">
    <each value=item from=list>
      <li class="bg-orange-700 rounded-md mb-2 p-2">{item}</li>
    </each>
  </ul>
</if>