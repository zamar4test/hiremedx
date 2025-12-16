import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Login functionality would be implemented here. This would authenticate the user.')
        // navigate('/')
    }

    return (
        <section className="py-16 bg-light-grey min-h-[calc(100vh-16rem)] flex items-center">
            <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="bg-pure-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-dark-charcoal">Sign In</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-accent-blue focus:ring-accent-blue" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-accent-blue hover:text-accent-blue-hover">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent-blue text-white py-3 rounded-lg hover:bg-accent-blue-hover transition font-semibold"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account? <Link to="/signup" className="text-accent-blue hover:text-accent-blue-hover font-medium">Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
