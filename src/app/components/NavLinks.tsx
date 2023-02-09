'use client'

import { categories } from "../../../constants";
import NavLink from "./NavLink";
import { usePathname } from 'next/navigation';
  
export default function NavLinks() {

    const pathname = usePathname();
    const isActive = (path: string) => {
      if(pathname?.split('/').pop() === '') return 'home' === path;
      return pathname?.split('/').pop() === path;
    }
  
   return (
     <nav className="grid grid-cols-4 max-w-6xl mx-auto ">
       {categories.map(category=>(
        <NavLink 
          key={category}
          category={category} 
          isActive={isActive(category)}
        />
       ))}
     </nav>
   )
 }