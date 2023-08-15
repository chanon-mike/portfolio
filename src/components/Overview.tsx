const Overview = () => {
  return (
    <section id="bio" className="flex justify-start flex-col max-w-7xl mx-auto px-10 text-text">
      <div className="mb-5">
        <h1 className="text-[40px] border-b-primary border-b-2 w-fit">Bio</h1>
      </div>
      <ul className="text-[18px] font-thin">
        <li>
          <span className="font-normal">2002 </span>
          <span>Born in Chiang Mai</span>
        </li>
        <li>
          <span className="font-normal">2019 </span>
          <span>Exchange in Siatama via YFU Full Scholarship</span>
        </li>
        <li>
          <span className="font-normal">2021 </span>
          <span>INIAD, Toyo University Full Scholarship</span>
        </li>
      </ul>
    </section>
  );
};

export default Overview;
