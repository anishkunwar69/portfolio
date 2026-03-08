
import Image from "next/image";
import Container from "../components/Container";
import { CalEmbed } from "../components/contact/CalEmbed";

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center border-b-[1px] border-slate-200"
        >
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-50 z-0 pointer-events-none"></div>

            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-50 z-0 blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-50 z-0 blur-3xl opacity-60 pointer-events-none"></div>

            <Container className="relative z-10 w-full">
                <div className="py-20">
                    <div className="mb-16 relative">
                        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500 hidden sm:block"></div>
                        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            Get In Touch
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-serif mb-6">
                            Let's <span className="text-blue-600">Connect</span>
                        </h1>
                        <p className="text-gray-700 max-w-2xl">
                            Ready to start your project? Book a consultation and let's build
                            something amazing together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
                        <CalEmbed />

                        <div className="relative group h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
                            <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white">
                                <Image
                                    src="https://goinswriter.com/wp-content/uploads/2011/10/steve-jobs.jpg"
                                    alt="Steve Jobs - Design inspiration quote"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    loading="lazy"
                                    quality={85}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    style={{ transform: "translateZ(0)" }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent pointer-events-none" />

                                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                                    <div className="space-y-3 sm:space-y-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-10 h-1 sm:w-12 sm:h-1 bg-blue-500 rounded-full mb-4 sm:mb-5 md:mb-6" />
                                        <blockquote className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium text-white italic leading-tight font-serif">
                                            "Design is not just what it looks like and feels like.
                                            Design is how it works."
                                        </blockquote>
                                        <cite className="block text-gray-300 not-italic font-medium text-base sm:text-lg">
                                            — Steve Jobs
                                        </cite>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
