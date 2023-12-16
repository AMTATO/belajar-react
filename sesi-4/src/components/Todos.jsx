/* eslint-disable react/prop-types */
const Todos = ({ todo }) => {
  return (
    <div>
      {todo.completed ? (
        <p className="bg-success">{todo.title}</p>
      ) : (
        <p className="bg-danger">{todo.title}</p>
      )}
    </div>
  );
};

export default Todos;
