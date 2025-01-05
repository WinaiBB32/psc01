import { BiSolidHome, BiSolidPlusCircle,BiSolidFile   } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaGear } from "react-icons/fa6";


const datamenu = () => {
    const menuItem = [
        {

            name: "หน้าหลัก",
            icon: <BiSolidHome />,
            path: "/",
          },
          {
            name: "รายการครุภัณฑ์",
            icon: <FaListUl />,
            path: "/list",
          },
          {
            name: "เพิ่มครุภัณฑ์",
            icon: <BiSolidPlusCircle />,
            path: "/add",
          },
          {
            name: "ประวัติการเบิก",
            icon: <MdOutlineManageHistory />,
            path: "/history",
          },
          {
            name: "รายงาน",
            icon: <BiSolidFile />,
            path: "/report",
          },
          {
            name: "ตั้งค่า",
            icon: <FaGear />,
            path: "/setting",
          },
    ];
    return menuItem;
}

  export default datamenu;
  