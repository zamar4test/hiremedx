import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <svg width="32" height="32" viewBox="0 0 40 40">
                                <defs>
                                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#3498DB', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#2980B9', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" stroke="#4B5563" strokeWidth="1" />
                                <rect x="17" y="10" width="6" height="20" fill="white" rx="1" />
                                <rect x="10" y="17" width="20" height="6" fill="white" rx="1" />
                                <circle cx="8" cy="8" r="2" fill="#1ABC9C" />
                                <circle cx="32" cy="8" r="2" fill="#1ABC9C" />
                                <circle cx="8" cy="32" r="2" fill="#1ABC9C" />
                                <circle cx="32" cy="32" r="2" fill="#1ABC9C" />
                                <line x1="10" y1="8" x2="15" y2="13" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.6" />
                                <line x1="30" y1="8" x2="25" y2="13" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.6" />
                                <line x1="10" y1="32" x2="15" y2="27" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.6" />
                                <line x1="30" y1="32" x2="25" y2="27" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.6" />
                            </svg>
                            <div className="text-2xl font-bold text-white">HireMedX</div>
                        </div>
                        <p className="text-gray-400">Connecting healthcare professionals with opportunities nationwide.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">For Professionals</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/signup" className="hover:text-white">Create Profile</Link></li>
                            <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
                            <li><a href="#" className="hover:text-white">Career Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">For Employers</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/find-talent" className="hover:text-white">Post Jobs</Link></li>
                            <li><Link to="/professionals" className="hover:text-white">Search Talent</Link></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 HireMedX. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
