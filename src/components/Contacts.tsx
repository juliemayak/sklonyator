import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contacts(): JSX.Element {
  return (
    <footer className="w-full bg-stone-500 text-stone-300 h-auto p-5 text-center flex flex-col justify-center items-center border-t-2 border-stone-600">
      <h5>
        &copy; 2022 Выполнено{' '}
        <a
          href="https://julia-panko.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:underline hover:text-stone-50 transition-all duration-300 ease-linear"
        >
          Юлией Панько
        </a>
      </h5>
      <div className="flex justify-center items-center mt-2 space-x-8">
        <a href="https://t.me/juliemayak" target="_blank" rel="noopener noreferrer">
          <TelegramIcon className="svg cursor-pointer hover:text-stone-50 transition duration-300 ease-in-out" />
        </a>
        <a href="https://github.com/juliemayak" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="svg cursor-pointer hover:text-stone-50 transition duration-300 ease-in-out" />
        </a>
        <a href="https://www.instagram.com/julie.panko/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="svg cursor-pointer hover:text-stone-50 transition duration-300 ease-in-out" />
        </a>
      </div>
    </footer>
  );
}

export default Contacts;
