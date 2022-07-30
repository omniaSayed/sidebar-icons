import * as FaIcons from 'react- icons/fa';
import * as AiIcons from 'react- icons/ai';
import * as FiIcons from 'react- icons/fi';
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
export const SidebarDesignPageData = [
{
title: 'Themes',
  path: '/themes',
  icon: <FaIcons.FaAffiliatetheme />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
subNav: [
    {
      title: 'Themes0',
      path: '/themes/themes0'
    },
    {
      title: 'Themes1',
      path: '/themes/themes1'
    },
    {
        title: 'Themes2',
        path: '/themes/themes2'
    },
    {
        title: 'Themes3',
        path: '/overview/themes3',
     } 
  ]
},
{
  title: 'Templatess',
  path: '/templates',
  icon: <HiIcons.HiTemplate />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Templates0',
      path: '/templates/templates1',
    },
    {
      title: 'Templates1',
      path: '/reports/templates1',
    },
    {
      title: 'Templates2',
      path: '/templates/templates2',
    },
    {
        title: 'Templates3',
        path: '/templates/templates3',
      }
  ]
},
{
  title: 'Navigation',
  path: '/navigation',
  icon: <FiIcons.FiNavigation2 />
},
{
    title: 'Content',
    path: '/content',
    icon: <MdIcons.MdContentPaste/>
  },
  {
    title: 'Header',
    path: '/header',
    icon: <RiIcons.RiHeading />
  },
  {
    title: 'Footer',
    path: '/footer',
    icon: <GiIcons.GiFootPlaster/>
  },
  {
    title: 'SideBar',
    path: '/sidebar',
    icon: <FiIcons.FiSidebar />
  },
  {
    title: 'NavBar',
    path: '/navbar',
    icon: <TbIcons.TbLayoutNavbar />
  }
];