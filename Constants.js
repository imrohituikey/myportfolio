
const webName = "Rohit.Dev"
const webDescri = "Hey there This is my official web portfolio.."

import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
  
  const socials = [
    {
      name : 'gmail', icon: 'gmail.png', path :'/'
    },
    {
      name : 'twitter', icon: 'twitter.png' , path :'/'
    },
    {
      name : 'github', icon: 'github.png' , path :'/'
    },
    {
      name : 'skype', icon: 'skype.png' , path :'/'
    },
    {
      name : 'linkdin', icon: 'linkdin.png', path :'/' 
    },
    {
      name : 'youtube', icon: 'yt.png' , path :'/'
    },
  ]
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

const contactdata = [
    {
        name : 'Gmail',
        icon : 'gmail.png',
        data : 'Rohit.dev81@gmail.com'
    },
    {
        name : 'Location',
        icon : 'location.png',
        data : 'Bhopal Madhya Pradesh India'
    },
    {
        name : 'Phone',
        icon : 'mobile.png',
        data : '+91 8959403677'
    },
]
export {
    webName,
    webDescri,
    contactdata,
    socials,
}