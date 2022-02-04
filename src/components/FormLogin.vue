<template>
  <div class="block-form">
    <form class="form-login" @submit.prevent="submit">
      <Input
        label="Name"
        v-model="name"
        :error="errors.name ? 'Enter name' : ''"
      />
      <Input
        label="Password"
        v-model="password"
        type="password"
        :error="errors.password ? 'Enter password' : ''"
      />
      <Button msg="Login" />
      <p v-if="userNotFoundError" class="text-error">User not found</p>
      <a href="#" class="link-forgot-password">
        Forgot Password
      </a>
    </form>
    <div class="register-block">
      <a href="#" class="link-register">
        Register now
      </a>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { login } from '@/services/loginService';

export default {
  name: 'FormLogin',
  components: {
    Button,
    Input,
  },
  data: () => ({
    name: '',
    password: '',
    errors: {
      name: false,
      password: false,
    },
    userNotFoundError: false,
  }),
  methods: {
    submit() {
      this.validate();
      if (!this.errors.name && !this.errors.password && login(this.name, this.password)) {
        localStorage.setItem('isAuthorized', true);
        this.$router.push({ name: 'Todo' });
      } else {
        this.userNotFoundError = true;
        localStorage.setItem('isAuthorized', false);
      }
    },
    validate() {
      this.errors = {
        name: !this.name,
        password: !this.password,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .block-form {
    position: absolute;
    right: 0;
    bottom: 50%;
    width: 481px;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);

    .form-login {
      padding: 40px 30px 23px 30px;
      background: #FFFFFF;

      .text-error {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #D60000;
        text-align: center;
        transition: all .3s;
        padding-top: 5px;
      }

      .link-forgot-password {
        display: block;
        margin-top: 20px;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #056DAE;
        text-decoration: unset;
        transition: all .3s;

        &:hover {
          color: #333333;
        }
      }
    }

    .register-block {
      background: #F6F6F6;
      height: 63px;
      width: 481px;
      display: flex;
      align-items: center;
      justify-content: center;

      .link-register {
        display: block;
        font-weight: normal;
        font-size: 25px;
        line-height: 29px;
        color: #333333;
        text-decoration: unset;
        transition: all .3s;

        &:hover {
          color: #056DAE;
        }
      }
    }
  }

  @media (max-width: 1220px) {
    .block-form {
      width: 400px;

      .form-login {
        .link-forgot-password {
          font-size: 18px;
        }
      }

      .register-block {
        width: 400px;

        .link-register {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .block-form {
      position: static;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .block-form {
      max-width: 300px;
      width: 100%;

      .register-block {
        max-width: 300px;
        width: 100%;
      }
    }
  }
</style>
