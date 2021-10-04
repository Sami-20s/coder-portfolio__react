import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
export const linksList = [
    { id: 1, img: <BiPhoneCall className="icon" />, title: "Call Me", subTitle: "+123 456 7890" },
    { id: 2, img: <HiOutlineMail className="icon" />, title: "Email", subTitle: "info@coder.com" },
    {
        id: 3,
        img: <HiOutlineLocationMarker className="icon" />,
        title: "Address",
        subTitle: "27 Division St, New York, NY 10002, USA",
    },
];
