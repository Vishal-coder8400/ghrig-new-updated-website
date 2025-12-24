"use client";

import { useState } from "react";

export default function FAQsPage() {
  const faqData = {
    General: [
      {
        q: "What is ProConnect?",
        a: "ProConnect is a digital recruitment and training marketplace that connects recruiters, corporate teams, job seekers, and trainers on one platform.",
      },
      {
        q: "How do I create an account?",
        a: "Click the Sign Up button, choose your role, enter your details, and verify your email or phone number to get started.",
      },
      {
        q: "Is the platform free to use?",
        a: "Yes, basic usage is free. Additional premium features like candidate database access may require a subscription.",
      },
      {
        q: "Which devices are supported?",
        a: "ProConnect works seamlessly on desktops, tablets, and mobile devices.",
      },
      {
        q: "Who can use ProConnect?",
        a: "Recruiters, Corporate HR teams, Trainers, and Job Seekers can all use ProConnect based on their role.",
      },
    ],

    "For Corporate": [
      {
        q: "How is gHRig different from other Sourcing platforms?",
        a: "We are amongst the first to take this initiative towards setting up an Online Recruitment / Training Marketplace, where you get plenty of relevant options within a short span of time and with far better commercials compared to any other player. We stand up for Speed, Quality and best of Rates in the market.",
      },
      {
        q: "What are the main Features available at gHRig platform as an Employer?",
        a: "Real time Dashboard bringing transparency to the entire Hiring process with progress state of each candidate. As an Employer, you can post your open vacancies / Trainer requirement mandates freely at our platform. Also, you can have access to the shared resumes 24/7 as uploaded and validated by our TA and Quality team.",
      },
      {
        q: "How often will I get notifications?",
        a: "You will receive notifications on the following occasions:\na. Upon each successful posting of Jobs\nb. Upon submission of resumes by our Team\nc. Upon joining of any selected candidate",
      },
      {
        q: "Do I get a mobile app for easy access?",
        a: "Yes, mobile app of our platform is available in Android as well as iOS, where you get regular notifications.",
      },
      {
        q: "What type of HR Staffing solution does gHRig provide?",
        a: "gHRig People Solutions provides Permanent Staffing solutions along with Trainer requirements on short term assignments across various Sectors and Functions.",
      },
      {
        q: "What is the average time taken to get a quality hire from gHRig?",
        a: "It would take approximately 10 working days from the date of posting and the speed at which you would screen and issue the Offer letter. For Trainers, the requirement can be filled within 3 working days.",
      },
      {
        q: "Can I communicate with the Recruiters / Trainer directly?",
        a: "gHRig has a dedicated Account Manager with whom you can raise all your queries via email and the Account Manager shall respond to your queries within 24 hours.",
      },
      {
        q: "Is Registration mandatory for the Employer on gHRig platform?",
        a: "Yes, one-time initial Registration is mandatory for each Employer, post which they will be provided a unique Login ID for regular access. Through the Login ID you can post your Open vacancies, Trainer requirements, access resumes and have real time status of candidates.",
      },
      {
        q: "As an Employer, what are the options before me towards the shared resumes / Trainers profiles?",
        a: "Well, you can Shortlist, Reject or mention the candidate as Hold against each resumeshared to you along with Remarks, to which real time information percolates down to the Recruiter as well as candidate. No further un necessary follow ups from anyone.",
      },
      {
        q: "How do we proceed ahead once a candidate is Offered from our end?",
        a: "You need to update the Date of Offer issuance and Date of Joining in the platform. For Trainers, same would be in offline mode.",
      },
      {
        q: "How does billing happen?",
        a: "Once the candidate joins and is updated in the system, our team will generate the Invoice to you as per the agreed TnC. Similarly, on completion of Training assignments, the invoice for the Training sessions shall be raised.",
      },
    ],

   "For Recruiters": [
  {
    q: "How is gHRig different from other Sourcing platforms ?",
    a: "We are amongst the first to take this initiative towards setting up an Online Recruitment Marketplace, where you get plenty of relevant Gig options related to Recruitment where you can work upon basis your skillsets and strengths, right at the comfort of your hometown, without any hastles of daily commute and at your available time of the day which you decide.\nWe stand up for Quality work mandates from Professional Organizations."
  },
  {
    q: "What are the main Features available at gHRig platform as a Recruiter?",
    a: "Real time Dashboard bringing transparency to the entire Hiring process with progress state of each candidate.\nAs a gHRig Recruiter, you can have a ready platform with pool pf open positions to work upon at the comfort of your home, your available time of the day with no hastles of daily travel.\nThe resumes shared from your end shall be considered as yours in the database for a tenure of 6 months from the date of submission, and you shall get the benefit of same in case the candidate is placed with our Client within a span of 6 months from the date of submission."
  },
  {
    q: "How often will I get notifications?",
    a: "You will receive notifications on below occasions:\na. Upon each successful posting of candidates from your end.\nb. Upon approval / rejection of resumes by our system / Quality Team\nc. Upon joining of any selected candidate\nd. Upon release of payment"
  },
  {
    q: "Can a Recruiter work on multiple Open positions ?",
    a: "Off course yes. As a platform, we have no restrictions to work on any number of open positions."
  },
  {
    q: "Can the Recruiter operate from home and anywhere in India ?",
    a: "Yes, as a gHRig Recruiter, you have the flexibility to operate from anywhere at India and at your own preferred time.\nYou just need to have your own computer / laptop, phone and Internet connectivity."
  },
  {
    q: "Shall gHRig provide access to job portals to its registered Recruiters ?",
    a: "No, we don’t provide any such job portal access or propagate subscription to any social media platform.\nThe Recruiters are required to source candidates from their own means and network."
  },
  {
    q: "Does gHRig provide permanent payroll job to its Recruiters ?",
    a: "No. This is not any permanent / contractual job under any means with gHRig People Solutions.\nThe Recruiters gets payment released only post each successful hire that they make through our platform."
  },
  {
    q: "Is there any provision for advance / partial payment to the Recruiters ?",
    a: "No such provision is there of advance / partial payment to anyone."
  },
  {
    q: "Does gHRig consider people with career breaks, Sabattical or with physical disabilities ?",
    a: "Yes, we do not discriminate any individual, and people will be considered in this platform only basis their skills, merit and dedication to make something big."
  },
  {
    q: "Do I get a mobile app for easy access?",
    a: "Yes, mobile app of our platform is available in Android as well as i OS, where you will get regular notifications and easy access."
  },
  {
    q: "What type of HR Staffing solution does gHRig provide ?",
    a: "gHRig People Solutions provides Permanent Staffing solutions PAN India across various Sectors and Functions."
  },
  {
    q: "What is the average time to get empanelled with gHRig and receive work mandates on Open positions from Clients from gHRig.com ?",
    a: "This shall take a time period of 5 / 7 working days towards empanelment.\nOnce a Recruiter completes his / her registration in our platform, our Team shall conduct the due diligence of the Recruiter based on the experience cited in his / her resume.\nOnce approved, the empanelled Recruiters can view the Open positions through their respective Dashboards on real time basis and can start working on the open positions and submit the shortlisted profiles only through online mode at our portal basis their speed.\ngHRig has the right to reject the candidature of any Recruiter / Trainer, if their skillsets do not match with the requirements."
  },
  {
    q: "How does a Recruiter come to know the status of the submitted candidates ?",
    a: "Same is available on real time basis at the Recruiter Dashboard."
  },
  {
    q: "Can a Recruiter communicate with the Clients directly?",
    a: "No. gHRig has a dedicated Account Manager with whom the Recruiters can raise all their queries via email, and the Account Manager shall respond to their queries within 24 working hrs."
  },
  {
    q: "Is Registration mandatory from the end of Recruiter on gHRig platform ?",
    a: "Yes, One time initial FREE Registration ( limited time offer ) would be mandatory for each Recruiter, and post registration they would be provided a unique Login ID for regular access.\nThrough the Login ID you can work on the Open vacancies, submit new profiles and also have access to real time status of resumes submitted from your end."
  },
  {
    q: "Does gHRig charge any subscription cost from Recruiters for access to the portal ?",
    a: "No Subscription cost is charged as of now from any Recruiter."
  },
  {
    q: "As a Recruiter, what are the options before me towards the shared resumes ?",
    a: "Well, you can have the status of candidates Shortlisted, Rejected or Hold with reasons specified from Client / Admin end against each resume shared from your end.\nStill if any further query exists at your end, you can write to your Account Manager who shall revert back to you within 24 working hours."
  },
  {
    q: "What do you do once a candidate is Offered from end of Client ?",
    a: "Well, just like normal case, you need to be constantly in touch with the offered candidates till he joins with our Client.\nIf any queries / observations you have related with the offered candidate, you can always highlight same before your Account Manager, who would take it ahead with the Client and also revert back to you."
  },
  {
    q: "How does billing and payments happen ?",
    a: "Once the candidate joins and is updated in the system, our team will generate the Invoice before the Client as per the agreed TnC.\nPost receiving the payment from Client, and after deduction of the platform fees, the payable amount per candidate shall be released directly to your bank account, as shared from your end at the time of your registration and considering the applicable taxes as per existing Government regulations.\nA proper calculation sheet shall be shared to each Recruiter, thereby emphasizing on TRANSPARENCY."
  }
],

    "For Job Seekers": [
      {
        q: "How do I apply for a job?",
        a: "Browse available jobs, select the one you like, click Apply, upload your resume, and submit your application.",
      },
      {
        q: "Is my personal information kept private?",
        a: "Your data is encrypted and only shared with recruiters when you apply for a job.",
      },
      {
        q: "How do I track my applications?",
        a: "Go to Dashboard → Applications to check the status such as Submitted, Shortlisted, or Interview Scheduled.",
      },
      {
        q: "Can I upload multiple resumes?",
        a: "Yes, you can upload multiple resumes and choose which one to use for each application.",
      },
      {
        q: "Do I need to pay to apply?",
        a: "No, job seekers can apply to all jobs for free.",
      },
    ],

    "For Trainers": [
      {
        q: "How can I list my training courses?",
        a: "Go to Trainer Dashboard → Add Course and enter the course title, price, duration, and training format.",
      },
      {
        q: "How do I get paid for my courses?",
        a: "Payments are processed securely, and payouts are transferred directly to your registered bank account.",
      },
      {
        q: "Can I conduct live training?",
        a: "Yes, trainers can host live sessions using Zoom, Google Meet, or the integrated virtual classroom.",
      },
      {
        q: "How do students enroll?",
        a: "Students browse the training marketplace and enroll using the Buy Now or Register buttons.",
      },
      {
        q: "Can I offer discounts?",
        a: "Yes, you can create promotional codes and discounted pricing for your courses.",
      },
    ],
  };

  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFAQ, setOpenFAQ] = useState(null);

  const scrollToSection = (id) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-4 md:px-16 py-10 flex gap-10">
      {/* LEFT MENU */}
      <aside className="w-56 hidden md:flex flex-col gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => scrollToSection(cat)}
            className={`
              px-4 py-3 rounded-lg text-left text-[15px] font-medium transition-all duration-200
              ${
                activeCategory === cat
                  ? "bg-blue-100 text-blue-700 shadow-md scale-[1.02]"
                  : "text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md hover:scale-[1.01]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2 mb-8">
          Find answers to the most common questions about our platform.
        </p>

        {/* SECTIONS */}
        {categories.map((category) => (
          <section id={category} key={category} className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>

            {faqData[category].map((item, i) => {
              const id = `${category}-${i}`;

              return (
                <div
                  key={id}
                  className={`
                    w-full rounded-xl px-5 py-4 mb-4 cursor-pointer transition-all duration-200
                    border border-gray-200 bg-white 
                    hover:shadow-lg hover:scale-[1.01]
                    ${
                      openFAQ === id
                        ? "shadow-lg scale-[1.01] border-blue-300"
                        : "shadow-sm"
                    }
                  `}
                >
                  {/* FAQ Header */}
                  <div
                    onClick={() => toggleFAQ(id)}
                    className="flex justify-between items-center select-none"
                  >
                    <p className="font-medium text-[16px]">{item.q}</p>

                    <span
                      className="text-lg text-gray-500 transition-transform duration-200"
                      style={{
                        transform:
                          openFAQ === id ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ▼
                    </span>
                  </div>

                  {/* FAQ Answer */}
                  {openFAQ === id && (
                    <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </section>
        ))}

        {/* CONTACT BOX */}
        <div className="mt-16 bg-white shadow-md p-10 rounded-xl text-center">
          <h3 className="text-xl font-semibold">Can’t find your answer?</h3>
          <p className="text-gray-600 mt-2">
            Our support team is here to help. Reach out to us for any further
            assistance.
          </p>
          <button className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </main>
    </div>
  );
}
