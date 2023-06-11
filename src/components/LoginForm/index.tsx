import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm: React.FC = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("* Email is required"),
    password: Yup.string().required("* Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values); // Replace with your own logic
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-2">
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full h-5 p-2.5 border border-solid border-gray-100 rounded-[4px]"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div className="mb-4">
          <Field
            type="password"
            id="password"
            name="password"
            className="w-full h-5 p-2.5 border border-solid border-gray-100 rounded-[4px]"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-200 text-white py-2 px-4 rounded-[4px] w-full h-5 font-semibold text-base flex flex-col items-center justify-center mb-4"
        >
          Login
        </button>
        <a href="#" className="text-base text-blue-300">
          Forgot Password?
        </a>
      </Form>
    </Formik>
  );
};

export default LoginForm;
