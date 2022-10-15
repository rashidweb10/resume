<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="'Contact Me'"></BreadcrumbInner>

    <form v-on:submit="sendEnquiry" method="post" autocomplete="off">
      <div class="row">
        <div class="form-group col-12 col-md-6">
          <input
            type="text"
            class="input form-control"
            v-model="formData.name"
            name="name"
            placeholder="Full name"
            required="required"
            autocomplete="off"
          />
          <div class="help-block with-errors"></div>
        </div>
        <div class="form-group col-12 col-md-6">
          <input
            type="email"
            class="input form-control"
            v-model="formData.email"
            name="email"
            placeholder="Email address"
            required="required"
            autocomplete="off"
          />
        </div>
        <div class="form-group col-12 col-md-12">
          <textarea
            class="textarea form-control"
            v-model="formData.message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required="required"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="text-align:right;">
          <button type="submit" class="btn">
            <i class="fa-solid fa-paper-plane"></i>  Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
  
<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  data(){
     return {
        formData : {
          name: null,
          email: null,
          message:null,
        }
     }
  },
  methods: {
    sendEnquiry: function(e) {
      e.preventDefault();

      //collect form data
      console.log(this.formData.name);
      console.log(this.formData.email);
      console.log(this.formData.message);
      alert('Form Data Collected!');

      //clear fields
      this.formData.name = null;
      this.formData.email = null;
      this.formData.message = null;

    }
  },
  components: {
    NavigationMain,
    BreadcrumbInner
  },
};
</script>


  