import Sidebar from '@/app/components/Sidebar.jsx'
import Navbar from '@/app/components/Navbar.jsx';

export default function ProtectedLayout({ children }) {
  return (
      <div
        className={`flex min-h-screen bg-gray-50`}
      >
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <Navbar/>
          <main className='flex-1 p-6 overflow-y-auto'>{children}</main>
        </div>


      </div>
  );
}