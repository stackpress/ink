<link rel="import" href="./todo/add.ink" />
<link rel="import" href="./todo/list.ink" />
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

<section class="flex flex-col align-center justify-center mx-auto mb-16 py-4 border border-white bg-blue-900 text-white max-w-md">
  <list list={list.slice(0, count.value)} />
  <add {list} {count} />
</section>