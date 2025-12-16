import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'professional'
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        alert('Profile creation form would continue here. This would redirect to a detailed registration page for healthcare professionals.')
        // navigate('/')
    }

    return (
        <section className="py-16 bg-light-grey min-h-[calc(100vh-16rem)] flex items-center">
            <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="bg-pure-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-dark-charcoal">Create Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-dark-charcoal mb-2">I am a:</label>
                            <div className="flex gap-4">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="professional"
                                        checked={formData.userType === 'professional'}
                                        onChange={handleChange}
                                        className="text-accent-blue focus:ring-accent-blue"
                                    />
                                    <span className="ml-2 text-sm">Healthcare Professional</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="employer"
                                        checked={formData.userType === 'employer'}
                                        onChange={handleChange}
                                        className="text-accent-blue focus:ring-accent-blue"
                                    />
                                    <span className="ml-2 text-sm">Employer</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-charcoal mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-charcoal mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-charcoal mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-charcoal mb-2">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-light-grey rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent-blue text-white py-3 rounded-lg hover:bg-accent-blue-hover transition font-semibold"
                        >
                            Create Account
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account? <Link to="/login" className="text-accent-blue hover:text-accent-blue-hover font-medium">Sign in</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
