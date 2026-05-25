export default function PersonInfo({name, occupation, country,greet, children}) {

// const {name, occupation, country,greet} = props;

  return (
    <div>
      <h1>
        I am {name}. My occupation is {occupation}. I live in {country}.
      </h1>
      <h2>{greet()}</h2>
      {children}
    </div>
  );
}
