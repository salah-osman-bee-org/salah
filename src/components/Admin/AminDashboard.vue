<template>
  <div class="page">
    <div class="container">
      <div class="row">
          <div class="col-md-3">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >

          <a
            class="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          ><h4>اضافة منتج</h4></a>
          <a
            class="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >Profile</a>
          <a
            class="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >Messages</a>
          <a
            class="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >Settings</a>
        </div>

        </div>

<div class="col-md-9">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
          <add-new-product></add-new-product>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          > ayman </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >...</div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >...</div>
        </div>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewProduct from "../Admin/AddNewProduct";
export default {
  components: {
    addNewProduct: AddNewProduct,
  }
};
</script>


<style scoped>
.page {
  margin-top: 200px;
}

.flex-column {
    border: 2px solid  #eb6d2f;
    border-radius: 5px;
    margin: 30px 30px;
}

h1 {
  padding: 90px 0;
  color: #fff;
}

h1:hover {
  color: #eb6d2f;
}

.content {
  padding-top: 90px;
  /* background-color:  #ffd832; */
}

a {
  color: #eb6d2f;
}

.nav-pills .nav-link.active {
  background-color: #eb6d2f;
  color: #fff;
}

.content .row {
  margin: auto;
}

ul {
  margin: auto;
}
</style>
