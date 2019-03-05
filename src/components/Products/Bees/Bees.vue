<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="n in 20">
        <div class="f_p_item">
          <div class="f_p_img">
            <img class="img-fluid" src="src/assets/img/product/feature-product/f-p-1.jpg" alt>
          </div>
          <a href="#">
            <h4>عسل سدر كويتي</h4>
            <p>   وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج</p>
            <!-- {{ n }} -->
          </a>
          <h5>50 L.E</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>

.feature_product_area {
  background-color: antiquewhite;
}
.f_p_item:hover {
  border: 2px solid #eb6d2f;
}
.row {
    padding-top: 90px;
    text-align: center;
}

p {
    color: #eb6d2f;
}

</style>


