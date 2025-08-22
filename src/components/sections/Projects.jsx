import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 


export const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "INTERACTIVE TERMINAL FOR PERSONALIZED AGRI-TOURISM NAVIGATION",
      description:
        '"Tara na sa Quezon," an interactive web-based kiosk designed to boost agri-tourism in Quezon province. The kiosk offers personalized navigation to agricultural sites, providing visitors with interactive maps, directions tailored to their mode of transport (commuter or private vehicle), multimedia content, and essential site information. It also includes an admin section for authorized users to update content, ensuring accuracy. By simplifying the discovery of local farms and promoting sustainable tourism, "Tara na sa Quezon" aims to enhance the agri-tourism experience, support farmers, and benefit local communities.',
      images: [
        "/Villanueva-Portfolio/images/thesis1.png",
        "/Villanueva-Portfolio/images/thesis2.png",
        "/Villanueva-Portfolio/images/thesis3.png",
        "/Villanueva-Portfolio/images/thesis4.png",
        "/Villanueva-Portfolio/images/thesis5.png"
      ],
    },
    {
      title: "LeGrande Furniture (Website)",
      description:
        "Designed and developed a full-featured e-commerce platform tailored for a furniture business. The website includes a sleek, responsive design optimized for both desktop and mobile users, ensuring a smooth browsing and purchasing experience. Integrated a structured product catalog with categories, search, and filtering functionality for quick product discovery. Implemented secure checkout and payment handling. Focused on delivering a visually appealing interface that reflects the brand’s identity while ensuring performance, scalability, and user trust through modern web standards.",
      images: [
        "/Villanueva-Portfolio/images/legrande1.png",
        "/Villanueva-Portfolio/images/legrande2.png",
        "/Villanueva-Portfolio/images/legrande3.png",
        "/Villanueva-Portfolio/images/legrande4.png",
        "/Villanueva-Portfolio/images/legrande5.png"
      ],
    },
    {
      title: "Job Spark (application)",
      description:
        "A skill-based job matching system that generates personalized job recommendations based on user-entered skills. It provides statistical compatibility analysis, helping users identify the most suitable career paths.",
      images: [
        "/Villanueva-Portfolio/images/jobspark1.png",
        "/Villanueva-Portfolio/images/jobspark2.png",
        "/Villanueva-Portfolio/images/jobspark3.png",
        "/Villanueva-Portfolio/images/jobspark4.png",
        "/Villanueva-Portfolio/images/jobspark5.png"
      ],
    },
    {
      title: "Quiz Forge (application)",
      description:
        "Quiz Forge is an interactive quiz platform built to make learning engaging. Users can create quizzes based on their chosen topics. Quiz Forge transforms traditional assessments into a personalized and effective way of learning.",
      images: [
        "/Villanueva-Portfolio/images/quiz1.png",
        "/Villanueva-Portfolio/images/quiz2.png",
        "/Villanueva-Portfolio/images/quiz3.png",
        "/Villanueva-Portfolio/images/quiz4.png",
        "/Villanueva-Portfolio/images/quiz5.png",
        "/Villanueva-Portfolio/images/quiz6.png"
      ],
    },
    {
      title: "Tech Innovators Hub (Cisco Packet Tracer Network Project)",
      description:
        "Designed and implemented a secure enterprise network for a modern tech office, ensuring efficient connectivity and access control across multiple departments. Configured routers, VLANs, and DHCP pools for structured traffic segmentation and seamless dynamic IP allocation. Enabled OSPF routing protocols to optimize network communication and performance. Implemented Access Control Lists (ACLs) to restrict communication between specific departments, enhancing security, data integrity, and operational efficiency.",
      images: [
        "/Villanueva-Portfolio/images/techinnovator1.png",
        "/Villanueva-Portfolio/images/techinnovator2.png",
        "/Villanueva-Portfolio/images/techinnovator3.png",
        "/Villanueva-Portfolio/images/techinnovator4.png"
      ],
    },
    {
      title: "Bluetooth-Controlled RC Prototype (Embedded SYSTEM)",
      description:
        "A functional RC prototype simulated through Bluetooth wireless control. The system is powered by a microcontroller, enabling communication between a mobile device and the hardware. It features multiple DC motors for movement, control of the crane arm, and LED indicators. The design integrates concepts of motor drivers and wireless signal processing, showcasing the fundamentals of embedded systems. The project emphasizes the potential of remote-controlled devices in practical applications such as automation, robotics, and smart machinery.",
      images: [
        "/Villanueva-Portfolio/images/rc1.jpg",
        "/Villanueva-Portfolio/images/rc2.jpg",
        "/Villanueva-Portfolio/images/rc3.jpg",
        "/Villanueva-Portfolio/images/rc4.jpg",
        "/Villanueva-Portfolio/images/rc5.jpg"
      ],
    }
  ];

  const openProject = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  {/* ✅ Updated button */}
                  <button
                    onClick={() => openProject(project)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ✅ Modal with Carousel */}
      {isOpen && activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-white">
              {activeProject.title}
            </h3>

            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation      // ✅ Next/Prev arrows
            pagination={{ clickable: true }} // ✅ clickable dots
            className="rounded-lg"
            >
            {activeProject.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[500px] object-contain mx-auto" // ✅ fixed size
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
