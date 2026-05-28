import Button from "./button";

interface HeaderProps {
    name ?: string;
}
const Header = ({name = "Arkar Hein"} : HeaderProps) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <Button/>
      <h2>Welcome to React Crash Course</h2>
    </div>
  )
}

export default Header
