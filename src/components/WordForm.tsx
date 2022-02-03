import { useEffect, useState } from 'react';
import { modifyWord } from '../functions/modifyWord';
import { Genders, Cases } from '../interfaces/variableInterface';
import useDebounce from '../custom-hooks/useDebounce';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function WordForm(): JSX.Element {
  // контролируем состояние инпута, пола, выбранных юзером падежа, пола и также результирующего значения модифицированного слова
  const [noun, setNoun] = useState<string>('');
  const [gender, setGender] = useState<keyof Genders>('female');
  const [wordCase, setWordCase] = useState<keyof Cases>('именительный');
  const [output, setOutput] = useState<string>('');

  //контролируем частоту ререндера, дебаунсим значение, вводимое юзером (700ms)
  const debouncedNoun = useDebounce(noun, 700);

  // присваиваем результат исполнения функции по модификации слова в переменную
  const finalWord = modifyWord(debouncedNoun, wordCase, gender);

  // отслеживаем, когда нам прилетает модифицированное слово и сетим его в стейт результирующего набора
  useEffect(() => {
    setOutput(finalWord);
  }, [finalWord]);

  return (
    <main className="h-[80%] w-full p-5 font-oswald text-stone-800 overflow-y-scroll ">
      <section className="flex flex-col justify-center items-center space-y-8">
        <div className="flex flex-col space-y-5 justify-center items-center">
          <label htmlFor="word" className="text-2xl">
            Введите существительное в единственном числе
          </label>
          <input
            type="text"
            id="word"
            value={noun}
            placeholder="Существительное..."
            onChange={(e) => setNoun(e.target.value)}
            className="outline-none focus:outline-none px-5 py-2 border border-stone-200 text-center"
          />
        </div>

        <hr className="w-[50%] mx-auto border-stone-300" />

        <div className="flex flex-col justify-center items-center space-y-5">
          <p className="text-2xl">Выберите род существительного</p>
          <div className="flex space-x-5 text-lg text-stone-500">
            <button
              onClick={() => setGender('female')}
              className={`${gender === 'female' && 'selected-gender'}`}
            >
              Женский
            </button>
            <button
              onClick={() => setGender('male')}
              className={`${gender === 'male' && 'selected-gender'}`}
            >
              Мужской
            </button>
            <button
              onClick={() => setGender('neuter')}
              className={`${gender === 'neuter' && 'selected-gender'}`}
            >
              Средний
            </button>
          </div>
        </div>

        <hr className="w-[50%] mx-auto border-stone-300" />

        <div className="justify-center items-center flex flex-col space-y-5">
          <label htmlFor="падежи" className="text-2xl">
            Выберите падеж
          </label>
          <select
            onChange={(e) => setWordCase(e.target.value as keyof Cases)}
            name="падежи"
            id="падежи"
            className="px-5 py-2 outline-none selected-option text-yellow-600 font-bold hover:cursor-pointer"
          >
            <option value="именительный">Именительный</option>
            <option value="родительный">Родительный</option>
            <option value="дательный">Дательный</option>
            <option value="винительный">Винительный</option>
            <option value="творительный">Творительный</option>
            <option value="предложный">Предложный</option>
          </select>
        </div>
      </section>
      <section className="relative border-2 border-yellow-600 mt-5 p-8 h-8 w-[50%] mx-auto space-y-2 flex justify-center items-center">
        <p className="font-light text-2xl text-yellow-600 italic">{output}</p>
        <ContentCopyIcon
          onClick={() => navigator.clipboard.writeText(`${output}`)}
          className="absolute right-3 top-3 text-stone-600 cursor-pointer active:scale-110 transition-all duration-500 ease-in-out"
        />
      </section>
    </main>
  );
}

export default WordForm;
