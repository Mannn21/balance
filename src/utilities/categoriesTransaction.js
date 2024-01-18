import { GoHome } from "react-icons/go";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety, MdOutlineSchool, MdOutlineAttachMoney, MdOutlineEmergency, MdOutlineSpeakerPhone } from "react-icons/md";
import { BiParty } from "react-icons/bi";

export const categoriesTransaction = [
    {
        title: "Primary",
        icon: <GoHome size={20} />
    },
    {
        title: "Transportation",
        icon: <IoCarSportOutline size={20} />
    },
    {
        title: "Health",
        icon: <MdOutlineHealthAndSafety size={20} />
    },
    {
        title: "Education",
        icon: <MdOutlineSchool size={20} />
    },
    {
        title: "Entertainment",
        icon: <BiParty size={20} />
    },
    {
        title: "Communication",
        icon: <MdOutlineSpeakerPhone size={20} />
    },
    {
        title: "Financial and Taxes",
        icon: <MdOutlineAttachMoney size={20} />
    },
    {
        title: "Emergency and Insurance",
        icon: <MdOutlineEmergency size={20} />
    },
]