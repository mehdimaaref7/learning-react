const getTitle = (title) => (title);


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


const App = () => {
  const stories = [
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

      {/* creating an instance of List component */}
      {/* <List list={stories}/> */}
      {/* creating another instance of List component */}
      <List />
      <List_props list={stories}/>
      <List2 list={stories}/>
      
    </div>
    
       
  );
}

//definition of List component 
const List_props = (props) => (
    <ul>
      {props.list.map((item) => (
          <li key={item.objectID}>
            <p>
                <a href={item.url}>{item.title}</a>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>{item.grade}</span>
              </p>
          </li>
        ))}
    </ul>
  );
  const List = () => (
    <ul>
      {list.map((item) => (
          <li key={item.objectID}>
            <p>
                <a href={item.url}>{item.title}</a>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>{item.grade}</span>
              </p>
          </li>
        ))}
    </ul>
  );
  
  
const List2 = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />

    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}> {props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
  </li>
);

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return(
    <div>
      <label htmlFor="search">Search: </label>
      
      <input 
        id="search" 
        type="text" 
        onChange={handleChange}
      />
    </div>
    );
  };

export default App;
