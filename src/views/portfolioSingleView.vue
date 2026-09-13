<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="singleWork.name"></BreadcrumbInner>

    <RouterLink class="btn-back" to="/recent-work">
      <i class="fa-solid fa-arrow-left"></i> Back To Work
    </RouterLink>

    <div class="mb-3"></div>

    <ImageLoader
      class="rounded mb-3"
      variant="project"
      :src="singleWork.image"
      :alt="singleWork.name || 'Project preview'"
      loading="eager"
    />

    <ul class="details-info details-info--inline">
      <!-- Client -->
      <li class="details-info__item">
        <span class="box box--s2 icon-box"><i class="far fa-link"></i></span>
        <div class="details-info__info">
          <span class="overhead">Web Address</span>
          <span
            ><a
              v-if="singleWork.website"
              :href="'https://' + singleWork.website"
              target="_blank"
            >
              {{ singleWork.website }}
            </a>
            <span v-else> Not available </span></span
          >
        </div>
      </li>
      <!-- Role -->
      <li class="details-info__item">
        <span class="box box--s2 icon-box"
          ><i class="fas fa-user-alt"></i
        ></span>
        <div class="details-info__info">
          <span class="overhead">Role</span>
          {{ singleWork.role }}
        </div>
      </li>
      <!-- Category -->
      <li class="details-info__item">
        <span class="box box--s2 icon-box"><i class="far fa-code"></i></span>
        <div class="details-info__info">
          <span class="overhead">Stacks</span>
          <span>{{ singleWork.stacks }}</span>
        </div>
      </li>
    </ul>

    <h5>Project Description</h5>
    <p><span v-html="singleWork.software_desc_1"></span></p>

    <h5 class="mb-3">My Experience</h5>
    <p class="mb-2" v-for="learn in singleWork.learn" :key="learn.id">
      <i class="fa-solid fa-check"></i> {{ learn.content }}
    </p>

    <nav class="project-pagination" aria-label="Project navigation">
      <RouterLink
        v-if="previousWork"
        class="project-pagination__link project-pagination__link--previous"
        :to="projectRoute(previousWork)"
      >
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        <span>
          <small>Previous project</small>
          <strong>{{ previousWork.name }}</strong>
        </span>
      </RouterLink>
      <RouterLink
        v-if="nextWork"
        class="project-pagination__link project-pagination__link--next"
        :to="projectRoute(nextWork)"
      >
        <span>
          <small>Next project</small>
          <strong>{{ nextWork.name }}</strong>
        </span>
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";
import axios from "axios";
import ImageLoader from "../components/ImageLoader.vue";

export default {
  data() {
    return {
      projects: [],
      singleWork: {},
    };
  },
  mounted() {
    this.getAllwork();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
    ImageLoader,
  },
  computed: {
    currentIndex() {
      return this.projects.findIndex(
        (project) => String(project.id) === String(this.$route.params.id)
      );
    },
    previousWork() {
      return this.currentIndex > 0 ? this.projects[this.currentIndex - 1] : null;
    },
    nextWork() {
      return this.currentIndex >= 0 && this.currentIndex < this.projects.length - 1
        ? this.projects[this.currentIndex + 1]
        : null;
    },
  },
  watch: {
    "$route.params.id"() {
      this.selectProject();
    },
  },
  methods: {
    getAllwork() {
      axios
        .get(import.meta.env.BASE_URL + "resume/portfolio.json")
        .then((result) => {
          this.projects = result.data;
          this.selectProject();
        });
    },
    selectProject() {
      this.singleWork =
        this.projects.find(
          (project) => String(project.id) === String(this.$route.params.id)
        ) || {};
    },
    projectRoute(project) {
      return {
        name: "portfolioSingle",
        params: {
          slug: project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
          id: project.id,
        },
      };
    },
  },
};
</script>

<style scoped>
.project-pagination {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.25rem;
}

.project-pagination__link {
  align-items: center;
  color: inherit;
  display: flex;
  gap: 0.75rem;
  min-width: 0;
  transition: color 180ms ease, transform 180ms ease;
}

.project-pagination__link:hover {
  color: #ffdb6e;
  text-decoration: none;
  transform: translateX(-0.1875rem);
}

.project-pagination__link--next {
  margin-left: auto;
  text-align: right;
}

.project-pagination__link--next:hover {
  transform: translateX(0.1875rem);
}

.project-pagination__link span {
  min-width: 0;
}

.project-pagination__link small,
.project-pagination__link strong {
  display: block;
}

.project-pagination__link small {
  color: var(--color-paragraph);
  font-size: 0.75rem;
  margin-bottom: 0.1875rem;
}

.project-pagination__link strong {
  font-size: 0.9375rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 580px) {
  .project-pagination {
    gap: 0.75rem;
  }

  .project-pagination__link {
    max-width: calc(50% - 0.375rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-pagination__link {
    transition: none;
  }
}
</style>
