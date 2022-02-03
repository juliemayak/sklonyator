import values from '../testData.json';
import { Genders, Cases } from '../interfaces/variableInterface';

export function modifyWord(noun: string, wordCase: keyof Cases, gender: keyof Genders) {
  for (let i = -4; i <= -1; i++) {
    //отрезаем от слова последние несколько букв (как правило, окончание + суффикс)
    let nounEnding = noun.slice(i);
    // проверяем, если отрезанное от слова окончание присутствует в нашем "справочнике"
    let isEndingFound = values[gender].find((rule) => {
      return rule.ending.find((ending) => ending === nounEnding);
    });
    // если такое окончание найдено и падеж не именительный, то
    if (isEndingFound && wordCase !== 'именительный') {
      // случай, когда нам нужно отрезать больше букв с конца слова, чтобы добавить соответствующее падежу окончание – находим "беглые" гласные
      const sliceTwoLetters = isEndingFound.changes[wordCase].includes('*');
      // случай, когда слово заканчивается на корень - не нужно удалять букву корня
      const noSlice = isEndingFound.changes[wordCase].includes('+');
      // если слово не заканчивается на коренную букву и есть беглые гласные, то отрезаем их от окончания и также убираем * из окончаний в справочнике и возвращаем модифицированное слово
      if (!noSlice) {
        return (
          noun.slice(0, sliceTwoLetters ? -2 : -1) +
          (sliceTwoLetters
            ? isEndingFound.changes[wordCase].slice(1)
            : isEndingFound.changes[wordCase])
        );
      }
      // если слово заканчивается на коренную букву, то убираем + из словарика окончаний и возвращем модифицированное слово
      return noun + isEndingFound.changes[wordCase].slice(1);
    }
  }

  return noun;
}
