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
        <div class="col-12" style="text-align: right">
          <button type="submit" class="btn">
            <i class="fa-solid fa-paper-plane"></i> Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
  
<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      formData: {
        name: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    sendEnquiry: function (e) {
      e.preventDefault();

      axios
        .post(import.meta.env.BASE_URL + "api/sendEmail.php", {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            Swal.fire({
              text: "Message has been sent successfully",
              icon: "success",
              confirmButtonText: "OK",
            });

            //clear fields
            this.formData.name = null;
            this.formData.email = null;
            this.formData.message = null;
          } else {
            Swal.fire({
              html: "<b>Oops!</b> Form submission failed.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        });
    },
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
};
</script>


  