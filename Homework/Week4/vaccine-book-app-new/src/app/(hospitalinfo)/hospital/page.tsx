import CarPanel from "@/components/CarPanel";

export default function Car() {
  return (
    <main className="text-center mt-[50px] pt-[30px]">
      <div className="text-[30px] font-bold flex items-center justify-center">
        <span className="mr-3 mt-[30px]">โรงพยาบาลที่เข้าร่วมโครงการ</span>
      </div>
        <CarPanel/>
    </main>
  );
}