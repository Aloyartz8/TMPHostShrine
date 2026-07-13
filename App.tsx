import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaSkull } from 'react-icons/fa';
import { GiDrop } from 'react-icons/gi';

import logoImg from '@assets/tumblr_f4f8afadfe29fb57bc45d7056d0ca556_4984a42b_540_1783949719440.webp';
import profileImg from '@assets/Tmp_Host%27s_tumblr_profile_picture_1783949725934.webp';
import profile2Img from '@assets/Tmp_Host%27s_tumblr_profile_picture_1783950115925.webp';
import outdoorImg from '@assets/tumblr_inline_ofnyzy0cNh1uxdelh_500_(1)_1783949731476.jpg';
import heartBorderImg from '@assets/hearts-border-frame-valentines-day-png_1783949735917.webp';
import playfulGif from '@assets/8f5b861111b10627e64df4f11a027586_1783949714198.gif';

function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <FaHeart size={Math.random() * 30 + 10} />
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden pt-20 border-b-[10px] border-double border-primary">
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap bg-primary/20 py-2 border-b border-primary">
        <div className="animate-marquee inline-block text-xl font-retro text-primary font-bold tracking-widest">
          WELCOME TO HIS DOMAIN ~ NO ESCAPE ~ PLEASE ANSWER THE QUESTION ~ TRIVIA OR DEATH ~ I LOVE HIM I LOVE HIM I LOVE HIM ~ 
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 relative flex flex-col items-center w-full max-w-4xl"
      >
        <img 
          src={logoImg} 
          alt="REDACTED" 
          className="w-full max-w-2xl object-contain animate-shimmer drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
        />
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-center"
        >
          <h1 className="font-serif italic text-3xl md:text-5xl text-accent font-bold drop-shadow-[2px_2px_0px_#ff0000]">
            The Master of the Murder Hotel
          </h1>
          <p className="mt-4 font-retro text-2xl text-white max-w-xl mx-auto bg-black/60 p-4 border border-primary/50 rounded-lg">
            "He kills losing contestants, but he stole my heart first."
          </p>
        </motion.div>

        <div className="flex gap-4 mt-8 animate-float">
          <FaStar className="text-accent text-3xl animate-blink" />
          <FaHeart className="text-primary text-4xl" />
          <FaSkull className="text-white text-3xl animate-blink" style={{ animationDelay: '0.5s' }} />
        </div>
      </motion.div>
    </section>
  );
}

