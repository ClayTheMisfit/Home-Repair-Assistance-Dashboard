import type {Metadata} from 'next';
import './style.css';
export const metadata:Metadata={title:'Home Repair Assistance Tracker',description:'Track home repair assistance organizations, eligibility, and outreach.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
