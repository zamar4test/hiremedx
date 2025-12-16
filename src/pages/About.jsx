export default function About() {
    const institutions = [
        {
            icon: '🏥',
            title: 'Hospitals',
            services: [
                'General Hospitals',
                'Specialty Hospitals',
                'Teaching Hospitals',
                "Children's Hospitals",
                'Emergency Centers'
            ]
        },
        {
            icon: '🏢',
            title: 'Clinics',
            services: [
                'Primary Care Clinics',
                'Urgent Care Centers',
                'Specialty Clinics',
                'Walk-in Clinics',
                'Community Health Centers'
            ]
        },
        {
            icon: '🦷',
            title: 'Dental Clinics',
            services: [
                'General Dentistry',
                'Orthodontic Practices',
                'Oral Surgery Centers',
                'Pediatric Dental Clinics',
                'Cosmetic Dentistry'
            ]
        },
        {
            icon: '💊',
            title: 'Pharmacies',
            services: [
                'Retail Pharmacies',
                'Hospital Pharmacies',
                'Clinical Pharmacies',
                'Specialty Pharmacies',
                'Compounding Pharmacies'
            ]
        },
        {
            icon: '🏃‍♂️',
            title: 'Rehabilitation Centers',
            services: [
                'Physical Therapy Centers',
                'Occupational Therapy',
                'Speech Therapy Clinics',
                'Sports Medicine Centers',
                'Addiction Recovery Centers'
            ]
        },
        {
            icon: '🧪',
            title: 'Pharmaceutical Industry',
            services: [
                'Drug Manufacturing',
                'Research & Development',
                'Clinical Research Organizations',
                'Regulatory Affairs',
                'Medical Device Companies'
            ]
        }
    ]

    return (
        <>
            <section className="py-16 bg-pure-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-dark-charcoal">Areas & Institutions We Serve</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {institutions.map((institution, index) => (
                            <div key={index} className="bg-light-grey rounded-lg shadow-sm p-6 hover:shadow-md transition">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-pure-white rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">{institution.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-dark-charcoal">{institution.title}</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2">
                                    {institution.services.map((service, idx) => (
                                        <li key={idx}>• {service}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-lg text-gray-600 mb-6">And many more healthcare institutions across the country</p>
                        <button className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-accent-blue-hover transition font-semibold">Explore All Opportunities</button>
                    </div>
                </div>
            </section>
        </>
    )
}
