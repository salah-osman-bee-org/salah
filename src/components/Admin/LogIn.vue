<template>

  <div class="page">
    <div class="container">
      <form action>
          
        <div class="form-row">
            
          <div class="form-group col-md-4">
              <h2>تسجيل الدخول</h2>
            <label for="inputname">اسم المستخدم</label>
            <input type="text" class="form-control" id="inputname" placeholder>
            
            <label for="inputname">كلمة المرور</label>
            <input type="password" class="form-control" id="password" placeholder>

            <button type="submit" class="btn btn-primary">دخول</button>

          </div>
        </div>

      </form>
    </div>
  </div>
  
</template>

<script>

export default {};
</script>

<style scoped>
.page {
  margin: 200px;
}

form {
  margin-bottom: 50px;
}
.form-group{
    margin: auto;
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
  margin-top: 50px;
  width: 100%;
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


