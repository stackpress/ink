<style>
  :host {
    width: 100%;
  }
  :host ul {
    list-style: none;
    margin: 0 0 20px;
    padding: 10px;
    text-align: center;
  }

  :host li {
    background-color: #CDD9E4;
    border-radius: 5px;
    color: #222222;
    margin-bottom: 10px;
    padding: 10px;
  }

  :host li:last-child {
    margin-bottom: 0;
  }
</style>
<script>
  import { props } from '@stackpress/ink';
  //import props
  const { list } = props<{ list: string[] }>();
</script>

<if true={list.length > 0}>
  <ul>
    <each value=item from=list>
      <li>{item}</li>
    </each>
  </ul>
</if>