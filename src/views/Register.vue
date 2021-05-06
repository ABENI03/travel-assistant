<template>
     <section class="Form my-4 mx-5">
         <div class="container">
             <div class="row no-gutters">
                 <div class="col-lg-5 p-0">
                       <img src="../assets/black3.jpg" class="img-fluid">
                     </div>

                 <div class="col-lg-7 px-5 pt-3">
                     <h1 class="font-weight-bold">Register</h1>
                     <h4>Create an account</h4>
                      <form>
                          <div class="form-row ">
                              <div class="col-lg-7">
                                  <input type="text" placeholder="FullName" class="form-control my-3 pt-4" name="" id="">
                                   </div>
                              
                          </div>
                          <div class="form-row ">
                              <div class="col-lg-7">
                                  <input type="text" placeholder="username" class="form-control my-3 pt-4" name="" id="">
                                   </div>
                              
                          </div>
                           <div class="form-row">
                              <div class="col-lg-7">
                                  <input type="password" placeholder="password" class="form-control my-3 pt-4" name="" id="">
                                   </div>
                              </div>
                              <div class="form-row">
                              <div class="col-lg-7">
                                  <input type="password" placeholder="confirm password" class="form-control my-3 pt-4" name="" id="">
                                   </div>
                              </div>
                           <div class="form-row">
                              <div class="col-lg-7 mt-3 mb-5">
                                  <button type="button" class="btn1">Register</button>
                                   </div>
                              
                          </div>
                          
                      </form>
                 </div>

             </div>
         </div>
     </section>
</template>

<script>
export default {

}
</script>

<style >
   *{
       text-align: left;

       padding: 0;
       margin: 0;
       box-sizing: border-box;
   }
  body{
      background: rgb(219, 226, 226);
      text-align: left;
  }
  .row{
      background: white;
      border-radius: 30px;
      box-shadow: 12px 12px  22px grey;
  }
  img{
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
  }
 .btn1{
     border: none;
     outline: none;
     height: 50px;
     width: 100%;
     background-color: black;
     color:white;
     border-radius: 4px;
     font-weight: bold;
     text-align: center;
 }
 .btn1:hover{
    background:white;
    border: 1px solid;
    color: black;
 }
 .black{
     color: black;
 }
</style>