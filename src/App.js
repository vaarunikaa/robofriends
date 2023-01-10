// import logo from './logo.svg';
// import './App.css';

function App({ name,email,id}) {
  
  return (
    <div className='tc bg-light-green dib br3 ma2 grow'>
      <img alt='robots' src={'https://robohash.org/$(props.id)?200x200'}/>
      <div>
      <h2>{name}</h2>
      <p>{email}</p>
      </div>
      </div>
  );
}

export default App;
