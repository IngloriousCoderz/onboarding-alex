const tasks = [
  { id: 1, text: "Learn FP", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function addTask(tasks, text) {
  const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;

  // 1. clone
  const clone = [...tasks];
  clone.push({ id: maxId + 1, text });
  return clone;

  // 2. sandwich
  return [...tasks, { id: maxId + 1, text }];

  // 3. immer
  task.push({ id: maxId + 1, text });
}

function toggleTask(task, id) {
  // 1. clone
  const clone = [...task];
  const index = tasks.findIndex((task) => task.id === id);
  const clonedTask = { ...clone[index] };
  clonedTask.completed = !clonedTask.completed;
  clone[index] = clonedTask;
  return clone;

  // 2. sandwich
  return [
    ...tasks.slice(0, index),
    { ...tasks[index], completed: !tasks[index].completed },
    ...tasks.slice(index + 1),
  ];

  // 3. array method
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  // 4. immer
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].completed = !tasks[index].completed;
}

function removeTask(tasks, id) {
  // 1. clone
  const clone = [...tasks];
  const index = tasks.findIndex((task) => task.id === id);
  clone.splice(index, 1);
  return clone;

  // 2. sandwich
  return [...tasks.slice(0, index), ...tasks.slice(index + 1)];

  // 3. array method
  return tasks.filter((task) => task.id !== id);

  // 4. immer
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
}
