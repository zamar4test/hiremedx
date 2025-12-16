export default function Professionals() {
    const professionals = [
        {
            id: 1,
            initials: 'DR',
            name: 'Dr. Sarah Johnson',
            title: 'Cardiologist',
            experience: '12 years',
            location: 'New York, NY',
            specialty: 'Interventional Cardiology'
        },
        {
            id: 2,
            initials: 'MJ',
            name: 'Maria Rodriguez, RN',
            title: 'Registered Nurse',
            experience: '8 years',
            location: 'Los Angeles, CA',
            specialty: 'Emergency Medicine'
        },
        {
            id: 3,
            initials: 'PT',
            name: 'James Chen, PT',
            title: 'Physical Therapist',
            experience: '6 years',
            location: 'Chicago, IL',
            specialty: 'Sports Rehabilitation'
        }
    ]

    const handleViewProfile = (name) => {
        alert(`Professional profile for ${name} would open here, showing detailed credentials, experience, and portfolio.`)
    }

    return (
        <section className="py-16 bg-light-grey min-h-[calc(100vh-16rem)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-dark-charcoal">Professional Profiles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professionals.map(professional => (
                        <div key={professional.id} className="professional-card rounded-lg shadow-sm p-6 card-hover">
                            <div className="text-center mb-4">
                                <div className="w-20 h-20 bg-accent-blue rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                                    {professional.initials}
                                </div>
                                <h3 className="font-semibold text-lg text-dark-charcoal">{professional.name}</h3>
                                <p className="text-gray-600">{professional.title}</p>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-20">Experience:</span>
                                    <span className="text-dark-charcoal">{professional.experience}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-20">Location:</span>
                                    <span className="text-dark-charcoal">{professional.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-20">Specialty:</span>
                                    <span className="text-dark-charcoal">{professional.specialty}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleViewProfile(professional.name)}
                                className="w-full mt-4 bg-accent-blue text-white py-2 rounded-lg hover:bg-accent-blue-hover transition"
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-accent-blue-hover transition font-semibold">Browse All Professionals</button>
                </div>
            </div>
        </section>
    )
}
