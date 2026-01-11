import './App.css';

function App() {
  const name = 'danya';
  const imgSrc = './src/img/0abccbf9e6b60335e5b068fd58e66024.jpg';
  const imgAlt = 'Imgssssss';
  const firstNumber = 5;
  const secondNumber = 10;

  const sum = firstNumber + secondNumber;
  const urls = [
    {
      name: `youtube`,
      url: `https://www.youtube.com/`,
    },
    {
      name: `facebook`,
      url: `https://www.facebook.com/`,
    },
    {
      name: `instagram`,
      url: `https://www.instagram.com/`,
    },
  ];
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgSrc} alt={imgAlt} />
      <p>Ласкаво просимо до сайту!</p>
      {urls?.map((link) => (
        <div key={link.name}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            {link.name}
          </a>
        </div>
      ))}
      <p>the result is: {sum}</p>
      <ul>
        {colors.map((color) => (
          <li key={color} className='txt'>
            {color}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
