import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="gradient-bg text-dark-charcoal py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-6">Connect Healthcare Professionals with Opportunities</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">The premier platform for healthcare recruitment, professional portfolios, and career advancement across all medical specialties.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/professionals" className="bg-accent-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-blue-hover transition">Find Healthcare Talent</Link>
                        <Link to="/signup" className="border-2 border-accent-blue text-accent-blue px-8 py-3 rounded-lg font-semibold hover:bg-accent-blue hover:text-white transition">Create Professional Profile</Link>
                    </div>
                </div>
            </section>

            {/* Professional Categories */}
            <section className="py-16 bg-pure-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-dark-charcoal">Healthcare Professionals We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">👨‍⚕️</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Doctors</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">👩‍⚕️</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Nurses</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">🧑‍⚕️</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Caregivers</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">💊</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Pharmacists</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">🏃‍♂️</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Physiotherapists</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">🔬</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Lab Assistants</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">🏥</div>
                            <div className="font-semibold text-sm text-dark-charcoal">Hospital Staff</div>
                        </div>
                        <div className="text-center p-4 rounded-lg hover:bg-light-grey transition cursor-pointer">
                            <div className="text-4xl mb-2">➕</div>
                            <div className="font-semibold text-sm text-dark-charcoal">More</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-light-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-dark-charcoal">Why Choose HireMedX?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pure-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-dark-charcoal">Specialized Matching</h3>
                            <p className="text-gray-600">Advanced algorithms match healthcare professionals with the right opportunities based on skills, experience, and preferences.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pure-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                                <span className="text-2xl">✅</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-dark-charcoal">Verified Credentials</h3>
                            <p className="text-gray-600">All professionals undergo credential verification to ensure quality and compliance with healthcare standards.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pure-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-dark-charcoal">Career Growth</h3>
                            <p className="text-gray-600">Access continuing education resources, career coaching, and professional development opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
