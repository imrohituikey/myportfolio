
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
      name : 'github', icon: 'github.png' , path :'https://github.com/imrohituikey'
    },
    {
      name : 'linkdin', icon: 'linkdin.png', path :'/' 
    },
    {
      name : 'youtube', icon: 'yt.png' , path :'/'
    },
  ]

const projectData = [
  {name:'project01', icon: 'portfolioimage5.jpg',path : '/'},
  {name:'project02', icon: 'portfolioimage5.jpg',path : '/'},
  {name:'project03', icon: 'portfolioimage5.jpg',path : '/'},
  {name:'project04', icon: 'portfolioimage5.jpg',path : '/'},
  {name:'project05', icon: 'portfolioimage5.jpg',path : '/'},
  {name:'project06', icon: 'portfolioimage5.jpg',path : '/'},
]
const skillData = [
  {name : "Html", icon: 'html-5.png', level:2, class: 'animate-none', about : 'Html Basics, DOM, Input Attributes, HTML API, HTML + CSS + JavaScript, HTML Validator'},
  {name : "css", icon: 'css.png', level:2,class: 'animate-none', about: 'Basics, Selectors, Properties, Pseudo-classes & Elements, Modules'},
  {name : "javascript", icon: 'javascript.png', level:2, class: 'animate-none', about:''},
  {name : "Java", icon: 'java.png', level:2,class: 'animate-none', about: ''},
  {name : "react", icon: 'react.png', level:2, class: 'animate-spin', about:''},
  {name : "node", icon: 'node.png', level:2, class: 'animate-none', about:''},
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
    projectData,
    skillData,
}