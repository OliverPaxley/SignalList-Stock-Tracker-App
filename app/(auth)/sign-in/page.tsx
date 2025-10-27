'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/forms/InputField';
import { useRouter } from "next/navigation";
import FooterLinks from '@/components/forms/FooterLinks';

type SignInFormData = {
    email: string;
    password: string;
};

const SignIn = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            // TODO: Add signInWithEmail functionality
            console.log('Sign in data:', data);
            // const result = await signInWithEmail(data);
            // if (result.success) router.push('/');
            router.push('/');
        } catch (e) {
            console.error(e);
            // TODO: Add toast functionality
            // toast.error('Sign in failed', {
            //     description: e instanceof Error ? e.message : 'Failed to sign in.'
            // })
        }
    }

    return (
        <>
            <h1 className="form-title">Welcome back</h1>
            <p className="text-gray-500 text-center mb-6">
                Sign in to continue your investment journey
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{ 
                        required: 'Email is required', 
                        pattern: { 
                            value: /^\w+@\w+\.\w+$/, 
                            message: 'Invalid email format' 
                        } 
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ 
                        required: 'Password is required', 
                        minLength: { 
                            value: 8, 
                            message: 'Password must be at least 8 characters' 
                        } 
                    }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In' : 'Sign In'}
                </Button>

                <FooterLinks 
                    text="Don't have an account?" 
                    linkText=" Create an account" 
                    href="/sign-up" 
                />
            </form>
        </>
    );
};

export default SignIn;