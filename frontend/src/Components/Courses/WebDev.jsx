import AdjustIcon from "@mui/icons-material/Adjust";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "HTML",
    link: "https://youtu.be/HcOc7P5BMi4?si=oTcFOkm04P8P4KO4",
    topics: [
      {
        section: "Introduction", links: [
          { name: "Basics", url: "https://youtu.be/qz0aGYrrlhU?si=5VDtc7FsiCHa_GVM" },
          { name: "Semantic HTML", url: "https://youtu.be/DSRMCZwM3YE?si=68gV-oLL1QF3Jkce" },
          { name: "Forms and Validation", url: "https://youtu.be/LhWQlBdqaeM?si=lu6vlUn5zYwcQcv3" }
        ]
      },
      {
        section: "Intermediate", links: [
          { name: "SEO", url: "https://youtu.be/ORazAn-Iigg?si=oWYm_qv5k3J7dEGH" },
          { name: "Accessibility", url: "https://youtu.be/e2nkq3h1P68?si=CRRAPjp0X4kOsFCR" }
        ]
      }
    ]
  },
  {
    title: "CSS",
    link: "https://youtu.be/ESnrn1kAD4E?si=hUMB_K9F4c9EOPnG",
    topics: [
      {
        section: "Introduction", links: [
          { name: "Why CSS", url: "https://youtu.be/AP3_V7KXHs4?si=QE3b9T1cp1-t_x6s" },
          { name: "Basics", url: "https://youtu.be/wRNinF7YQqQ?si=a7dbGrDma5J3ztgX" }
        ]
      },
      {
        section: "Intermediate", links: [
          { name: "FlexBox", url: "https://youtu.be/tXIhdp5R7sc?si=Oc7fPRz6xCS4Ztt0" },
          { name: "Grid", url: "https://youtu.be/BNmxUzPRYdw?si=fD60vUv_ZxA7m6OW" },
          { name: "Responsiveness", url: "https://youtu.be/yU7jJ3NbPdA?si=JCGC1JBMdLf5ZWR2" },
          { name: "Animation", url: "https://youtu.be/YszONjKpgg4?si=jKVVg4xYtVEwCYlC" }
        ]
      },
      {
        section: "Frameworks", links: [
          { name: "Bootstrap CSS", url: "https://youtu.be/Jyvffr3aCp0?si=cUDyxbfZztNfvEB0" },
          { name: "Tailwind CSS", url: "https://youtu.be/_9mTJ84uL1Q?si=HPhIjxuAMxWAxQiX" }
        ]
      }
    ]
  },
  {
    title: "JavaScript",
    link: "https://youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i&si=-JPDSF2uoHGWvbGk",
    topics: [
      {
        section: "Basics to Advance", links: [
          { name: "Basics", url: "https://youtu.be/lkIFF4maKMU?si=ZJ_7O-WVB3IEpbZg" },
          { name: "DOM manipulation", url: "https://youtu.be/5fb2aPlgoys?si=3oOQrS87Bg0pD2XD" },
          { name: "Advance JS", url: "https://youtu.be/R9I85RhI7Cg?si=8yb_UwZiykGTJWIu" }
        ]
      }
    ]
  },
  {
    title: "React",
    link: "https://youtu.be/CgkZ7MvWUAA?si=qbv3dhAZmWT8tP1C",
    topics: [
      {
        section: "Introduction", links: [
          { name: "Components", url: "https://youtu.be/VSSm2nebwak?si=A7qkTzEY7BLW3sWV" },
          { name: "Rendering", url: "https://youtu.be/mECV6nGOqNo?si=ryrvizYVen2AtUUD" },
          { name: "Props", url: "https://youtu.be/VpGFuThTjhY?si=--BHkXgX36_gRxB4" },
          { name: "Hooks", url: "https://youtu.be/4Cf86qVEIJY?si=QebziLC7obWPEqmM" }
        ]
      },
      {
        section: "Intermediate", links: [
          { name: "Router", url: "https://youtu.be/VJov5QWEKE4?si=_I92a9pBAiffLVcJ" },
          { name: "Redux (State Management)", url: "https://youtu.be/fxT54eRIsc4?si=cgatGIu7QYntTPRr" },
          { name: "API calls", url: "https://youtu.be/V2x2Nq-fcTU?si=21u1AhK2XTpdEkzU" },
          { name: "Zod (Validation)", url: "https://youtu.be/9UVPk0Ulm6U?si=CXaunWQdLL62xxbf" },
          { name: "Framer (Animation)", url: "https://youtu.be/GOuwOI-WSkE?si=tn2muDL22EWAWnh0" }
        ]
      }
    ]
  },
  {
    title: "Node.js",
    link: "https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=49lFJrxDa434l78L",
    topics: [
      {
        section: "Introduction", links: [
          { name: "Intro to backend", url: "https://youtu.be/XBu54nfzxAQ?si=OdbFzmOPZW1Y6kCR" },
          { name: "Backend Tools/Techs", url: "https://youtu.be/tN6oJu2DqCM?si=ykS83I1b8hImuEtx" },
          { name: "Node.js Oneshot", url: "https://youtu.be/TlB_eWDSMt4?si=avvKxwYhJS56LTuk" }
        ]
      }
    ]
  },
  {
    title: "Express.js",
    link: "https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=49lFJrxDa434l78L",
    topics: [
      {
        section: "Introduction", links: [
          { name: "Creating server", url: "https://youtu.be/N2-FyBBxOZA?si=6ibPfyO4GlTwNKLB" },
          { name: "HTTP course", url: "https://youtu.be/qgZiUvV41TI?si=Uti4AR7BPfgn7m7t" },
          { name: "Postman for API testing", url: "https://youtu.be/4-DmsxM347k?si=x31zW6H5sbGdM2d_" },
          { name: "Middlewares", url: "https://youtu.be/n2c0mf1sza4?si=UncQ6DWySEqDTO9t" },
        ]
      },
      {
        section: "API", links: [
          { name: "REST API", url: "https://youtu.be/cJAyEOZQUQY?si=2PAfJLMK3pyK8vhB" },
          { name: "GraphQL API", url: "https://youtu.be/WtkKwO1viI8?si=kCGLWRCghgmr6310" }
        ]
      }
    ]
  },
  {
    title: "Database",
    topics: [
      {
        section: "Introduction", links: [
          { name: "DB types", url: "https://youtu.be/W2Z7fbCLSTw?si=LldQ1J_4kjh1QhWE" },
          { name: "SQL vs No SQL", url: "https://youtu.be/ruz-vK8IesE?si=sJEvs7jSDiUFeazP" }
        ]
      },
      {
        section: "DB one shots", links: [
          { name: "MongoDB", url: "https://youtu.be/J6mDkcqU_ZE?si=hBqhHorQ0NFEKZNn" },
          { name: "PostgresSQL", url: "https://youtu.be/qw--VYLpxG4?si=54LFkg6CdG3EWWPv" },
          { name: "Prisma", url: "https://youtu.be/RebA5J-rlwg?si=MQYpPMY4wIyBE9W2" }
        ]
      }
    ]
  }
];

