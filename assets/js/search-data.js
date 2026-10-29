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
        },{id: "news-i-will-be-presenting-a-poster-at-amortized-probml-workshop-at-ellis-unconference-which-will-take-place-alongside-eurips-in-copenhagen",
          title: 'I will be presenting a poster at Amortized ProbML workshop at ELLIS Unconference...',
          description: "",
          section: "News",},{id: "news-gabriel-rioux-will-present-our-joint-work-on-gromov-wasserstein-distances-between-finite-spaces-duality-computation-and-entropic-approximation-with-riccardo-passeggeri-at-cdm-seminars-series-at-epfl-come-chat-to-him-if-interested-pre-print-coming-soon",
          title: 'Gabriel Rioux will present our joint work on “Gromov-Wasserstein distances between finite spaces:...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-share-that-our-joint-work-with-tim-y-j-wang-and-deniz-akyildiz-has-been-selected-for-an-oral-presentation-at-uai-26-i-m-really-grateful-for-the-opportunity-only-2-of-submitted-papers-were-selected-for-oral-presentations-and-looking-forward-to-presenting-our-work-in-amsterdam",
          title: 'I am excited to share that our joint work with Tim Y.J Wang...',
          description: "",
          section: "News",},{id: "news-i-am-coming-to-ml-in-pl-to-present-our-work-on-convergent-algorithms-for-entripc-gromov-wasserstein-problems-excited-to-meet-the-polish-ml-community",
          title: 'I am coming to ML in PL to present our work on convergent...',
          description: "",
          section: "News",},{id: "news-i-will-be-coming-to-the-opt2026-neurips-workshop-this-year-excited-to-share-our-work-on-entropic-gromov-wasserstin-problems-in-sydney",
          title: 'I will be coming to the OPT2026 Neurips Workshop this year. Excited to...',
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
