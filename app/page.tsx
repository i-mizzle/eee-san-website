import ArrowNarrowRight from "@/components/elements/icons/ArrowNarrowRight";
import ChevronIcon from "@/components/elements/icons/ChevronIcon";
import Articles from "@/components/partials/landing/Articles";
import Attorneys from "@/components/partials/landing/Attorneys";
import Contact from "@/components/partials/landing/Contact";
import Faqs from "@/components/partials/landing/Faqs";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen h-inherit"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(6, 12, 14, 0.06) 0 1px, transparent 1px 100px)",
      }}
    >
      <section className="min-h-[60vh] h-inherit flex items-center justify-center mx-auto w-full xl:w-2/3 text-center">
        <div className="w-[95%] lg:w-[80%] xl:w-[60%] mt-30 xl:mt-12">
          <div className="w-max mx-auto p-3 rounded-full border border-eee-light-gray bg-white animate__animated animate__fadeInDown">
            <p className="text-eee-dark-gray text-sm font-medium">Local Expertise. Global Standards</p>
          </div>
          <h1 className="text-4xl xl:text-6xl mt-2 font-outfit font-medium text-center leading-[1em] animate__animated animate__fadeInUp">Smart Legal Solutions for a Complex World</h1>
          <p className="mt-5 text-center mx-auto text-eee-dark-gray animate__animated animate__fadeInUp">From individuals to businesses, we provide forward-thinking legal guidance designed to help you navigate challenges and seize opportunities with confidence.</p>

          <div className="mx-auto flex items-center justify-center gap-x-4 mt-8 animate__animated animate__fadeInUp">
            <Link href={`/#areas`} className='text-[13px] rounded-full hover:bg-eee-light-gray font-google-sans text-eee-dark-gray font-semibold px-5 py-4 transition duration-200 bg-white cursor-pointer shadow-xl shadow-eee-red/5'>
              Explore our services
            </Link>
            <Link href={`/#contact`} className='text-[13px] rounded-full bg-eee-red font-google-sans text-eee-white font-semibold px-5 py-4 transition duration-200 hover:bg-eee-black cursor-pointer flex items-center justify-center gap-x-2'>
              Request a Consultation
              <ChevronIcon className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-12 xl:px-32 2xl:px-44 animate__animated animate__fadeInUp">
        <div className="xl:p-5 bg-white rounded-lg shadow-xl shadow-eee-red/5">
          <div className="w-full min-h-[70vh] h-inherit rounded-lg" style={{
            backgroundImage: `url("/courtroom.png")`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
          }}>
            <div className="w-full min-h-[70vh] h-inherit bg-eee-red/50 p-8 xl:p-20">
              <div className="w-full xl:w-1/2">
                <div className="w-full flex items-start gap-x-6 mb-20">
                  <div className="">
                    <h1 className="font-google-sans text-2xl xl:text-4xl font-semibold text-white">97%</h1>
                    <p className="mt-1 text-sm text-white">Client Satisfaction</p>
                  </div>
                  <div className="">
                    <h1 className="font-google-sans text-2xl xl:text-4xl font-semibold text-white">420+</h1>
                    <p className="mt-1 text-sm text-white">Successful Outcomes</p>
                  </div>
                  <div className="">
                    <h1 className="font-google-sans text-2xl xl:text-4xl font-semibold text-white">24/7</h1>
                    <p className="mt-1 text-sm text-white">Legal Support</p>
                  </div>
                </div>
                <h1 className="font-google-sans text-2xl xl:text-6xl leading-[1.2em] text-white font-semibold w-full">
                  Relentless Advocacy. <br/>Proven Results.
                </h1>
                <div className="w-25 h-px bg-white my-5" />
                <p className="mt-5 w-full xl:w-2/3 text-white mb-10">From individuals to businesses, we provide forward-thinking legal guidance designed to help you navigate challenges and seize opportunities with confidence.</p>

                <button className="flex items-center text-white text-sm justify-center gap-x-2 cursor-pointer font-medium font-outfit">
                  Our Attorneys 
                  <ArrowNarrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="areas" className="px-8 lg:px-12 xl:px-32 2xl:px-44 py-20">
        <div className="w-full xl:w-1/2" data-aos="fade-up" data-aos-delay="50" >
          <h1 className="text-5xl font-outfit font-medium leading-[1em] text-eee-dark-gray">Practice Areas</h1>
          <p className="mt-5 mx-auto text-eee-dark-gray">We deliver strategic, results-driven legal services across key areas of law, combining deep expertise with a practical approach to help clients navigate complex legal and commercial challenges with confidence.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full mt-10">
          <div className="w-full p-10 rounded-lg bg-eee-light-gray/30" data-aos="fade-up" data-aos-delay="50" >
            <h3 className="text-eee-red font-medium text-2xl">Advocacy & Alternative Dispute Resolution</h3>
            <p className="mb-2 mt-5 text-eee-black text-[15px]">We represent clients in complex disputes before Nigerian courts and tribunals, delivering strategic and results-oriented advocacy. Our experience spans commercial litigation, contractual disputes, and regulatory matters.</p>

            <p className="mb-2 mt-5 text-eee-black text-[15px]">Recognizing the time and cost implications of litigation in Nigeria, we also place strong emphasis on Alternative Dispute Resolution (ADR), including arbitration, mediation, and negotiated settlements. We guide clients through dispute resolution processes under frameworks such as the Lagos Court of Arbitration and other recognized ADR bodies, ensuring efficient and enforceable outcomes.</p>
          </div>

          <div className="w-full p-10 rounded-lg bg-eee-light-gray/30" data-aos="fade-up" data-aos-delay="50" >
            <h3 className="text-eee-red font-medium text-2xl">Acquisitions & Restructuring</h3>
            <p className="mb-2 mt-5 text-eee-black text-[15px]">We advise on mergers, acquisitions, and corporate restructuring within Nigeria’s evolving business and regulatory landscape. Our services cover transaction structuring, legal due diligence, regulatory approvals, and post-transaction integration.</p>

            <p className="mb-2 mt-5 text-eee-black text-[15px]">We work closely with regulators such as the Corporate Affairs Commission and the Securities and Exchange Commission to ensure compliance and smooth execution of transactions. Whether you are expanding, divesting, or reorganizing, we provide practical legal solutions that align with your business goals.</p>
          </div>

          <div className="w-full p-10 rounded-lg bg-eee-light-gray/30" data-aos="fade-up" data-aos-delay="50" >
            <h3 className="text-eee-red font-medium text-2xl">Banking & Finance</h3>
            <p className="mb-2 mt-5 text-eee-black text-[15px]">We provide end-to-end legal support on financing transactions in Nigeria, advising lenders, borrowers, and investors across various sectors. Our expertise includes loan documentation, project finance, secured lending, and regulatory compliance.</p>

            <p className="mb-2 mt-5 text-eee-black text-[15px]">We guide clients through the requirements of key regulatory bodies such as the Central Bank of Nigeria, ensuring that transactions are structured in line with applicable banking laws and policies. Our approach is focused on mitigating risk, protecting interests, and enabling seamless financial operations.</p>
          </div>
        </div>

      </section>

      <Attorneys />

      <Faqs />

      <Contact />

      <Articles />

    </div>
  );
}
