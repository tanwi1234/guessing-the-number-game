
let randomNumber= Math.floor(Math.random() * 100) + 1;
const guesses=document.querySelector('.one');
const result=document.querySelector('.two');
const loworhi=document.querySelector('.three');
const guessSubmit = document.querySelector('.guesssubmit');
const guessField = document.querySelector('.guessField');

let guesscount = 1;
let resetbutton;

guessField.focus();
function checkguesses()
{
	let userguess = Number(guessField.value);
	if(guesscount === 1)
	{
		guesses.textContent ='Previous guesses: ';
	}
	guesses.textContent+= userguess + ' ';

	if(userguess === randomNumber)
	{
		result.textContent='Congratulations!You got it right!';
		result.style.backgroundColor="green";
		loworhi.textContent = '';
		setgameover();
	}
	else if(guesscount === 10)
	{
		result.textContent='!!!GAME OVER!!!';
		loworhi.textContent = '';
		setgameover();
	}
	
	else
	{
		result.textContent='Wrong!';
		result.style.backgroundColor="red";
		if(userguess>randomNumber)
		{
		loworhi.textContent='Last guess was too high!';
	    }
	   else if(userguess<randomNumber)
	   {
		loworhi.textContent='Last guess was too low!';
	   }
    }
	
	guesscount++;
	guessField.value=' ';
	guessField.focus();
}

function setgameover()
{
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetbutton = document.createElement('button');
	resetbutton.textContent = 'Start New Game';
	resetbutton.style.backgroundColor="black";
	resetbutton.style.color="white";
	resetbutton.style.margin= "40px 875px";
	resetbutton.style.padding= "10px 17px";
    document.body.append(resetbutton);

    resetbutton.addEventListener('click', resetGame);

}
function resetGame()
{
	guesscount=1;
	const resetParas = document.querySelectorAll('#mainsection p');
    for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = ' ';
  }
	resetbutton.parentNode.removeChild(resetbutton);
	guessField.disabled = false;
    guessSubmit.disabled = false;
	guessField.value='';
	guessField.focus();
	result.style.backgroundColor = 'white';
	randomNumber= Math.floor(Math.random() * 100) + 1;
}
guessSubmit.addEventListener('click',checkguesses);
