import { AiTwotoneHome, AiFillFlag, AiFillControl, AiFillPieChart } from 'react-icons/ai'
import { FaUsers, FaList, FaMapLocation, FaWallet, FaMoneyBillWave, FaCommentSms } from 'react-icons/fa6'
import { SiGooglefonts } from 'react-icons/si'
import { HiSpeakerphone } from 'react-icons/hi'
import { BsRocketTakeoffFill } from 'react-icons/bs'
import { CgSupport } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import { BiSolidMessageAdd, BiLogoGmail } from 'react-icons/bi'
import { LuWallpaper, LuLanguages } from 'react-icons/lu'
import { MdOutlineSettingsInputComponent } from 'react-icons/md'
import { GiWorld } from 'react-icons/gi'
import { RiPagesFill } from 'react-icons/ri'



export const DashboardMenu = [
  {
    id: 1,
    title_uz: "Dashboard",
    podCategories: [],
    icons: AiTwotoneHome
  },
  {
    id: 2,
    title_uz: "Foydalanuvchilarni Boshqarish",
    podCategories: ["Barcha Foydalanuvchilar", "Faol Foydalanuvchilar", "Taqiqlangan Foydalanuvchilar", "Elektron Pochta Tasdiqlanmagan", "SMS tasdiqlash", "Elektron Pochta Yuborish"],
    icons: FaUsers
  },
  {
    id: 3,
    title_uz: "Kategoriyani Boshqarish",
    podCategories: [],
    icons: FaList
  },
  {
    id: 4,
    title_uz: "Joylarni Boshqarish",
    podCategories: [],
    icons: FaMapLocation
  },
  {
    id: 5,
    title_uz: "E'lonlar Ro'yxatini Boshqarish",
    podCategories: [],
    icons: SiGooglefonts
  }
  , {
    id: 6,
    title_uz: "So'rovni Targ'ib Qilish",
    podCategories: ["Barcha Talab", "kutilmoqda", "Qabul qilindi", "Rad etildi"],
    icons: HiSpeakerphone
  }

  , {
    id: 7,
    title_uz: "Paketlarni Boshqarish",
    podCategories: [],
    icons: BsRocketTakeoffFill
  }
  , {
    id: 8,
    title_uz: "Xabar Qilingan Reklamalar",
    podCategories: [],
    icons: AiFillFlag
  }
  , {
    id: 9,
    title_uz: "Reklamalarni Boshqarish",
    podCategories: ["Barcha E'lonlar", "Nashr qilingan", "BMT nashr etildi", "kutilmoqda", "Taniqli E'lonlar"],
    icons: AiFillFlag
  }


  , {
    id: 10,
    title_uz: "To'lov Turlari",
    podCategories: [],
    icons: FaWallet
  }
  , {
    id: 11,
    title_uz: "To'lovlar",
    podCategories: ["Kutilayotgan To'lovlar", "Tasdiqlangan To'lovlar", "Muvaffaqiyatli To'lovlar", "Rad Etilgan To'lovlar", "Barcha To'lovlar"],
    icons: FaMoneyBillWave
  }



  , {
    id: 12,
    title_uz: "Qo'llab-Quvvatlash ",
    podCategories: ["Barcha Chiptalar", "Kutilayotgan Chipta", "Yopiq Chipta", "Javob Berilgan Chipta"],
    icons: CgSupport
  }

  , {
    id: 13,
    title_uz: "Xabarlar",
    podCategories: [],
    icons: BiSolidMessageAdd
  }
  , {
    id: 14,
    title_uz: "Umumiy Sozlash",
    podCategories: [],
    icons: FiSettings
  }
  , {
    id: 15,
    title_uz: "Logotip Belgisini Sozlash",
    podCategories: [],
    icons: LuWallpaper
  }


  , {
    id: 16,
    title_uz: "  Kengaytmalar",
    podCategories: [],
    icons: MdOutlineSettingsInputComponent
  }
  , {
    id: 17,
    title_uz: "Til",
    podCategories: [],
    icons: LuLanguages
  }
  , {
    id: 18,
    title_uz: "SEO menejeri",
    podCategories: [],
    icons: GiWorld
  }
  , {
    id: 19,
    title_uz: "Elektron Pochta Menejeri",
    podCategories: ["Andoza", "Elektron Pochta Shablonlari", "Elektron Pochtani Sozlash"],
    icons: BiLogoGmail
  }
  , {
    id: 20,
    title_uz: "SMS menejeri",
    podCategories: ["API sozlamalari", "SMS shablonlari"],
    icons: FaCommentSms
  }
  , {
    id: 21,
    title_uz: "Boshqarish dashboard ",
    podCategories: [],
    icons: AiFillControl
  }
  , {
    id: 22,
    title_uz: "Sahifalarni boshqarish",
    podCategories: [],
    icons: RiPagesFill
  }
  , {
    id: 23,
    title_uz: "Boshqaruv bo'limi",
    podCategories: ["Banner Bo'limi", "Kategoriya Bo'limi", "Aloqa", "Hisoblagich Bo'limi", "Harakatga Chaqirish Bo'limi", "FAQ bo'limi", "Tanlangan Reklama Bo'limi", "Altbilgi Bo'limi", "Bu qanday ishlaydi", "Joylashuv Bo'limi", "Kirish", "Sahifasi", "Maxfiylik va siyosat", "Ro'yxatdan", "O'tish", "Sahifasi", "QO'SHIMCHA"],
    icons: AiFillPieChart
  }
]








