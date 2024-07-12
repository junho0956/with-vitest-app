import List from "../components/List";

export default function Page() {
  const tasks = [
    {id: 1, title: '아무 일도 하기 싫다'},
    {id: 2, title: '아무 일도 하기 싫다 2'},
  ]
  return (
    <main>
      <h1>To-do</h1>
      <List tasks={tasks} />
    </main>
  );
}
