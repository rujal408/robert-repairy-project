import LoginForm from "@/container/login-form";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="bg-blue-600 text-white w-1/2 p-6 flex flex-col justify-between">
        <h1 className="font-bold text-[24px] uppercase">Repairy</h1>
        <div className="space-y-2 mb-2">
          <span className="font-semibold">Automotive Scheduling Software</span>
          <p>
            Our mission is to help you deliver your magic. And that all starts
            with connecting you and your customers.
          </p>
          <span className="text-[12px]">- Repairy Team</span>
        </div>
      </div>
      <div className="w-1/2 grid place-items-center">
        <LoginForm />
      </div>
    </div>
  );
}
