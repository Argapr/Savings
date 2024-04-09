import Table from "@/components/table";
import Navbar from "@/components/navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="px-5">
        <div className="bg-[#eee8e89a] lg:mx-[10rem] p-2 mt-8 rounded-xl">
          <div className="h-[10rem] bg-blue-500 rounded-xl relative">
            <img src="/profil.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-xl"/>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-around bg-[#fff] py-2 rounded-lg">
              <p>Jumlah Total</p>
              <span>00</span>
            </div>
            <Table />
          </div>
        </div>
        <button className="border border-[#89eb3e] text-[#89eb3e] px-5 py-2 mb-5 absolute right-5 bottom-20 rounded-full bg-[#fff]">Menabung</button>
        <button className="border border-[#ee3131] text-[#ee3131] px-5 py-2 absolute right-5 bottom-10 rounded-full bg-[#fff]">Ambil Tabungan</button>
      </main>
    </>
  );
};

export default Dashboard;
