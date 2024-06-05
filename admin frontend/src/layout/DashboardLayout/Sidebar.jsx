import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import routes from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = ({ role }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  useEffect(() => {
    if (router.pathname) {
      if (current !== router.pathname) {
        setCurrent(router.pathname);
      }
    }
  }, [router, current]);

  return (
    <Sider collapsible style={{ paddingTop: "1.5rem", background:"white", width: "248px" }} className="">
      <div className="flex items-center justify-center ">
        <Image src={"/images/Hire.png"} width={100} height={48}  className="px-5 xs:hidden"/>
        
      </div>
      <Menu
        style={{
          marginTop: "2rem",
        }}
        className="sidebar"
        theme="light"
        defaultSelectedKeys={[current]}
        onClick={({ key }) => {
          setCurrent(key);
        }}
        
        mode="inline"
        items={routes.map((route) => {
          if (route.roles.includes(role)) {
            return {
              key: route.path,
              icon: route.icon,
              label:
                route?.childrens?.length > 0 ? (
                  <Link
                    href={route.path}
                    className={`font-normal text-base font-poppins ${
                      current === route.path ? 'bg-blue-600 text-white' : 'text-black'
                    }`}
                  >
                    {route.title}
                  </Link>
                ) : (
                  <Link
                    href={route.path}
                    className="font-normal text-base font-poppins text-black"
                  >
                    {route.title}
                  </Link>
                ),
              children: route?.childrens?.map((child) => {
                if (child.roles.includes(role)) {
                  return {
                    key: child.path,
                    icon: child.icon,
                    label: (
                      <Link
                        href={child.path}
                        className="font-normal text-base font-poppins text-black"
                      >
                        {child.title}
                      </Link>
                    ),
                  };
                }
              }),
            };
          }
        })}
      />
    </Sider>
  );
};

export default Sidebar;
