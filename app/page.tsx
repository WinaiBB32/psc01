
import datamenu from "@/database/datamenu";
import Link from "next/link";

const menuItems = datamenu();

export default function Home() {
  return (
    <>
      <div className="container">
        {menuItems.map((item, index) => (
          <div key={index} className="card">
            
              <div className="menu-items">
                <div className="icons">
                  {item.icon}
                </div>
                <Link href={item.path}><span>{item.name}</span></Link>
              </div>
            
          </div>
        ))}
      </div>
    </>
  );
}
