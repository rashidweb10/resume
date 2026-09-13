<template>
  <div class="box-outer biodata-page">
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <header class="biodata-page__header">
      <p class="biodata-page__eyebrow">Marriage Biodata</p>
      <h1 class="title title--h1">Muhammad rashid ansari</h1>
      <p class="biodata-page__intro">
        Assalamu Alaikum.<br>This biodata has been prepared with sincerity; the
        information below is accurate.
      </p>
    </header>

    <section class="biodata-section" aria-labelledby="personal-details">
      <h2 id="personal-details" class="title title--h2">Personal Details</h2>
      <dl class="biodata-details">
        <div v-for="detail in personalDetails" :key="detail.label" class="biodata-detail">
          <dt>{{ detail.label }}</dt>
          <dd>{{ detail.value }}</dd>
        </div>
      </dl>
    </section>

    <section class="biodata-section" aria-labelledby="family-details">
      <h2 id="family-details" class="title title--h2">About My Family</h2>
      <div class="biodata-copy">
        <p>
          We are a family of nine. My father runs a business, while
          my mother is a homemaker. I am the eldest among my siblings.
        </p>
        <p>
          I have two brothers who run a bag-manufacturing business together. I
          also have four sisters: one is married, one will be married soon,
          InshaAllah, and two are currently studying.
        </p>
        <p>
          Our parents are originally from a village near Jaunpur, Uttar Pradesh.
          My siblings and I were born, brought up, and educated in Mumbai. We
          visit our village every one to two years for holidays, family
          gatherings, and time with relatives.
        </p>
      </div>
    </section>

    <section class="biodata-section" aria-labelledby="financial-status">
      <h2 id="financial-status" class="title title--h2">Financial Information</h2>
      <p class="biodata-copy">
        We belong to a middle-class family that values simplicity,
        honesty, and mutual respect. Alhamdulillah, our family has a home and
        shop in Mumbai, along with a home in our village. Any further financial
        details can be shared respectfully by my father at the appropriate time.
      </p>
    </section>

    <section class="biodata-section" aria-labelledby="looking-for">
      <h2 id="looking-for" class="title title--h2">What We Are Looking For</h2>
      <div class="biodata-copy">
        <p>
          We are looking for a simple, understanding and family-oriented girl who observes pardah, respects family values and can manage the home well. More than anything, we hope both of us can understand, respect each other and spend a peaceful life together.
        </p>
      </div>
    </section>

    <section class="biodata-section" aria-labelledby="photo-gallery">
      <h2 id="photo-gallery" class="title title--h2">Photo Gallery</h2>
      <div class="biodata-gallery">
        <button
          v-for="(photo, index) in photos"
          :key="photo.src"
          class="biodata-gallery__item"
          :style="{ '--photo-ratio': photo.ratio }"
          type="button"
          :aria-label="`Open photo ${index + 1} of ${photos.length}`"
          @click="openPhoto(index)"
        >
          <ImageLoader
            class="biodata-gallery__image"
            variant="gallery"
            :src="photo.src"
            :alt="photo.alt"
            loading="lazy"
          />
          <span class="biodata-gallery__expand" aria-hidden="true">
            <i class="fa-solid fa-expand"></i>
          </span>
        </button>
      </div>
    </section>
  </div>

  <Teleport to="body">
    <div
      v-if="activePhoto"
      class="biodata-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`Photo ${activePhotoIndex + 1} of ${photos.length}`"
      @click.self="closePhoto"
    >
      <button
        class="biodata-lightbox__close"
        type="button"
        aria-label="Close photo gallery"
        title="Close"
        @click="closePhoto"
      >
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>

      <button
        class="biodata-lightbox__control biodata-lightbox__control--previous"
        type="button"
        aria-label="Previous photo"
        title="Previous photo"
        @click="showPreviousPhoto"
      >
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
      </button>

      <ImageLoader
        class="biodata-lightbox__image"
        variant="lightbox"
        :src="activePhoto.src"
        :alt="activePhoto.alt"
        loading="eager"
        :style="{ transform: `scale(${photoZoom})` }"
        @wheel.prevent="handleZoomWheel"
      />

      <button
        class="biodata-lightbox__control biodata-lightbox__control--next"
        type="button"
        aria-label="Next photo"
        title="Next photo"
        @click="showNextPhoto"
      >
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </button>

      <p class="biodata-lightbox__count">
        {{ activePhotoIndex + 1 }} / {{ photos.length }}
      </p>

      <div class="biodata-lightbox__zoom" aria-label="Photo zoom controls">
        <button
          class="biodata-lightbox__control"
          type="button"
          aria-label="Zoom out"
          title="Zoom out"
          :disabled="photoZoom === 1"
          @click="zoomOut"
        >
          <i class="fa-solid fa-magnifying-glass-minus" aria-hidden="true"></i>
        </button>
        <button
          class="biodata-lightbox__control"
          type="button"
          aria-label="Reset zoom"
          title="Reset zoom"
          :disabled="photoZoom === 1"
          @click="resetZoom"
        >
          <i class="fa-solid fa-rotate-left" aria-hidden="true"></i>
        </button>
        <button
          class="biodata-lightbox__control"
          type="button"
          aria-label="Zoom in"
          title="Zoom in"
          :disabled="photoZoom === 3"
          @click="zoomIn"
        >
          <i class="fa-solid fa-magnifying-glass-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script>
