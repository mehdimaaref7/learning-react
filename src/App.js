import React, { useState } from "react";

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

  const [searchTerm, setSearchTerm] = useState('React');

  //A 
  const handleSearch = (event) => {
    //C
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  //console.log('App renders');

  //you can do something here 
  const welcome = {
    greeting: "Hello",
    title: "React",
  }
  return (
    <div>
      <h1> {welcome.greeting} {welcome.title} {getTitle('Hacker Stories')} </h1>

      {/* //B */}
      <Search onSearch={handleSearch}/>
      
      <hr/>
      
      <Search/>
      
      

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
      <LIST_PROPS list_props={stories}/>
      <List2 list={stories}/>
      
      <h1>My Hacker Stories (lifting state up)</h1>

      <hr />
      <Search3 onSearch={handleSearch}/>

      <hr/>

      <List2 list={searchedStories}/>

      <hr/>

      <p> Desctructuring objects </p>


      <Search4 search={searchTerm} onSearch={handleSearch}/>

      <List3 list={searchedStories}></List3>

      <hr/>



      <Search5  search={searchTerm} onSearch={handleSearch} />


    </div>
    
  
       
  );
}

//definition of List component 
const LIST_PROPS = (props) => (
    <ul>
      {props.list_props.map((item) => (
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

const List3 = ({list}) => (
  
  <ul>
    {list.map((item) => (
      <Item2 key={item.objectID} item={item} />

    ))}
  </ul>
);

const Item2 = ({item}) => (
  <li>
    <span>
      <a href={item.url}> {item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>

  </li>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}> {props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
  </li>
);

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    console.log(e => (Error)); // Good code reflex in development to catch errors
    setSearchTerm(event.target.value);

    //B 
    props.onSearch(event);
  }



  return(
    <div>
      <label htmlFor="search">Search: </label>
      
      <input 
        id="search" 
        type="text" 
        onChange={handleChange}
      />
      <p> 
        Searching for <strong>{searchTerm}</strong> .
      </p>
    </div>





    );
  };

  const Search3 = (props) => (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={props.onSearch}></input>
    </div>
  )

  const Search4 = (props) => (
    <div>
      <label htmlFor="search"> Search: </label>
      <input
        id="search"
        type="text"
        value={props.search}
        onChange={props.onSearch}
      />
    </div>
  );

  const Search5 = ({search, onSearch}) => (
    <div>
      <label htmlFor="search"> Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch}
      />
    </div>
  );

export default App;
