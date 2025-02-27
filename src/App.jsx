import './App.css'
import SearchBar from './components/SearchBar'
import { LuMail, LuAudioLines } from "react-icons/lu";
import { IoNotificationsOutline, IoSettingsOutline,IoInformationCircleSharp } from "react-icons/io5";
import { RiDashboard2Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { RiHistoryFill } from "react-icons/ri";
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Row from './components/Row';
import HistoryRow from './components/HistoryRow';
import { HiLink } from "react-icons/hi";
import { PiMountainsLight } from "react-icons/pi";
import { BiSolidRightArrow } from "react-icons/bi";



const items= [ <RiDashboard2Line className='w-[40px] h-[40px] rounded-[3.15px] p-[9.44px] m-[6.3px]' />, <TbReportAnalytics className='w-[40px] h-[40px] rounded-[3.15px] p-[9.44px] m-[6.3px]' />, <RiHistoryFill className='w-[40px] h-[40px] rounded-[3.15px] p-[9.44px] m-[6.3px]' />]
const items2= [ <IoNotificationsOutline className='w-[40px] h-[40px] rounded-[3.15px] p-[9.44px] m-[6.3px] hover:animate-pulse' />, <IoSettingsOutline className='w-[40px] h-[40px] rounded-[3.15px] p-[9.44px] m-[6.3px] hover:animate-spin' />]
const itemsStyle = { hover: "hover:bg-[#9D5297]" }
const User =  { name: "Mohammed", score: "92%"}
const data = [
  { name: 'Authentic (0-5%)', value: 45, color: '#3358A6' },
  { name: 'Low suspicion (0-5%)', value: 20, color: '#E66F9F' },
  { name: 'Deep fake (0-5%)', value: 10, color: '#F7D586' },
  { name: 'Authentic (0-5%)', value: 15, color: '#8D4DA3' },
  { name: 'Low suspicion (0-5%)', value: 5, color: '#4FD1C5' },
  { name: 'Deep fake (0-5%)', value: 5, color: '#2AB7CA' },
];

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-col mb-3 gap-1">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center">
          <div className="w-3 h-1 mr-2" style={{ backgroundColor: entry.color }}></div>
          <span className="text-xs text-gray-700">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
const Badge = ({bgColor, text, icon}) => {
  return (
    <div className='flex flex-row items-center w-[164px] h-[44px] rounded-4xl justify-center hover:scale-105 transition-all duration-200 mr-5 shadow-md' style={{backgroundColor: bgColor}}>
      {icon}
      <p className='text-white ml-2 text-sm font-semibold'>{text}</p>
    </div>
  )
}
function App() {

  return (
    <div className='min-h-screen w-screen bg-gray-200 flex flex-col overflow-auto'>

      {/* Header */}
      <div className='h-14 w-full bg-white  border-gray-200  items-center flex flex-row shadow-md'>
        <h2 className='text-3xl text-black px-12 font-bold mb-1 mr-30' style={{ fontFamily:"cursive", background: "linear-gradient(to right, #6699FF, #9966CC, #CC3399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>avancer.ai</h2>
        <SearchBar
          placeholder='Type to search'
        />
       <LuMail className='w-6 h-6 text-black ml-30 hover:scale-110 transition-all duration-200' />
       <IoNotificationsOutline className='w-6 h-6 text-black ml-10 hover:scale-110' />
       <div className="w-10 h-9  rounded-full mx-10 overflow-hidden hover:border-2 hover:border-[#9D5297] hover:scale-110 transition-all duration-200">
          <img 
           src="https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" 
           alt="Profile" 
           className="w-full h-full object-cover"
          />
       </div>
      </div>

      {/* Sidebar & Main Content */}
      <div className='flex flex-row w-full h-full'>
        {/* Sidebar */}
      <div className='w-[85px] h-[756.34px] top-[98px] left-[80px] rounded-[62.69px] mt-10 m-[80px] mr-[28px] bg-[#893976] flex flex-col items-center shadow-md hover:scale-105 transition-all duration-200'>
        <div className='mb-50 mt-10'>
        <h2 className='text-white font-bold text-sm ml-2'>menu</h2>
         {items.map((item, index) => (
          <div className={`rounded-4xl ${itemsStyle.hover} transition-all duration-200`} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div>
          {items2.map((item, index) => (
            <div className={`rounded-4xl ${itemsStyle.hover} transition-all duration-200`} key={index}>
                {item}
              </div>
            ))}
        </div>
        <div className='h-[0.5px] w-[70px] bg-white mb-4'></div>
        <h2 className='text-white font-bold text-sm mb-5'>profile</h2>
        <div className="w-10 h-10  rounded-full mx-10 overflow-hidden border-2 borfer-white hover:border-[#9D5297] hover:scale-110 transition-all">
          <img 
           src="https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" 
           alt="Profile" 
           className="w-full h-full object-cover"
          />
       </div>
      </div>

      {/* Main Content */}
      <div className=' mt-[30px] text-black text-lg flex flex-col'>

        {/* Header */}
        <div className='flex flex-row justify-between'>
        <h2 className='font-bold flex flex-row '> Hey {User.name} - <h2 className=' text-[#71717A] font-normal ml-2'> here’s your content verification for today</h2></h2> 
       
        </div>

        {/* Content */}
        <div className=' h-[1008px] w-[760px] mt-7'> 
          <div className='h-[230.69px] w-[760px] flex flex-row'>
            {/* Video */}
          <div className='h-full w-[410px]  hover:scale-105 transition-all duration-200'>
          <video className='h-full w-full rounded-xl' controls>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          </video>
        </div>

           {/* Score */}
          <div className='h-full w-[302px] ml-[28px] rounded-xl bg-white items-center flex flex-col shadow-md hover:scale-105 transition-all duration-200'>
            {/* Header */}
            <div className='self-start ml-10 mt-3 w-[75%] flex flex-col'>
            <div className='w-full flex flex-row justify-between'>
            <h3 className='text-[#828282] font-bold self-start text-sm'>Score</h3>
            <div className="relative group">
              <IoInformationCircleSharp className="w-6 h-6 text-[#828282] cursor-pointer" />
              <div className=" h-6 absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#3a3a3a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p>Informations</p>
              </div>
            </div>
            </div>
            <p className='text-[33px] font-semibold'>{User.score}</p>
          </div>

            {/* Pie Chart */}
            <div className='justify-center items-center w-full max-h-[full] rounded-b-xl border-t-3 border-[#ECECEC] flex flex-row shadow-md'>
            <PieChart width={150} height={150} style={{ marginTop: "-10px" }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={60}
                dataKey="value"
                fill="#8884d8"
                >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} className='stroke-0 hover:stroke-3 stroke-black' />
              ))}
              </Pie>
            </PieChart>
              <CustomLegend payload={data.map(({ name, color }) => ({ value: name, color }))} />
            </div>

           </div>
          </div>

          {/* Description */}
          <div className='h-[152px] w-[740px] bg-white mt-[28px] rounded-xl flex flex-col self-center shadow-md hover:scale-102 transition-all duration-200'>
            <div className='h-full ml-5 mt-3'>
              <h2 className='font-bold text-lg mb-7'> Video Description </h2>
              <p className='text-[#71717A] text-sm pr-10'>
              Avancer apply processes, methods, skills,
               knowledge and experience to achieve specific 
               project objectives according to the project 
               acceptance criteria within agreed parameters. 
               Project management has final deliverables 
               that are constrained to a finite timescale 
               and budget. 
              </p>
            </div>
          </div>

        {/* Detection Details */}
        <div className='h-[650px] w-[740px] bg-white rounded-xl mt-[28px] mb-[300px] broder-b-2  p-5 shadow-md hover:scale-102 transition-all duration-200'>
          <div className='flex flex-row justify-between'>
            <h2 className='text-lg font-bold mb-4'>Detection Details
              <p className='text-[#71717A] text-sm font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipis.
              </p>
            </h2>
            <a href="#" className=' text-sm font-normal h-2 flex flex-row' style={{color: '#678AD9'}}>
               Export Results <IoIosArrowForward className='w-4 h-4 mt-1 ml-2' />
            </a>
            
          </div>
          {/* 1st Row */}
          <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#A1BFF27A' },
            { text: 'Eye Blinking 0', bgColor: '#C3ECF4' },
            { text: 'Eye Blinking 0', bgColor: '#D0FFEE' },
            { text: 'Eye Blinking 0', bgColor: '#F5D4FF' },
          ]}
          />
          {/* 2nd Row */}
          <Row text='Audio Analysis' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#A1BFF27A' },
            { text: 'Eye Blinking 0', bgColor: '#D0FFEE' },
          ]}
          />
          {/* 3rd Row */}
           <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#A1BFF27A' },
            { text: 'Eye Blinking 0', bgColor: '#C3ECF4' },
            { text: 'Eye Blinking 0', bgColor: '#F5D4FF' },
          ]}
          />
          {/* 4th Row */}
           <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#A1BFF27A' },
            { text: 'Eye Blinking 0', bgColor: '#F5D4FF' },
          ]}
          />
          {/* 5th Row */}
           <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#FEE2E2' },
            { text: 'Eye Blinking 0', bgColor: '#C3ECF4' },
            { text: 'Eye Blinking 0', bgColor: '#D0FFEE' },
            { text: 'Eye Blinking 0', bgColor: '#F5D4FF' },
          ]}
          />
          {/* 6th Row */}
           <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#FEE2E2' },
            { text: 'Eye Blinking 0', bgColor: '#D0FFEE' },
          ]}
          />
          {/* 7th Row */}
           <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#FEE2E2' },
            { text: 'Eye Blinking 0', bgColor: '#C3ECF4' },
            { text: 'Eye Blinking 0', bgColor: '#F5D4FF' },
          ]}
          />
          {/* 8th Row */}
           <Row text='Facial Artifacts' 
           pills={[
            { text: 'Eye Blinking 0', bgColor: '#FEE2E2' },
            { text: 'Eye Blinking 0', bgColor: '#F5D4FF' },
          ]}
          />
        </div>

        </div>
    
      </div>
      {/* Right Side */}
      <div className='h-full w-[413px] mt-7 rounded-xl flex flex-col justify-center'>
        {/* Badges */}
      <div className='flex flex-row justify-end'>
      <Badge bgColor="#678AD9" text='Insert Keyword' icon={<TbReportAnalytics className=' text-white' />} />
      <Badge bgColor="#893976" text='Analyze' icon={<FaArrowTrendUp className=' text-white h-4 w-4' />} />
      </div>
      {/* Original Video */}
      <div className='w-full h-[340px] bg-white rounded-xl mt-3 broder-b-2  p-5 shadow-md hover:scale-102 transition-all duration-200'>
        <h2 className='text-lg text-black font-bold mb-4'>Original Video
          <p className='text-[#71717A] text-sm font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipis.
          </p>
        </h2>
        <div className='w-[380px]'>
          <video className='h-full w-full rounded-xl' controls>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          </video>
        </div>
        <a href="#" className='text-sm font-normal h-2 flex flex-row mt-2' style={{color: '#71717A'}}>
               Visit Link <IoIosArrowForward className='w-4 h-4 mt-1 ml-2' />
            </a>
        </div>
          <div className='h-[453px] w-full bg-white mt-[28px] rounded-xl flex flex-col p-5 shadow-md hover:scale-102 transition-all duration-200'>
          <h2 className='text-lg text-black font-bold mb-5'>previously scanned content
          <p className='text-[#71717A] text-sm font-normal'>
            previously scanned content
          </p>
        </h2>
            <HistoryRow icon= {<HiLink className='w-4 h-4 text-blue-500'/>} title="FaceBook video" text="via insert link"  date="12/12/2024" time="8:49" />
            <HistoryRow icon= {<LuAudioLines className='w-4 h-4 text-blue-500'/>} title="audio" text="Uploaded audio"  date="12/12/2024" time="11:09" />
            <HistoryRow icon= {<PiMountainsLight className='w-4 h-4 text-blue-500'/>} title="image" text="Uploaded image"  date="12/12/2024" time="11:09" />
            <HistoryRow icon= {<BiSolidRightArrow className='w-4 h-4 text-blue-500'/>} title="video" text="Uploaded video"  date="12/12/2024" time="11:09" />
            <a href="#" className='text-sm font-normal h-2 flex flex-row mt-2 ml-2' style={{color: '#71717A'}}>
               See All History <IoIosArrowForward className='w-4 h-4 mt-1 ml-2' />
            </a>
         </div>
      </div>
       
      </div>
      
    </div>
  )
}

export default App
