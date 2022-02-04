<template>
  <div class="page-login">
    <Header />
    <div class="page-login__banner">
      <div class="container">
        <h1 class="banner__title">Welcome to <br /> Business Analytics Online</h1>
      </div>
    </div>
    <div class="container">
      <div class="page-login__description">
        <FormLogin />
        <p class="description__text">
          <span class="description__text_bold">Business Analytics</span>
          <span>
            Business Analytics — a new,
            convenient tool for managing and forecasting your business performance,
            which will help analyze your own finances and cash flows,
            visualize your reporting, business processes, KPI's
          </span>
        </p>
        <ul class="description__list">
          <li v-for="(item, index) in list" :key="index" class="description__item">
            <div class="item__title-wrap">
              <img src="@/assets/img/check-mark.svg" alt="check-mark" class="item__img-check">
              <h3 class="item__title">{{ item.title }}</h3>
            </div>
            <p class="item__text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import FormLogin from '@/components/FormLogin.vue';
import Footer from '@/components/Footer.vue';
import { loginList } from '@/constants';

export default {
  name: 'Login',
  components: {
    Header,
    FormLogin,
    Footer,
  },
  data: () => ({
    list: loginList,
  }),
};
</script>

<style lang="scss">
  .page-login {
    .page-login__banner {
      height: 457px;
      background-image: url('/img/banner-background.png');
      background-size: cover;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      .banner__title {
        font-weight: normal;
        font-size: 55px;
        line-height: 156.69%;
        color: #FFFFFF;
        text-align: start;
        margin-bottom: 70px;
        max-width: 664px;
      }
    }

    .page-login__description {
      background-color: #FFFFFF;
      padding: 40px 0;
      position: relative;

      .description__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 156.69%;
        color: #333333;
        max-width: 664px;
        text-align: start;

        .description__text_bold {
          font-weight: 500;
        }
      }

      .description__list {
        max-width: 664px;
        margin: 15px 0;
        list-style: none;

        .description__item {
          margin-bottom: 15px;

          .item__title-wrap {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            .item__img-check {
              margin-right: 15px;
            }

            .item__title {
              font-weight: 500;
              font-size: 16px;
              line-height: 156.69%;
              color: #333333;
              text-align: start;
            }
          }

          .item__text {
            font-weight: normal;
            font-size: 14px;
            line-height: 156.69%;
            color: #333333;
            text-align: start;
            padding-left: 39px;
          }
        }
      }
    }
  }

  @media (max-width: 1220px) {
    .page-login {

      .page-login__banner {
        height: 330px;

        .banner__title {
          font-size: 40px;
          max-width: 400px;
        }
      }

      .page-login__description {
        .description__text {
          max-width: 400px;
        }

        .description__list {
          max-width: 400px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .page-login {
      .page-login__banner {
        height: 265px;

        .banner__title {
          max-width: unset;
          width: 100%;
          text-align: center;
        }
      }

      .page-login__description {
        .description__text {
          margin-top: 40px;
          max-width: unset;
        }

        .description__list {
          max-width: unset;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .page-login {
      .page-login__banner {
        .banner__title {
          font-size: 30px;
        }
      }
    }
  }
</style>
