'use client'
// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
  
  // nav data
  export const navData = [
    { name: 'home', path: '/home', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'skills', path: '/skills', icon: <HiViewColumns /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    {
      name: 'projects',
      path: '/projects',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'contact',
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];
  import Link from 'next/link';
  import {useRouter} from 'next/navigation';
  
  const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return(
      <nav className='flex flex-col items-center xl:justify-center py-6 gap-y-4 fixed h-max bottom-0
       mt-auto xl:right-[4%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
        {/* inner */}
        <div className='flex rounded-lg w-[90%] xl:flex-col items-center justify-between xl:justify-center 
        gap-y-10 px-4 md:px-40 xl:px-0 h-[40px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl
         xl:text-xl xl:rounded-md'>
          {navData.map((link, index)=>{
            return (
              <Link
              className={`${link.path === pathname && 'text-accent hover:text-black'} hover:bg-teal-500 p-2 rounded-md`}
              href={`#${link.name}`} 
              key={index}>
                <span className='text-3xl'>{link.icon}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      );
  };
  
  export default Nav;
  