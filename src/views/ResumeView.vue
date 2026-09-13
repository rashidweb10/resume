<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="'Resume'"></BreadcrumbInner>

    <div class="row">
      <div class="col-12 col-lg-6">
        <!-- Experience -->
        <h2 class="title title--h2">
          <span class="box box--s2 icon-box">
            <i class="fa-regular fa-code"></i></span
          >Experience
        </h2>
        <div class="timeline resume-timeline">
          <article
            v-for="(experience, index) in experienceJourney"
            :key="experience.id"
            class="timeline__item"
            :style="{ '--item-index': index }"
          >
            <h5 class="title title--h4 timeline__title">
              {{ experience.title }}
            </h5>
            <span class="timeline__period">{{ experience.year }}</span>
            <p class="timeline__description">
              {{ experience.desc }}
            </p>
          </article>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <!-- Education -->
        <h2 class="title title--h2">
          <span class="box box--s2 icon-box">
            <i class="fa-solid fa-book-open"></i></span
          >Education
        </h2>
        <div class="timeline resume-timeline">
          <article
            v-for="(education, index) in educationJourney"
            :key="education.id"
            class="timeline__item"
            :style="{ '--item-index': index }"
          >
            <h5 class="title title--h4 timeline__title">
              {{ education.title }}
            </h5>
            <span class="timeline__period">{{ education.year }}</span>
            <p class="timeline__description">
              {{ education.desc }}
            </p>
          </article>
        </div>
      </div>      
    </div>

    <!-- Roles & Responsibilities -->
    <h2 class="title title--h2 mt-3">Current Role & Responsibilities</h2>
    <ul class="role-list">
      <li>Work on new application features.</li>
      <li>Team communication.</li>
      <li>Task creation, prioritization, and distribution.</li>
      <li>Third-party tools configuration.</li>
      <li>
        Fix bugs and problems across the entire codebase in an efficient, timely
        manner.
      </li>
      <li>Excellent problem solving skills.</li>
    </ul>

    <!-- Coding Skills -->
    <h2 class="title title--h2 mt-3">Coding Skills</h2>
    <div ref="skillsSection">
      <div class="row">
        <div
          v-for="(skill, index) in myCodingSkillsList"
          :key="skill.id"
          class="skill-progress progress col-lg-4 col-12"
          :style="{ '--skill-index': index }"
        >
          <div class="progress-text">
            <span>{{ skill.title }}</span> {{ skill.percentage }}%
          </div>
          <div class="progress-bar">
            <span
              role="progressbar"
              :aria-valuenow="skill.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{
                '--skill-fill': skillsAnimated ? Number(skill.percentage) / 100 : 0,
                'z-index': 2,
              }"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <!--<h2 class="title title--h2 mt-3">Languages</h2>
    <div class="">
      <div class="row">
        <div
          v-for="skill in myLanguageSkillsList"
          :key="skill.id"
          class="progress col-lg-4 col-12"
        >
          <div class="progress-text">
            <span>{{ skill.title }}</span> {{ skill.percentage }}%
          </div>
          <div class="progress-bar">
            <span
              role="progressbar"
              :aria-valuenow="skill.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: skill.percentage + '%', 'z-index': 2 }"
            ></span>
          </div>
        </div>
      </div>
    </div>-->

    <h2 class="title title--h2 mt-3">Licenses & Certifications</h2>

    <div class="row">
      <!-- Case Item -->
      <div
        v-for="certificate in myCertifications"
        :key="certificate.id"
        class="col-12 col-lg-6"
      >
        <div class="case-item box box--s2 box-inner">
          <ImageLoader
            class="case-item__icon"
            variant="icon"
            :src="certificate.image"
            :alt="certificate.name"
          />
          <div>
            <h3 class="title title--h3" style="margin-top: -4px">
              {{ certificate.name }}
            </h3>
            <p class="case-item__caption">
              <a :href="certificate.url" target="_blank"
                >See Credential
                <i class="fa-regular fa-arrow-up-right-from-square"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";
import ImageLoader from "../components/ImageLoader.vue";

