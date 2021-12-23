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
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillCalculator/>,        
        },
        {
                title:"Công cụ tính giá thẩm định",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillCalculator/>,        
        } ,
        {
                title:"Đã tất toán",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Chờ duyệt",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Đang trả",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Trễ hẹn",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillProfile/>,        
        } ,
        {
                title:"Chi phí mức sống",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillSetting/>,        
        } ,
        {
                title:"Chỉ số khả năng trả nợ",
                path:"/cong-cu-tinh-khoan-vay",
                icon:<AiFillSetting/>,        
        },
                 
];
    
