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
        Our family has a home and shop in Mumbai, as well as a home in our
        village. Further details can be shared by my father when appropriate.
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
        <ImageLoader
          v-for="photo in photos"
          :key="photo.src"
          class="biodata-gallery__image"
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
        />
      </div>
    </section>
  </div>
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
        { label: "Nature", value: "Simple and family-oriented" },
        { label: "Health", value: "No health issues" },
        { label: "Residency", value: "Byculla, Mumbai 400008" },
      ],
      photos: [
        {
          src: "/resume/img/Muhammed_rashid_1.jpeg",
          alt: "Muhammad Rashid Ansari",
        },
        {
          src: "/resume/img/Muhammed_rashid.jpg",
          alt: "Muhammad Rashid Ansari portrait",
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
  },
};
</script>

<style scoped>
.biodata-page {
  padding-top: 2.5rem;
}

.biodata-page__header {
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.75rem 0;
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
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 34rem;
}

.biodata-gallery__image {
  aspect-ratio: 4 / 5;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
}

.biodata-gallery__image :deep(.image-loader__image) {
  object-fit: cover;
}

@media (max-width: 580px) {
  .biodata-page {
    padding-top: 1.5rem;
  }

  .biodata-details,
  .biodata-gallery {
    grid-template-columns: 1fr;
  }

  .biodata-gallery {
    max-width: 18rem;
  }
}
</style>
