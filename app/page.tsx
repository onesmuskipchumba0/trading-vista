import QuickActions from "@/components/dashboard/QuickActions";

export default function Home() {
  return (
      <div className='flex flex-col shadow-md justify-center shadow-slate-300 bg-white ml-8 mr-8 mt-12'>
        <div className="flex flex-col items-center w-full bg-slate-200 h-20 justify-center">
          <span className="text-4xl font-bold bg-gradient-to-tr from-purple-600 to-indigo-600 text-transparent bg-clip-text">Trading Vista</span>
          <span>Manage you sales and inventory easily.</span>
        </div>
        <QuickActions />
    </div>
  );
}
