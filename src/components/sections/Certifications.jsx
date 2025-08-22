import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSeminar, setActiveSeminar] = useState(null);

  const awards = [
    {
      title: "EXCEPTIONAL TRAINEE AWARD",
      description:
        "Who has excelled in their training, demonstrating a strong commitment to learning, effectively applying new knowledge and innovative thinking. A proactive approach to problem-solving and showing talents that can be used to the organization towards success.",
      image: "/Villanueva-Portfolio/images/Traineeaward.jpg",
    },
  ];

  const trainings = [
    {
      title: "BOSH SO1 (10-Hr OSH + 2-Hr TOT)",
      description: `1PHILSAFE | DOLE-Accredited
Completed July 18, 2025
Cert. ID: 1PTDS-BOSH-SO1-B25085-042`,
      image: "/Villanueva-Portfolio/images/philsafe.png",
    },
  ];

  const seminars = [
    {
      title: "Seminars Attended",
      description: "A collection of seminars Ive attended that expanded my knowledge in technology, innovation, and professional development—equipping me with fresh insights and skills to grow both personally and professionally.",
      images: [
        "/Villanueva-Portfolio/images/seminar1.jpg",
        "/Villanueva-Portfolio/images/seminar2.jpg",
        "/Villanueva-Portfolio/images/seminar3.jpg",
        "/Villanueva-Portfolio/images/seminar4.jpg",
        "/Villanueva-Portfolio/images/seminar5.jpg",
        "/Villanueva-Portfolio/images/seminar6.jpg",
        "/Villanueva-Portfolio/images/seminar7.jpg"
      ],
    },
  ];

  const openSeminar = (seminar) => {
    setActiveSeminar(seminar);
    setIsOpen(true);
  };

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Certifications & Achievements
          </h2>

          {/* Awards */}
          <div className="mb-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {award.title}
                  </h3>
                  <p className="text-gray-400">{award.description}</p>
                </div>
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full md:w-1/3 rounded-lg border border-white/10"
                />
              </div>
            ))}
          </div>

          {/* Trainings */}
          <div className="mb-12">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {training.title}
                  </h3>
                  <p className="text-gray-400 whitespace-pre-line">
                    {training.description}
                  </p>
                </div>
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full md:w-1/3 max-h-80 object-contain rounded-lg border border-white/10"
                />
              </div>
            ))}
          </div>

          {/* Seminars */}
          <div>
            {seminars.map((seminar, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {seminar.title}
                </h3>
                <p className="text-gray-400 whitespace-pre-line">
                    {seminar.description}
                  </p>
                <button
                  onClick={() => openSeminar(seminar)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <br />View Certifications
                </button>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ✅ Modal for Seminars */}
      {isOpen && activeSeminar && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-white">
              {activeSeminar.title}
            </h3>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="rounded-lg"
            >
              {activeSeminar.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Seminar ${idx + 1}`}
                    className="w-full h-[500px] object-contain mx-auto rounded-lg border border-white/10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};
