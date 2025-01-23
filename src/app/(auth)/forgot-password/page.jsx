import { Placeholder } from '@/assets/images'
import ResetPasswordBox from '@/components/ResetPasswordBox'
import Image from 'next/image'
import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <>
         <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
                      <div className="w-full max-w-sm md:max-w-3xl">
                          <div className="flex flex-col gap-6">
                              <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                                  <div className="grid p-0 md:grid-cols-2">   
                                      <form className="p-6 md:p-8">
                                          <div className="flex flex-col gap-6">
                                              <div className="flex flex-col items-center text-center">
                                                  <h1 className="text-2xl font-bold">Welcome back</h1>
                                                  <p className="text-balance text-muted-foreground">Reset Your account</p>
                                              </div>

                                              <ResetPasswordBox/>
                                            
                                      
                      
                                          </div>
                                      </form>
                                      <div className="relative hidden bg-muted md:block">
                                          <Image src={Placeholder} alt="Image" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" /></div>
                                  </div>
                              </div>
                              <div className="text-balance text-center text-xs text-muted-foreground [&amp;_a]:underline [&amp;_a]:underline-offset-4 hover:[&amp;_a]:text-primary">
                                  By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                              </div>
                          </div>
                      </div>
                  </div>
    </>
  )
}

export default ForgotPasswordPage
