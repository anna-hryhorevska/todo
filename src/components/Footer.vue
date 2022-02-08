<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__navigation">
        <router-link :to="{ name: 'Login' }" class="footer__logo-link">
          <img src="@/assets/img/logo.svg" alt="logo" class="img-logo">
        </router-link>
        <nav class="footer__nav-list">
          <a v-for="(item, index) in link" :key="index" href="#" class="footer__item-link">
            {{ item.nameLink }}
          </a>
        </nav>
      </div>
      <p class="footer__copyright">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
      </p>
    </div>
  </footer>
</template>

<script>
import { navLinks } from '@/constants';

export default {
  name: 'Footer',
  data: () => ({
    link: navLinks,
  }),
};
</script>

<style lang="scss">
  .footer {
    padding: 30px 0;
    height: 175px;
    background: #333333;

    .footer__navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 30px;
      border-bottom: 1px solid #FFFFFF;

      .footer__logo-link {
        transition: all .4s;

        &:hover {
          transform: scale(1.1);
        }

        .img-logo {
          width: 55.99px;
          height: 35px;
        }
      }
      .footer__nav-list {
        display: flex;
        align-items: center;
        list-style: none;

        .footer__item-link {
          font-weight: 500;
          font-size: 16px;
          line-height: 156.69%;
          color: #FFFFFF;
          text-decoration: none;
          transition: all .3s;
          margin-right: 20px;

          &:hover {
            color: #056DAE;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .footer__copyright {
      text-align: start;
      margin-top: 30px;
      font-weight: 500;
      font-size: 12px;
      line-height: 156.69%;
      color: #FFFFFF;
    }
  }

  @media (max-width: 992px) {
    .footer {
      height: unset;

      .footer__navigation {
        flex-direction: column;

        .footer__logo-link {
          margin-bottom: 30px;
        }

        .footer__nav-list {
          flex-wrap: wrap;
          justify-content: space-between;

          .footer__item-link {
            width: 33%;
            margin: 0 0 15px 0;
          }
        }
      }

      .footer__copyright {
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    .footer {
      .footer__navigation {
        padding-bottom: 15px;

        .footer__nav-list {
          .footer__item-link {
            width: 50%;
          }
        }
      }
    }
  }
</style>
