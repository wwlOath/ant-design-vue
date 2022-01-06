<template>
  <div>
    <div class="sign-up-header">
      <div class="content">
        <h1 class="mb-5">Sign Up</h1>
        <p class="text-lg">Use these awesome forms to login or create new account in your project for free.</p>
      </div>
    </div>

    <a-card :bordered="false" class="card-signup header-solid h-full">
      <template #title>
        <h5 class="font-semibold text-cente">Register With</h5>
      </template>
      <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
                'name',
                { rules: [{ required: true, message: 'Please input your name!' }] },
            ]"
            placeholder="Name"
            label="name"
          >
          </a-input>
        </a-form-item>
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
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
          >
            I agree the <a href="#" class="font-bold text-dark">Terms and Conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block html-type="submit" class="login-form-button">SIGN UP</a-button>
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">Already have an account? <router-link to="/sign-in" class="font-bold text-dark">Sign In</router-link></p>
    </a-card>
  </div>
</template>

<style lang="less">
  .sign-up-header {
    background: url(../assets/bg-signup.jpg);
  }
</style>

<script>
  export default {
    name: '',
    data() {
      return {
        form: this.$form.createForm(this, { name: 'login' }),
      }
    },
    methods: {
      handleSubmit(e) {
          e.preventDefault();
          this.form.validateFields((err,values) => {
            if(!err) {
              console.log(values)
            }
          })
      }
    },
    mounted() {

    }
  }

</script>
