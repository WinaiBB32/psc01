
import datamenu from "@/database/datamenu";

const menuItems = datamenu();

export default function Home() {
  return (
    <>
    <div className="container">
    {menuItems.map((item, index) => (
          <div key={index} className="card">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
    </div>
    </>
  );
}
