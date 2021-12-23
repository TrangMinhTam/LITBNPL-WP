export interface SidebarItem{
    title: string;
    path: string;
    icon: any;
    iconOpenned?: any;
    iconClosed?: any;
    subnav?: SidebarItem[];
}