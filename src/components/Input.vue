<template>
  <div class="form__label-input">
    <label v-if="label" class="form__label">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      class="form__input"
      :class="{ error: error }"
      :placeholder="placeholder"
      @input="input"
    />
    <p class="text-error">
      <img v-if="error" src="@/assets/img/cross.svg" alt="cross">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    type: {
      default: 'text',
      type: String,
    },
    value: String,
    placeholder: {
      default: '',
      type: String,
    },
    error: String,
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss">
  .form__label-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    .form__label {
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #333333;
      text-align: start;
      margin-bottom: 7px;
    }

    .form__input {
      background: #FFFFFF;
      border: 1px solid #9A9A9A;
      box-sizing: border-box;
      width: 100%;
      height: 53px;
      padding: 16px 15px;
      transition: all .3s;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #333333;

      &.error {
        border-color: #D60000;
      }

      &:focus {
        outline: unset;
        border: 1px solid #101010;
      }
    }

    .text-error {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #D60000;
      height: 25px;
      text-align: start;
      transition: all .3s;
      padding-top: 5px;
    }
  }

  @media (max-width: 1220px) {
    .form__label-input {
      margin-bottom: 8px;
      .form__label {
        font-size: 16px;
      }

      .form__input {
        height: 40px;
        font-size: 16px;
      }
    }
  }
</style>
