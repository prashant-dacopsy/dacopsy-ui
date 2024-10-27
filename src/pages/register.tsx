import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { RiBox3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CompanyLogo from '../components/Icons/logo';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../components/ui/popover';

// Define the GraphQL mutation
const REGISTER_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      hasErrors
      message
      helpText
    }
  }
`;

interface RegisterUserProps { }

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: Date | undefined;
}

const RegisterUser: React.FC<RegisterUserProps> = () => {
    const navigate = useNavigate();

    // Use Apollo Client's useMutation hook
    const [registerUser, { loading, error }] = useMutation(
        REGISTER_USER_MUTATION
    );

    // Formik form handler
    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: undefined, // Set to undefined initially
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm Password is required'),
            dateOfBirth: Yup.date().nullable().required('Date of Birth is required'),
        }),
        onSubmit: async (values) => {
            try {
                const { data } = await registerUser({
                    variables: {
                        createUserInput: {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            password: values.password,
                            dateOfBirth: values.dateOfBirth?.toISOString(),
                        },
                    },
                });

                if (data.createUser.hasErrors) {
                    alert(`Error: ${data.createUser.message}`);
                } else {
                    alert('Registration successful!');
                    // navigate('/welcome'); // Redirect to the welcome page after successful registration
                }
            } catch (err) {
                console.error('Registration failed:', err);
                alert('An error occurred during registration.');
            }
        },
    });

    return (
        <div className="grid grid-cols-2 gap-20 items-center relative">
            <div className="h-screen cont bg-primary px-20 flex flex-col justify-center">
                <div className="space-y-5">
                    <div className="flex gap-2 items-center">
                        <CompanyLogo size={60} type="dark" />
                        <div className="flex flex-col gap-1">
                            <Label className="text-white" variant={'legend'}>
                                Dacopsy
                            </Label>
                            <Label className="text-white font-normal" variant={'title'}>
                                Datacooker for Psychologists
                            </Label>
                        </div>
                    </div>
                    <div className="px-10 border rounded-lg h-72 w-[90%] gap-10 border-secondary flex flex-col justify-center">
                        <Label variant={'legend'} className="text-white">
                            Start creating datasets in under a minute!
                        </Label>
                        <Button
                            onClick={() => navigate('./trail')}
                            variant={'secondary'}
                            className="w-36 text-lg gap-5 font-light h-14"
                        >
                            Try Now <RiBox3Line size={30} />
                        </Button>
                    </div>
                    <p className="w-[90%] text-justify text-secondary font-semibold">
                        The information provided on this website is for general
                        informational purposes only. We make no representations or
                        warranties of any kind, express or implied, about the completeness,
                        accuracy, reliability, suitability, or availability with respect to
                        the website or the information, products, services, or related
                        graphics contained on the website for any purpose. Any reliance you
                        place on such information is therefore strictly at your own risk.
                    </p>
                    <div className="pt-20">
                        <Label variant={'label'} className="text-white font-semibold">
                            Dacopsy India Pvt Ltd. All Rights Reserved
                        </Label>
                    </div>
                </div>
            </div>
            <div className="px-10 flex flex-col flex-grow justify-between">
                <form onSubmit={formik.handleSubmit} className="items-center space-y-4">
                    <div className="justify-start flex flex-col items-start pb-5">
                        <Label className="font-normal text-primary" variant={'title'}>
                            Register to
                        </Label>
                        <Label className="text-primary" variant={'legend'}>
                            Dacopsy!
                        </Label>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label>First Name *</Label>
                            <Input
                                name="firstName"
                                variant={'default'}
                                placeholder="First Name"
                                className="bg-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <p className="text-red-500">{formik.errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <Label>Last Name *</Label>
                            <Input
                                name="lastName"
                                variant={'default'}
                                placeholder="Last Name"
                                className="bg-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <p className="text-red-500">{formik.errors.lastName}</p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label>Email *</Label>
                        <Input
                            name="email"
                            variant={'default'}
                            placeholder="Email"
                            className="bg-white"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="space-y-1">
                        <Label>Password *</Label>
                        <Input
                            name="password"
                            variant={'default'}
                            placeholder="Password"
                            type="password"
                            className="bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500">{formik.errors.password}</p>
                        )}
                    </div>
                    <div className="space-y-1">
                        <Label>Confirm Password *</Label>
                        <Input
                            name="confirmPassword"
                            variant={'default'}
                            placeholder="Confirm Password"
                            type="password"
                            className="bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <p className="text-red-500">{formik.errors.confirmPassword}</p>
                            )}
                    </div>
                    <div className="space-y-1">
                        <Label>Date of Birth *</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="secondary"
                                    className="w-full items-center font-normal justify-start bg-white"
                                >
                                    {formik.values.dateOfBirth
                                        ? formik.values.dateOfBirth.toLocaleDateString()
                                        : 'Select Date'}{' '}
                                    <FaCalendar size={16} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={formik.values.dateOfBirth}
                                    onSelect={(date) => formik.setFieldValue('dateOfBirth', date)}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date('1900-01-01')
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                            <p className="text-red-500">{formik.errors.dateOfBirth}</p>
                        )}
                    </div>
                    <div className="space-y-1 justify-self-center">
                        <Button
                            type="submit"
                            className="h-12 w-72 text-lg font-light"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </Button>
                    </div>
                    {error && (
                        <p className="text-red-500 mt-2">
                            An error occurred: {error.message}
                        </p>
                    )}
                </form>
            </div>
            <div className="absolute top-5 right-5">
                <Button onClick={() => navigate('/')} variant="link">
                    Already Registered? Login!
                </Button>
            </div>
        </div>
    );
};

export default RegisterUser;