'use client'
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLinks from "@/components/forms/FooterLinks";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constant";
import { useForm } from "react-hook-form"



const Signup = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
      } = useForm<SignUpFormData>({
        defaultValues: {
            fullName : '',
            email : '',
            password : '',
            country : 'US',
            investmentGoals : '',
            riskTolerance : 'Medium',
            preferredIndustry : 'Technology',
            
        },
        mode: 'onBlur',
      },);

      const onSubmit = async (data : SignUpFormData) => {
        try {   
            console.log(data) ;
        }
        catch (e) {
            console.error(e);
        }
      }

  return (
    <>

        <h1 className="form-title"> Signup & Personallize </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField 
            name = "fullName"
            label = "Full Name"
            placeholder = "John Doe"
            register = {register}
            error={errors.fullName}
            validation= {{required : ' Full Name is required ', minLeng :  2}}
            
          />
          <InputField 
            name = "email"
            label = "Email"
            placeholder = "Contact@gmail.com"
            register = {register}
            error={errors.email}
            validation= {{required : ' Email is required ', pattern :/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email address is required' }}
            
          />
          <InputField 
            name = "password"
            label = "Password"
            placeholder = "Enter a strong password"
            register = {register}
            error={errors.password}
            validation= {{required : ' PassWord is required ', minLeng :  8}}
            
          />
          <CountrySelectField name="country" label="country" control={control} error={errors.country} required/>
          <SelectField 
            name = "InvestmentGoals"
            label = "investment Goals"
            placeholder = "Select your investment goal"
            options = {INVESTMENT_GOALS}
            control = {control}
            error = {errors.investmentGoals}
            required
          />
          <SelectField 
            name = "riskTolorent"
            label = "Risk Tolorent"
            placeholder = "Select your risk level"
            options = {RISK_TOLERANCE_OPTIONS}
            control = {control}
            error = {errors.riskTolerance}
            required
          />
          <SelectField 
            name = "preferredIndustry"
            label = "Preferred Industry"
            placeholder = "Select your perferred industry"
            options = {PREFERRED_INDUSTRIES}
            control = {control}
            error = {errors.preferredIndustry}
            required
          />

          <Button type="submit" className="yellow-btn mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account' : 'Start your investing journey'}
          </Button>

          <FooterLinks text="Already have an account?" linkText=" Sign in" href="/sign-in"/>
        </form>
    </>
  )
}

export default Signup