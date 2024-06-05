import Image from "next/image";
const routes = [
  {
    path: "/",
    icon: <Image src={"/images/home.svg"} width={12} height={12} />,
    title: "Dashboard",
    roles: ["admin", "user"],
  },
  {
    path: "/dash/third",
    icon: <Image src={"/images/job.svg"} width={18} height={20} />,
    title: "Job Post",
    roles: ["admin", "user"],
  },
  {
    path: "/dash/second",
    icon: <Image src={"/images/app.svg"} width={18} height={20} />,
    title: "Application",
    roles: ["admin", "user"],
  },
  {
    path: "/dash/rec",
    icon: <Image src={"/images/userRec.png"} width={18} height={20} />,
    title: "Recruiters",
    roles: ["admin", "user"],
  },
  {
    path: "/dash/Professionals",
    icon: <Image src={"/images/userApplicants.png"} width={18} height={20} />,
    title: "Professionals",
    roles: ["admin", "user"],
  },
  {
    path: "/dash/Freshers",
    icon: <Image src={"/images/userApplicants.png"} width={18} height={20} />,
    title: "Freshers",
    roles: ["admin", "user"],
  },
  {
    path: "/profile",
    icon: <Image src={"/images/userIcon.gif"} width={18} height={20} />,
    title: "Profile",
    roles: ["admin", "user"],
  },


];

export default routes;