import ImageLoader from "../components/ImageLoader.vue";
import NavigationMain from "../components/navigation/NavigationMain.vue";

export default {
  components: {
    ImageLoader,
    NavigationMain,
  },
  data() {
    return {
      addedRobotsTag: false,
      activePhotoIndex: null,
      photoZoom: 1,
      personalDetails: [
        { label: "Date of Birth", value: "29 April 1996" },
        { label: "Height", value: "5 ft 6 in" },
        { label: "Education", value: "BSc IT, University of Mumbai" },
        {
          label: "Profession",
          value: "Web Application Developer at NexGeno Technology and Freelancer",
        },
        { label: "Income", value: "Rs. 45,000 to Rs. 50,000 per month" },
        { label: "Namaz", value: "I mostly try to be regular with prayer" },
        { label: "Maslak", value: "Sunni, Barelvi" },
        { label: "Bad Habits", value: "No cigarette, No gutka, or similar habits" },
        { label: "Nature", value: "Simple Men" },
        { label: "Health", value: "No health issues" },
        { label: "Residency", value: "Byculla, Mumbai 400008" },
      ],
      photos: [
        {
          src: "/resume/img/bio/IMG_20260816_221957.jpg.jpeg",
          alt: "Muhammad Rashid Ansari portrait",
          ratio: "1 / 1",
        },
        {
          src: "/resume/img/bio/IMG_20260822_003108_154.jpg.jpeg",
          alt: "Muhammad Rashid Ansari side portrait",
          ratio: "1 / 1",
        },
        {
          src: "/resume/img/bio/Screenshot_2022-10-01-11-55-52-800_com.whatsapp.w4b.jpg.jpeg",
          alt: "Muhammad Rashid Ansari outdoors",
          ratio: "3 / 4",
        },
        {
          src: "/resume/img/bio/Screenshot_2025-08-18-19-56-24-65_96b26121e545231a3c569311a54cda96.jpg.jpeg",
          alt: "Muhammad Rashid Ansari full-length portrait",
          ratio: "9 / 16",
        },
        {
          src: "/resume/img/bio/IMG_20260913_204520.jpg.jpeg",
          alt: "Muhammad Rashid Ansari with family",
          ratio: "4 / 3",
        },
      ],
    };
  },
  mounted() {
    let robotsTag = document.querySelector('meta[name="robots"]');

    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.name = "robots";
      document.head.appendChild(robotsTag);
      this.addedRobotsTag = true;
    }

    robotsTag.content = "noindex, nofollow, noarchive, nosnippet";
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    const robotsTag = document.querySelector('meta[name="robots"]');

    if (robotsTag) {
      if (this.addedRobotsTag) {
        robotsTag.remove();
      } else {
        robotsTag.content = "index, follow";
      }
    }

    window.removeEventListener("keydown", this.handleKeydown);
    document.body.classList.remove("is-scroll-disabled");
  },
  computed: {
    activePhoto() {
      return this.activePhotoIndex === null
        ? null
        : this.photos[this.activePhotoIndex];
    },
  },
  methods: {
    openPhoto(index) {
      this.activePhotoIndex = index;
      this.resetZoom();
      document.body.classList.add("is-scroll-disabled");
    },
    closePhoto() {
      this.activePhotoIndex = null;
      this.resetZoom();
      document.body.classList.remove("is-scroll-disabled");
    },
    showPreviousPhoto() {
      this.activePhotoIndex =
        (this.activePhotoIndex - 1 + this.photos.length) % this.photos.length;
      this.resetZoom();
    },
    showNextPhoto() {
      this.activePhotoIndex = (this.activePhotoIndex + 1) % this.photos.length;
      this.resetZoom();
    },
    zoomIn() {
      this.photoZoom = Math.min(3, Number((this.photoZoom + 0.25).toFixed(2)));
    },
    zoomOut() {
      this.photoZoom = Math.max(1, Number((this.photoZoom - 0.25).toFixed(2)));
    },
    resetZoom() {
      this.photoZoom = 1;
    },
    handleZoomWheel(event) {
      if (event.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    },
    handleKeydown(event) {
      if (this.activePhotoIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        this.closePhoto();
      }

      if (event.key === "ArrowLeft") {
        this.showPreviousPhoto();
      }

      if (event.key === "ArrowRight") {
        this.showNextPhoto();
      }

      if (event.key === "+" || event.key === "=") {
        this.zoomIn();
      }

      if (event.key === "-") {
        this.zoomOut();
      }
    },
  },
};
</script>

