import { Shield, Zap, Clock, Headphones, BadgeCheck, Wallet } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'সম্পূর্ণ নিরাপদ',
    description: 'আপনার প্রতিটি লেনদেন এনক্রিপ্টেড ও সুরক্ষিত',
  },
  {
    icon: Zap,
    title: 'দ্রুততম সার্ভিস',
    description: 'মিনিটের মধ্যে টাকা পৌঁছে যায় বাংলাদেশে',
  },
  {
    icon: Clock,
    title: '২৪/৭ সেবা',
    description: 'যেকোনো সময় লেনদেন করুন, আমরা সবসময় আছি',
  },
  {
    icon: Headphones,
    title: 'গ্রাহক সহায়তা',
    description: 'বাংলায় সরাসরি কথা বলুন আমাদের টিমের সাথে',
  },
  {
    icon: BadgeCheck,
    title: 'বিশ্বস্ত সেবা',
    description: 'হাজার হাজার সন্তুষ্ট গ্রাহকের পছন্দ',
  },
  {
    icon: Wallet,
    title: 'সাশ্রয়ী খরচ',
    description: 'সর্বনিম্ন চার্জে সর্বোচ্চ সেবা নিশ্চিত',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            কেন <span className="gradient-text">লেনদেন প্রবাসী</span> বেছে নেবেন?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            আমাদের প্রিমিয়াম সেবা যা আপনার লেনদেন অভিজ্ঞতাকে করে তোলে অনন্য
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 md:p-8 group hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
