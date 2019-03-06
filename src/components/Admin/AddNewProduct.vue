<template>
  <!-- <div class="page"> -->
  <div class="container">
    <form autocomplete="off">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">اسم المنتج</label>
          <input type="text" class="form-control" id="inputname" placeholder>
        </div>
        <div class="form-group col-md-6">
          <label for="sel1">اختر نوع المنتج</label>
          <select class="form-control" id="sel1">
            <option value></option>
            <option>عسل</option>
            <option>نحل</option>
            <option>ادوات</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">السعر</label>
          <input type="text" class="form-control" id="inputname" placeholder>
        </div>
        <div class="form-group col-md-6">
          <label for="sel1">العملة</label>
          <select class="form-control" id="sel1">
            <option value></option>
            <option value="جنية مصري">جنية مصري</option>
            <option value="دينار كويتي">دينار كويتي</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCity">الكمية</label>
          <input type="text" class="form-control" id="inputCity">
        </div>

        <div class="form-group col-md-4">
          <label for="inputCity">التخفيض</label>
          <input type="text" class="form-control" id="inputCity">
        </div>

        <div class="form-group col-md-4">
          <label>تاريخ انتهاء التخفيض</label>
          <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control">
        </div>
      </div>

      <div class="form-group">
        <label for="comment">وصف المنتج</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
      </div>

      <div class="form-group">
        <label for="exampleInputFile">اضف صور</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleInputFile"
          aria-describedby="fileHelp"
        >
      </div>
      <button type="submit" class="btn btn-primary">حفظ</button>
    </form>
  </div>
  <!-- </div> -->
</template>
<script>
export default {};
</script>

<style scoped>
form {
  margin-bottom: 50px;
}
label {
  padding-top: 30px;
  color: #eb6d2f;
  font-size: 18px;
}

button {
  border: #eb6d2f 1px solid;
  color: #fff;
  background-color: #eb6d2f;
}
button:hover {
  background: #fff;
  color: #eb6d2f;
  border: #eb6d2f 1px solid;
}

.form-control:focus {
  color: #eb6d2f;
  background-color: #fff;
  border-color: #eb6d2f;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(228, 80, 11, 0.25);
}
</style>