export default function WebDev() {
  return (
    //Main Background
    <div className="w-screen h-auto bg-gradient-to-br from-red-600 via-red-500 to-red-700 animate-gradient-move flex flex-col items-center p-6 space-y-6 overflow-hidden overflow-x-hidden">

      {/*Main course container*/}
      <div className="max-w-4xl w-full">

        {courses.map((course, index) => (
          <div key={index} className="bg-[#eeeeee] p-6 rounded-xl shadow-lg mb-6 w-full">{/*<-Secondary course container*/}

            {/*Main link/header div*/}
            <div className="flex items-center space-x-3 text-lg font-semibold text-gray-800">
              <AdjustIcon className="text-red-500" />
              {course.link&&<Link to={course.link} target="_blank" className="hover:underline">
                {course.title}
              </Link>}
              {!course.link&&<p>{course.title}</p>}
            </div>

            {/*Sub parts of main course links*/}
            <div className="mt-4 space-y-4">
              {course.topics.map((topic, idx) => (
                <div key={idx} className="border-l-4 border-red-500 pl-4">

                  {/*Sub sections*/}
                  <h2 className="text-lg font-bold text-gray-700">{topic.section}</h2>

                  {/*Sub sections divs*/}
                  <div className="mt-2 space-y-2">

                    {topic.links.map((link, i) => (
                      <div key={i} className="flex space-x-2 text-gray-600">{/*<-Topic Links*/}
                        <AdjustIcon className="text-gray-500" />
                        <Link to={link.url} target="_blank" className="hover:underline">
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
