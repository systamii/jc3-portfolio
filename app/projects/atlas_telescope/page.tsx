'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AtlasTelescopePage() {
  return (
    <div className="min-h-screen bg-deep-navy text-slate-100 font-serif relative overflow-x-hidden">
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <main 
        className="max-w-4xl mx-auto px-6 py-12 md:py-16 relative z-10 space-y-10 opacity-0"
        style={{ animation: 'fadeIn 1.2s ease-out forwards' }}
      >
        
        {/* Back Navigation */}
        <nav>
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-egyptian-teal hover:text-soft-coral transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Projects</span>
          </Link>
        </nav>

        {/* Header: Title, Date, Badges, & Tags */}
        <header className="space-y-4 text-center">
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ATLAS Telescope
          </h1>

          {/* Date */}
          <div className="text-xs font-semibold text-slate-400">
            Sep 2025 - Dec 2025
          </div>

          {/* Company & Role Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-egyptian-teal px-3 py-1 rounded-full bg-egyptian-teal/10 border border-egyptian-teal/30">
              Olin College
            </span>
            <span className="text-xs font-semibold text-soft-coral px-3 py-1 rounded-full bg-soft-coral/10 border border-soft-coral/30">
              Software Lead
            </span>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {['Python', 'Raspberry Pi', 'System Automation', 'Motion Control', 'OpenCV', 'gphoto2', 'AstroPy'].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-egyptian-teal/10 border border-egyptian-teal/20 rounded text-egyptian-teal font-sans">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* First Light Hero Image & Caption */}
        <section className="space-y-4">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-egyptian-teal/30 bg-[#132235] shadow-2xl">
            <Image
              src="/first_light.png"
              alt="First Light from ATLAS Telescope - Sirius"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          
          {/* First Light Caption */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed italic text-center max-w-3xl mx-auto px-4">
            <strong className="text-egyptian-teal not-italic">The brightest star in the night sky:</strong> Taken just outside of the Olin dorms, this image of Sirius was the first photo we took using the full tracking capabilities of ATLAS. This was taken by stitching together three ten second exposures, giving us a deeper dynamic range. For a stationary camera, Sirius would look blurry or even streaky due to the rotation of the earth. You can see that with our tracking, Sirius remains a perfect, crisp circle.
          </p>
        </section>

        {/* GitHub Repository Link */}
        <div className="text-center border-b border-egyptian-teal/20 pb-8">
          <a
            href="https://github.com/jechandler3/ATLAS-Telescope"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-egyptian-teal hover:text-soft-coral transition-colors border-b border-egyptian-teal/30 hover:border-soft-coral pb-0.5"
          >
            <span>ATLAS GitHub Repo</span>
            <span>↗</span>
          </a>
        </div>

        {/* Narrative Article Body */}
        <article className="space-y-10 text-slate-200 text-base md:text-lg leading-relaxed pt-2">
          
          {/* Section 1: What's The Point? */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              What's The Point?
            </h2>
            <p>
              The ATLAS Telescope is a project born out of my love for optical astronomy. During my time at the Green Bank Observatory, one of the first things my peers in astrophysics taught me was just how expensive it can be to get into astrophotography. Using fully integrated “smart telescopes” mounted on large, heavy tripods, they were able to capture high-resolution images of planets like Mars as well as stars like Sirius. As someone without the equipment or budget to purchase it myself, I became fixated on the idea of using my engineering background to make astrophotography more accessible. With the help of four of my friends, we created a fully autonomous star-tracking mount compatible with thousands of DSLR cameras at a fraction of the cost of other all-in-one solutions.
            </p>
            <p>
              As the Software Lead for the project, I was tasked with building all of our software from scratch, as well as determining the specifications and parts I would need to successfully integrate the software with the wider electrical and mechanical subsystems.
            </p>
          </section>

          {/* Section 2: Camera Control */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Camera Control
            </h2>
            <p>
              The heart of ATLAS’s star-tracking capabilities resides in its ability to take control of a connected camera and autonomously capture photos for both calibration and observations. This is done through the <span className="text-soft-coral font-semibold">gphoto2</span> library, which we chose over other solutions like digiCamControl and CHDK due to its modularity and detailed documentation. Using this library, I was also able to give ATLAS a variety of preset “modes”: specific camera configurations built to optimize imaging of specific astronomical objects.
            </p>
          </section>

          {/* Section 3: Plate Solving & Calibration */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Plate Solving & Calibration
            </h2>
            <p>
              Initial calibration is handled by a series of methods we’ve called <code className="text-sm font-mono text-soft-coral bg-egyptian-teal/10 px-2 py-0.5 rounded">set_capture_mode</code>, <code className="text-sm font-mono text-soft-coral bg-egyptian-teal/10 px-2 py-0.5 rounded">take_photo</code>, <code className="text-sm font-mono text-soft-coral bg-egyptian-teal/10 px-2 py-0.5 rounded">plate_solver</code>, and <code className="text-sm font-mono text-soft-coral bg-egyptian-teal/10 px-2 py-0.5 rounded">reset()</code>.
            </p>
            <p>
              First, we use the gphoto2 library to connect to our ATLAS camera, changing its settings to a specific mode via the <code className="text-sm font-mono text-soft-coral bg-egyptian-teal/10 px-2 py-0.5 rounded">set_capture_mode</code> function. Once the connection has been established and the settings are to our liking, we command the camera to take a ten-second exposure via gphoto2. This photo is used for calibration, so it is imperative that during this time, ATLAS is aimed at a portion of the night sky with a healthy number of visible stars (10+).
            </p>
            <p>
              The actual calibration is handled by our plate-solving algorithm, which works by pulling the RAW calibration image off of the camera’s SD card and converting it into a FITS file. The image is then analyzed by identifying patterns of stars, or asterisms, and comparing them against astronomical reference data to determine the coordinates, in Right Ascension and Declination, at which the original image was taken.
            </p>
            <p>
              Due to our initial plate-solving algorithm introducing unnecessary latency by way of sending requests back and forth from our ATLAS to the astronomical databases, we decided to take advantage of Astrometry.net’s resources to consolidate our algorithm. As a result, we merely need to provide an appropriate image and query for the returned coordinates, while the asterism cross-referencing is handled autonomously. This reduced our plate-solving time from approximately ten minutes to two minutes and thirty seconds.
            </p>

            <div className="space-y-2 pt-4">
              <div className="relative aspect-[4/3] max-w-2xl mx-auto w-full rounded-xl overflow-hidden border border-egyptian-teal/20 bg-[#132235] shadow-lg">
                <Image
                  src="/ATLAS_asterisms.png"
                  alt="Astrometric Plate-Solved Calibration Output"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs text-slate-400 text-center italic">
                Plate-solved calibration output with celestial star pattern overlays.
              </p>
            </div>
          </section>

          {/* Section 4: Astronomical Object Tracking */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Astronomical Object Tracking
            </h2>
            <p>
              Once ATLAS’s coordinates have been determined, the user can request to track any of the twenty million astronomical objects within the SIMBAD database, at which point the ATLAS Telescope will move to the specified location. Upon reaching a predetermined distance in arcminutes from the target, ATLAS will continually move at a speed of approximately 0.25 degrees/minute to remain aligned with Earth’s sidereal motion.
            </p>
            <p>
              This allows ATLAS to track a wide variety of astronomical targets, including planets like Jupiter and Saturn, stars like Sirius, and deep-sky objects such as the Cat’s Eye Nebula.
            </p>
          </section>

          {/* Section 5: Motor Control */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Motor Control
            </h2>
            <p>
              Precise control, accurate timing, and support for large loads were our main priorities for our integrated tracking system. Hence, we selected NEMA 23 bipolar stepper motors, which provide the torque and precise positioning necessary to move the telescope assembly.
            </p>
            <p>
              The pulse and direction terminals of the DM542 drivers are wired to the Raspberry Pi’s 3.3V logic GPIO pins. With the pigpio library leveraging the Pi’s hardware timing to generate precisely timed pulse and direction signals, we were able to reduce timing jitter and excessive CPU load.
            </p>
            <p>
              Limit switches mounted on either side of the declination motor also prevent the system from moving beyond its mechanical limits and potentially colliding with the camera or telescope assembly.
            </p>
          </section>

          {/* Section 6: Challenges & Future Improvements */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Challenges & Future Improvements
            </h2>
            <p>
              AC power adapters are used to power the motors since they were the most accessible option for rapid prototyping. For future iterations, I think it would be best to transition to lithium batteries to ensure our system can also be used in remote areas, which are more desirable for astrophotography due to a lack of light pollution.
            </p>
            <p>
              We’d also like to implement a wireless Bluetooth connection to the Raspberry Pi that allows users to input the stars they want to track and take pictures remotely from their personal device, as opposed to having to respond to a prompt on the Raspberry Pi.
            </p>
          </section>

          {/* Section 7: Software & Hardware Dependencies */}
          <section className="space-y-4 pt-4 border-t border-egyptian-teal/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-2xl font-bold text-white">
                Software & Hardware Requirements
              </h2>
              <a 
                href="https://github.com/jechandler3/ATLAS-Telescope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-egyptian-teal hover:text-soft-coral transition-colors"
              >
                ATLAS GitHub Repo ↗
              </a>
            </div>
            
            <p className="text-sm text-slate-300">
              A link to the entire ATLAS codebase can be found in the repository above. The following packages and libraries are required in order to run the star-tracker code:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-sm">
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-soft-coral">
                  External Dependencies
                </h3>
                <ul className="space-y-1 text-slate-300 font-mono text-xs">
                  <li>• AstroPy</li>
                  <li>• Requests</li>
                  <li>• gphoto2</li>
                  <li>• Raw2Fits</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-egyptian-teal">
                  Python Standard Library
                </h3>
                <ul className="space-y-1 text-slate-300 font-mono text-xs">
                  <li>• pathlib</li>
                  <li>• os</li>
                  <li>• json</li>
                  <li>• time</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-soft-coral">
                  Hardware Stack
                </h3>
                <ul className="space-y-1 text-slate-300 text-xs">
                  <li>• Raspberry Pi</li>
                  <li>• NEMA 23 Stepper Motors</li>
                  <li>• DM542 Motor Drivers</li>
                  <li>• Declination Limit Switches</li>
                </ul>
              </div>
            </div>
          </section>

        </article>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-egyptian-teal/20 flex justify-between items-center text-sm">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 font-semibold text-egyptian-teal hover:text-soft-coral transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs text-slate-500">John Chandler</span>
        </footer>

      </main>
    </div>
  )
}