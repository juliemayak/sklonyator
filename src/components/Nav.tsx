function Nav(): JSX.Element {
  return (
    <nav className="sticky w-full h-auto py-3 border-b border-stone-400 shadow-md bg-stone-500 flex items-center justify-center">
      <hr className="border-stone-50 w-1/3 " />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-stone-50 font-comforter text-6xl px-5 py-2">Склонятор</h1>
        <h2 className="text-xl font-oswald px-5 py-2 text-stone-50">
          Сайт для склонения существительных по падежам
        </h2>
      </div>
      <hr className="border-white w-1/3" />
    </nav>
  );
}

export default Nav;
