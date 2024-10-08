<style>
  :host {
    width: 100%;
  }
  :host section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #EFEFEF;
    border-radius: 5px;
    background-color: #DA532C;
    color: #EFEFEF;
  }
  :host ul {
    list-style: none;
    margin: 0 0 20px;
    padding: 10px;
    text-align: center;
  }

  :host li {
    background-color: #DA532C;
    border-radius: 5px;
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