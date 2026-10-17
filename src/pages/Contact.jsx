import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const EMAIL = "info@arunbuildingconstructions.com";

function Contact() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-4" />
        <h2 className="mb-8 text-center font-conthrax text-sm tracking-widest sm:text-xl">CONTACT US</h2>
        <form
          className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nSubject: ${data.get("subject")}\n\n${data.get("message")}`
            );
            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(data.get("subject") || "Project enquiry")}&body=${body}`;
          }}
        >
          <div className="space-y-6 px-4">
            {[
              ["name", "Your Name (required)", "text", "Your name"],
              ["email", "Your Email (required)", "email", "you@example.com"],
              ["phone", "Mobile Number", "tel", "99XXXXXXX"],
              ["subject", "Subject (required)", "text", "Construction enquiry"],
            ].map(([name, label, type, placeholder]) => (
              <div key={name}>
                <label className="mb-1 block text-sm" htmlFor={`c-${name}`}>{label}</label>
                <input
                  id={`c-${name}`}
                  name={name}
                  type={type}
                  required={name !== "phone"}
                  placeholder={placeholder}
                  className="w-full border border-[#a16848] bg-transparent px-4 py-2 focus:outline-none"
                />
              </div>
            ))}
          </div>
          <div className="flex h-full flex-col justify-between space-y-4 px-4">
            <div>
              <label className="mb-1 block text-sm" htmlFor="c-message">Your Message</label>
              <textarea
                id="c-message"
                name="message"
                rows={10}
                className="w-full border border-[#a16848] bg-transparent px-4 py-2 focus:outline-none"
                placeholder="Tell us about the project"
              />
            </div>
            <button
              type="submit"
              className="self-end border border-[#caa193] bg-[#caa193] px-8 py-2.5 font-conthrax text-[9px] uppercase tracking-wide text-black hover:bg-transparent hover:text-[#caa193]"
            >
              SEND EMAIL
            </button>
          </div>
        </form>
      </section>

      <CtaBand />
    </>
  );
}

export default Contact;
