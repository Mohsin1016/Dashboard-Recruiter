import dynamic from "next/dynamic";
import Head from "next/head";

const SignInForm = dynamic(() => import("../../components/SignIn/SignInForm"));

const Index = () => {
  return (
    <>
      <Head>
        <title>Sign In - ARQ</title>
      </Head>
      <div className="px-4 md:px-40 py-20 relative">
        <SignInForm />
      </div>
    </>
  );
};

export default Index;