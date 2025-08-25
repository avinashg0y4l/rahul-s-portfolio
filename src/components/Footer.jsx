export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 to-purple-50 py-6 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Avinash Goyal. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
