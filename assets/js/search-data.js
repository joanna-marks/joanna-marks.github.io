// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-excited-to-have-been-selected-as-a-finalist-for-stem-for-britain-2025-i-will-be-presenting-my-research-at-the-house-of-parliament-in-march",
          title: 'Excited to have been selected as a finalist for STEM for BRITAIN 2025....',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-give-a-talk-at-the-2nd-rss-workshop-on-gradient-flows-for-sampling-inference-and-learning-at-the-alan-turing-institute-in-london-uk-i-will-talk-about-my-latest-work-non-asymptotic-analysis-of-diffusion-annealed-langevin-monte-carlo-for-generative-modelling-looking-forward-to-discussing-with-everyone-there-update-you-can-watch-a-recording-of-the-talk-here",
          title: 'I have been invited to give a talk at the 2nd RSS Workshop...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-the-workshop-on-kernel-methods-in-uncertainty-quantification-and-experimental-design-at-the-institute-of-mathematical-and-statistical-innovation-imsi-chicago",
          title: 'I will be attending the Workshop on Kernel Methods in Uncertainty Quantification and...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-give-a-talk-in-the-statistics-seminar-at-the-university-of-glasgow-i-will-be-presenting-my-aistats-paper-deep-optimal-sensor-placement-for-black-box-stochastic-simulations",
          title: 'I have been invited to give a talk in the Statistics Seminar at...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-share-that-my-work-has-been-selected-for-an-oral-presentation-at-uai-25-see-you-in-brazil-update-so-happy-to-have-received-the-best-student-paper-award",
          title: 'I am excited to share that my work has been selected for an...',
          description: "",
          section: "News",},{id: "news-i-ll-be-presenting-my-work-sampling-by-averaging-at-neurips-looking-forward-to-connect",
          title: 'I’ll be presenting my work Sampling by averaging at Neurips. Looking forward to...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
