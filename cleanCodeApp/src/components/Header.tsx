interface HeaderProps {
  onCreateNewTodo: () => void;
}

export const Header = ({ onCreateNewTodo }: HeaderProps) => {
  return (
    <>
      <header>
        <h1>My revolutionary to-do list!</h1>

        <button onClick={onCreateNewTodo}>Add new todo</button>
      </header>
    </>
  );
};
