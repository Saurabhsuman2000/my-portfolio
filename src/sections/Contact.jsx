import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20 w-full flex-grow-1"
    >
      <RevealOnScroll>
        <div className="px-4 sm:w-150 w-[90%] mx-auto">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Get In touch
          </h2>

          <form
            action="https://formsubmit.co/saurabhsuman720@gmail.com"
            method="POST"
            className="space-y-6"
          >

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                className="w-full bg-white/10 border rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full bg-white/10 border rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message..."
                required
                className="w-full resize-none bg-white/10 border rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            
            <button class="sendbutton place-self-center hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" type="submit">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
