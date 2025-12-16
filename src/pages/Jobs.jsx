export default function Jobs() {
    const jobs = [
        {
            id: 1,
            icon: '🏥',
            title: 'Senior Nurse - ICU',
            company: 'City General Hospital',
            description: 'Seeking experienced ICU nurse for critical care unit. 5+ years experience required.',
            salary: '$75,000 - $85,000'
        },
        {
            id: 2,
            icon: '💊',
            title: 'Clinical Pharmacist',
            company: 'MedCare Pharmacy',
            description: 'Join our team providing pharmaceutical care and medication management.',
            salary: '$90,000 - $110,000'
        },
        {
            id: 3,
            icon: '🔬',
            title: 'Lab Technician',
            company: 'Regional Medical Center',
            description: 'Laboratory technician position for blood work and diagnostic testing.',
            salary: '$45,000 - $55,000'
        }
    ]

    const handleApply = (jobTitle) => {
        alert(`Application process would begin here for ${jobTitle}. This would open a detailed application form.`)
    }

    return (
        <section className="py-16 bg-light-grey min-h-[calc(100vh-16rem)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-dark-charcoal">Browse Available Jobs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map(job => (
                        <div key={job.id} className="bg-pure-white rounded-lg shadow-sm p-6 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-light-grey rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">{job.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-dark-charcoal">{job.title}</h3>
                                    <p className="text-gray-600">{job.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{job.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-dark-charcoal font-semibold">{job.salary}</span>
                                <button
                                    onClick={() => handleApply(job.title)}
                                    className="bg-accent-blue text-white px-4 py-2 rounded-lg hover:bg-accent-blue-hover transition"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-accent-blue-hover transition font-semibold">View All Jobs</button>
                </div>
            </div>
        </section>
    )
}
