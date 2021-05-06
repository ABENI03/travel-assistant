<template>
     <section class="Form my-4 mx-5">
         <div class="container">
             <div class="row no-gutters">
                 <div class="col-lg-5 p-0">
                       <img src="../assets/black3.jpg" class="img-fluid">
                     </div>

                 <div class="col-lg-7 px-5 pt-3">
                     <h1 class="font-weight-bold">Forget Password?</h1>
                     <h4>reset account password</h4>
                      <form>
                          
                          <div class="form-row ">
                              <div class="col-lg-7">
                                  <input type="text" placeholder="username" class="form-control my-3 pt-4" name="" id="">
                                   </div>
                              
                          </div>
                          
                           
                             <div class="form-row ">
                                 <div class="col-lg-7">
                                <select class="form-select" aria-label="Default select example">
                                <option selected>Security Question</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                                 </div>
                          </div>

                          <div class="form-row">
                              <div class="col-lg-7">
                                  <input type="Text" placeholder="Your Answer" class="form-control my-3 pt-4" name="" id="">
                                   </div>
                              </div>
                           <div class="form-row">
                              <div class="col-lg-7 mt-3 mb-5">
                                  <button type="button" class="btn1">Reset Password</button>
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