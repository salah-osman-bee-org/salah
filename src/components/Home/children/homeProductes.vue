<template>
    <!--================ Products =================-->
	<section class="feature_product_area section_gap">
		<div class="main_box">
			<div class="container-fluid">
				<div class="row">
					<div class="main_title">
						<h2>اخر المنتجات المضافة</h2>
						<!-- <p>Who are in extremely love with eco friendly system.</p> -->
					</div>
				</div>
				<div class="row">
					<div class="col-md-3" v-for="n in 8">
						<div class="f_p_item">
							<div class="f_p_img">
								<img class="img-fluid" src="src/assets/img/product/feature-product/f-p-1.jpg" alt="">
								<!-- <div class="p_icon">
									<a href="#">
										<i class="lnr lnr-heart"></i>
									</a>
									<a href="#">
										<i class="lnr lnr-cart"></i>
									</a>
								</div> -->
							</div>
							<a href="#">
								<h4>عسل سدر كويتي</h4>
								<!-- {{ n }} -->
							</a>
							<h5>50 L.E </h5>
						</div>
					</div>
					<button type="button" class="btn btn-warning center">كافة المنتجات</button>
				</div>
			</div>
		</div>
	</section>
	<!--================ Products =================-->
</template>

<style scoped>

.feature_product_area {
	background-color: antiquewhite
}
.f_p_item:hover {
	border: 1px solid #eb6d2f;
	  }

h2 {
  text-align: center;
  padding-bottom: 60px;
  color: #eb6d2f;
}
 button {
	margin: auto;
	background-color:#eb6d2f; 
	color: aliceblue;
 }
</style>