<style scoped>
.biodata-page {
  padding-top: 2.5rem;
}

.biodata-page__header {
  animation: biodata-section-enter 460ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.75rem;
}

.biodata-page__eyebrow {
  color: #ffdb6e;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.biodata-page__intro {
  margin-bottom: 0;
  max-width: 43rem;
}

.biodata-section {
  animation: biodata-section-enter 460ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.75rem 0;
}

.biodata-section:nth-of-type(1) {
  animation-delay: 70ms;
}

.biodata-section:nth-of-type(2) {
  animation-delay: 140ms;
}

.biodata-section:nth-of-type(3) {
  animation-delay: 210ms;
}

.biodata-section:nth-of-type(4) {
  animation-delay: 280ms;
}

.biodata-section:nth-of-type(5) {
  animation-delay: 350ms;
}

.biodata-section:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.biodata-section .title--h2 {
  margin-bottom: 1rem;
}

.biodata-details {
  display: grid;
  gap: 0.75rem 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
}

.biodata-detail {
  background: rgba(255, 255, 255, 0.025);
  border-left: 2px solid rgba(255, 219, 110, 0.58);
  min-width: 0;
  padding: 0.75rem 0.875rem;
}

.biodata-detail dt {
  color: #ffdb6e;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.1875rem;
  text-transform: uppercase;
}

.biodata-detail dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.biodata-copy {
  max-width: 50rem;
}

.biodata-copy p:last-child {
  margin-bottom: 0;
}

.biodata-gallery {
  column-count: 3;
  column-gap: 1rem;
  max-width: 52rem;
}

.biodata-gallery__item {
  appearance: none;
  aspect-ratio: var(--photo-ratio);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  break-inside: avoid;
  cursor: zoom-in;
  display: block;
  margin: 0 0 1rem;
  overflow: hidden;
  padding: 0;
  position: relative;
  transition: border-color 180ms ease, transform 180ms ease;
  width: 100%;
}

