function getTitle(title){
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    grade: 5,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    grade: 4.5,
    points: 5,
    objectID: 1, 
  },
];

function App() {
  //you can do something here 
  const welcome = {
    greeting: "Hey",
    title: "React",
  }
  return (
    <div>
      <h1> {welcome.greeting} {welcome.title} {getTitle('Hacker Stories')} </h1>
      <Search/>
      <hr />
      <ul>
        {list.map(function (item){
          return <li>{item.title}</li>
        })}
      </ul>


      <hr/>


      <ul>
        {list.map(function(item){
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>


      <hr/>

      <ul>
        {list.map(function (item){
          return(
            <li key={item.objectID}>
              <p>
                <a href={item.url}>{item.title}</a>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>{item.grade}</span>
              </p>
            </li>
          )
        })}
      </ul>

      {/* null rendering */}
      <ol>
        {list.map(function (item) {
          return(null) //Render nothing is allowed 
        })}
      </ol>

      <hr/>

      <List/>
    </div>
    
       
  );
}


function List() {
  return(
    <ul>
      {list.map(function(item) {
        return(
          <li key={item.objectID}>
            <p>
                <a href={item.url}>{item.title}</a>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>{item.grade}</span>
              </p>
          </li>
        )
      })}
    </ul>
  )
}

function Search() {
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
    </div>
    

  )
}

export default App;
