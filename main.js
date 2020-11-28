import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const getAdvice = document.getElementById("getAdvice");





getAdvice.addEventListener('click', async (e) => { 
  e.preventDefault(); //this line helps make the input act like a button 


  const adviseUrl = `${process.env.API_BASE_URL}/advice`

  try {
    let response = await axios.get(adviseUrl);
    let advice = response.data.slip.advice

    console.log(advice);
    
    //add advice text to advice-quote board
    let paragraphElement = document.createElement('p');
    paragraphElement.setAttribute('id', 'advice-text');
    paragraphElement.textContent = `${advice}`;

    document.querySelector('div').innerHTML = '';
    document.querySelector('div').appendChild(paragraphElement);


  } catch { 
    console.log(e);
  }
} )