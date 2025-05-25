import styles from './index.module.scss';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const GetStarted = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        school_name: '',
        school_type: '',
        country: '',
        email: '',
        student_estimate: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation functions
    const validateField = (name, value) => {
        switch (name) {
            case 'full_name':
                if (!value.trim()) return 'Full name is required';
                if (value.trim().length < 2) return 'Full name must be at least 2 characters';
                return '';
            
            case 'school_name':
                if (!value.trim()) return 'School name is required';
                if (value.trim().length < 2) return 'School name must be at least 2 characters';
                return '';
            
            case 'school_type':
                if (!value) return 'Please select a school type';
                return '';
            
            case 'country':
                if (!value) return 'Please select a country';
                return '';
            
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
                return '';
            
            case 'student_estimate':
                if (!value) return 'Please select an estimate';
                return '';
            
            default:
                return '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        
        // Validate field on blur
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mark all fields as touched
        const allTouched = {};
        Object.keys(formData).forEach(key => {
            allTouched[key] = true;
        });
        setTouched(allTouched);
        
        // Validate form
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Save to Supabase DB
            const { data, error } = await supabase
                .from('school_signups')
                .insert([formData]);

            if (error) {
                console.error('Submission error:', error.message);
                alert("Oops! Something went wrong.");
                return;
            }

            // Call Edge Function for Slack notification
            const slackRes = await fetch('https://yeulmsixiaduyjzbvhge.supabase.co/functions/v1/notify-slack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify(formData)
            });

            const slackJson = await slackRes.json();

            if (!slackJson.success) {
                console.warn('Slack notification failed:', slackJson.error);
            }

            
            // navigate('/get-started/success');
            navigate('/get-started/success', { state: { submitted: true } });
            console.log('Form submitted successfully:', data);
        } catch (err) {
            console.error('Unexpected error:', err);
            alert("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.get_started}>
            <div className={styles.get_started_wrapper}>
               <div className={styles.get_started_image}>
                <img src="https://images.unsplash.com/photo-1649359569078-c445b3c6a116?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Get Started" />
               </div>
               <div className={styles.get_started_content}>
                <h1>
                    Get started for free
                </h1>
                <p className={styles.get_started_description}>
                    We will reach out to you within 24 hours to help you get started. No upfront fees, no hidden costs, no credit card required.
                </p>
                <div className={styles.get_started_form}>
                    <form onSubmit={handleSubmit} className={styles.get_started_form_wrapper} id="get-started-form">
                        <div className={styles.get_started_form_group_wrapper}>
                            <div className={`${styles.get_started_form_group} ${errors.full_name && touched.full_name ? styles.error : ''}`}>
                                <label htmlFor="full_name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="full_name" 
                                    value={formData.full_name} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="full_name" 
                                    placeholder='John Doe' 
                                    className={errors.full_name && touched.full_name ? styles.input_error : ''}
                                />
                                {errors.full_name && touched.full_name && (
                                    <span className={styles.error_message}>{errors.full_name}</span>
                                )}
                            </div>
                            
                            <div className={`${styles.get_started_form_group} ${errors.school_name && touched.school_name ? styles.error : ''}`}>
                                <label htmlFor="school_name">School Name</label>
                                <input 
                                    type="text" 
                                    value={formData.school_name} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="school_name" 
                                    name="school_name" 
                                    placeholder='Spring College'
                                    className={errors.school_name && touched.school_name ? styles.input_error : ''}
                                />
                                {errors.school_name && touched.school_name && (
                                    <span className={styles.error_message}>{errors.school_name}</span>
                                )}
                            </div>
                            
                            <div className={`${styles.get_started_form_group} ${errors.school_type && touched.school_type ? styles.error : ''}`}>
                                <label htmlFor="school_type">School Type</label>
                                <select 
                                    value={formData.school_type} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="school_type" 
                                    name="school_type"
                                    className={errors.school_type && touched.school_type ? styles.input_error : ''}
                                >
                                    <option value="primary">Primary</option>
                                    <option value="secondary">Secondary</option>
                                    <option value="tertiary">Tertiary</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.school_type && touched.school_type && (
                                    <span className={styles.error_message}>{errors.school_type}</span>
                                )}
                            </div>
                            
                            <div className={`${styles.get_started_form_group} ${errors.country && touched.country ? styles.error : ''}`}>
                                <label htmlFor="country">Country</label>
                                <select 
                                    value={formData.country} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="country" 
                                    name="country"
                                    className={errors.country && touched.country ? styles.input_error : ''}
                                >
                                    <option value="nigeria">Nigeria</option>
                                    <option value="ghana">Ghana</option>
                                    <option value="kenya">Kenya</option>
                                    <option value="south-africa">South Africa</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.country && touched.country && (
                                    <span className={styles.error_message}>{errors.country}</span>
                                )}
                            </div>
                            
                            <div className={`${styles.get_started_form_group} ${errors.email && touched.email ? styles.error : ''}`}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder='johndoe@gmail.com'
                                    className={errors.email && touched.email ? styles.input_error : ''}
                                />
                                {errors.email && touched.email && (
                                    <span className={styles.error_message}>{errors.email}</span>
                                )}
                            </div>
                            
                            <div className={`${styles.get_started_form_group} ${errors.student_estimate && touched.student_estimate ? styles.error : ''}`}>
                                <label htmlFor="student_estimate">Number of students</label>
                                <select 
                                    value={formData.student_estimate} 
                                    id="student_estimate" 
                                    name="student_estimate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.student_estimate && touched.student_estimate ? styles.input_error : ''}
                                >
                                    <option value="1-50">1 - 50</option>
                                    <option value="51-100">51 - 100</option>
                                    <option value="101-200">101 - 200</option>
                                    <option value="201-500">201 - 500</option>
                                    <option value="501-1000">501 - 1000</option>
                                    <option value="1001+">1001+</option>
                                </select>
                                {errors.student_estimate && touched.student_estimate && (
                                    <span className={styles.error_message}>{errors.student_estimate}</span>
                                )}
                            </div>
                        </div>
                        <button type="submit" className={styles.get_started_btn} disabled={loading}>
                            {loading ? 'Submitting...' : 'Get Started'}
                        </button>
                    </form>
                </div>
                </div>
            </div>
            <Link to="/" className={styles.get_started_close}>
                <img src="/cancel.svg" alt="Close" />
            </Link>
        </div>
    );
}

export default GetStarted;