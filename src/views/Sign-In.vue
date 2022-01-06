<template>
  <div class="sign-in">
    <a-row :gutter="[24,24]" type="flex" justify="space-around" align="middle">
      <a-col :span="24" :md="12" :lg="{span: 12,offset: 0}" :xl="{span:6,offset:2}" class="col-form">
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

        <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                  'email',
                  { rules: [{ required: true, message: 'Please input your email!' }] },
              ]"
              placeholder="Email"
              label="Email"
            >
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: 'Please input your Password!' }] },
                ]"
                type="password"
                placeholder="Password"
                label="Password"
            >
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-switch v-model="rememberMe" /> Remember Me
          </a-form-item>
          <a-form-item>
            <a-button type="primary" block html-type="submit" class="login-form-button">SIGN IN</a-button>
          </a-form-item>
        </a-form>

        <p class="text-muted font-semibold">Don't have an account? <router-link to="/sign-in" class="font-bold text-dark">Sign Up</router-link></p>
      </a-col>
      <a-col :span="12" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="../assets/img-signin.jpg" alt="">
      </a-col>
    </a-row>
  </div>
</template>

<style lang="less">

</style>

<script>
  export default {
    name: '',
    data() {
      return {
        rememberMe: true,
        form: this.$form.createForm(this, { name: 'login' }),
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    },
    mounted() {

    }
  }

</script>
