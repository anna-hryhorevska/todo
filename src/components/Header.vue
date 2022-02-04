<template>
  <header class="header">
    <div class="header_dark"></div>
    <div class="header_blue">
      <div class="container">
        <div class="header__wrap-logo">
          <a href="/login" class="header__logo-link">
            <img src="@/assets/img/logo.svg" alt="logo" class="img-logo">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
  .header {
    .header_dark {
      height: 53px;
      background: #333333;
    }

    .header_blue {
      background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);

      .header__wrap-logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 96px;

        .header__logo-link {
          transition: all .4s;

          &:hover {
            transform: scale(1.1);
          }

          .img-logo {
            width: 103px;
            height: 66px;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .header {

      .header_dark {
        height: 30px;
      }

      .header_blue {
        .header__wrap-logo {
          height: 50px;

          .header__logo-link {
            display: flex;
            align-items: center;

            .img-logo {
              width: 74px;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
