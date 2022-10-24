import { Fragment } from 'react';

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className='bg-slate-900 min-h-screen text-white' >
        <div className='w-[1000px] mx-auto py-[7rem]'>
          {props.children}
        </div>
      </main>
    </Fragment>
  );
}

export default Layout;
