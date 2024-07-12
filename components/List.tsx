export default function List({ tasks }:{ tasks:any[]}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}
