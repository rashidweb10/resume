<template>
  <div class="box-outer">
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <BreadcrumbInner :titleData="'About Me'"></BreadcrumbInner>

    <div>
      <p>
        Hello, I'm Muhammed Rashid, a web application developer based in Mumbai
        with over {{ experienceYears }} years of experience building reliable,
        user-focused digital products.
      </p>
      <p>
        I take projects from early planning and technical decisions through
        execution, development, release, and ongoing improvement. My work spans
        custom applications, CMS platforms, CRMs, e-commerce stores, client
        portals, and learning management systems, with a focus on practical
        solutions that make day-to-day work easier.
      </p>

      <h2 class="title title--h2 mt-3">How I Contribute</h2>

      <div class="row">
        <div v-for="service in services" :key="service.id" class="col-12 col-lg-6">
          <article class="case-item service-card box box--s2 box-inner">
            <span class="case-item__icon service-icon" aria-hidden="true">
              <i :class="service.icon"></i>
            </span>
            <div>
              <h3 class="title title--h3 service-card__title">
                {{ service.name }}
              </h3>
              <p class="case-item__caption">
                {{ service.content }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
  data() {
    return {
      experienceYears: new Date().getFullYear() - 2018,
      services: [
        {
          id: 1,
          name: "Solution Planning",
          icon: "fa-solid fa-compass-drafting",
          content:
            "Turn business goals into clear scopes, technical plans, and achievable delivery phases.",
        },
        {
          id: 2,
          name: "Application Development",
          icon: "fa-solid fa-code",
          content:
            "Build maintainable, user-focused applications across frontend workflows and backend systems.",
        },
        {
          id: 3,
          name: "Problem Solving",
          icon: "fa-solid fa-screwdriver-wrench",
          content:
            "Diagnose bugs, resolve production issues, and improve reliability across the application.",
        },
        {
          id: 4,
          name: "Performance Optimization",
          icon: "fa-solid fa-gauge-high",
          content:
            "Improve speed, database usage, and core workflows so products stay responsive as they grow.",
        },
        {
          id: 5,
          name: "Team Leadership",
          icon: "fa-solid fa-people-group",
          content:
            "Support delivery with clear priorities, technical guidance, and thoughtful collaboration.",
        },
        {
          id: 6,
          name: "Business Platforms",
          icon: "fa-solid fa-layer-group",
          content:
            "Deliver custom applications, CMS, CRM, e-commerce, portal, and LMS experiences.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.service-card {
  min-height: 9.25rem;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.service-card:hover {
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.18);
  transform: translateY(-0.1875rem);
}

.service-card__title {
  margin-top: -0.25rem;
}

.service-icon {
  align-items: center;
  color: #ffdb6e;
  display: inline-flex;
  flex: 0 0 2.5rem;
  font-size: 1.5rem;
  justify-content: center;
  width: 2.5rem;
}

@media (prefers-reduced-motion: reduce) {
  .service-card {
    transition: none;
  }
}
</style>