function ShrineGallery() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-[#1a0000] min-h-screen border-b-[10px] border-double border-primary">
      {/* Decorative Border Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url(${heartBorderImg})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center font-retro text-5xl md:text-7xl text-primary mb-16 underline decoration-wavy decoration-accent drop-shadow-[0_0_10px_#ff0000]">
          ~* MY PRECIOUS ANGEL *~
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative animate-float-slow bg-white p-4 shadow-[0_0_30px_rgba(255,0,0,0.4)] transform rotate-[-5deg] max-w-sm"
          >
            <div className="absolute -top-4 -left-4 text-4xl text-primary drop-shadow-md z-30">
              <FaHeart />
            </div>
            <img 
              src={profileImg} 
              alt="The Host in a blue plaid shirt" 
              className="w-full h-auto object-cover border-2 border-gray-200"
            />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative animate-float bg-white p-4 shadow-[0_0_30px_rgba(255,0,0,0.4)] transform rotate-[3deg] max-w-sm mt-12 md:mt-0"
          >
            <div className="absolute -top-6 -right-4 text-5xl text-accent drop-shadow-md z-30 animate-pulse">
              <FaStar />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 z-30">
              <img src={playfulGif} alt="Playful decor" className="w-full h-auto mix-blend-screen" />
            </div>
            <img 
              src={outdoorImg} 
              alt="The Host outdoors" 
              className="w-full h-auto object-cover border-2 border-gray-200"
            />
            <p className="absolute bottom-4 left-0 w-full text-center font-retro text-black text-2xl font-bold">
              I can fix him!
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="relative animate-float-slow bg-white p-4 shadow-[0_0_30px_rgba(255,0,0,0.4)] transform rotate-[2deg] max-w-sm mt-12 md:mt-0"
          >
            <div className="absolute -top-4 -right-4 text-4xl text-primary drop-shadow-md z-30 animate-pulse">
              <FaHeart />
            </div>
            <img
              src={profile2Img}
              alt="The Host portrait"
              className="w-full h-auto object-cover border-2 border-gray-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FactsLore() {
  return (
    <section className="relative py-20 px-4 bg-black border-b-[10px] border-double border-primary">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="scanlines bg-[#0a0005] border-4 border-primary p-8 rounded-xl shadow-[inset_0_0_50px_rgba(255,0,0,0.2)]">
          <h2 className="font-retro text-4xl md:text-5xl text-accent mb-8 flex items-center gap-4 border-b-2 border-primary/50 pb-4">
            <GiDrop className="text-primary animate-float-fast" /> 
            DATABASE: THE HOST
            <GiDrop className="text-primary animate-float-fast" style={{ animationDelay: '1s' }} />
          </h2>
          
          <ul className="space-y-6 font-mono text-lg md:text-xl text-white/90">
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">▶</span>
              <p><strong>OCCUPATION:</strong> Serial Killer / Game Show Host. The ultimate multi-tasker. Dedicated to his craft.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">▶</span>
              <p><strong>RESIDENCE:</strong> The Murder Hotel. 0/5 stars on Yelp, 5/5 stars in my heart.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">▶</span>
              <p><strong>FASHION:</strong> Impeccable. The plaid? The striped shirts? The signature bow tie? We stan a well-dressed menace.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">▶</span>
              <p><strong>HOBBIES:</strong> Ghostwriting, Murder, Yoga, etc.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">▶</span>
              <p><strong>STATUS:</strong> Single? (Please say yes, please say yes, please say yes)</p>
            </li>
          </ul>

          <div className="mt-12 text-center p-4 bg-primary/20 border border-primary border-dashed font-retro text-2xl text-accent animate-pulse">
            WARNING: ANSWERING TRIVIA INCORRECTLY IS FATAL.
          </div>
        </div>
      </div>
    </section>
  );
}

function LoveLetter() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-t from-[#2a0000] to-black overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <FaHeart className="w-[120vw] h-[120vh] text-primary animate-pulse" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8">
        <h2 className="font-serif italic text-4xl md:text-6xl text-white font-bold drop-shadow-[3px_3px_0px_#ff0000]">
          My Undying Devotion
        </h2>
        
        <div className="font-serif text-xl md:text-2xl leading-relaxed text-accent/90 bg-black/60 p-8 rounded-3xl border border-primary/30 backdrop-blur-sm">
          <p className="mb-6">
            They say he's a monster. They say he traps innocent people in a hotel of horrors and forces them to play a twisted game of life and death. 
          </p>
          <p className="mb-6 text-2xl font-bold text-white drop-shadow-[0_0_8px_#ff0000]">
            AND HONESTLY? GOOD FOR HIM.
          </p>
          <p className="mb-6">
            Some people want a knight in shining armor. I want a man with a censored face who will passionately explain 19th-century literature before dropping me into a pit of spikes. Is that so much to ask?
          </p>
          <p className="text-3xl font-retro text-primary mt-12 animate-float">
            TAKE ME TO THE MURDER HOTEL!!!
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
            >
              <FaStar className="text-4xl text-accent drop-shadow-[0_0_10px_#ff0000]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-black border-t-4 border-primary text-center relative z-20">
      <p className="font-retro text-xl text-primary mb-2">
        Created at 3:14 AM because sleep is for the weak.
      </p>
      <div className="flex justify-center gap-4 text-accent text-sm font-mono mb-4">
        <span>BEST VIEWED IN NETSCAPE NAVIGATOR</span>
        <span>|</span>
        <span>RESOLUTION 800x600</span>
      </div>
      <p className="text-xs text-white/40 font-sans uppercase tracking-widest">
        Disclaimer: This is a fan site. Please do not actually murder me. Or do, if it's him.
      </p>
      <p className="mt-4 text-sm text-white/60 font-retro tracking-wide">
        Made with love by <span className="text-primary font-bold">Aloyartz8</span>
      </p>
      <p className="mt-1 text-xs text-white/30 font-sans uppercase tracking-widest">
        Not affiliated with Jackbox Games &mdash; 100% fanmade
      </p>
      <div className="flex justify-center mt-4 space-x-2">
        <span className="px-2 py-1 bg-primary text-white text-xs font-bold font-retro border border-white">
          WEB 2.0
        </span>
        <span className="px-2 py-1 bg-accent text-black text-xs font-bold font-retro border border-white">
          HTML VALID
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background w-full relative selection:bg-primary selection:text-white">
      <FloatingHearts />
      <Hero />
      <ShrineGallery />
      <FactsLore />
      <LoveLetter />
      <Footer />
    </main>
  );
}
