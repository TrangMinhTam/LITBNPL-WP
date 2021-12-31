import { SidebarItem } from "../models/SidebarItem";
import { AiFillDashboard, AiFillCaretDown, AiFillCaretUp,AiOutlineDashboard,AiFillCalculator,AiFillProfile,AiFillSetting } from "react-icons/ai"


export const SidebarData: SidebarItem[] = [
        { 
                title:"Dashboard",
                path:"/dashboard",
                icon:<AiFillDashboard />,
                // iconClosed:<AiFillCaretDown />,
                // iconOpenned:<AiFillCaretUp />,
                // subnav:[
                // {
                //         title: 'Dashboard',
                //         path: '/dashboard',
                //         icon: <AiOutlineDashboard />
                // }
                // ]
        },
        {
                title:"Công cụ tính khoản vay",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillCalculator/>,        
        },
        {
                title:"Công cụ tính gợi ý mức vay",
                path:"/cong-cu-tinh-goi-y-muc-vay",
                icon:<AiFillCalculator/>,        
        },
        {
                title:"Công cụ tính giá thẩm định",
                path:"/cong-cu-tinh-gia-tham-dinh",
                icon:<AiFillCalculator/>,        
        } ,
        {
                title:"Đã tất toán",
                path:"/da-tat-toan",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Chờ duyệt",
                path:"/cho-duyet",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Đang trả",
                path:"/dang-tra",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Trễ hẹn",
                path:"/tre-hen",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Chi phí mức sống",
                path:"/chi-phi-muc-song",
                icon:<AiFillSetting/>,        
        } ,
        {
                title:"Chỉ số khả năng trả nợ",
                path:"/chi-so-kha-nang-tra-no",
                icon:<AiFillSetting/>,        
        },
                 
];
    
