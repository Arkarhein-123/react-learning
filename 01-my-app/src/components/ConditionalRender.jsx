export default function conditionalRender() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <h1>You are Logged in</h1> : <h1>You are not login</h1>}
    </div>
  );
}
