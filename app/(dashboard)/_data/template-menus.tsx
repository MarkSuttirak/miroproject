import { TemplateMenuProps } from "@/types";
import { LineChart, Package } from "lucide-react";

const iconClassName = "w-4 h-4 stroke-[1.5] text-darkergray"

export const templateMenus: TemplateMenuProps[] = [
  {
    title:'',
    icon:<LineChart className={iconClassName}/>,
    submenus: [
      {
        title:'',
        icon:<Package className={iconClassName}/>,
        link:''
      }
    ]
  }
]