<link rel="import" href="./todo/add.ink" />
<link rel="import" href="./todo/list.ink" />
<style>
  :host section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0;
    border: 1px solid #EFEFEF;
    border-radius: 5px;
    background-color: #004080;
    color: #EFEFEF;
    max-width: 400px;
  }
</style>
<script>
  import { props, signal } from '@stackpress/ink';
  //define props
  type TodoProps = {
    start: number;
    list: string[];
  };
  //import props
  const { list, start } = props<TodoProps>();
  const count = signal<number>(start);
</script>

<section>
  <list list={list.slice(0, count.value)} />
  <add {list} {count} />
</section>