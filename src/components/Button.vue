<template>
  <button
    class="button"
    @click="$emit('click')"
    :class="`${color} ${variant}`"
  >
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    color: {
      type: String,
      default: 'blue',
    },
    variant: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
  .button {
    width: 421px;
    max-width: 100%;
    height: 53px;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    transition: all .3s;
    cursor: pointer;

    &.blue {
      background: #0076C0;
      border: 2px solid #0076C0;

      &:hover {
        background-color: #FFFFFF;
        color: #0076C0;
      }

      &.outlined {
        background: #FFFFFF;
        color: #0076C0;

        &:hover {
          background-color: #0076C0;
          color: #fff;
        }
      }
    }

    &.red {
      background: #E40520;
      border: 2px solid #E40520;
      color: #FFFFFF;

      &:hover {
        background-color: #FFFFFF;
        color: #E40520;
      }

      &.outlined {
        background: #FFFFFF;
        color: #E40520;

        &:hover {
          background-color: #E40520;
          color: #fff;
        }
      }
    }

    &.green {
      background: #23740f;
      border: 2px solid #23740f;
      color: #FFFFFF;

      &:hover {
        background-color: #FFFFFF;
        color: #23740f;
      }

      &.outlined {
        background: #FFFFFF;
        color: #23740f;

        &:hover {
          background-color: #23740f;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1220px) {
    .button {
      height: 40px;
      font-size: 18px;
    }
  }
</style>
