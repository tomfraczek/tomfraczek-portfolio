"use client";
import Link from "next/link";
import { useState } from "react";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import download from "@/public/icons/download.svg";
import Image from "next/image";
import { MailCheck, Send } from "lucide-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="w-screen py-24 flex flex-col" id="contact">
      <h3 className="text-3xl text-center">NEED A DEVELOPER?</h3>
      <h3 className="text-3xl mb-6 text-center">
        LET&#39;S BUILD SOMETHING TOGETHER.
      </h3>
      <div className="flex items-start justify-center px-28 py-10 ">
        <div className="flex-1 border py-3 px-8">
          {!sent ? (
            <>
              <p className="text-center pt-4">
                I&#39;m ready to hear about your project.
              </p>
              <p className="text-center pb-4">
                Don&#39;t hesitate to get in touch with me using the contact
                form.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Name*
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <input
                        type="text"
                        id="name"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    )}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <input
                        type="email"
                        id="email"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    )}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Message*
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <textarea
                        id="message"
                        {...field}
                        className="h-60 mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows={4}
                      />
                    )}
                  />
                  {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-3 block w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <MailCheck size={66} color="#11ff00" />
              <p className="text-center">
                Your message has been sent successfully!
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <span className="text-2xl mb-2 block">Email</span>
              <Link href="mailto:tomfraczekdev@gmail.com" className="flex">
                <Send />
                <span className="ml-3">tomfraczekdev@gmail.com</span>
              </Link>
            </div>
            <div className="mt-6">
              <span className="text-2xl mb-2 block">Connect</span>
              <div className="flex gap-4">
                <a href="https://github.com/tomfraczek/" target="_blank">
                  <Image width={35} src={github} alt="github icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tom-fraczek-77a707144/"
                  target="_blank"
                >
                  <Image width={35} src={linkedin} alt="linkedin icon" />
                </a>
              </div>
            </div>
            <Link
              href="/Tomasz Fraczek-CV-Frontend.pdf"
              className="mt-8 flex items-center"
              target="_blank"
            >
              <Image
                className="mr-2"
                width={35}
                src={download}
                alt="download icon"
              />
              Download the resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
