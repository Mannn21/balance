import { MdDashboard } from "react-icons/md";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";

export const sidebarNavigation = [
    {
        title: "Dashboard",
        image: <MdDashboard size={25} />,
        link: "/dashboard"
    },
    {
        title: "Income",
        image: <FaHeart size={25} />,
        link: "/dashboard/income"
    },
    {
        title: "Expense",
        image: <FaMoneyBill1Wave size={25} />,
        link: "/dashboard/expense"
    },
    {
        title: "Savings",
        image: <MdSavings size={25} />,
        link: "/dashboard/savings"
    },
    {
        title: "Graphics",
        image: <HiChartBar size={25} />,
        link: "/dashboard/graphics"
    },
    {
        title: "Profile",
        image: <FaUser size={25} />,
        link: "/dashboard/profile"
    }
]