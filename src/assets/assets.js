import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Pediatricians from './Pediatricians.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Sandeep Vaishya',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sandeep Vaishya is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Indira Hinduja',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Indira Hinduja is dedicated to providing comprehensive medical care, emphasizing preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 400,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Ashok Rajgopal',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Ashok Rajgopal is devoted to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 200,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Mohan Krishna',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Mohan Krishna is committed to providing comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kadambini Ganguly',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kadambini Ganguly is dedicated to comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Subash Kumar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Subash Kumar is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Namperumalsamy',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Namperumalsamy is dedicated to comprehensive medical care, emphasizing preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 600,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ramachandran',
        image: doc8,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ramachandran is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Anandi Gopal Joshi',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Year',
        about: 'Dr. Anandi Gopal Joshi is devoted to providing comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Hariharan',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Hariharan is committed to comprehensive medical care, emphasizing preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
        }
    },
        {
            _id: 'doc11',
            name: 'Dr. Kavita Nair',
            image: doc11,
            speciality: 'Neurologist',
            degree: 'MBBS',
            experience: '4 Years',
            about: 'Dr. Kavita Nair is dedicated to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
            fees: 500,
            address: {
                line1: '57th Cross, Richmond',
                line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
            }
        },
        {
            _id: 'doc12',
            name: 'Dr. Pranav Sharma',
            image: doc12,
            speciality: 'Neurologist',
            degree: 'MBBS',
            experience: '3 Years',
            about: 'Dr. Pranav Sharma is committed to providing comprehensive medical care, emphasizing preventive medicine, early diagnosis, and effective treatment strategies.',
            fees: 300,
            address: {
                line1: '57th Cross, Richmond',
                line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
            }
        },
        {
            _id: 'doc13',
            name: 'Dr. Aditi Rao',
            image: doc13,
            speciality: 'General Physician',
            degree: 'MBBS',
            experience: '3 Years',
            about: 'Dr. Aditi Rao is dedicated to comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
            fees: 400,
            address: {
                line1: '17th Cross, Richmond',
                line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
            }
        },
        {
            _id: 'doc14',
            name: 'Dr. Rohan Gupta',
            image: doc14,
            speciality: 'Gynecologist',
            degree: 'MBBS',
            experience: '3 Years',
            about: 'Dr. Rohan Gupta is committed to delivering comprehensive medical care, emphasizing preventive medicine, early diagnosis, and effective treatment strategies.',
            fees: 400,
            address: {
                line1: '27th Cross, Richmond',
                line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
            }
        },
        {
            _id: 'doc15',
            name: 'Dr. Meera Iyer',
            image: doc15,
            speciality: 'Dermatologist',
            degree: 'MBBS',
            experience: '2 Year',
            about: 'Dr. Meera Iyer is dedicated to providing comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
            fees: 300,
            address: {
                line1: '37th Cross, Richmond',
                line2: 'Circle, Ring Road, Chennai, Tamil Nadu'
            }
        },
    ];
    
    