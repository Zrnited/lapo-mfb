interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    title: "Learn React",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Next.Js",
    completed: false,
  },
];

// export { todos };

//to fetch todos
export const fetchTodos = async (query = ""): Promise<Todos[]> => {
  //line to mimic API call after 1 sec
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("fetched todos");

  //return an array that matches the query parameter
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  //return the filtered array containing the query parameter
  return [...filteredTodos];
};

//to add todos
export const addTodo = async (todo: Pick<Todos, "title">): Promise<Todos> => {
  //line to mimic an API call after 1 sec
  await new Promise((resolve) => setTimeout(resolve, 1000));

  //create a new to-do Object
  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  //add new object to existing todos array
  todos.push(newTodo);

  //return the object
  return newTodo;
};
