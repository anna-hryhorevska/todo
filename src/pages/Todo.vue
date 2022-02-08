<template>
  <div class="page-todo">
    <div class="page-todo__content">
      <div class="page-todo__background_blue"></div>
      <router-link :to="{ name: 'Login' }" class="page-todo__logo-link">
        <img src="@/assets/img/logo.svg" alt="logo" class="img-logo">
      </router-link>
      <div class="page-todo__block-task">
        <h1 class="block-task__title">
          Thank you {{ name }}!
        </h1>
        <form class="block-task__form-adding" @submit.prevent="addNewTask">
          <Input placeholder="Add Todo" v-model="newTask" class="block-task__input"/>
          <Button msg="Add" class="block-task__btn_blue"/>
        </form>
        <ul class="block-task__list">
          <li class="block-task__list-item" v-for="task in taskList" :key="task.number">
            <Textarea v-model="task.text" :disabled="!task.edit" />
            <Button
              :msg="task.edit ? 'Save' : 'Edit'"
              @click="task.edit = !task.edit"
              variant="outlined"
              :color="task.edit ? 'green' : 'blue'"
              class="block-task__btn_small"
            />
            <Button
              msg="Delete"
              @click="deleteTask(task.number)"
              color="red"
              class="block-task__btn_small"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
import { getProfile } from '@/services/loginService';
import { defaultTasks } from '@/constants';

export default {
  name: 'Todo',
  components: {
    Button,
    Input,
    Textarea,
  },
  data: () => ({
    name: '',
    newTask: '',
    taskList: defaultTasks,
    taskAmount: defaultTasks.length,
  }),
  created() {
    if (localStorage.getItem('isAuthorized')) {
      this.name = getProfile().name;
    } else {
      this.$router.push({ name: 'Login' });
    }
  },
  methods: {
    addNewTask() {
      if (this.newTask) {
        this.taskList.push({
          text: this.newTask,
          number: this.taskAmount,
          edit: false,
        });
        this.newTask = '';
        this.taskAmount += 1;
      }
    },
    deleteTask(number) {
      this.taskList = this.taskList.filter((item) => item.number !== number);
    },
  },
};
</script>

<style lang="scss">
  .page-todo {
    min-height: 100vh;
    padding-bottom: 65px ;
    background: #faf7f7;

    .page-todo__content {
      padding-top: 65px;
      position: relative;
      z-index: 1;

      .page-todo__background_blue {
        height: 80vh;
        background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
      }

      .page-todo__logo-link {
        margin: 0 auto 60px;
        display: block;

        .img-logo {
          width: 186px;
          height: 119px;
        }
      }

      .page-todo__block-task {
        box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
        background: #FFFFFF;
        padding: 32px 60px;
        margin: 0 auto;
        width: 1191px;

        .block-task__title {
          font-weight: bold;
          font-size: 60px;
          line-height: 156.69%;
          color: #333333;
          margin-bottom: 25px;
        }

        .block-task__form-adding {
          display: flex;

          .block-task__input {
            margin-bottom: 0;
            width: 80%;
            margin-right: 10px;
          }

          .block-task__btn_blue {
            width: 20%;
          }
        }

        .block-task__list {
          list-style: none;
          text-align: start;
          margin-top: 40px;

          .block-task__list-item {
            display: flex;
            margin-bottom: 20px;
            .form__wrap-textarea{
              width: 80%;
            }
            .block-task__btn_small {
              width: calc(10% - 5px);
              margin-right: 10px;
              font-size: 18px;

              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1220px) {
    .page-todo {
      .page-todo__content {
        .page-todo__block-task {
          width: calc(100% - 100px);
          margin: 0 50px;

          .block-task__list {
            .block-task__list-item {
              .block-task__btn_small {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .page-todo {
      .page-todo__content {
        .page-todo__logo-link {
          .img-logo {
            width: 146px;
            height: 69px;
          }
        }

        .page-todo__block-task {
          .block-task__title {
            font-size: 40px;
          }

          .block-task__form-adding {
            .block-task__input {
              width: 70%;
            }

            .block-task__btn_blue {
              width: 30%;
            }
          }

          .block-task__list {
            .block-task__list-item {
              .form__wrap-textarea {
                width: 70%;
              }

              .block-task__btn_small {
                width: calc(15% - 5px);
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .page-todo {
      .page-todo__content {
        .page-todo__block-task {
          width: calc(100% - 30px);
          margin: 0 15px;
          padding: 20px;
          .block-task__title {
            font-size: 30px;
          }

          .block-task__form-adding {
            flex-wrap: wrap;
            .block-task__input {
              width: 100%;
              margin: 0 0 10px 0;
            }

            .block-task__btn_blue {
              width: 100%;
            }
          }

          .block-task__list {
            .block-task__list-item {
              flex-wrap: wrap;
              border-top: 1px solid rgba(51, 51, 51, 0.5);
              padding-top: 20px;
              margin-bottom: 40px;

              .form__wrap-textarea {
                width: 100%;
                margin-right: 0;
              }
              .block-task__btn_small {
                width: calc(50% - 5px);
              }
            }
          }
        }
      }
    }
  }
</style>
