"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButtonF from "@/components/FormInputs/SubmitButtonF";
import { useRouter } from "next/navigation";


export default function Login({ initialData = {}, isUpdate = false }) {

 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
 const router = useRouter();
 const setData = (data) =>{
  localStorage.setItem("name", data.name);
  localStorage.setItem("email", data.email);
  localStorage.setItem("gender", data.gender);
  localStorage.setItem("role", data.role);
  if(data){
    localStorage.setItem("isAuth", true);
  }
 }

  async function onSubmit(data) {
   const response = await fetch("http://localhost:5000/api/v1/users/auth/login",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });

    const content = await response.json();
    setData(content);
    router.push('/dashboard');
  }

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButtonF
          isLoading={loading}
          loadingTitle="Login Please Wait..."
          title="Login "
        />
      </form>
    </div>
  );
}
