import whycetaImg from '../../assets/whyCeta.png';
import keyIcon1 from '../../assets/keyIcon/keyIcon1.png';
import keyIcon2 from '../../assets/keyIcon/keyIcon2.png';
import keyIcon3 from '../../assets/keyIcon/keyIcon3.png';
import keyIcon4 from '../../assets/keyIcon/keyIcon4.png';
import keyIcon5 from '../../assets/keyIcon/keyIcon5.png';
import keyIcon6 from '../../assets/keyIcon/keyIcon6.png';   
import keyIcon7 from '../../assets/keyIcon/keyIcon7.png';

const WhyCeta = () => {

    const keyData =[
        {
            title: "Democratizes Tech Access",
            description: "No coding required; anyone can build and innovate",
            icon:keyIcon1,
            iconBg:"#03257E"

        },
        {
            title: "Bridges the Skill Gap",
            description: "Makes advanced tech skills accessible to non-tech learners.",
            icon:keyIcon2,
            iconBg:"#006666"
        },
        {
            title: "Future-Proofs Careers",
            description: "Equips youth and professionals with tools for the jobs of tomorrow.",
            icon:keyIcon3,
            iconBg:"#f14419"
        },
        {
            title: "Accelerates Learning",
            description: "Learn faster through visual, drag-and-drop tools.",
            icon:keyIcon4,
            iconBg:"#FFAA04"
        },
        {
            title: "Empowers with AI",
            description: "Master real-world applications of Generative AI and Automation.",
            icon:keyIcon5,
            iconBg:"#3ec8d4"
        },
        {
            title: "Inclusive Innovation",
            description: "Enables creativity and problem-solving from diverse learners globally.",
            icon:keyIcon6,
            iconBg:"#1860ca"
        },
        {
            title: "Industry-Aligned Curriculum",
            description: "Based on real use-cases and tools used in modern businesses.",
            icon:keyIcon7,
            iconBg:"#d9d9d9"
        }
    ]
  return (
    <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          Why CETA ?
        </p>
        <div className='flex justify-center items-center md:gap-8 lg:gap-40 lg:px-20'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className='text-[#03257e] text-[16px] sm:text-[20px] md:text-[30px] w-max-[700px] text-center font-bold'>Why No-Code AI & Emerging Tech Education Matters?</p>
                <p className='text-black w-max-[700px] text-center'>In today’s fast-evolving digital world, technical skills are no longer just for coders. With the rise of no-code platforms and tools, anyone can now build AI-driven solutions, harness the power of Generative AI, and innovate using emerging technologies—without needing to write a single line of code</p>
                <p className='text-black w-max-[700px] text-center'>CETA by Edubuk empowers students, educators, and professionals from all backgrounds to stay future-ready and industry-relevant by enabling practical, hands-on skilling in AI and emerging technologies using simple, intuitive, no-code tools.</p>
            </div>
            <div className='hidden sm:flex'>
                <img src={whycetaImg} className='w-fit h-auto'></img>
            </div>
        </div> 
        <div className='flex flex-col justify-center items-center w-full'>
            <p className='text-[#03257e] text-[16px] sm:text-[20px] md:text-[30px] text-center font-bold'>Key Reasons Why No-Code & Emerging Tech Skilling is Crucial?</p>
            <div className='flex flex-wrap justify-center items-center'>
                {keyData.map((item, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center gap-2 m-4  rounded-[20px] shadow-lg w-[300px]`} style={{backgroundColor:`${item.iconBg}`}}>
                        <img src={item.icon} alt={item.title} className={`w-16 h-16 my-4`} />
                        <div className='flex flex-col justify-center items-center px-4 py-5 rounded-[20px] bg-[white]'>
                        <p className='text-[#03257e] text-[18px] font-semibold'>{item.title}</p>
                        <p className='text-black text-center'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>   
      </div>
  );
}

export default WhyCeta;