import icons from "./icon"

const { MdOutlineLibraryMusic, RiCompassDiscoverLine, AiOutlineLineChart, BiNews } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám phá',
        icon: <RiCompassDiscoverLine size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <AiOutlineLineChart size={24}/>
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <BiNews size={24}/>
    },
]