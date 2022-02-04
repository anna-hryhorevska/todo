<template>
  <div class="form__wrap-textarea">
    <textarea
      :value="value"
      class="form__textarea"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    value: String,
    placeholder: {
      default: '',
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss">
  .form__wrap-textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 80%;
    margin-right: 10px;

    .form__textarea {
      resize: none;
      font-family: 'Roboto';
      background: #FFFFFF;
      border: 1px solid #9A9A9A;
      box-sizing: border-box;
      width: 100%;
      height: 53px;
      padding: 16px 15px;
      transition: all .3s;
      font-weight: normal;
      font-size: 18px;
      line-height: 1;
      color: #333333;

      &:focus {
        outline: unset;
        border: 1px solid #101010;
      }

      &:disabled {
        border: none;
      }
    }
  }

  @media (max-width: 1220px) {
    .form__wrap-textarea {
      margin-bottom: 25px;

      .form__textarea {
        height: 40px;
        font-size: 16px;
      }
    }
  }
</style>
