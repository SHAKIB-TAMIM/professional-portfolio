
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Twitter, Youtube, Facebook, Instagram, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/shakibul-islam-256515336?utm_source=share_via&utm_content=profile&utm_medium=member_android", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/shakib_tamim?igsh=NXU4bnpzdW1vOGxn", color: "hover:text-pink-500" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/1D4giVcqho/", color: "hover:text-blue-600" },
    { name: "GitHub", icon: Github, url: "https://github.com/SHAKIB-TAMIM", color: "hover:text-gray-300" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email service not configured",
        description: "Please set up EmailJS environment variables. Contact me directly at tamim.0825@gmail.com",
        variant: "destructive",
      });
      setSending(false);
      return;
    }

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      const message = err instanceof Error ? err.message : JSON.stringify(err);
      toast({
        title: "Failed to send",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Mail className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-gray-600 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-gray-600 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {sending && <Loader2 className="animate-spin" size={20} />}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-purple-500 dark:text-purple-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-purple-600 dark:text-purple-400 font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">tamim.0825@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-purple-500 dark:text-purple-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-purple-600 dark:text-purple-400 font-medium mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">01839806691</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-500 dark:text-purple-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-purple-600 dark:text-purple-400 font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Cumilla, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 bg-gray-50 dark:bg-white/10 rounded-lg border border-gray-200 dark:border-white/20 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/20 hover:scale-105 ${social.color}`}
                  >
                    {social.icon ? <social.icon size={24} className="mb-2" /> : null}
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-white/20">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} MD. Shakibul Islam Tamim. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
