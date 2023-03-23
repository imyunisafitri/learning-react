import poster from "../assets/img/miauw.png";

const Home = () => {
  return (
    <div className="home">
      <div className="p-home-left">
        <h1>Meow Catt Blog</h1>
        <p>
          Meow meow meoww... moew miauw miauuMeow meow meoww... moew miauw miauu Meow meow meoww...
          moew miauw miauu Meow meow meoww... moew miauw miauuMeow meow meoww... moew miauw miauu
          Meow meow meoww... moew miauw miauu Meow meow meoww... moew miauw miauu Meow meow meoww...
          moew miauw miauu Meow meow meoww... moew miauw miauu
        </p>
      </div>
      <img src={poster} alt="poster-1" />
    </div>
  );
};

export default Home;
