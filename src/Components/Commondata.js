import logo1 from '../assets/images/webmechanix-logo.webp';
import logo2 from '../assets/images/integrity-logo.webp';
import logo3 from '../assets/images/praxent-logo.87a8dbb6.svg';
import logo4 from '../assets/images/firstup-logo.db31916c.svg';
import logo5 from '../assets/images/infinite-logo.webp';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import tourlogo1 from '../assets/images/webmechanix-dark-logo.webp';
import tourlogo2 from '../assets/images/integrity-dark-logo.webp';
import tourlogo3 from '../assets/images/praxent-dark-logo.dfbbbba2.svg';
import tourlogo4 from '../assets/images/firstup-dark-logo.811677de.svg';
import tourlogo5 from '../assets/images/infinite-dark-logo.webp';
import chromelogo from '../assets/images/chrome-icon.webp';
import firefoxlogo from '../assets/images/firefox-icon.webp';
import safarilogo from '../assets/images/safari-icon.webp';
import encryptlogo1 from '../assets/images/soc2-light-badge.webp';
import encryptlogo2 from '../assets/images/nist-logo.webp';
import encryptlogo3 from '../assets/images/pci-logo.webp';
import encryptlogo4 from '../assets/images/aes-logo.webp';
import accessible from '../assets/images/accessible.00c8586e.svg';
import sharing from '../assets/images/sharing.b80291b1.svg';
import teams from '../assets/images/teams.47362d34.svg';
import keysicon from '../assets/images/key.94292050.svg';
import stepverification from '../assets/images/verification.0d92e16a.svg';
import activity from '../assets/images/logging.6419d0ce.svg';
import notification from '../assets/images/notifications.cb199e97.svg';
import secureicon from '../assets/images/secure.745bebaf.svg';

const Commonlogodata = [
    {
        imgsrc: logo1,
    },
    {
        imgsrc: logo2,
    },
    {
        imgsrc: logo3,
    },
    {
        imgsrc: logo4,
    },
    {
        imgsrc: logo5,
    },

];
export default Commonlogodata;

const Carddata = [
    {
        imgsrc: <ImportantDevicesIcon/>,
        title: "Keep Projects Moving",
        desc: "Everybody hates being locked out. With our shared password manager, your team's apps and tools are accessible anywhere, keeping your projects moving."
    },
    {
        imgsrc: <ImportantDevicesIcon/>,
        title: "Share Logins and Passwords",
        desc: "Most password managers are for personal use and require installation and configuration. Our team password manager was designed with ease-of-use and collaboration in mind."
    },
    {
        imgsrc: <ImportantDevicesIcon/>,
        title: "Protect Your Assets",
        desc: "If poorly managed passwords get into the wrong hands, the consequences can cripple your business. Our secure password manager protects your team by controlling access to your most valuable assets."
    },

];
export {Carddata};

const Commontourlogodata = [
    {
        imgsrc: tourlogo1,
    },
    {
        imgsrc: tourlogo2,
    },
    {
        imgsrc: tourlogo3,
    },
    {
        imgsrc: tourlogo4,
    },
    {
        imgsrc: tourlogo5,
    },
];
export {Commontourlogodata};

const Browsericon = [
    {
        imgsrc: chromelogo,
    },
    {
        imgsrc: firefoxlogo,
    },
    {
        imgsrc: safarilogo,
    },
    
];
export {Browsericon};

const Encryptlogo = [
    {
        imgsrc: encryptlogo1,
    },
    {
        imgsrc: encryptlogo2,
    },
    {
        imgsrc: encryptlogo3,
    },
    {
        imgsrc: encryptlogo4,
    },

];
export {Encryptlogo};

const Pricecarddata = [
    {
        imgsrc: accessible,
        title: "Accessible Everywhere",
        desc: "Access and manage passwords from the web, on your desktop, laptop, and on mobile devices.",
    },
    {
        imgsrc: sharing,
        title: "Groups & Sharing",
        desc: "Groups allow you to quickly share logins and passwords with a subset of team members, a group of external collaborators, or even the entire team.",
    },
    {
        imgsrc: teams,
        title: "Many Teams, One TeamPassword",
        desc: "Use your one TeamPassword account to access all of the passwords you need in one place.",
    },
    {
        imgsrc: keysicon,
        title: "Secure Unique Password Generator",
        desc: "Use the built-in strong password generator to generate secure, randomized passwords on the fly.",
    },
    {
        imgsrc: stepverification,
        title: "2-Step Verification",
        desc: "Add an extra layer of log in security to your TeamPassword account by requiring a temporary Google Authenticator code in addition to your master password.",
    },
    {
        imgsrc: activity,
        title: "Activity and Logging",
        desc: "TeamPassword's activity allows you to see which Logins are being used, which ones aren't, and when your shared Logins are being updated.",
    },
    {
        imgsrc: notification,
        title: "Email Notifications",
        desc: "Get notified when important things happen on your team, such as adding or removing people or passwords.",
    },
    {
        imgsrc: secureicon,
        title: "Secure Encryption Technology",
        desc: "Your sensitive information is hashed, salted, and encrypted locally on your computer, and then transmitted to the server via an encrypted connection.",
        cardlink: "/security",
        cardlinkdata: "More about TeamPassword security",
    },

];
export {Pricecarddata};

const FaqQuestions = [
    {
        id: 1,
        question: 'What is the virtual DOM?',
        answer: 'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure.',

    },
];
export {FaqQuestions};
