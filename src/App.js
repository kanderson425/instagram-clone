import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>

      <Post
        username="kanderson425"
        imageUrl="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
        caption="Wow it works"
      />
      <Post
        username="csmith52"
        imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*"
        caption="I like puppies"
      />
      <Post
        username="ssmith163"
        imageUrl="https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg"
        caption="I like cats"
      />
      <Post
        username="taletell420"
        imageUrl="https://i1.sndcdn.com/artworks-000268545731-9tescq-t500x500.jpg"
        caption="Wow, I'm so high!"
      />
    </div>
  );
}

export default App;