.biodata-gallery__item:hover,
.biodata-gallery__item:focus-visible {
  border-color: rgba(255, 219, 110, 0.75);
  outline: 0;
  transform: translateY(-0.1875rem);
}

.biodata-gallery__image {
  height: 100%;
  width: 100%;
}

.biodata-gallery__image :deep(.image-loader__image) {
  object-fit: cover;
}

.biodata-gallery__expand {
  align-items: center;
  background: rgba(16, 17, 19, 0.75);
  border-radius: 50%;
  bottom: 0.75rem;
  color: #ffdb6e;
  display: flex;
  height: 2rem;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: 0.75rem;
  transition: opacity 180ms ease;
  width: 2rem;
}

.biodata-gallery__item:hover .biodata-gallery__expand,
.biodata-gallery__item:focus-visible .biodata-gallery__expand {
  opacity: 1;
}

.biodata-lightbox {
  align-items: center;
  background: rgba(8, 9, 10, 0.94);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 4.5rem 5.5rem;
  position: fixed;
  z-index: 2000;
}

.biodata-lightbox__image {
  height: min(78vh, 52rem);
  max-width: min(82vw, 62rem);
  transition: transform 180ms ease;
  width: auto;
  will-change: transform;
}

.biodata-lightbox__image :deep(.image-loader__image) {
  object-fit: contain;
}

.biodata-lightbox__close,
.biodata-lightbox__control {
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  height: 2.75rem;
  justify-content: center;
  position: absolute;
  transition: background 180ms ease, color 180ms ease;
  width: 2.75rem;
  z-index: 2;
}

.biodata-lightbox__close:hover,
.biodata-lightbox__control:hover,
.biodata-lightbox__close:focus-visible,
.biodata-lightbox__control:focus-visible {
  background: #ffdb6e;
  color: #1d1e20;
  outline: 0;
}

.biodata-lightbox__close {
  right: 1.5rem;
  top: 1.5rem;
}

.biodata-lightbox__control--previous {
  left: 1.5rem;
}

.biodata-lightbox__control--next {
  right: 1.5rem;
}

.biodata-lightbox__count {
  left: 1.5rem;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.8125rem;
  margin: 0;
  position: absolute;
  top: 1.875rem;
  z-index: 2;
}

.biodata-lightbox__zoom {
  bottom: 1.25rem;
  display: flex;
  gap: 0.5rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
}

.biodata-lightbox__zoom .biodata-lightbox__control {
  position: static;
}

.biodata-lightbox__control:disabled {
  cursor: default;
  opacity: 0.35;
}

.biodata-lightbox__control:disabled:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

@keyframes biodata-section-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 580px) {
  .biodata-page {
    padding-top: 1.5rem;
  }

  .biodata-details {
    grid-template-columns: 1fr;
  }

  .biodata-gallery {
    column-count: 2;
    column-gap: 0.75rem;
  }

  .biodata-gallery__item {
    margin-bottom: 0.75rem;
  }

  .biodata-lightbox {
    padding: 4.5rem 1rem 3.5rem;
  }

  .biodata-lightbox__image {
    height: min(72vh, 40rem);
    max-width: calc(100vw - 2rem);
  }

  .biodata-lightbox__control--previous {
    left: 0.75rem;
  }

  .biodata-lightbox__control--next {
    right: 0.75rem;
  }

  .biodata-lightbox__close {
    right: 0.75rem;
    top: 0.75rem;
  }

  .biodata-lightbox__count {
    left: 0.75rem;
    top: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .biodata-page__header,
  .biodata-section,
  .biodata-gallery__item,
  .biodata-gallery__expand,
  .biodata-lightbox__close,
  .biodata-lightbox__control,
  .biodata-lightbox__image {
    transition: none;
  }
}
</style>