export default {
  data() {
    return {
      educationJourney: [
        {
          id: 1,
          title: "University Of Mumbai",
          desc: "Bachelor of Science in Information Technology",
          year: "2013 — 2016",
        },
        {
          id: 2,
          title: "M.H. Saboo Siddik College of Engineering",
          desc: "Higher Secondary Certificate (HSC)",
          year: "2011 — 2013",
        },
        {
          id: 3,
          title: "M. H. Saboo Siddik Polytechnic",
          desc: "Secondary School Certificate (SSC)",
          year: "2011",
        },
      ],
      experienceJourney: [
        {
          id: 0,
          title: "Sr. Web Application Developer",
          desc: "At Nexgeno Technology Pvt Ltd.",
          year: "2023 — Present",
        },
        {
          id: 1,
          title: "Fullstack Developer",
          desc: "At Mak Enterprises",
          year: "2020 — 2023",
        },
        {
          id: 2,
          title: "Backend Developer",
          desc: "At Mak Enterprises",
          year: "2019 — 2020",
        },
        {
          id: 3,
          title: "Jr. Frontend Developer",
          desc: "At Mak Enterprises.",
          year: "2018 — 2019",
        },
      ],
      myCodingSkillsList: [
        { id: 1, title: "Laravel", percentage: "80" },
        { id: 2, title: "Codeigniter", percentage: "80" },
        { id: 3, title: "Yii", percentage: "80" },
        { id: 4, title: "PHP", percentage: "80" },
        { id: 5, title: "MySQL", percentage: "80" },
        { id: 6, title: "PostgreSQL", percentage: "40" },
        { id: 8, title: "WordPress", percentage: "80" },
        { id: 7, title: "jQuery", percentage: "80" },
        { id: 9, title: "JavaScript", percentage: "70" },
        { id: 10, title: "HTML", percentage: "80" },
        { id: 11, title: "CSS", percentage: "80" },
        { id: 12, title: "Bootstrap", percentage: "80" },
        { id: 13, title: "Git", percentage: "70" },
        { id: 14, title: "VueJS", percentage: "25" },
        { id: 15, title: "ReactJS", percentage: "25" },
        { id: 16, title: "NodeJS", percentage: "25" },
        { id: 17, title: "MongoDB", percentage: "25" },
        { id: 18, title: "NextJS", percentage: "25" },
        { id: 19, title: "Cpanel & WHM", percentage: "60" }
      ],

      myLanguageSkillsList: [
        { id: 1, title: "English", percentage: "60" },
        { id: 2, title: "Hindi", percentage: "80" },
        { id: 3, title: "Urdu", percentage: "80" },
      ],
      myCertifications: null,
      skillsAnimated: false,
      skillsObserver: null,
    };
  },
  methods: {
    startSkillAnimation() {
      this.skillsAnimated = true;
      this.skillsObserver?.disconnect();
    },
    loadMyCertifications() {
      this.myCertifications = [
        {
          id: 0,
          name: "Sr. Software Developer",
          image: "/resume/img/skills/nexgeno-logo.png",
          url: "/resume/img/skills/best-manager-at-nexgeno.jpg",
        },
        {
          id: 1,
          name: "Web Application Developer",
          image: "/resume/img/skills/mak-logo-1.png",
          url: "/resume/img/skills/web-application-developer-certificate-2022-1.jpg",
        },
        {
          id: 2,
          name: "VueJS Developer Course",
          image: "/resume/img/skills/vuejs.png",
          url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/92665/6717859_92665.pdf?1662301098",
        },
        {
          id: 3,
          name: "cPanel & WHM Administrator",
          image: "/resume/img/skills/cpanel.png",
          url: "https://university.cpanel.net/user/401041",
        },
        {
          id: 4,
          name: "UI / UX Web Designer",
          image: "/resume/img/skills/mak-logo-1.png",
          url: "/resume/img/skills/ui-ux-web-designer-certificate.jpg",
        },
      ];

      //this.myCertifications = [];
    },
    viewCredential(url) {
      window.open(url, "_blank");
    },
  },
  mounted() {
    this.loadMyCertifications();
    this.$nextTick(() => {
      const skillsSection = this.$refs.skillsSection;

      if (!("IntersectionObserver" in window) || !skillsSection) {
        this.startSkillAnimation();
        return;
      }

      this.skillsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.startSkillAnimation();
          }
        },
        { threshold: 0.2 }
      );
      this.skillsObserver.observe(skillsSection);
    });
  },
  beforeUnmount() {
    this.skillsObserver?.disconnect();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
    ImageLoader,
  },
};
</script>

<style scoped>
.role-list li {
  margin-bottom: 10px;
}
.role-list li {
  list-style: none;
  position: relative;
  padding: 3px 0 2px 25px;
}

.role-list li::before {
  content: "\f111"; /***/
  position: absolute;
  /*top: 0px;
  font-size:24px;
  top: 4px;
  font-size: 15px;*/
  top: 8px;
  font-size: 8px;
  left: 0;
  font-family: "Font Awesome 6 Free";
}

.role-list {
  padding-left: 0px;
}

.resume-timeline {
  margin-top: 1.5rem;
}

.resume-timeline .timeline__item {
  border-left-color: rgba(255, 219, 110, 0.2);
  padding-bottom: 1.25rem;
  animation: timeline-item-enter 460ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: calc(var(--item-index) * 80ms);
}

.resume-timeline .timeline__item::before {
  background: #1e1f21;
  border: 2px solid #ffdb6e;
  box-shadow: 0 0 0 4px rgba(255, 219, 110, 0.09);
  height: 0.75rem;
  left: -0.4375rem;
  top: -0.0625rem;
  width: 0.75rem;
}

.resume-timeline .timeline__item:hover::before {
  background: #ffdb6e;
  box-shadow: 0 0 0 5px rgba(255, 219, 110, 0.16);
}

.resume-timeline .timeline__title {
  top: -0.25rem;
}

.skill-progress .progress-bar {
  background: #303236;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 0.625rem;
  overflow: hidden;
}

.skill-progress .progress-bar span {
  box-shadow: 0 0 12px rgba(255, 219, 110, 0.24);
  height: 100%;
  transform: scaleX(var(--skill-fill, 0));
  transform-origin: left center;
  transition: transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--skill-index) * 30ms);
  width: 100%;
  will-change: transform;
}

@keyframes timeline-item-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .resume-timeline .timeline__item {
    animation: none;
  }

  .skill-progress .progress-bar span {
    transition: none;
  }
}
</style>
