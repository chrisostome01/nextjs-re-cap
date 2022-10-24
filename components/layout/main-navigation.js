import Link from 'next/link';

function MainNavigation() {
  return (
    <header className='bg-slate-800 py-3 shadow-lg fixed  z-50 w-full'>
       <nav className="flex justify-between font-pop py-3  items-center w-[1000px] mx-auto ">
        <div className=" font-extrabold text-2xl text-gray-200">
          Meetups
        </div>
        <ul className="flex text-gray-400  gap-5 text-md">
          <li className="hover:text-gray-300">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/new-meetup">
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
