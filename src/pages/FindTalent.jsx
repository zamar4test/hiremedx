import { useState } from 'react'

export default function FindTalent() {
    const [formData, setFormData] = useState({
        jobTitle: '',
        specialty: '',
        location: '',
        salary: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Job posting submitted! In a real application, this would process the job listing and payment.')
    }

    return (
        <section className="py-16 bg-light-grey min-h-[calc(100vh-16rem)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-pure-white rounded-lg shadow-sm p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center text-dark-charcoal">Post a Job & Find Top Healthcare Talent</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-dark-charcoal mb-2">Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                        placeholder="e.g. Registered Nurse - ICU"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark-charcoal mb-2">Healthcare Specialty</label>
                                    <select
                                        name="specialty"
                                        value={formData.specialty}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                    >
                                        <option>Select Specialty</option>
                                        <option>Nursing</option>
                                        <option>Physician</option>
                                        <option>Pharmacy</option>
                                        <option>Physical Therapy</option>
                                        <option>Laboratory</option>
                                        <option>Hospital Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-dark-charcoal mb-2">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                        placeholder="City, State"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark-charcoal mb-2">Salary Range</label>
                                    <input
                                        type="text"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                        placeholder="e.g. $60,000 - $80,000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dark-charcoal mb-2">Job Description</label>
                                <textarea
                                    rows="4"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                    placeholder="Describe the role, requirements, and benefits..."
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-accent-blue-hover transition font-semibold"
                                >
                                    Post Job - $99
                                </button>
                                <p className="text-sm text-gray-600 mt-2">30-day listing with unlimited applications</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
