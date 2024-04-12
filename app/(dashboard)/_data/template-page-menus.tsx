import { TemplatePageMenuProps } from "@/types";
import { Hotel, LineChart, Package } from "lucide-react";

const iconClassName = "w-4 h-4 stroke-[1.5] text-darkergray"

export const templatePageMenus: TemplatePageMenuProps[] = [
  {
    title:'All templates',
    icon:<Hotel className={iconClassName}/>,
    link:'/templates'
  },
  {
    title:'Whiteboard',
    icon:<LineChart className={iconClassName}/>,
    link:'',
    submenus: [
      {
        title:'Test',
        icon:<Package className={iconClassName}/>,
        link:'/'
      }
    ]
  },
  {
    title:'Design Item',
    icon:<LineChart className={iconClassName}/>,
    link:'',
    submenus: [
      {
        title:'Testtwo',
        icon:<Package className={iconClassName}/>,
        link:'/'
      }
    ]
  }
]