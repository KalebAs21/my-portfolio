
import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {

    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Creative Web developer</h3>
                        <p className="text-muted-foreground">
                            I am a creative web developer with a passion for building beautiful and functional websites. 
                            I specialize in frontend development using React and Tailwind CSS, creating responsive and user-friendly interfaces.
                        </p>
                         <p className="text-muted-foreground">
                            I am passionate about learning new technologies and continously improving my skills
                         </p>
                         <div className="flex flex-col sm:flex-row pt-4 gap-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                { ""}
                                Get In Touch
                            </a>
                            <a href="" 
                            className="px-6 py-7 rounded-full border border-primary text-primary hover:bg-prmary/10 transtion-colors duration">
                                { ""}
                                Download CV 
                            </a>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive Websits and Web apllications With modern frameworks</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing intutive user interface</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Leading Projects from conception to complation with agile Methdologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}