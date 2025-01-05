
import datamenu from "@/database/datamenu";

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
                <span>{item.name}</span>
              </div>
            
          </div>
        ))}
      </div>
    </>
  );
}
