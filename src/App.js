function getTitle(title){
  return title;
}

function App() {
  //you can do something here 
  const welcome = {
    greeting: "Hey",
    title: "React",
  }
  return (
    <div>
      <h1> {welcome.greeting} {welcome.title} {getTitle('Title')} </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
    </div>
       
  );
}

export default App;
